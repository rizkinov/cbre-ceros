// ===================== CBRE EMERALD HELPERS (prepend to every use_figma script) =====================
// File: CBRE Ceros Templates (GwdiVcQBWzckrc1ohVxYCQ). Brand primitives live in this file:
//   CBRE Logo set 18:28, Line of Sight set 14:52, Color Glaze set 42:11, Pattern set 42:12,
//   $social variable collection (modes On Dark / On Light), Emerald Icons library.
// Rules baked in: Financier Display for editorial headlines, Calibre-R for UI/body, colours bound to
// $social variables where a token exists, one accent per composition, flat square-ended rules,
// logo always instanced (Green on light, White on dark), Color Glaze as image placeholder.

const COL_ID = 'VariableCollectionId:10:15';
const MODE = { dark: '10:0', light: '10:1' };
const VAR_IDS = {
  'bg/primary': 'VariableID:10:16', 'bg/dramatic': 'VariableID:10:17', 'bg/soft': 'VariableID:10:18',
  'bg/soft-tint': 'VariableID:10:19', 'bg/feature': 'VariableID:10:20', 'bg/feature-tint': 'VariableID:10:21',
  'bg/quiet': 'VariableID:10:22', 'bg/accent': 'VariableID:10:23', 'bg/accent-tint': 'VariableID:10:24',
  'bg/midnight': 'VariableID:10:25', 'fg/default': 'VariableID:10:26', 'fg/muted': 'VariableID:10:27',
  'fg/accent': 'VariableID:10:28', 'line/accent': 'VariableID:10:29', 'line/default': 'VariableID:10:30',
  'line/inverse': 'VariableID:10:31', 'bg/canvas': 'VariableID:99:2',
};
// Fallback / raw hex (used for the paint colour before binding, and for colours without a token)
const HEX = {
  'bg/primary': '#003F2D', 'bg/dramatic': '#012A1C', 'bg/soft': '#538184', 'bg/soft-tint': '#96B3B6',
  'bg/feature': '#80BBAD', 'bg/feature-tint': '#C0D4CB', 'bg/quiet': '#CAD1D3', 'bg/accent': '#DBD99A',
  'bg/accent-tint': '#E8E6C5', 'bg/midnight': '#032842', 'fg/default': '#003F2D', 'fg/muted': '#435254',
  'fg/accent': '#17E88F', 'line/accent': '#17E88F', 'line/default': '#003F2D', 'line/inverse': '#003F2D',
  'bg/canvas': '#FFFFFF',
  green: '#003F2D', accent: '#17E88F', dramatic: '#012A1C', sage: '#538184', sageTint: '#96B3B6',
  celadon: '#80BBAD', celadonTint: '#C0D4CB', quiet: '#CAD1D3', lighterGrey: '#E6E8E9', wheat: '#DBD99A',
  wheatTint: '#E8E6C5', midnight: '#032842', darkGrey: '#435254', midGrey: '#667578', white: '#FFFFFF',
  paper: '#FAFAF7',
};
const GLAZE = { // Color Glaze image hashes: sq = 1:1 master, wide = 16:9 master
  A: { sq: 'f3e10f737a2d10d9fd8f5bb9c4ba776c058b06c0', wide: '1c40b09b9a2ee3da8ade2d51edc0abf3e8508c27' },
  B: { sq: 'a5d0fe293368d47d2b916dca3e853e2ec8db3345', wide: '02932d11dfb18da6008c20280f836fcfa83cec1e' },
  C: { sq: '3e030d80afcf40b656531980997af4a601737299', wide: 'd72c87719a6c055359cf3fdbc863912183b99dc1' },
  D: { sq: '53cdee91f1dfef35795ffdd563ed652161f0fe74', wide: '9a3f93242169f2cba15520289c0d03c06d2d2dd2' },
};
const LOGO_IDS = { green: { S: '18:10', M: '18:13', L: '18:16' }, white: { S: '18:19', M: '18:22', L: '18:25' } };
const LOS_SET = '14:52';
const PATTERN_IDS = ['40:11', '40:12', '40:13', '40:14', '40:15', '40:16', '40:17', '40:18', '40:19'];
const ICON_KEYS = {
  arrowRight: 'fe6397b119a1dcc3ecdef162f23c35cc735f9b21', chevronDown: 'd9952c35ee7f8318f3b33ed690a2464eec25c377',
  chevronRight: '1330cd54548a62ee253bed2b4aaca92ea9c61ca6', add: 'bc96ee5854d33c1ffec09b9d809539c75c62c453',
  close: 'b7816bfc26077195c1505e352237f6c9d25a35d7', arrowTopRight: '2d2f91f519e75372da80ec7dc2ee6725a4cfa693',
};

