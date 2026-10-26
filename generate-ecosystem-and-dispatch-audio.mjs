import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'public', 'ecosystem-assets');
fs.mkdirSync(OUT_DIR, { recursive: true });

const VIDEOS = [
  {
    id: 'ecosystem-master-infomercial',
    title: 'CARICOM BUSINESS HUB • BUSINESSES OS • DISPATCH OS • CBPAY',
    subtitle: 'FROM DIRECTORY DISCOVERY TO LIVE FIELD RADAR & 60/40 POS SETTLEMENT',
    bpm: 126,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-ChristopherNeural',
        rate: '+10%',
        text: 'Across the Caribbean, local businesses and field crews lose thousands every month to missed WhatsApp messages, cash leakage, disconnected apps, and unverified income that lenders reject. Now, CARICOM Business Hub, Businesses OS, Dispatch OS, and CBPay connect every step from first customer inquiry to bank-ready settlement.'
      },
      {
        id: 'act-2',
        voice: 'en-US-AriaNeural',
        rate: '+10%',
        text: 'It starts on the CARICOM Business Hub, where customers discover your business and chat live with CARI, your twenty-four-seven AI Receptionist. Every order flows straight into your purchase-scoped Businesses OS workspace—showing only the exact tools you bought, with one-click login credentials and Done-For-You or Self-Serve team setup.'
      },
      {
        id: 'act-3',
        voice: 'en-US-ChristopherNeural',
        rate: '+10%',
        text: 'Once booked, Dispatch OS takes over—one engine powering AutoRescue OS, Delivery OS, FieldTrade OS, Patrol OS, Detailers OS, and Freight OS. Track live five, ten, and fifteen kilometer Mapbox radar rings with real-time GPS arrival times and mobile technician completion.'
      },
      {
        id: 'act-4',
        voice: 'en-US-AriaNeural',
        rate: '+10%',
        text: 'At checkout, customers pay with their CariPass wallet at zero wallet fees. CariSplit POS automatically routes sixty percent to operations and protects forty percent in your profit vault, while building your verified CariProof Income Passport to unlock thirty-two thousand five hundred dollar Credit Union Cap. 317 loans.'
      },
      {
        id: 'act-5',
        voice: 'en-US-ChristopherNeural',
        rate: '+10%',
        text: 'Start in Barbados Dollars, expand country-to-country across Guyana, Jamaica, and Trinidad and Tobago, and settle international orders in US Dollars and British Pounds. Get started on the CARICOM Business Hub and Businesses OS today.'
      }
    ]
  },
  {
    id: 'service-dispatch-master-walkthrough',
    title: 'DISPATCH OS // MASTER ENGINE',
    subtitle: '1 ENGINE • 6 INDUSTRY OS • LIVE MAPBOX TACTICAL RADAR',
    bpm: 126,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Running a fleet or field service team across WhatsApp voice notes, blind phone calls, and paper receipts bleeds thousands of dollars in wasted fuel and missed jobs every month.'
      },
      {
        id: 'act-2',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Meet Dispatch OS—the single-source command engine that powers six dedicated industry operating systems: AutoRescue OS, Delivery OS, FieldTrade OS, Patrol OS, Detailers OS, and Freight OS.'
      },
      {
        id: 'act-3',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Three live surfaces stay in lockstep: the customer shares a one-tap GPS pin, Central Radar routes the nearest unit across five to fifteen kilometer rings, and your field tech captures photo proof and instant payment.'
      },
      {
        id: 'act-4',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'With one-click client credential issuance and Done-For-You or Self-Serve fleet setup, you can launch your branded dispatch operation in sixty seconds. Open the live Mapbox radar demo right now.'
      }
    ]
  },
  {
    id: 'vsl-auto-rescue',
    title: 'AUTORESCUE OS // ROADSIDE & TOWING',
    subtitle: '24/7 EMERGENCY GPS LOCK • TOW FLEET RADAR • INSTANT CLAIM BILLING',
    bpm: 128,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'When a motorist is stranded on the highway, missed calls, vague location descriptions, and blind flatbed routing cost your towing fleet high-margin recovery jobs.'
      },
      {
        id: 'act-2',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'AutoRescue OS turns roadside chaos into precision radar dispatch. Stranded motorists tap one link—with no app download required—to lock their exact highway coordinates and vehicle triage.'
      },
      {
        id: 'act-3',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'Your dispatcher assigns the closest recovery truck on the live Mapbox radar, sends an automated live tracking link, and logs four-corner condition photos before winching.'
      },
      {
        id: 'act-4',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'One extra emergency tow pays for your entire month—with instant roadside card, CariPass wallet, or insurance claim settlement. Launch your AutoRescue OS fleet today.'
      }
    ]
  },
  {
    id: 'vsl-food-delivery',
    title: 'DELIVERY OS // FOOD, GROCERY & COURIER',
    subtitle: '0% MARKETPLACE COMMISSION • MULTI-DROP RADAR • PHOTO PROOF',
    bpm: 128,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-AriaNeural',
        rate: '+6%',
        text: 'Why hand over thirty percent of your hard-earned restaurant, grocery, or retail margin to third-party delivery apps while customers still call asking where their order is?'
      },
      {
        id: 'act-2',
        voice: 'en-US-AriaNeural',
        rate: '+6%',
        text: 'Delivery OS gives you your own commission-free direct ordering and courier dispatch engine—complete with your brand, your riders, and one hundred percent of your customer list.'
      },
      {
        id: 'act-3',
        voice: 'en-US-AriaNeural',
        rate: '+6%',
        text: 'Batch multi-drop routes automatically on the live Mapbox radar, send customers real-time rider tracking links, and capture doorstep photo proof of delivery in one tap.'
      },
      {
        id: 'act-4',
        voice: 'en-US-AriaNeural',
        rate: '+6%',
        text: 'With automatic sixty-forty CariSplit settlement and zero marketplace commissions, one busy weekend pays for your entire month. Launch Delivery OS now.'
      }
    ]
  },
  {
    id: 'vsl-hvac-trades',
    title: 'FIELDTRADE OS // HVAC, PLUMBING & ELECTRICAL',
    subtitle: 'SKILL-MATCHED RADAR DISPATCH • DIAGNOSTIC CHECKLISTS • ON-SITE PAY',
    bpm: 126,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Missed emergency leak calls, double-booked service vans, and unpaid paper estimates cost home and commercial trade contractors thousands in lost billable hours every week.'
      },
      {
        id: 'act-2',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'FieldTrade OS equips HVAC, plumbing, and electrical teams with live skill-matched radar dispatch, diagnostic photo intake, and digital safety checklists.'
      },
      {
        id: 'act-3',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Route the closest certified technician on the live Mapbox radar, verify parts and voltage checklists on-site, and capture before-and-after repair photos.'
      },
      {
        id: 'act-4',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Convert approved quotes into instant card, CariPass, or invoice settlement before your service van leaves the driveway. Power up your crew with FieldTrade OS today.'
      }
    ]
  },
  {
    id: 'vsl-security-patrol',
    title: 'PATROL OS // PRIVATE SECURITY & MOBILE PATROL',
    subtitle: 'GEOFENCED CHECKPOINTS • LIVE UNIT RADAR • TIMESTAMPED INCIDENT LOGS',
    bpm: 126,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'Commercial property owners and estates demand verifiable GPS proof that night security rounds and alarm responses actually happened—not handwritten clipboards filled out at the end of a shift.'
      },
      {
        id: 'act-2',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'Patrol OS gives security agencies a live Mapbox command center with geofenced checkpoint verification and rapid mobile alarm dispatch.'
      },
      {
        id: 'act-3',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'Track every patrol SUV and officer across concentric radar rings, verify checkpoint scans in real time, and seal timestamped photo incident dossiers.'
      },
      {
        id: 'act-4',
        voice: 'en-US-GuyNeural',
        rate: '+6%',
        text: 'Win larger commercial and estate contracts with transparent client verification portals and automated recurring billing. Deploy Patrol OS for your security force now.'
      }
    ]
  },
  {
    id: 'vsl-mobile-detailing',
    title: 'DETAILERS OS // MOBILE AUTO DETAILING & WASH',
    subtitle: 'ROUTE-CLUSTERED BOOKING • BEFORE/AFTER GALLERY • 1-TAP TIPS & REBOOKING',
    bpm: 128,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-JennyNeural',
        rate: '+6%',
        text: 'Criss-crossing the island between unclustered appointments and dealing with last-minute cancellations drains your mobile detailing profits before you even start the wash.'
      },
      {
        id: 'act-2',
        voice: 'en-US-JennyNeural',
        rate: '+6%',
        text: 'Detailers OS clusters your daily mobile van routes by neighborhood on a live Mapbox radar and locks in upfront customer deposits automatically.'
      },
      {
        id: 'act-3',
        voice: 'en-US-JennyNeural',
        rate: '+6%',
        text: 'Confirm vehicle size, water, and power access upfront, log high-gloss before-and-after ceramic coating photos, and send live arrival alerts.'
      },
      {
        id: 'act-4',
        voice: 'en-US-JennyNeural',
        rate: '+6%',
        text: 'Fit two more high-ticket details into every day and collect curbside payment, tips, and thirty-day maintenance rebookings on the spot. Launch Detailers OS today.'
      }
    ]
  },
  {
    id: 'vsl-commercial-logistics',
    title: 'FREIGHT OS // B2B FREIGHT & COMMERCIAL DISTRIBUTION',
    subtitle: 'MULTI-STOP MANIFESTS • COMMERCIAL FLEET RADAR • DIGITAL BILL OF LADING',
    bpm: 126,
    scenes: [
      {
        id: 'act-1',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Missing paper delivery notes, loading dock bottlenecks, and disputed pallet counts freeze B2B distributor payments for weeks.'
      },
      {
        id: 'act-2',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Freight OS modernizes commercial distribution with multi-stop manifest optimization, live heavy-fleet radar tracking, and digital Bill of Lading workflows.'
      },
      {
        id: 'act-3',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'Dispatchers monitor every truck from port or warehouse to receiver, while drivers capture pallet counts, dock photos, and receiver signatures.'
      },
      {
        id: 'act-4',
        voice: 'en-US-ChristopherNeural',
        rate: '+6%',
        text: 'The moment the digital proof of delivery is signed, invoices trigger automatically with verified CariProof volume. Scale your distribution fleet with Freight OS today.'
      }
    ]
  }
];

