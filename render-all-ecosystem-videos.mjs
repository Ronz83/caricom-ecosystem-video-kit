import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIDEOS_DIR = path.join(__dirname, 'videos');
fs.mkdirSync(VIDEOS_DIR, { recursive: true });

const COMPOSITIONS = [
  'ecosystem-master-infomercial',
  'service-dispatch-master-walkthrough',
  'vsl-auto-rescue',
  'vsl-food-delivery',
  'vsl-hvac-trades',
  'vsl-security-patrol',
  'vsl-mobile-detailing',
  'vsl-commercial-logistics',
];

for (const compId of COMPOSITIONS) {
  const outPath = path.join(VIDEOS_DIR, `${compId}.mp4`);
  console.log(`\n=== Rendering ${compId} -> ${outPath} ===`);
  const t0 = Date.now();
  execSync(
    `npx remotion render src/ecosystem-entry.tsx ${compId} "${outPath}" --concurrency=100% --overwrite`,
    {
      cwd: __dirname,
      stdio: 'inherit',
    }
  );
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`✓ Rendered ${compId}.mp4 in ${elapsed}s`);
}
