import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT_DIR = "public/images/community";
const OUTPUT_DIR = "public/images/community"; // overwrite originals safely

const MAX_WIDTH = 1600; // perfect for hero images
const QUALITY = 65;

function isImage(file) {
  return /\.(png|jpg|jpeg|webp)$/i.test(file);
}

async function optimizeImage(filePath) {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Skip already-small images
  if (metadata.width && metadata.width <= MAX_WIDTH) {
    console.log("Skipping (already optimized):", filePath);
    return;
  }

  await image
    .resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY })
    .toFile(filePath + ".tmp");

  fs.renameSync(filePath + ".tmp", filePath);
  console.log("Optimized:", filePath);
}

async function run() {
  const files = fs.readdirSync(INPUT_DIR);

  for (const file of files) {
    const fullPath = path.join(INPUT_DIR, file);
    if (fs.statSync(fullPath).isFile() && isImage(file)) {
      await optimizeImage(fullPath);
    }
  }
}

run().catch(console.error);
