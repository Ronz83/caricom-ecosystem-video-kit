import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  Series,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface EcosystemSceneMeta {
  id: string;
  voice: string;
  text: string;
  audioSeconds: number;
  sceneSeconds: number;
  durationInFrames: number;
  wavFile: string;
}

export interface EcosystemVideoMeta {
  id: string;
  title: string;
  subtitle: string;
  masterAudioFile: string;
  totalSeconds: number;
  totalFrames: number;
  scenes: EcosystemSceneMeta[];
}

/* ============================================================================
   ACT 1: CARIBBEAN MERCHANTS & CREWS — FROM FRICTION TO UNIFIED ECOSYSTEM
   ============================================================================ */
const Act1PainToEcosystem: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const snapFrame = Math.floor(durationInFrames * 0.48);
  const isUnified = frame >= snapFrame;

  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.11], {
    extrapolateRight: "clamp",
  });

  const cardPop = spring({
    frame: isUnified ? frame - snapFrame : frame - 6,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed Authentic Caribbean Business Scene (100% Screen-Free Background) */}
      <Img
        src={staticFile(
          isUnified
            ? "bos-assets/hero-professional.png"
            : "bos-assets/clean-caribbean-hvac-trades.jpg"
        )}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          transform: `scale(${bgScale})`,
        }}
      />

      {/* Cinematic Vignette keeping right-side Caribbean business owner crisp */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.78) 46%, rgba(5, 9, 18, 0.16) 76%, rgba(5, 9, 18, 0.48) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.9) 0%, rgba(5, 9, 18, 0) 36%)",
        }}
      />

      {/* Left Column: Editorial Headline + Single Floating 3D Glass Card */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 92,
          bottom: 90,
          width: 980,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            transform: `translateY(${interpolate(cardPop, [0, 1], [24, 0])}px)`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: isUnified
                ? "rgba(0, 245, 212, 0.2)"
                : "rgba(255, 90, 54, 0.22)",
              border: isUnified
                ? "1px solid rgba(0, 245, 212, 0.55)"
                : "1px solid rgba(255, 90, 54, 0.6)",
              backdropFilter: "blur(12px)",
              color: isUnified ? "#00F5D4" : "#FF5A36",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {isUnified
              ? "CARICOM Business Hub • Businesses OS • Dispatch OS • CBPay"
              : "Ending Missed Calls, Cash Leakage & Disconnected Apps"}
          </div>

          <h1
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: "0 0 18px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.65)",
            }}
          >
            {isUnified ? (
              <>
                One Connected Engine.
                <br />
                <span style={{ color: "#00F5D4" }}>Built for the Region.</span>
              </>
            ) : (
              <>
                Stop Losing Revenue
                <br />
                <span style={{ color: "#FBBF24" }}>to Disconnected Tools.</span>
              </>
            )}
          </h1>

          <p
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 780,
              lineHeight: 1.4,
              margin: 0,
              textShadow: "0 4px 16px rgba(0,0,0,0.6)",
            }}
          >
            {isUnified
              ? "From directory discovery and 24/7 AI reception to purchase-scoped POS, live GPS field dispatch, and verified Credit Union loan readiness."
              : "Missed WhatsApp inquiries, unverified cash envelopes, and fragmented software cost Caribbean businesses thousands every single month."}
          </p>
        </div>

        {/* Single Floating 3D Glassmorphic Card */}
        <div
          style={{
            width: 900,
            borderRadius: 28,
            background:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.88) 0%, rgba(7, 12, 24, 0.94) 100%)",
            backdropFilter: "blur(24px)",
            border: isUnified
              ? "1.5px solid rgba(0, 245, 212, 0.45)"
              : "1.5px solid rgba(251, 191, 36, 0.45)",
            boxShadow:
              "0 40px 90px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 245, 212, 0.18)",
            padding: "28px 34px",
            transform: `perspective(1200px) rotateY(4deg) translateY(${interpolate(
              cardPop,
              [0, 1],
              [30, 0]
            )}px)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: isUnified ? "#00F5D4" : "#FBBF24",
                  letterSpacing: "0.08em",
                }}
              >
                {isUnified
                  ? "FOUR CONNECTED PLATFORMS WORKING AS ONE"
                  : "REPLACING FRAGMENTED MANUAL WORKFLOWS"}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                {isUnified
                  ? "Discovery → Store & Service OS → Radar → CBPay"
                  : "Zero Missed Leads • Zero Cash Leakage • Bank-Verified Income"}
              </div>
            </div>

            <div
              style={{
                background: isUnified ? "#10B981" : "#F59E0B",
                color: "#05080F",
                padding: "10px 18px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 900,
              }}
            >
              {isUnified ? "100% Live Sync" : "+$4,200/mo Recovered"}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[
              { name: "CARICOM Hub", sub: "CARI 24/7 AI", color: "#FBBF24" },
              { name: "Businesses OS", sub: "Scoped POS & CRM", color: "#38BDF8" },
              { name: "Dispatch OS", sub: "6 Industry Radars", color: "#00F5D4" },
              { name: "CBPay + CariProof", sub: "60/40 + Loan Proof", color: "#34D399" },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: `1.5px solid ${p.color}`,
                  borderRadius: 16,
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{ fontSize: 15, fontWeight: 900, color: "#FFFFFF" }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: p.color,
                    marginTop: 4,
                  }}
                >
                  {p.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Callout Badge */}
      <div
        style={{
          position: "absolute",
          right: 88,
          bottom: 90,
          background: "rgba(10, 18, 32, 0.9)",
          backdropFilter: "blur(16px)",
          border: "2px solid #FBBF24",
          borderRadius: 20,
          padding: "16px 24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#FBBF24",
            letterSpacing: "0.06em",
          }}
        >
          BUILT FOR CARIBBEAN ENTERPRISES
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Retail • Hospitality • Trades • Fleet Logistics
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 2: CARICOM BUSINESS HUB + CARI AI + PURCHASE-SCOPED BUSINESSES OS
   (Exact Approved Shot 1 Layout)
   ============================================================================ */
const Act2HubAndBusinessesOS: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.03, 1.11], {
    extrapolateRight: "clamp",
  });
  const cardPop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile("bos-assets/clean-caribbean-reception.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          transform: `scale(${bgScale})`,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.78) 46%, rgba(5, 9, 18, 0.16) 76%, rgba(5, 9, 18, 0.45) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.9) 0%, rgba(5, 9, 18, 0) 36%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 92,
          left: 92,
          bottom: 92,
          width: 980,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            transform: `translateY(${interpolate(cardPop, [0, 1], [24, 0])}px)`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(16, 185, 129, 0.22)",
              border: "1px solid rgba(52, 211, 153, 0.55)",
              backdropFilter: "blur(12px)",
              color: "#34D399",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            CARICOM Business Hub • 24/7 AI Receptionist
          </div>

          <h1
            style={{
              fontSize: 78,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: "0 0 18px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.65)",
            }}
          >
            Every Call Answered.
            <br />
            <span style={{ color: "#34D399" }}>Every Order Dispatched.</span>
          </h1>

          <p
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 760,
              lineHeight: 1.4,
              margin: 0,
              textShadow: "0 4px 16px rgba(0,0,0,0.6)",
            }}
          >
            While your team serves customers in person, CARI captures every
            WhatsApp, voice, and directory order—and syncs your purchase-scoped
            Businesses OS workspace automatically.
          </p>
        </div>

        <div
          style={{
            width: 880,
            borderRadius: 28,
            background:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.88) 0%, rgba(7, 12, 24, 0.94) 100%)",
            backdropFilter: "blur(24px)",
            border: "1.5px solid rgba(255, 255, 255, 0.22)",
            boxShadow:
              "0 40px 90px rgba(0, 0, 0, 0.85), 0 0 40px rgba(16, 185, 129, 0.22)",
            padding: "28px 34px",
            transform: `perspective(1200px) rotateY(4deg) translateY(${interpolate(
              cardPop,
              [0, 1],
              [30, 0]
            )}px)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#10B981",
                  color: "#05080F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                ✓
              </div>
              <div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  Live Store Order #4092 • $225.00 BBD
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#34D399",
                  }}
                >
                  Captured by CARI AI in 0.4s → Synced to Store POS
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Scoped to Your Plan
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#FBBF24",
                  letterSpacing: "0.05em",
                }}
              >
                INSTANT DISPATCH TRIGGERED
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                15 Hot Lunch Boxes → Warrens Corporate Center
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                color: "#05080F",
                padding: "12px 22px",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              Rider Dispatched • 6 Min ETA →
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 88,
          bottom: 92,
          background: "rgba(10, 18, 32, 0.9)",
          backdropFilter: "blur(16px)",
          border: "2px solid #00F5D4",
          borderRadius: 20,
          padding: "16px 24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#00F5D4",
            letterSpacing: "0.06em",
          }}
        >
          BUSINESSES OS • STORE PACKAGE
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          Only the Tools You Bought—Zero Clutter
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 3: FIELD DISPATCH & LIVE MAPBOX RADAR ACROSS 6 INDUSTRY BRANDS
   (Exact Approved Shot 2 Layout)
   ============================================================================ */