// ---------- fonts ----------
const FONTS = [
  { family: 'Calibre-R', style: 'Light' }, { family: 'Calibre-R', style: 'Regular' }, { family: 'Calibre-R', style: 'Medium' },
  { family: 'Calibre-R', style: 'Semibold' }, { family: 'Financier Display', style: 'Regular' },
  { family: 'Financier Display', style: 'Regular Italic' }, { family: 'Financier Display', style: 'Medium' },
];
await Promise.all(FONTS.map(f => figma.loadFontAsync(f)));

// ---------- variables ----------
const COL = await figma.variables.getVariableCollectionByIdAsync(COL_ID);
const VARS = {};
await Promise.all(Object.entries(VAR_IDS).map(async ([k, id]) => { VARS[k] = await figma.variables.getVariableByIdAsync(id); }));

function rgb(hex) { const h = hex.replace('#', ''); return { r: parseInt(h.slice(0, 2), 16) / 255, g: parseInt(h.slice(2, 4), 16) / 255, b: parseInt(h.slice(4, 6), 16) / 255 }; }
function solid(hex, opacity) { const p = { type: 'SOLID', color: rgb(hex) }; if (opacity !== undefined) p.opacity = opacity; return p; }
// paint(c): c = token name ('bg/primary', 'fg/muted', ...) -> bound paint; or '#RRGGBB' / HEX key -> raw paint
function paint(c, opacity) {
  if (VARS[c]) { let p = solid(HEX[c], opacity); return figma.variables.setBoundVariableForPaint(p, 'color', VARS[c]); }
  return solid(c.startsWith('#') ? c : HEX[c], opacity);
}
function setFill(node, c, opacity) { node.fills = c ? [paint(c, opacity)] : []; return node; }
function setStroke(node, c, weight = 1, align = 'INSIDE') { node.strokes = [paint(c)]; node.strokeWeight = weight; node.strokeAlign = align; return node; }
function mode(node, dark) { node.setExplicitVariableModeForCollection(COL, dark ? MODE.dark : MODE.light); return node; }

// ---------- layout ----------
// box(dir, opts): auto-layout frame. opts: name, gap, pad ([t,r,b,l] | n), fill, stroke, w, h, align ('MIN'|'CENTER'|'MAX'|'SPACE_BETWEEN'), cross ('MIN'|'CENTER'|'MAX'|'BASELINE'), wrap, radius, clip
function box(dir = 'VERTICAL', o = {}) {
  const f = figma.createAutoLayout(dir === 'H' ? 'HORIZONTAL' : dir === 'V' ? 'VERTICAL' : dir);
  f.name = o.name || (dir === 'H' || dir === 'HORIZONTAL' ? 'Row' : 'Stack');
  f.fills = [];
  if (o.fill) setFill(f, o.fill, o.fillOpacity);
  if (o.stroke) setStroke(f, o.stroke, o.strokeWeight || 1);
  if (o.gap !== undefined) f.itemSpacing = o.gap;
  if (o.pad !== undefined) { const p = Array.isArray(o.pad) ? o.pad : [o.pad, o.pad, o.pad, o.pad]; f.paddingTop = p[0]; f.paddingRight = p[1]; f.paddingBottom = p[2]; f.paddingLeft = p[3]; }
  if (o.align) f.primaryAxisAlignItems = o.align;
  if (o.cross) f.counterAxisAlignItems = o.cross;
  if (o.wrap) { f.layoutWrap = 'WRAP'; if (o.rowGap !== undefined) f.counterAxisSpacing = o.rowGap; }
  if (o.radius) f.cornerRadius = o.radius;
  f.clipsContent = !!o.clip;
  if (o.w || o.h) { f.resize(o.w || 100, o.h || 100); if (o.w) f.layoutSizingHorizontal = 'FIXED'; else f.layoutSizingHorizontal = 'HUG'; if (o.h) f.layoutSizingVertical = 'FIXED'; else f.layoutSizingVertical = 'HUG'; }
  return f;
}
// add(parent, child, sizing): appends then applies sizing. sizing: 'fill' (fill main/cross as appropriate), 'fillW', 'fillH', 'fillBoth', 'hug'
function add(parent, child, sizing) {
  parent.appendChild(child);
  if (sizing === 'fillW' || sizing === 'fillBoth' || sizing === 'fill') child.layoutSizingHorizontal = 'FILL';
  if (sizing === 'fillH' || sizing === 'fillBoth') child.layoutSizingVertical = 'FILL';
  return child;
}
function addAll(parent, children, sizing) { for (const c of children) add(parent, c, sizing); return parent; }
function spacer(h, w = 1) { const r = figma.createFrame(); r.name = 'Spacer'; r.fills = []; r.resize(w, h); return r; }

