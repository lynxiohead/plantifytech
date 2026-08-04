import fs from "fs";
import path from "path";

const root = process.cwd();
const incomingLogoDir = path.join(root, "_incoming", "logo");
const incomingMockupsDir = path.join(root, "_incoming", "mockups");
const logoOut = path.join(root, "public", "assets", "logos", "OneBlack-nav.png");
const mockupsOutDir = path.join(root, "public", "assets", "mockups-v2");
const manifestPath = path.join(root, "src", "lib", "assets-manifest.json");

const imagePattern = /\.(png|jpe?g|webp)$/i;

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => imagePattern.test(name))
    .map((name) => path.join(dir, name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function toAssetUrl(relativePath) {
  return `/assets/${relativePath.replace(/\\/g, "/")}`;
}

function writeManifest(logoNav, mockups) {
  const manifest = {
    logoNav,
    logo: logoNav,
    logoOneBlack: logoNav,
    mockups,
  };
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

ensureDir(incomingLogoDir);
ensureDir(incomingMockupsDir);
ensureDir(path.dirname(logoOut));
ensureDir(mockupsOutDir);

const logoFiles = listImages(incomingLogoDir);
const mockupFiles = listImages(incomingMockupsDir);

if (logoFiles.length === 0 && mockupFiles.length === 0) {
  console.error(
    "No files found. Add the nav logo to _incoming/logo/ and mockups to _incoming/mockups/, then run again.",
  );
  process.exit(1);
}

let logoNav = toAssetUrl("logos/OneBlack-nav.png");

if (logoFiles.length > 0) {
  fs.copyFileSync(logoFiles[0], logoOut);
  console.log(`Logo imported: ${path.basename(logoFiles[0])} -> OneBlack-nav.png`);
} else if (!fs.existsSync(logoOut)) {
  console.warn("No logo in _incoming/logo/. Keeping existing OneBlack-nav.png if present.");
  logoNav = toAssetUrl("logos/OneBlack-nav.png");
}

let mockupUrls = [];

if (mockupFiles.length > 0) {
  for (const file of fs.readdirSync(mockupsOutDir)) {
    if (imagePattern.test(file)) {
      fs.unlinkSync(path.join(mockupsOutDir, file));
    }
  }

  mockupFiles.forEach((file, index) => {
    const ext = path.extname(file);
    const outName = `${String(index + 1).padStart(2, "0")}${ext.toLowerCase()}`;
    const outPath = path.join(mockupsOutDir, outName);
    fs.copyFileSync(file, outPath);
    mockupUrls.push(toAssetUrl(`mockups-v2/${outName}`));
    console.log(`Mockup imported: ${path.basename(file)} -> ${outName}`);
  });
} else {
  console.warn("No mockups in _incoming/mockups/. Keeping existing mockups-v2 files.");
  mockupUrls = listImages(mockupsOutDir).map((file) =>
    toAssetUrl(`mockups-v2/${path.basename(file)}`),
  );
}

if (mockupUrls.length === 0) {
  mockupUrls = [
    toAssetUrl("MOBILE MOCKUPS/MOCKUP1.png"),
    toAssetUrl("MOBILE MOCKUPS/MOCKUP2.png"),
    toAssetUrl("MOBILE MOCKUPS/MOCKUP3.png"),
    toAssetUrl("MOBILE MOCKUPS/MOCKUP4.png"),
    toAssetUrl("MOBILE MOCKUPS/Mockup5.png"),
    toAssetUrl("MOBILE MOCKUPS/MOCKUP9.png"),
    toAssetUrl("MOBILE MOCKUPS/MOCKUP11.png"),
  ];
}

const manifest = writeManifest(logoNav, mockupUrls);
console.log(`Imported ${mockupUrls.length} mockups. Manifest updated.`);