function readMonoWav24k(filePath) {
  const buf = fs.readFileSync(filePath);
  let offset = 12;
  while (offset < buf.length - 8) {
    const chunkId = buf.toString('ascii', offset, offset + 4);
    const chunkSize = buf.readUInt32LE(offset + 4);
    if (chunkId === 'data') {
      const pcmStart = offset + 8;
      const sampleCount = Math.floor(chunkSize / 2);
      const samples24k = new Float32Array(sampleCount);
      for (let i = 0; i < sampleCount; i++) {
        samples24k[i] = buf.readInt16LE(pcmStart + i * 2) / 32768.0;
      }
      const samples48k = new Float32Array(sampleCount * 2);
      for (let i = 0; i < sampleCount - 1; i++) {
        samples48k[i * 2] = samples24k[i];
        samples48k[i * 2 + 1] = 0.5 * (samples24k[i] + samples24k[i + 1]);
      }
      if (sampleCount > 0) {
        samples48k[samples48k.length - 2] = samples24k[sampleCount - 1];
        samples48k[samples48k.length - 1] = samples24k[sampleCount - 1];
      }
      return samples48k;
    }
    offset += 8 + chunkSize;
  }
  throw new Error('No data chunk in ' + filePath);
}

function buildMasterMixForVideo(video, sceneResults) {
  const SAMPLE_RATE = 48000;
  const GAP_SEC = 0.45;
  let cursorSec = 0.25;
  const placements = [];

  for (const sc of sceneResults) {
    const sceneTotalSec = Number((sc.duration + GAP_SEC).toFixed(2));
    placements.push({
      ...sc,
      startSec: Number(cursorSec.toFixed(2)),
      sceneDurationSec: sceneTotalSec,
      durationInFrames: Math.ceil(sceneTotalSec * 30)
    });
    cursorSec += sceneTotalSec;
  }

  const TOTAL_SECONDS = Number(
    (placements.reduce((acc, p) => acc + p.durationInFrames, 0) / 30).toFixed(2)
  );
  const TOTAL_SAMPLES = Math.floor(SAMPLE_RATE * TOTAL_SECONDS);
  const leftBuf = new Float32Array(TOTAL_SAMPLES);
  const rightBuf = new Float32Array(TOTAL_SAMPLES);

  function addSample(idx, valL, valR = valL) {
    if (idx >= 0 && idx < TOTAL_SAMPLES) {
      leftBuf[idx] += valL;
      rightBuf[idx] += valR;
    }
  }

  let frameOffset = 0;
  for (const p of placements) {
    const startSecExact = frameOffset / 30 + 0.15;
    const vo = readMonoWav24k(p.wavPath);
    const startIdx = Math.floor(startSecExact * SAMPLE_RATE);
    for (let i = 0; i < vo.length; i++) {
      const s = vo[i] * 1.18;
      addSample(startIdx + i, s, s);
    }
    p.exactStartSec = Number(startSecExact.toFixed(2));
    frameOffset += p.durationInFrames;
  }

  const bpm = video.bpm || 126;
  const beatSec = 60 / bpm;
  const eighthSec = beatSec / 2;
  const chordProg = [
    [220.0, 277.18, 329.63, 440.0],
    [196.0, 246.94, 293.66, 392.0],
    [174.61, 220.0, 261.63, 349.23],
    [164.81, 246.94, 329.63, 392.0],
  ];

  const totalEighths = Math.floor(TOTAL_SECONDS / eighthSec);
  for (let e = 0; e < totalEighths; e++) {
    const tStart = e * eighthSec;
    const barIdx = Math.floor(e / 8) % 4;
    const chord = chordProg[barIdx];
    const noteFreq = chord[e % 4] * (e % 2 === 0 ? 1 : 2);
    const startSample = Math.floor(tStart * SAMPLE_RATE);
    const pluckLen = Math.floor(0.21 * SAMPLE_RATE);
    const pan = e % 2 === 0 ? 0.86 : 1.14;
    const globalEnv =
      tStart > TOTAL_SECONDS - 1.6
        ? Math.max(0, (TOTAL_SECONDS - tStart) / 1.6)
        : 1.0;
    const bgGain = 0.046 * globalEnv;

    for (let i = 0; i < pluckLen; i++) {
      const dt = i / SAMPLE_RATE;
      const env = Math.exp(-dt * 16) * (1 - Math.exp(-dt * 220));
      const wave =
        Math.sin(2 * Math.PI * noteFreq * dt) +
        0.24 * Math.sin(2 * Math.PI * noteFreq * 3 * dt) * Math.exp(-dt * 30);
      const val = wave * env * bgGain;
      addSample(startSample + i, val * pan, val * (2 - pan));
    }

    if (e % 2 === 0) {
      const bassFreq = chord[0] * 0.5;
      const kickLen = Math.floor(0.16 * SAMPLE_RATE);
      for (let i = 0; i < kickLen; i++) {
        const dt = i / SAMPLE_RATE;
        const pitchDrop = bassFreq + 65 * Math.exp(-dt * 42);
        const env = Math.exp(-dt * 15);
        const val = Math.sin(2 * Math.PI * pitchDrop * dt) * env * bgGain * 0.88;
        addSample(startSample + i, val, val);
      }
    }
  }

  const SFX_GAIN = 0.14;

  function addChime(startSec, freqs = [880, 1108.73, 1318.5], durSec = 0.55) {
    const s0 = Math.floor(startSec * SAMPLE_RATE);
    const len = Math.floor(durSec * SAMPLE_RATE);
    for (let i = 0; i < len; i++) {
      const dt = i / SAMPLE_RATE;
      const env = (1 - Math.exp(-dt * 240)) * Math.exp(-dt * 5.5);
      let sum = 0;
      for (const f of freqs) {
        sum += Math.sin(2 * Math.PI * f * dt);
      }
      const v = (sum / freqs.length) * env * SFX_GAIN;
      addSample(s0 + i, v, v);
    }
  }

  function addRadarPing(startSec) {
    addChime(startSec, [1046.5, 1567.98], 0.45);
    addChime(startSec + 0.18, [1318.5, 1975.53], 0.5);
  }

  function addWhoosh(startSec, durSec = 0.38) {
    const s0 = Math.floor(startSec * SAMPLE_RATE);
    const len = Math.floor(durSec * SAMPLE_RATE);
    let phase = 0;
    for (let i = 0; i < len; i++) {
      const dt = i / SAMPLE_RATE;
      const prog = dt / durSec;
      const freq = 160 + 1200 * Math.sin(Math.PI * Math.pow(prog, 0.75));
      phase += (2 * Math.PI * freq) / SAMPLE_RATE;
      const env = Math.sin(Math.PI * prog) * Math.exp(-dt * 2.5);
      const v = Math.sin(phase) * env * SFX_GAIN * 0.85;
      addSample(s0 + i, v * (1.2 - 0.4 * prog), v * (0.8 + 0.4 * prog));
    }
  }

  placements.forEach((p, idx) => {
    addWhoosh(Math.max(0.05, p.exactStartSec - 0.1));
    addRadarPing(p.exactStartSec + 1.8);
    if (idx === placements.length - 1) {
      addChime(p.exactStartSec + p.duration - 0.6, [523.25, 659.25, 783.99, 1046.5], 0.9);
    }
  });

  const outWavPath = path.join(OUT_DIR, `${video.id}-master.wav`);
  const dataSize = TOTAL_SAMPLES * 4;
  const buf = Buffer.alloc(44 + dataSize);
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(SAMPLE_RATE, 24);
  buf.writeUInt32LE(SAMPLE_RATE * 4, 28);
  buf.writeUInt16LE(4, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < TOTAL_SAMPLES; i++) {
    const l = Math.max(-0.98, Math.min(0.98, Math.tanh(leftBuf[i] * 1.05)));
    const r = Math.max(-0.98, Math.min(0.98, Math.tanh(rightBuf[i] * 1.05)));
    buf.writeInt16LE(Math.round(l * 32767), offset);
    buf.writeInt16LE(Math.round(r * 32767), offset + 2);
    offset += 4;
  }
  fs.writeFileSync(outWavPath, buf);

  // Clean up temporary per-scene stems so no duplicates remain in public/ecosystem-assets/
  for (const p of placements) {
    if (fs.existsSync(p.mp3Path)) fs.unlinkSync(p.mp3Path);
    if (fs.existsSync(p.wavPath)) fs.unlinkSync(p.wavPath);
  }

  const totalFrames = placements.reduce((acc, p) => acc + p.durationInFrames, 0);
  return {
    id: video.id,
    title: video.title,
    subtitle: video.subtitle,
    masterAudioFile: `ecosystem-assets/${video.id}-master.wav`,
    totalSeconds: TOTAL_SECONDS,
    totalFrames,
    scenes: placements.map((p) => ({
      id: p.id,
      voice: p.voice,
      text: p.text,
      audioSeconds: p.duration,
      sceneSeconds: p.sceneDurationSec,
      durationInFrames: p.durationInFrames,
      wavFile: `ecosystem-assets/${video.id}-master.wav`
    }))
  };
}