// ---------- type ----------
const TYPE = {
  'fin-hero': { f: 'Financier Display', s: 'Regular', size: 112, lh: 116, ls: 0 },
  'fin-h2': { f: 'Financier Display', s: 'Regular', size: 72, lh: 72, ls: -0.5 },
  'fin-h3': { f: 'Financier Display', s: 'Regular', size: 58, lh: 56, ls: -1 },
  'fin-h4': { f: 'Financier Display', s: 'Regular', size: 36, lh: 40, ls: 0 },
  'fin-h5': { f: 'Financier Display', s: 'Regular', size: 30, lh: 36, ls: 1 },
  'fin-h6': { f: 'Financier Display', s: 'Regular', size: 24, lh: 32, ls: 1 },
  'fin-sub': { f: 'Financier Display', s: 'Regular', size: 18, lh: 28, ls: 1 },
  'fin-quote': { f: 'Financier Display', s: 'Regular Italic', size: 36, lh: 44, ls: 0 },
  'cal-h1': { f: 'Calibre-R', s: 'Regular', size: 96, lh: 88, ls: -3 },
  'cal-h2': { f: 'Calibre-R', s: 'Regular', size: 60, lh: 60, ls: -2 },
  'cal-h3': { f: 'Calibre-R', s: 'Regular', size: 48, lh: 56, ls: -1 },
  'cal-h4': { f: 'Calibre-R', s: 'Regular', size: 34, lh: 40, ls: -1 },
  'cal-h5': { f: 'Calibre-R', s: 'Medium', size: 24, lh: 32, ls: -1 },
  'cal-h6': { f: 'Calibre-R', s: 'Medium', size: 20, lh: 24, ls: -1.5 },
  'stat-xl': { f: 'Calibre-R', s: 'Light', size: 96, lh: 96, ls: -3 },
  'stat': { f: 'Calibre-R', s: 'Light', size: 64, lh: 64, ls: -2 },
  'stat-sm': { f: 'Calibre-R', s: 'Light', size: 44, lh: 48, ls: -1 },
  'body-lg': { f: 'Calibre-R', s: 'Regular', size: 22, lh: 32, ls: 0 },
  'body': { f: 'Calibre-R', s: 'Regular', size: 18, lh: 28, ls: 0 },
  'body-sm': { f: 'Calibre-R', s: 'Regular', size: 16, lh: 24, ls: 0 },
  'caption': { f: 'Calibre-R', s: 'Regular', size: 14, lh: 20, ls: 0 },
  'label': { f: 'Calibre-R', s: 'Medium', size: 14, lh: 20, ls: 2 },
  'eyebrow': { f: 'Calibre-R', s: 'Medium', size: 13, lh: 16, ls: 8, upper: true },
  'button': { f: 'Calibre-R', s: 'Medium', size: 16, lh: 20, ls: 1 },
  'nav': { f: 'Calibre-R', s: 'Regular', size: 16, lh: 20, ls: 0 },
  'micro': { f: 'Calibre-R', s: 'Medium', size: 11, lh: 14, ls: 6, upper: true },
};
// txt(str, style, o): o.color (token or hex; default 'fg/default'), o.w (fixed width -> wraps), o.align ('LEFT'|'CENTER'|'RIGHT'), o.name
function txt(str, style = 'body', o = {}) {
  const t = TYPE[style] || TYPE.body;
  const n = figma.createText();
  n.fontName = { family: t.f, style: o.weight || t.s };
  n.fontSize = o.size || t.size;
  n.lineHeight = { unit: 'PIXELS', value: o.lh || t.lh };
  n.letterSpacing = { unit: 'PERCENT', value: t.ls };
  if (t.upper) n.textCase = 'UPPER';
  n.characters = String(str);
  n.name = o.name || String(str).slice(0, 40);
  n.fills = [paint(o.color || 'fg/default')];
  if (o.align) n.textAlignHorizontal = o.align;
  if (o.w) { n.textAutoResize = 'HEIGHT'; n.resize(o.w, n.height); } else n.textAutoResize = 'WIDTH_AND_HEIGHT';
  return n;
}
// wrapping text that fills its auto-layout parent's width
function para(parent, str, style = 'body', o = {}) { const n = txt(str, style, Object.assign({}, o, { w: 100 })); parent.appendChild(n); n.layoutSizingHorizontal = 'FILL'; return n; }

