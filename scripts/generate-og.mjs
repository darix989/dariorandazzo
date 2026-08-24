// Regenerates public/og.png, the default social card.
// Run with `npm run og` after changing the name, role, or palette.
// sharp arrives with Astro's image pipeline; there is no separate dependency.
import { writeFile } from 'node:fs/promises';

const OUT = new URL('../public/og.png', import.meta.url);

// Kept in sync by hand with src/lib/site.ts and the tokens in global.css.
const NAME = 'Dario Randazzo';
const ROLE = 'COMPUTER ENGINEER';
const SECTIONS = 'readme · builds · changelog';
const BG = '#f7efe4';
const FG = '#2a2118';
const ACCENT = '#b44a30';
const MUTED = '#6b5e50';
const RULE = '#e4d6c4';

// Palatino/Georgia stand in for Fraunces: the renderer only sees system fonts.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <g transform="translate(96, 0)">
    <text x="0" y="250" font-family="Palatino, Georgia, serif" font-size="34" letter-spacing="6" fill="${ACCENT}">${ROLE}</text>
    <text x="0" y="380" font-family="Palatino, Georgia, serif" font-size="112" font-weight="500" fill="${FG}">${NAME}</text>
    <line x1="0" y1="446" x2="220" y2="446" stroke="${RULE}" stroke-width="3"/>
    <text x="0" y="512" font-family="Helvetica Neue, Helvetica, sans-serif" font-size="31" fill="${MUTED}">${SECTIONS}</text>
  </g>
</svg>`;

let sharp;
try {
	({ default: sharp } = await import('sharp'));
} catch {
	console.error('sharp is unavailable. Run `npm install` so Astro pulls it in, then retry.');
	process.exit(1);
}

const png = await sharp(Buffer.from(svg), { density: 144 })
	.resize(1200, 630, { fit: 'cover' })
	// Flat colour art: a palette PNG is a third of the size with no visible loss.
	.png({ compressionLevel: 9, palette: true })
	.toBuffer();

await writeFile(OUT, png);
console.log(`Wrote public/og.png (${Math.round(png.length / 1024)} KB)`);
