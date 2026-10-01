#!/usr/bin/env python3
"""Turn Figma frame screenshots into Ceros-ready exports.

Usage:
  python3 export_tools.py manifest.json

manifest.json (one template):
{
  "n": "01", "slug": "market-outlook", "name": "Quarterly Market Outlook",
  "pages": [                     # main frames in reading order (desktop page, or slides)
    {"png": "/abs/path.png", "label": "desktop",
     "sections": [{"name": "Hero", "y": 0, "h": 980}, ...]}   # optional: slice points (frame px)
  ],
  "states": [{"png": "/abs/path.png", "label": "state-1-industrial-tab"}]
}

Writes to exports/NN-slug/:
  NN-slug_<label>.png / .jpg      full frames (desktop/slides and states)
  sections/NN-slug_sNN-<name>.png section slices of long pages (nav merged into the next
                                  section, very short trailing sections merged into the previous)
  NN-slug.pdf                     paginated: section slices (or slides), then states
"""
import json, os, re, sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIN_SLICE = 360  # px; sections shorter than this are merged


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:48]


def save_pair(img, base):
    img.save(base + '.png', optimize=True)
    img.convert('RGB').save(base + '.jpg', quality=88, optimize=True, progressive=True)


def merge_sections(sections):
    """Nav bars / thin strips are carried into the next section; short sections merge into the previous."""
    out, carry = [], None
    for s in sorted((dict(x) for x in sections), key=lambda s: s['y']):
        if s['name'].lower().startswith('nav') or s['h'] < 160:
            carry = s['y'] if carry is None else carry
            continue
        if carry is not None:
            s['h'] = s['y'] + s['h'] - carry; s['y'] = carry; carry = None
        if out and s['h'] < MIN_SLICE:
            out[-1]['h'] = s['y'] + s['h'] - out[-1]['y']
        else:
            out.append(s)
    if carry is not None and out:
        last = max(x['y'] + x['h'] for x in sections)
        out[-1]['h'] = last - out[-1]['y']
    return out


def main(manifest_path):
    m = json.load(open(manifest_path))
    base = f"{m['n']}-{m['slug']}"
    out_dir = os.path.join(ROOT, 'exports', base)
    os.makedirs(os.path.join(out_dir, 'sections'), exist_ok=True)
    pdf_pages = []
    for p in m['pages']:
        if p.get('parts'):  # very tall pages: per-section PNGs stitched in order (Figma drops >~8k px screenshots)
            parts = [Image.open(x['png']).convert('RGBA') for x in p['parts']]
            img = Image.new('RGBA', (max(x.width for x in parts), sum(x.height for x in parts)), (255, 255, 255, 255))
            y = 0; secs = []
            for x, meta in zip(parts, p['parts']):
                img.paste(x, (0, y)); secs.append({'name': meta['name'], 'y': y, 'h': x.height}); y += x.height
            p = dict(p, sections=secs)
        else:
            img = Image.open(p['png']).convert('RGBA')
        save_pair(img, os.path.join(out_dir, f"{base}_{p['label']}"))
        secs = p.get('sections')
        if secs:
            scale = img.width / 1440.0
            for i, s in enumerate(merge_sections(secs), 1):
                y0 = int(round(s['y'] * scale)); y1 = min(img.height, int(round((s['y'] + s['h']) * scale)))
                if y1 - y0 < 10: continue
                sl = img.crop((0, y0, img.width, y1))
                sl.save(os.path.join(out_dir, 'sections', f"{base}_s{i:02d}-{slug(s['name'])}.png"), optimize=True)
                pdf_pages.append(sl.convert('RGB'))
        else:
            pdf_pages.append(img.convert('RGB'))
    for st in m.get('states', []):
        img = Image.open(st['png']).convert('RGBA')
        save_pair(img, os.path.join(out_dir, f"{base}_{st['label']}"))
        pdf_pages.append(img.convert('RGB'))
    if pdf_pages:
        pdf_pages[0].save(os.path.join(out_dir, f"{base}.pdf"), save_all=True, append_images=pdf_pages[1:], resolution=144)
    print(out_dir, len(pdf_pages), 'pdf pages')


if __name__ == '__main__':
    main(sys.argv[1])