const Act3DispatchRadar: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.1], {
    extrapolateRight: "clamp",
  });
  const pop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  const activeBrandIdx = Math.floor((frame / durationInFrames) * 6) % 6;
  const brands = [
    "AutoRescue OS",
    "Delivery OS",
    "FieldTrade OS",
    "Patrol OS",
    "Detailers OS",
    "Freight OS",
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile("bos-assets/clean-caribbean-hvac-trades.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          transform: `scale(${bgScale})`,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(95deg, rgba(6, 11, 20, 0.94) 0%, rgba(6, 11, 20, 0.78) 46%, rgba(6, 11, 20, 0.16) 76%, rgba(6, 11, 20, 0.48) 100%), linear-gradient(0deg, rgba(6, 11, 20, 0.9) 0%, rgba(6, 11, 20, 0) 36%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 86,
          left: 88,
          width: 920,
          display: "flex",
          flexDirection: "column",
          gap: 26,
          transform: `translateY(${interpolate(pop, [0, 1], [24, 0])}px)`,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(0, 245, 212, 0.18)",
              border: "1px solid rgba(0, 245, 212, 0.55)",
              color: "#00F5D4",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            One Dispatch OS Source • Six Industry Brands + TicketFlows
          </div>

          <h1
            style={{
              fontSize: 70,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.03,
              margin: "0 0 12px 0",
              textShadow: "0 10px 30px rgba(0,0,0,0.7)",
            }}
          >
            Pinpoint GPS Radar.
            <br />
            <span style={{ color: "#00F5D4" }}>Built for the Field.</span>
          </h1>
        </div>

        <div
          style={{
            height: 440,
            borderRadius: 28,
            background:
              "radial-gradient(circle at 50% 50%, rgba(13, 31, 51, 0.9) 0%, rgba(7, 16, 28, 0.94) 100%)",
            backdropFilter: "blur(22px)",
            border: "1.5px solid rgba(0, 245, 212, 0.45)",
            boxShadow:
              "0 40px 95px rgba(0,0,0,0.85), 0 0 50px rgba(0, 245, 212, 0.18)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg
            width="920"
            height="440"
            viewBox="0 0 920 440"
            style={{ position: "absolute", inset: 0 }}
          >
            <g stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1.5" fill="none">
              <path d="M 0 130 Q 310 170 610 110 T 920 150" />
              <path d="M 0 310 Q 380 260 660 340 T 920 290" />
              <path d="M 260 0 Q 300 220 240 440" />
              <path d="M 640 0 Q 590 220 680 440" />
            </g>
            {[85, 160, 235].map((r) => (
              <circle
                key={r}
                cx="460"
                cy="220"
                r={r}
                fill="none"
                stroke="rgba(0, 245, 212, 0.24)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
              />
            ))}
            <path
              d="M 250 310 Q 420 200 650 135"
              fill="none"
              stroke="#00F5D4"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="12 10"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              left: 155,
              top: 275,
              background: "#0F172A",
              border: "2px solid #00F5D4",
              borderRadius: 16,
              padding: "12px 18px",
              boxShadow: "0 16px 35px rgba(0,0,0,0.7)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#00F5D4" }}>
              FIELD UNIT #04 • DISPATCHED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>
              Marcus Haynes • 3.1 km Away
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: 390,
              top: 185,
              background: "#00F5D4",
              color: "#05080F",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 15,
              fontWeight: 900,
              boxShadow: "0 0 30px rgba(0, 245, 212, 0.7)",
            }}
          >
            LIVE ROUTE • ETA 5 MIN
          </div>

          <div
            style={{
              position: "absolute",
              left: 555,
              top: 80,
              background: "#0F172A",
              border: "2px solid #F59E0B",
              borderRadius: 16,
              padding: "12px 18px",
              boxShadow: "0 16px 35px rgba(0,0,0,0.7)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B" }}>
              CUSTOMER GPS PIN LOCKED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>
              Christ Church • Priority Call
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              right: 18,
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 8,
            }}
          >
            {brands.map((name, idx) => {
              const active = idx === activeBrandIdx;
              return (
                <div
                  key={name}
                  style={{
                    background: active
                      ? "#00F5D4"
                      : "rgba(15, 23, 42, 0.88)",
                    color: active ? "#05080F" : "#FFFFFF",
                    border: active
                      ? "1.5px solid #FFFFFF"
                      : "1px solid rgba(255,255,255,0.18)",
                    borderRadius: 12,
                    padding: "10px 8px",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 88,
          bottom: 88,
          background: "rgba(10, 18, 32, 0.9)",
          backdropFilter: "blur(16px)",
          border: "2px solid #F59E0B",
          borderRadius: 20,
          padding: "16px 24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#FBBF24",
            letterSpacing: "0.06em",
          }}
        >
          5KM • 10KM • 15KM CONCENTRIC RADAR
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
            marginTop: 2,
          }}
        >
          1-Click Client Login & Team Setup Included
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 4: CBPAY + CARISPLIT 60/40 POS + CARIPROOF 842 LOAN PASSPORT
   (Exact Approved Shot 3 Layout)
   ============================================================================ */
const Act4CBPayAndCariProof: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.03, 1.11], {
    extrapolateRight: "clamp",
  });
  const pop = spring({
    frame: frame - 8,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile("bos-assets/clean-caribbean-trade-counter.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          transform: `scale(${bgScale})`,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.8) 50%, rgba(5, 9, 18, 0.2) 78%, rgba(5, 9, 18, 0.5) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.92) 0%, rgba(5, 9, 18, 0) 38%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 86,
          left: 88,
          bottom: 86,
          width: 1060,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: `translateY(${interpolate(pop, [0, 1], [24, 0])}px)`,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(245, 158, 11, 0.2)",
              border: "1px solid rgba(251, 191, 36, 0.55)",
              color: "#FBBF24",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            CBPay • CariSplit 60/40 POS • CariProof Income Passport
          </div>

          <h1
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.03,
              margin: "0 0 16px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.7)",
            }}
          >
            Every Sale Splits 60/40 &
            <br />
            <span style={{ color: "#34D399" }}>Unlocks Credit Union Loans.</span>
          </h1>

          <p
            style={{
              fontSize: 23,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 840,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Customers pay with their 1:1 CariPass wallet at zero wallet fees,
            while CariSplit protects 40% profit and mints your verified CariProof
            dossier for Cap. 317 financing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 22,
          }}
        >
          <div
            style={{
              background: "rgba(10, 18, 32, 0.9)",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(52, 211, 153, 0.45)",
              borderRadius: 26,
              padding: "26px 30px",
              boxShadow: "0 35px 80px rgba(0,0,0,0.85)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#34D399",
                letterSpacing: "0.08em",
              }}
            >
              CARISPLIT 60/40 + CARIPROOF SCORE
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              <span
                style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF" }}
              >
                842 <span style={{ fontSize: 18, color: "#34D399" }}>/ 900</span>
              </span>
              <span
                style={{
                  background: "#10B981",
                  color: "#05080F",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 900,
                }}
              >
                $32,500 BBD LOAN READY
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.16)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: 14,
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "#34D399" }}>
                  60% Operations
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>
                  Auto-Routed
                </div>
              </div>
              <div
                style={{
                  background: "rgba(245, 158, 11, 0.16)",
                  border: "1px solid rgba(245, 158, 11, 0.4)",
                  borderRadius: 14,
                  padding: "12px 14px",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "#FBBF24" }}>
                  40% Profit Vault
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>
                  Protected
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(10, 18, 32, 0.9)",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(251, 191, 36, 0.45)",
              borderRadius: 26,
              padding: "26px 30px",
              boxShadow: "0 35px 80px rgba(0,0,0,0.85)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.08em",
                }}
              >
                1:1 CARIPASS WALLET + CAP. 317 UNDERWRITING
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginTop: 6,
                }}
              >
                $0 Wallet Fees • Cryptographic Income Proof
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 14,
              }}
            >
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid #00F5D4",
                  borderRadius: 12,
                  padding: "10px 14px",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 900, color: "#00F5D4" }}>
                  Credit Union Cap. 317
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#FFFFFF" }}>
                  1-Click Loan Dossier
                </div>
              </div>
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid #34D399",
                  borderRadius: 12,
                  padding: "10px 14px",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 900, color: "#34D399" }}>
                  Sovereign Grants
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#FFFFFF" }}>
                  Verified Audit Trail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 5: MULTI-COUNTRY CARICOM & INTERNATIONAL EXPORT SCALE
   ============================================================================ */
