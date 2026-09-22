import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outDir = path.join(publicDir, "images");

fs.mkdirSync(outDir, { recursive: true });

/** All raster assets referenced by the site (plus OG/favicon sources). */
const sources = [
  { in: "fotosTargetes/fotosCaseta/dins.webp", outBase: "hero-interior" },
  { in: "fotosTargetes/fotosCaseta/dinsnousoda.webp", outBase: "interior-soda" },
  { in: "fotosTargetes/fotosCaseta/foravermut.webp", outBase: "exterior-vermut" },
  { in: "fotosTargetes/fotosCaseta/SliderHab1.jpg", outBase: "bedroom" },
  { in: "fotosTargetes/fotosCaseta/SliderHab3.jpg", outBase: "bedroom-2" },
  { in: "fotosTargetes/fotosCaseta/logo.webp", outBase: "logo" },
  { in: "fotos/SliderViny2.jpg", outBase: "hero-vinyes" },
  { in: "fotosTargetes/fotosExterior/SliderExterior1.jpg", outBase: "exterior-1" },
  { in: "fotosTargetes/fotosExterior/SliderExterior2.jpg", outBase: "exterior" },
  { in: "fotosTargetes/fotosExterior/SliderExterior6.jpg", outBase: "pool-exterior" },
  { in: "fotosVino/fotomano.webp", outBase: "sisu" },
  { in: "fotosVino/fotoplano.webp", outBase: "sisu-alt" },
  { in: "logo/newlogopetit.png", outBase: "logo-mark" },
];

async function convertOne(relIn, outBase) {
  const input = path.join(publicDir, relIn);
  if (!fs.existsSync(input)) {
    console.warn("skip missing", relIn);
    return null;
  }
  const img = sharp(input).rotate();
  const meta = await img.metadata();
  const widths = [800, 1600].filter((w) => !meta.width || meta.width >= w * 0.6);

  for (const width of widths.length ? widths : [1600]) {
    await img
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(outDir, `${outBase}-${width}.webp`));
    await img
      .clone()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 55 })
      .toFile(path.join(outDir, `${outBase}-${width}.avif`));
  }
  console.log("ok", outBase);
  return outBase;
}

async function og() {
  const source = path.join(publicDir, "fotosTargetes/fotosCaseta/dins.webp");
  await sharp(source)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82 })
    .toFile(path.join(outDir, "og-calmasses.jpg"));
  await sharp(source)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, "og-calmasses.webp"));
  console.log("ok og-calmasses");
}

async function favicon() {
  const source = path.join(publicDir, "logo/newlogopetit.png");
  await sharp(source)
    .resize(32, 32, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicDir, "favicon-32.png"));
  await sharp(source)
    .resize(180, 180, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("ok favicons");
}

for (const s of sources) {
  await convertOne(s.in, s.outBase);
}
await og();
await favicon();