async function main() {
  const manifest = {};

  for (const video of VIDEOS) {
    console.log(`\n=== Generating Monolingual English Voiceovers for ${video.id} ===`);
    const sceneResults = [];

    for (const sc of video.scenes) {
      const mp3Path = path.join(OUT_DIR, `${video.id}-${sc.id}.mp3`);
      const wavPath = path.join(OUT_DIR, `${video.id}-${sc.id}.wav`);
      const escapedText = sc.text.replace(/"/g, '\\"');

      let ok = false;
      for (let attempt = 1; attempt <= 5; attempt++) {
        try {
          execSync(
            `python -m edge_tts --voice ${sc.voice} --rate="${sc.rate}" --text "${escapedText}" --write-media "${mp3Path}"`,
            { stdio: 'pipe' }
          );
          ok = true;
          break;
        } catch (e) {
          console.warn(`  [Retry ${attempt}/5] for ${video.id}-${sc.id}...`);
          await new Promise((r) => setTimeout(r, 1500 * attempt));
        }
      }
      if (!ok) {
        throw new Error(`Failed after 5 retries: ${video.id}-${sc.id}`);
      }

      execSync(
        `ffmpeg -y -i "${mp3Path}" -af "equalizer=f=160:t=q:w=1.2:g=2.2,equalizer=f=3600:t=q:w=1.4:g=1.6" -ar 24000 -ac 1 -c:a pcm_s16le "${wavPath}"`,
        { stdio: 'pipe' }
      );

      const durStr = execSync(
        `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${wavPath}"`
      )
        .toString()
        .trim();
      const duration = parseFloat(durStr);
      console.log(`  -> ${video.id}-${sc.id} (${sc.voice}): ${duration.toFixed(2)}s`);

      sceneResults.push({
        id: sc.id,
        voice: sc.voice,
        text: sc.text,
        duration,
        mp3Path,
        wavPath
      });
    }

    const videoMeta = buildMasterMixForVideo(video, sceneResults);
    manifest[video.id] = videoMeta;
    console.log(
      `✓ Master Mix ready: ${videoMeta.masterAudioFile} (${videoMeta.totalSeconds}s / ${videoMeta.totalFrames} frames)`
    );
  }

  const manifestPath = path.join(__dirname, 'src', 'ecosystem-audio-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nSaved complete audio manifest to ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