// ---------- brand primitives ----------
async function logo(color = 'green', size = 'M') { const c = await figma.getNodeByIdAsync(LOGO_IDS[color][size]); const i = c.createInstance(); i.name = 'CBRE Logo'; return i; }
let _losSet = null;
// los(orientation 'H'|'V', weight 2|5|10|20|50, color 'Accent'|'Primary'|'Dark'|'Inverse'|'Wheat', length)
async function los(o = 'H', weight = 5, color = 'Accent', length = 64) {
  if (!_losSet) _losSet = await figma.getNodeByIdAsync(LOS_SET);
  const name = `Orientation=${o === 'H' ? 'Horizontal' : 'Vertical'}, Weight=${weight}, Color=${color}`;
  const v = _losSet.children.find(c => c.name === name);
  const i = v.createInstance(); i.name = 'Line of Sight';
  if (o === 'H') i.resize(length, weight); else i.resize(weight, length);
  return i;
}
const _iconSets = {};
async function icon(name, color = 'fg/default', size = 24) {
  if (!_iconSets[name]) _iconSets[name] = await figma.importComponentSetByKeyAsync(ICON_KEYS[name]);
  const v = _iconSets[name].children.find(c => c.name.replace(/\s/g, '') === 'Style=Sharp,Fill=No') || _iconSets[name].children[0];
  const i = v.createInstance(); i.name = 'Icon/' + name;
  if (size !== 24) i.rescale(size / 24);
  const shape = i.findOne(n => n.type === 'VECTOR');
  if (shape) shape.fills = [paint(color)];
  return i;
}
async function iconByKey(key, color = 'fg/default', size = 24) { // any Emerald Icons component_set key from search_design_system
  if (!_iconSets[key]) _iconSets[key] = await figma.importComponentSetByKeyAsync(key);
  const v = _iconSets[key].children.find(c => c.name.replace(/\s/g, '') === 'Style=Sharp,Fill=No') || _iconSets[key].children[0];
  const i = v.createInstance(); if (size !== 24) i.rescale(size / 24);
  const shape = i.findOne(n => n.type === 'VECTOR'); if (shape) shape.fills = [paint(color)];
  return i;
}
// img(w, h, query, o): image placeholder = Color Glaze (cover-fit, never stretched) + Adobe Stock search chip.
// o.flavor 'A'|'B'|'C'|'D' (B default; C for architecture/interiors; A for people; D for dramatic heroes), o.name, o.chip=false to hide chip
function img(w, h, query, o = {}) {
  const f = figma.createFrame(); f.name = o.name || 'Image — ' + query.slice(0, 40); f.resize(w, h); f.clipsContent = true;
  const fl = GLAZE[o.flavor || 'B']; const hash = (w / h) > 1.25 ? fl.wide : fl.sq;
  f.fills = [{ type: 'IMAGE', imageHash: hash, scaleMode: 'FILL' }];
  if (o.chip !== false) {
    const chip = box('H', { name: 'Stock chip', gap: 8, pad: [6, 10, 6, 10], fill: 'white', cross: 'CENTER' });
    const ct = txt('Image · Adobe Stock: “' + query + '”', 'micro', { color: 'green' }); chip.appendChild(ct);
    f.appendChild(chip); if (chip.width > w - 32) { ct.textAutoResize = 'HEIGHT'; ct.resize(Math.max(60, w - 52), ct.height); }
    chip.x = 16; chip.y = h - chip.height - 16;
  }
  return f;
}
async function pattern(variant = 1, size = 700, opacity = 0.12) { const c = await figma.getNodeByIdAsync(PATTERN_IDS[variant - 1]); const i = c.createInstance(); i.name = 'Pattern'; if (size !== 700) i.rescale(size / 700); i.opacity = opacity; return i; }

