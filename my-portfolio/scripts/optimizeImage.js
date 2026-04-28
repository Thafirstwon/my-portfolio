import sharp from "sharp"

const input ="src/assets/sets.jpg";

// Desktop version
await sharp(input)
      .resize(1920) // width
      .webp({ quality: 75 })
      .toFile("src/assets/hero-desktop.webp");

// Mobile version
await sharp(input)
      .resize(768)
      .webp({ quality: 70 })
      .toFile("src/assets/hero-mobile.webp");


await sharp(input)
  .resize(1920)
  .avif({ quality: 50 })
  .toFile("src/assets/hero-desktop.avif");

await sharp(input)
  .resize(768)
  .avif({ quality: 50 })
  .toFile("src/assets/hero-mobile.avif");

console.log(" Hero images optimized");