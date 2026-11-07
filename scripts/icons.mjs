// One-off: generates favicons + OG image from src/assets/brand/logo.png. Run: npm run og
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const logo = 'src/assets/brand/logo.png';
for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  await sharp(logo).resize(size, size).png({ palette: true }).toFile(`public/${name}`);
}
// favicon.ico: single 48x48 PNG-in-ICO
const png = await sharp(logo).resize(48, 48).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(48, 6); header.writeUInt8(48, 7); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, png]));

const W = 1200, H = 630;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="a" cx="25%" cy="20%" r="70%"><stop offset="0" stop-color="#17c972" stop-opacity=".30"/><stop offset="1" stop-color="#17c972" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="90%" cy="85%" r="60%"><stop offset="0" stop-color="#bf52cb" stop-opacity=".30"/><stop offset="1" stop-color="#bf52cb" stop-opacity="0"/></radialGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0" stop-color="#17c972"/><stop offset="1" stop-color="#ff9500"/></linearGradient>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
  </defs>
  <rect width="100%" height="100%" fill="#161d21"/><rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#a)"/><rect width="100%" height="100%" fill="url(#b)"/>
  <g font-family="Inter, Helvetica, Arial, sans-serif" font-weight="800">
    <text x="80" y="330" font-size="76" fill="#ebebf0">Where multiple</text>
    <text x="80" y="415" font-size="76" fill="#ebebf0">watchlists is</text>
    <text x="80" y="500" font-size="76" fill="url(#t)">not a premium feature.</text>
    <text x="80" y="130" font-size="34" fill="#ebebf0">DegenView</text>
    <text x="80" y="580" font-size="26" font-weight="500" fill="#98989d">Free, open-source charts for crypto, stocks &amp; prediction markets</text>
  </g>
</svg>`;
const round = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" rx="56"/></svg>');
const mascot = await sharp(logo).resize(300, 300).composite([{ input: round, blend: 'dest-in' }]).png().toBuffer();
await sharp(Buffer.from(svg))
  .composite([{ input: mascot, left: 820, top: 40 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');