const Act5GlobalScale: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.03, 1.11], {
    extrapolateRight: "clamp",
  });
  const pop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed Authentic Caribbean Executives Reviewing Expansion Analytics */}
      <Img
        src={staticFile("bos-assets/clean-caribbean-executives.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          transform: `scale(${bgScale})`,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.8) 50%, rgba(5, 9, 18, 0.2) 78%, rgba(5, 9, 18, 0.5) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.92) 0%, rgba(5, 9, 18, 0) 38%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 86,
          left: 88,
          bottom: 86,
          width: 1080,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: `translateY(${interpolate(pop, [0, 1], [24, 0])}px)`,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(0, 245, 212, 0.2)",
              border: "1px solid rgba(0, 245, 212, 0.55)",
              color: "#00F5D4",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Country-to-Country Expansion • CARICOM to Global Markets
          </div>

          <h1
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.03,
              margin: "0 0 16px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.7)",
            }}
          >
            Start in Barbados.
            <br />
            <span style={{ color: "#FBBF24" }}>Scale Across the World.</span>
          </h1>

          <p
            style={{
              fontSize: 23,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 840,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Expand seamlessly across Guyana, Jamaica, and Trinidad & Tobago, and
            settle international diaspora and export orders in US Dollars and
            British Pounds.
          </p>
        </div>

        {/* Floating Glassmorphic 6-Currency & CTA Card */}
        <div
          style={{
            background: "rgba(10, 18, 32, 0.92)",
            backdropFilter: "blur(24px)",
            border: "1.5px solid rgba(251, 191, 36, 0.5)",
            borderRadius: 28,
            padding: "28px 34px",
            boxShadow: "0 40px 90px rgba(0,0,0,0.85)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.08em",
                }}
              >
                MULTI-COUNTRY & GLOBAL TRADE CORRIDORS
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                6 Native Settlement Currencies on One Unified Rail
              </div>
            </div>

            <div
              style={{
                background: "#F59E0B",
                color: "#05080F",
                padding: "12px 24px",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              Launch Your Operating System Today →
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 10,
            }}
          >
            {[
              { code: "BBD", label: "Barbados", active: true },
              { code: "GYD", label: "Guyana", active: true },
              { code: "JMD", label: "Jamaica", active: true },
              { code: "TTD", label: "Trinidad", active: true },
              { code: "USD", label: "US Export", active: false },
              { code: "GBP", label: "UK Export", active: false },
            ].map((c) => (
              <div
                key={c.code}
                style={{
                  background: c.active
                    ? "rgba(0, 245, 212, 0.16)"
                    : "rgba(59, 130, 246, 0.18)",
                  border: c.active
                    ? "1.5px solid #00F5D4"
                    : "1.5px solid #60A5FA",
                  borderRadius: 14,
                  padding: "12px 10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#FFFFFF",
                  }}
                >
                  {c.code}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: c.active ? "#00F5D4" : "#93C5FD",
                    marginTop: 2,
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   MAIN EXPORT: ECOSYSTEM MASTER INFOMERCIAL
   ============================================================================ */
export const EcosystemMasterInfomercial: React.FC<{
  meta: EcosystemVideoMeta;
}> = ({ meta }) => {
  const [act1, act2, act3, act4, act5] = meta.scenes;

  return (
    <AbsoluteFill style={{ backgroundColor: "#05080F" }}>
      <Audio src={staticFile(meta.masterAudioFile)} />
      <Series>
        <Series.Sequence durationInFrames={act1.durationInFrames}>
          <Act1PainToEcosystem durationInFrames={act1.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={act2.durationInFrames}>
          <Act2HubAndBusinessesOS durationInFrames={act2.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={act3.durationInFrames}>
          <Act3DispatchRadar durationInFrames={act3.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={act4.durationInFrames}>
          <Act4CBPayAndCariProof durationInFrames={act4.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={act5.durationInFrames}>
          <Act5GlobalScale durationInFrames={act5.durationInFrames} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