// ---------- components (composed) ----------
// button(label, variant): 'primary' (green fill), 'accent' (accent fill on dark), 'secondary' (green outline), 'inverse' (white outline on dark), 'link' (text + arrow)
async function button(label, variant = 'primary', o = {}) {
  const st = {
    primary: { fill: 'green', fg: 'white', stroke: null }, accent: { fill: 'accent', fg: 'green', stroke: null },
    secondary: { fill: null, fg: 'green', stroke: 'green' }, inverse: { fill: null, fg: 'white', stroke: 'white' },
    link: { fill: null, fg: o.onDark ? 'accent' : 'green', stroke: null },
  }[variant];
  const b = box('H', { name: 'Button/' + variant, gap: 12, pad: variant === 'link' ? [4, 0, 4, 0] : [16, 24, 16, 28], cross: 'CENTER' });
  if (st.fill) setFill(b, st.fill); if (st.stroke) setStroke(b, st.stroke, 1);
  b.appendChild(txt(label, 'button', { color: st.fg }));
  if (o.icon !== false) b.appendChild(await icon(o.iconName || 'arrowRight', st.fg, 20));
  return b;
}
// eyebrow(text, o): accent dash (Line of Sight H/2) + uppercase label. o.onDark switches label colour.
async function eyebrow(text, o = {}) {
  const r = box('H', { name: 'Eyebrow', gap: 12, cross: 'CENTER' });
  r.appendChild(await los('H', 2, o.onDark ? 'Accent' : 'Primary', 32));
  r.appendChild(txt(text, 'eyebrow', { color: o.onDark ? 'celadon' : 'sage' }));
  return r;
}
// heading block: eyebrow + title + optional intro; returns vertical stack (append with 'fillW')
async function heading(eb, title, intro, o = {}) {
  const s = box('V', { name: 'Heading', gap: 24 });
  if (eb) s.appendChild(await eyebrow(eb, o));
  para(s, title, o.titleStyle || 'fin-h3', { color: 'fg/default', align: o.align });
  if (intro) para(s, intro, o.introStyle || 'body-lg', { color: 'fg/muted', align: o.align });
  if (o.align === 'CENTER') s.counterAxisAlignItems = 'CENTER';
  return s;
}
// stat(value, label, o): big light Calibre number + accent rule + label
async function stat(value, label, o = {}) {
  const s = box('V', { name: 'Stat', gap: 12 });
  s.appendChild(txt(value, o.style || 'stat', { color: 'fg/default' }));
  s.appendChild(await los('H', 2, 'Accent', o.rule || 48));
  para(s, label, 'body-sm', { color: 'fg/muted' });
  return s;
}
// page(name, x, y): top-level 1440-wide desktop frame, vertical auto-layout, hugging height
function page(name, x, y, w = 1440) {
  const p = box('V', { name, fill: 'white' }); p.resize(w, 100); p.layoutSizingHorizontal = 'FIXED'; p.layoutSizingVertical = 'HUG';
  p.x = x; p.y = y; mode(p, false); p.clipsContent = true; return p;
}
// section(parent, name, o): full-width band. o.bg token/hex, o.dark (sets On Dark mode), o.pad [t,r,b,l], o.gap
function section(parent, name, o = {}) {
  const s = box('V', { name, fill: o.bg || null, pad: o.pad || [120, 120, 120, 120], gap: o.gap !== undefined ? o.gap : 64 });
  add(parent, s, 'fillW'); mode(s, !!o.dark); return s;
}
// nav(parent, links, cta): top bar with logo
async function nav(parent, links = [], cta = 'Contact us', o = {}) {
  const n = box('H', { name: 'Nav', pad: [28, 120, 28, 120], align: 'SPACE_BETWEEN', cross: 'CENTER', fill: o.dark ? 'bg/primary' : 'white' });
  add(parent, n, 'fillW'); mode(n, !!o.dark);
  if (!o.dark) { n.strokes = [paint('quiet')]; n.strokeWeight = 1; n.strokeAlign = 'INSIDE'; n.strokeTopWeight = 0; n.strokeLeftWeight = 0; n.strokeRightWeight = 0; n.strokeBottomWeight = 1; }
  n.appendChild(await logo(o.dark ? 'white' : 'green', 'M'));
  const r = box('H', { name: 'Links', gap: 40, cross: 'CENTER' });
  for (const l of links) r.appendChild(txt(l, 'nav', { color: 'fg/default' }));
  if (cta) r.appendChild(await button(cta, o.dark ? 'accent' : 'primary', { icon: false }));
  n.appendChild(r); return n;
}
// footer(parent, o): dark sign-off with white logo + sample-content note
async function footer(parent, o = {}) {
  const f = section(parent, 'Footer', { bg: 'bg/dramatic', dark: true, pad: [72, 120, 56, 120], gap: 40 });
  const top = box('H', { name: 'Footer top', align: 'SPACE_BETWEEN', cross: 'CENTER' }); add(f, top, 'fillW');
  top.appendChild(await logo('white', 'M'));
  const links = box('H', { gap: 32 }); for (const l of (o.links || ['cbre.com.sg', 'Privacy', 'Terms of use', 'Contact'])) links.appendChild(txt(l, 'body-sm', { color: 'fg/default' }));
  top.appendChild(links);
  const rule = await los('H', 2, 'Inverse', 1200); add(f, rule, 'fillW'); rule.opacity = 0.2;
  const bottom = box('H', { name: 'Footer note', align: 'SPACE_BETWEEN', gap: 40 }); add(f, bottom, 'fillW');
  const note = txt(o.note || 'Sample content for template purposes only — replace before publishing.', 'caption', { color: 'fg/muted', w: 640 });
  bottom.appendChild(note);
  bottom.appendChild(txt('© 2026 CBRE, Inc. All rights reserved.', 'caption', { color: 'fg/muted' }));
  return f;
}
// card(o): white / tinted card container (vertical)
function card(o = {}) { const c = box('V', { name: o.name || 'Card', gap: o.gap !== undefined ? o.gap : 16, pad: o.pad !== undefined ? o.pad : 32, fill: o.fill || 'white' }); if (o.stroke !== false && !o.fill) setStroke(c, 'quiet', 1); return c; }
// tabs(labels, activeIndex, o): tab bar with accent underline on active
async function tabs(labels, active = 0, o = {}) {
  const bar = box('H', { name: 'Tabs', gap: 40 });
  for (let i = 0; i < labels.length; i++) {
    const t = box('V', { name: 'Tab/' + (i === active ? 'Active' : 'Default'), gap: 12 });
    t.appendChild(txt(labels[i], 'cal-h6', { color: i === active ? 'fg/default' : 'fg/muted', weight: i === active ? 'Medium' : 'Regular' }));
    const u = await los('H', 5, i === active ? 'Accent' : (o.onDark ? 'Inverse' : 'Primary'), 40); add(t, u, 'fillW'); if (i !== active) u.opacity = 0;
    bar.appendChild(t);
  }
  return bar;
}
// accordion(items, openIndex): items [{title, body}]
async function accordion(items, open = -1, o = {}) {
  const a = box('V', { name: 'Accordion', gap: 0 });
  for (let i = 0; i < items.length; i++) {
    const it = box('V', { name: 'Accordion item/' + (i === open ? 'Open' : 'Closed'), gap: 16, pad: [24, 0, 24, 0] });
    it.strokes = [paint(o.onDark ? 'sage' : 'quiet')]; it.strokeWeight = 1; it.strokeTopWeight = 0; it.strokeLeftWeight = 0; it.strokeRightWeight = 0; it.strokeBottomWeight = 1; it.strokeAlign = 'INSIDE';
    add(a, it, 'fillW');
    const head = box('H', { name: 'Header', align: 'SPACE_BETWEEN', cross: 'CENTER', gap: 24 }); add(it, head, 'fillW');
    const tt = txt(items[i].title, 'cal-h6', { color: 'fg/default', w: 100 }); head.appendChild(tt); tt.layoutSizingHorizontal = 'FILL';
    head.appendChild(await icon(i === open ? 'close' : 'add', o.onDark ? 'fg/accent' : 'fg/default', 24));
    if (i === open && items[i].body) para(it, items[i].body, 'body', { color: 'fg/muted' });
  }
  return a;
}
// overlay(parent frame w,h): dimmed scrim for modal state frames
function scrim(parent) { const r = figma.createRectangle(); r.name = 'Scrim'; r.resize(parent.width, parent.height); r.fills = [solid('#012A1C', 0.72)]; parent.appendChild(r); r.x = 0; r.y = 0; return r; }
// placeBelowNav: helper for state frames that are 1440x900 non-auto-layout viewports
function viewport(name, x, y, w = 1440, h = 900) { const f = figma.createFrame(); f.name = name; f.resize(w, h); f.x = x; f.y = y; f.clipsContent = true; setFill(f, 'white'); mode(f, false); return f; }
// ===================== END HELPERS =====================
