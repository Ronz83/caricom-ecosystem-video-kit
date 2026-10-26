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
import { EcosystemVideoMeta } from "./EcosystemMasterInfomercial";

export interface IndustryThemeConfig {
  id: string;
  brandTitle: string;
  brandSub: string;
  accentColor: string;
  secondaryAccent: string;
  unitCallsign: string;
  heroPhoto: string;
  setupPhoto: string;
  settlementPhoto: string;
  painBadge: string;
  painHeadline: string;
  painSub: string;
  painCards: { title: string; loss: string; detail: string }[];
  setupHeadline: string;
  setupSub: string;
  setupFeatures: string[];
  radarHeadline: string;
  radarCustomerPin: string;
  radarUnitLabel: string;
  radarChecklist: string[];
  roiHeadline: string;
  roiSub: string;
  ctaLabel: string;
}

export const INDUSTRY_CONFIGS: Record<string, IndustryThemeConfig> = {
  "service-dispatch-master-walkthrough": {
    id: "service-dispatch-master-walkthrough",
    brandTitle: "DISPATCH OS // MASTER ENGINE",
    brandSub: "One Engine • Six Industry Operating Systems",
    accentColor: "#00F5D4",
    secondaryAccent: "#FBBF24",
    unitCallsign: "FLEET-HQ-01 • 4 MIN ETA",
    heroPhoto: "bos-assets/clean-caribbean-hvac-trades.jpg",
    setupPhoto: "bos-assets/clean-caribbean-reception.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-trade-counter.jpg",
    painBadge: "Dispatch OS • Fleet & Field Command",
    painHeadline: "End Blind Routing & WhatsApp Chaos.",
    painSub:
      "Replace dropped voice notes, wasted fuel, and paper receipts with one real-time radar built for Caribbean field teams.",
    painCards: [
      {
        title: "WhatsApp Voice Note Chaos",
        loss: "-$3,800/mo",
        detail: "Dropped pins & missed customer calls",
      },
      {
        title: "Blind Fleet Routing",
        loss: "28% Fuel Waste",
        detail: "Zero live 5km/10km/15km visibility",
      },
      {
        title: "Unverified Paper Receipts",
        loss: "Slow Payouts",
        detail: "No photo proof or digital sign-off",
      },
    ],
    setupHeadline: "One Engine. Six Industry Brands.",
    setupSub:
      "Issue 1-click client login credentials with Done-For-You or Self-Serve fleet setup in under 60 seconds.",
    setupFeatures: [
      "Powers AutoRescue, Delivery, FieldTrade, Patrol, Detailers & Freight OS",
      "1-Click Client Login Credential Issuance (Done-For-You or Self-Serve)",
      "Custom Branded Customer Request Link — Zero App Store Download",
    ],
    radarHeadline: "Pinpoint GPS Radar.",
    radarCustomerPin: "Christ Church • Priority Dispatch",
    radarUnitLabel: "Marcus Haynes • 3.1 km Away",
    radarChecklist: [
      "1-Tap Customer GPS Pin Locked",
      "Concentric 5km / 10km / 15km Radar Routing",
      "Timestamped Photo Proof & Digital Sign-Off",
    ],
    roiHeadline: "Launch Your Branded Fleet in 60 Seconds.",
    roiSub:
      "Every completed job settles via Card, 1:1 CariPass Wallet, or Invoice with automatic 60/40 CariSplit & CariProof credit scoring.",
    ctaLabel: "Open Live Mapbox Radar Demo →",
  },
  "vsl-auto-rescue": {
    id: "vsl-auto-rescue",
    brandTitle: "AUTORESCUE OS",
    brandSub: "24/7 Roadside Assistance & Towing Radar",
    accentColor: "#FBBF24",
    secondaryAccent: "#FF5A36",
    unitCallsign: "FLATBED-07 • 6 MIN ETA",
    heroPhoto: "bos-assets/clean-caribbean-autorescue.jpg",
    setupPhoto: "bos-assets/clean-caribbean-reception.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-autorescue.jpg",
    painBadge: "AutoRescue OS • 24/7 Towing & Recovery",
    painHeadline: "End Highway Phone Tag & Lost Tows.",
    painSub:
      "When a motorist is stranded on the highway, vague directions and missed calls cost your tow fleet high-margin recovery jobs.",
    painCards: [
      {
        title: "Stranded Highway Phone Tag",
        loss: "6+ Missed Calls",
        detail: "Drivers unable to describe exact highway location",
      },
      {
        title: "Blind Flatbed ETAs",
        loss: "Lost Motorists",
        detail: "Guessing which recovery truck is closest",
      },
      {
        title: "Disputed Damage Claims",
        loss: "Delayed Payout",
        detail: "Missing 4-corner pre-tow condition photos",
      },
    ],
    setupHeadline: "1-Tap Roadside GPS Lock.",
    setupSub:
      "Stranded motorists tap your branded web link—no app download required—to lock exact highway coordinates and vehicle triage.",
    setupFeatures: [
      "1-Tap Stranded Motorist GPS Lock (Zero App Download Needed)",
      "Vehicle Type, Tire/Battery/Winch Triage & Hook-Up Rate Matrix",
      "Automated Live Tow Truck Tracking Link via SMS & WhatsApp",
    ],
    radarHeadline: "Live Tow Fleet Radar.",
    radarCustomerPin: "ABC Highway • Stranded SUV",
    radarUnitLabel: "Flatbed #07 • 2.8 km Away",
    radarChecklist: [
      "Highway GPS Coordinates & Plate Verified",
      "Closest Flatbed Routed on 360° Mapbox Radar",
      "4-Corner Pre-Tow Damage Photos Logged",
    ],
    roiHeadline: "One Extra Emergency Tow Pays for Your Month.",
    roiSub:
      "Settle on the roadside via Card, 1:1 CariPass Wallet, or instant insurance claim invoice with 60/40 CariSplit.",
    ctaLabel: "Launch Your AutoRescue OS Fleet Today →",
  },
  "vsl-food-delivery": {
    id: "vsl-food-delivery",
    brandTitle: "DELIVERY OS",
    brandSub: "0% Commission Food, Grocery & Courier OS",
    accentColor: "#34D399",
    secondaryAccent: "#FBBF24",
    unitCallsign: "RIDER-12 • 5 MIN ETA",
    heroPhoto: "bos-assets/clean-caribbean-delivery.jpg",
    setupPhoto: "bos-assets/clean-caribbean-reception.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-delivery.jpg",
    painBadge: "Delivery OS • Commission-Free Courier Engine",
    painHeadline: "Stop Losing 30% Margin to Third-Party Apps.",
    painSub:
      "Keep 100% of your restaurant, grocery, and retail delivery profits while giving customers a live branded rider map.",
    painCards: [
      {
        title: "30% App Commissions",
        loss: "-30% Per Order",
        detail: "Aggregators take your margin & customer list",
      },
      {
        title: "“Where Is My Order?” Calls",
        loss: "Tied-Up Lines",
        detail: "No live rider tracking link for customers",
      },
      {
        title: "Unbatched Multi-Drop Chaos",
        loss: "Late Drop-Offs",
        detail: "Couriers zigzagging across town blindly",
      },
    ],
    setupHeadline: "Your Brand. Your Riders. 0% Commission.",
    setupSub:
      "Launch your own direct ordering and courier dispatch portal with 1-click rider credentials and automatic route batching.",
    setupFeatures: [
      "100% Commission-Free Direct Ordering & Branded Courier Portal",
      "Multi-Drop Batch Routing Across 5km / 10km / 15km Radar Zones",
      "Automated 60/40 Rider-to-Merchant CariSplit Settlement",
    ],
    radarHeadline: "Multi-Drop Courier Radar.",
    radarCustomerPin: "Warrens Corporate • 3-Drop Batch",
    radarUnitLabel: "Courier Rider #12 • 1.9 km Away",
    radarChecklist: [
      "Kitchen Prep Complete • 3-Drop Route Locked",
      "Customer Tracks Live Rider Pin on Mapbox",
      "Doorstep Thermal Bag Photo Proof & Tip",
    ],
    roiHeadline: "Keep 100% of Your Delivery Margin.",
    roiSub:
      "One busy weekend of saved marketplace commissions pays for Delivery OS all month—with instant CariPass & card checkout.",
    ctaLabel: "Launch Your Commission-Free Delivery OS →",
  },
  "vsl-hvac-trades": {
    id: "vsl-hvac-trades",
    brandTitle: "FIELDTRADE OS",
    brandSub: "HVAC, Plumbing & Electrical Radar Dispatch",
    accentColor: "#00F5D4",
    secondaryAccent: "#38BDF8",
    unitCallsign: "TECH-VAN-03 • 8 MIN ETA",
    heroPhoto: "bos-assets/clean-caribbean-hvac-trades.jpg",
    setupPhoto: "bos-assets/clean-caribbean-trade-counter.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-hvac-trades.jpg",
    painBadge: "FieldTrade OS • Home & Commercial Trades",
    painHeadline: "Eliminate Missed Calls & Unpaid Quotes.",
    painSub:
      "Missed emergency leak calls, double-booked vans, and paper estimates cost Caribbean contractors thousands every week.",
    painCards: [
      {
        title: "Missed Emergency Calls",
        loss: "-$1,200/Job",
        detail: "Clients call the next contractor when you miss",
      },
      {
        title: "Wrong Tech Without Parts",
        loss: "2x Return Trips",
        detail: "Dispatching without diagnostic photo intake",
      },
      {
        title: "Unpaid Paper Estimates",
        loss: "30-Day AR Lag",
        detail: "Vans leaving the site without collecting pay",
      },
    ],
    setupHeadline: "Skill-Matched Technician Dispatch.",
    setupSub:
      "Equip your HVAC, plumbing, and electrical vans with AI diagnostic intake, digital safety checklists, and instant quotes.",
    setupFeatures: [
      "Skill-Matched Technician Radar (HVAC, Master Plumber, Electrical)",
      "Digital Parts, Voltage/Pressure & Safety Inspection Checklists",
      "Instant On-Site Quote Approval & Mobile Terminal Settlement",
    ],
    radarHeadline: "Certified Trade Fleet Radar.",
    radarCustomerPin: "Sandy Lane • Emergency AC Repair",
    radarUnitLabel: "Tech Van #03 • 3.4 km Away",
    radarChecklist: [
      "Homeowner Uploads Unit Photo & GPS Pin",
      "Certified Service Van Routed on Live Radar",
      "Before/After Repair Photos & Warranty Signed",
    ],
    roiHeadline: "Turn Every Service Van Into a Profit Center.",
    roiSub:
      "Convert approved quotes into instant Card, CariPass, or B2B invoice settlement before your van leaves the driveway.",
    ctaLabel: "Power Up Your Crew With FieldTrade OS →",
  },
  "vsl-security-patrol": {
    id: "vsl-security-patrol",
    brandTitle: "PATROL OS",
    brandSub: "Private Security, Guard Tour & Alarm Radar",
    accentColor: "#38BDF8",
    secondaryAccent: "#00F5D4",
    unitCallsign: "PATROL-ALPHA • ON SCENE",
    heroPhoto: "bos-assets/clean-caribbean-patrol.jpg",
    setupPhoto: "bos-assets/clean-caribbean-executives.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-patrol.jpg",
    painBadge: "Patrol OS • Private Security & Guard Force",
    painHeadline: "Replace Paper Guard Clipboards With Live Proof.",
    painSub:
      "Commercial property owners and estates demand verifiable GPS proof that night rounds and alarm responses actually happened.",
    painCards: [
      {
        title: "Unverified Night Rounds",
        loss: "Lost Contracts",
        detail: "Clients questioning perimeter patrol checks",
      },
      {
        title: "Paper Incident Logs",
        loss: "Zero SLA Proof",
        detail: "Handwritten notes without GPS timestamps",
      },
      {
        title: "Slow Alarm Dispatch",
        loss: "SLA Penalties",
        detail: "No live radar showing closest patrol SUV",
      },
    ],
    setupHeadline: "Geofenced Checkpoints & Rapid Response.",
    setupSub:
      "Give your security command center live officer radar, NFC/GPS checkpoint verification, and client transparency portals.",
    setupFeatures: [
      "Geofenced NFC & GPS Checkpoint Verification Across Client Sites",
      "Live 360° Mobile Patrol & Rapid Alarm Response Mapbox Radar",
      "Timestamped Incident Dossiers With Photo & Audio Evidence",
    ],
    radarHeadline: "Tactical Security Radar.",
    radarCustomerPin: "Port St. Charles • Checkpoint #04",
    radarUnitLabel: "Patrol Alpha • Verified On Scene",
    radarChecklist: [
      "Perimeter Geofence & Checkpoint #04 Verified",
      "Closest Mobile Patrol SUV Routed in 40s",
      "Client SLA Dossier & Timestamped Photo Sealed",
    ],
    roiHeadline: "Win Larger Commercial & Estate Contracts.",
    roiSub:
      "Deliver indisputable client SLA reports and automate recurring commercial security retainers via CBPay & CariSplit.",
    ctaLabel: "Deploy Patrol OS for Your Security Force →",
  },
  "vsl-mobile-detailing": {
    id: "vsl-mobile-detailing",
    brandTitle: "DETAILERS OS",
    brandSub: "Mobile Auto Detailing, Ceramic & Fleet Wash OS",
    accentColor: "#FF5A36",
    secondaryAccent: "#FBBF24",
    unitCallsign: "DETAIL-VAN-02 • ARRIVING",
    heroPhoto: "bos-assets/clean-caribbean-detailer.jpg",
    setupPhoto: "bos-assets/clean-caribbean-reception.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-detailer.jpg",
    painBadge: "Detailers OS • Mobile Detailing & Ceramic Wash",
    painHeadline: "Stop Zigzagging Town & Losing to No-Shows.",
    painSub:
      "Driving across opposite ends of the island between washes and dealing with last-minute cancellations drains your daily profit.",
    painCards: [
      {
        title: "Unclustered Driveway Routes",
        loss: "90 Min Lost/Day",
        detail: "Criss-crossing town between appointments",
      },
      {
        title: "Last-Minute No-Shows",
        loss: "$250 Empty Slot",
        detail: "Booking ceramic packages without deposits",
      },
      {
        title: "Water & Power Surprises",
        loss: "Stalled Jobs",
        detail: "Arriving without site hookup confirmation",
      },
    ],
    setupHeadline: "Neighborhood-Clustered Van Scheduling.",
    setupSub:
      "Lock upfront deposits, confirm vehicle size and water/power access, and cluster your daily mobile rig routes automatically.",
    setupFeatures: [
      "Neighborhood-Clustered Van Scheduling on Live Mapbox Radar",
      "Upfront Vehicle Size, Water/Power Check & Deposit Lock",
      "High-Gloss Before/After Photo Sign-Off + 30-Day Rebooking",
    ],
    radarHeadline: "Clustered Detailing Radar.",
    radarCustomerPin: "Royal Westmoreland • Ceramic SUV",
    radarUnitLabel: "Mobile Rig #02 • 2.1 km Away",
    radarChecklist: [
      "SUV Ceramic Package + Deposit Confirmed",
      "Mobile Rig #02 Routed in 5km Cluster Zone",
      "Before/After Gloss Gallery + 20% Tip Settled",
    ],
    roiHeadline: "Fit 2 More High-Ticket Details Into Every Day.",
    roiSub:
      "Collect curbside Card or CariPass payment, tips, and automatic 30-day maintenance rebookings before you pack up.",
    ctaLabel: "Launch Your Branded Detailers OS App →",
  },
  "vsl-commercial-logistics": {
    id: "vsl-commercial-logistics",
    brandTitle: "FREIGHT OS",
    brandSub: "B2B Freight, Port Hauling & Distribution Radar",
    accentColor: "#FBBF24",
    secondaryAccent: "#34D399",
    unitCallsign: "TRACTOR-09 • ROUTE LOCKED",
    heroPhoto: "bos-assets/clean-caribbean-freight.jpg",
    setupPhoto: "bos-assets/clean-caribbean-trade-counter.jpg",
    settlementPhoto: "bos-assets/clean-caribbean-freight.jpg",
    painBadge: "Freight OS • Port Hauling & B2B Distribution",
    painHeadline: "Eliminate Lost Paper PODs & Dock Delays.",
    painSub:
      "Missing carbon-copy delivery notes, loading dock bottlenecks, and disputed pallet counts freeze B2B cashflow for weeks.",
    painCards: [
      {
        title: "Missing Paper Delivery Notes",
        loss: "45-Day Hold",
        detail: "Lost manifests delaying distributor payouts",
      },
      {
        title: "Disputed Pallet Counts",
        loss: "Chargebacks",
        detail: "No dockside photo proof or glass signature",
      },
      {
        title: "Blind Port-to-Depot Routing",
        loss: "Demurrage Fees",
        detail: "No live multi-stop commercial fleet radar",
      },
    ],
    setupHeadline: "Digital Bill of Lading & Fleet Manifests.",
    setupSub:
      "Optimize multi-stop commercial routes from port to warehouse and capture glass-screen receiver signatures on arrival.",
    setupFeatures: [
      "Multi-Stop Commercial Manifest & Tonnage Route Optimization",
      "Live Heavy-Fleet Mapbox Radar From Port/Depot to Receiver",
      "Digital Bill of Lading (BOL) + Dock Photo & Receiver Signature",
    ],
    radarHeadline: "Heavy-Fleet Freight Radar.",
    radarCustomerPin: "Bridgetown Port → Warrens Depot",
    radarUnitLabel: "Commercial Box #09 • On Route",
    radarChecklist: [
      "14-Pallet Manifest Scanned at Port Depot",
      "Commercial Truck Tracked on 15km Radar",
      "Digital BOL Signed + Instant Invoice Sent",
    ],
    roiHeadline: "Accelerate B2B Cashflow From Weeks to Minutes.",
    roiSub:
      "The second the digital POD is signed on glass, invoices trigger automatically with verified CariProof volume.",
    ctaLabel: "Scale Your Fleet With Freight OS Today →",
  },
};

/* ============================================================================
   ACT 1: FULL-BLEED CARIBBEAN FIELD SCENE + PAIN ELIMINATION GLASS CARD
   ============================================================================ */
const IndustryAct1Pain: React.FC<{
  cfg: IndustryThemeConfig;
  durationInFrames: number;
}> = ({ cfg, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.1], {
    extrapolateRight: "clamp",
  });
  const pop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 110 },
  });
  const subjectOnLeft = cfg.heroPhoto.includes("showcase-field-dispatch");

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(cfg.heroPhoto)}
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
          background: subjectOnLeft
            ? "linear-gradient(270deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.78) 46%, rgba(5, 9, 18, 0.18) 76%, rgba(5, 9, 18, 0.52) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.9) 0%, rgba(5, 9, 18, 0) 36%)"
            : "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.78) 46%, rgba(5, 9, 18, 0.16) 76%, rgba(5, 9, 18, 0.48) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.9) 0%, rgba(5, 9, 18, 0) 36%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 90,
          ...(subjectOnLeft ? { right: 88 } : { left: 92 }),
          bottom: 90,
          width: 980,
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
              backgroundColor: "rgba(255, 90, 54, 0.22)",
              border: "1px solid rgba(255, 90, 54, 0.6)",
              backdropFilter: "blur(12px)",
              color: "#FF5A36",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {cfg.painBadge}
          </div>

          <h1
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: "0 0 18px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.65)",
            }}
          >
            {cfg.painHeadline}
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
            {cfg.painSub}
          </p>
        </div>

        {/* Single Floating 3D Glassmorphic Card */}
        <div
          style={{
            width: 920,
            borderRadius: 28,
            background:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.88) 0%, rgba(7, 12, 24, 0.94) 100%)",
            backdropFilter: "blur(24px)",
            border: `1.5px solid ${cfg.accentColor}`,
            boxShadow: "0 40px 90px rgba(0, 0, 0, 0.85)",
            padding: "26px 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: cfg.accentColor,
                letterSpacing: "0.08em",
              }}
            >
              REPLACED BY {cfg.brandTitle}
            </div>
            <div
              style={{
                background: cfg.accentColor,
                color: "#05080F",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 900,
              }}
            >
              {cfg.unitCallsign}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {cfg.painCards.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(255, 90, 54, 0.5)",
                  borderRadius: 18,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#FF5A36",
                    marginBottom: 4,
                  }}
                >
                  {p.loss}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#E2E8F0",
                    lineHeight: 1.35,
                  }}
                >
                  {p.detail}
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
   ACT 2: 60-SECOND BRANDED SETUP & 1-CLICK CREDENTIALS
   ============================================================================ */
const IndustryAct2Setup: React.FC<{
  cfg: IndustryThemeConfig;
  durationInFrames: number;
}> = ({ cfg, durationInFrames }) => {
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
      <Img
        src={staticFile(cfg.setupPhoto)}
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
          top: 90,
          left: 92,
          bottom: 90,
          width: 980,
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
              border: `1px solid ${cfg.accentColor}`,
              backdropFilter: "blur(12px)",
              color: cfg.accentColor,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {cfg.brandTitle} • {cfg.brandSub}
          </div>

          <h1
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              margin: "0 0 18px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.65)",
            }}
          >
            {cfg.setupHeadline}
          </h1>

          <p
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 780,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {cfg.setupSub}
          </p>
        </div>

        <div
          style={{
            width: 900,
            borderRadius: 28,
            background:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.88) 0%, rgba(7, 12, 24, 0.94) 100%)",
            backdropFilter: "blur(24px)",
            border: "1.5px solid rgba(255, 255, 255, 0.24)",
            boxShadow: "0 40px 90px rgba(0, 0, 0, 0.85)",
            padding: "28px 34px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              1-Click Client Login & Team Onboarding Included
            </div>
            <div
              style={{
                background: "#10B981",
                color: "#05080F",
                padding: "8px 16px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 900,
              }}
            >
              Done-For-You or Self-Serve
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {cfg.setupFeatures.map((feat) => (
              <div
                key={feat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(15, 23, 42, 0.85)",
                  border: `1px solid ${cfg.accentColor}`,
                  borderRadius: 14,
                  padding: "12px 16px",
                }}
              >
                <span
                  style={{
                    color: cfg.accentColor,
                    fontSize: 18,
                    fontWeight: 900,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 3: LIVE 3D MAPBOX GPS RADAR OVER AUTHENTIC CARIBBEAN FIELD PHOTO
   ============================================================================ */
const IndustryAct3Radar: React.FC<{
  cfg: IndustryThemeConfig;
  durationInFrames: number;
}> = ({ cfg, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.1], {
    extrapolateRight: "clamp",
  });
  const pop = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  // showcase-field-dispatch.jpg has the technician on the left; all 5 generated vertical photos have the professional on the right
  const subjectOnLeft = cfg.heroPhoto.includes("showcase-field-dispatch");

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(cfg.heroPhoto)}
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
          background: subjectOnLeft
            ? "linear-gradient(270deg, rgba(6, 11, 20, 0.94) 0%, rgba(6, 11, 20, 0.78) 46%, rgba(6, 11, 20, 0.18) 76%, rgba(6, 11, 20, 0.55) 100%), linear-gradient(0deg, rgba(6, 11, 20, 0.9) 0%, rgba(6, 11, 20, 0) 36%)"
            : "linear-gradient(95deg, rgba(6, 11, 20, 0.94) 0%, rgba(6, 11, 20, 0.78) 46%, rgba(6, 11, 20, 0.16) 76%, rgba(6, 11, 20, 0.48) 100%), linear-gradient(0deg, rgba(6, 11, 20, 0.9) 0%, rgba(6, 11, 20, 0) 36%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 84,
          ...(subjectOnLeft ? { right: 88 } : { left: 88 }),
          width: 920,
          display: "flex",
          flexDirection: "column",
          gap: 24,
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
              border: `1px solid ${cfg.accentColor}`,
              color: cfg.accentColor,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            {cfg.brandTitle} • 5km / 10km / 15km Live Mapbox Radar
          </div>

          <h1
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.03,
              margin: 0,
              textShadow: "0 10px 30px rgba(0,0,0,0.7)",
            }}
          >
            {cfg.radarHeadline}{" "}
            <span style={{ color: cfg.accentColor }}>Live in Lockstep.</span>
          </h1>
        </div>

        {/* Floating Glassmorphic Mapbox Radar Card */}
        <div
          style={{
            height: 450,
            borderRadius: 28,
            background:
              "radial-gradient(circle at 50% 50%, rgba(13, 31, 51, 0.9) 0%, rgba(7, 16, 28, 0.94) 100%)",
            backdropFilter: "blur(22px)",
            border: `1.5px solid ${cfg.accentColor}`,
            boxShadow: "0 40px 95px rgba(0,0,0,0.85)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg
            width="920"
            height="450"
            viewBox="0 0 920 450"
            style={{ position: "absolute", inset: 0 }}
          >
            <g stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1.5" fill="none">
              <path d="M 0 130 Q 310 170 610 110 T 920 150" />
              <path d="M 0 310 Q 380 260 660 340 T 920 290" />
              <path d="M 260 0 Q 300 220 240 450" />
              <path d="M 640 0 Q 590 220 680 450" />
            </g>
            {[85, 160, 235].map((r) => (
              <circle
                key={r}
                cx="460"
                cy="215"
                r={r}
                fill="none"
                stroke="rgba(0, 245, 212, 0.24)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
              />
            ))}
            <path
              d="M 250 300 Q 420 190 650 125"
              fill="none"
              stroke={cfg.accentColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="12 10"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              left: 145,
              top: 265,
              background: "#0F172A",
              border: `2px solid ${cfg.accentColor}`,
              borderRadius: 16,
              padding: "12px 18px",
              boxShadow: "0 16px 35px rgba(0,0,0,0.7)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: cfg.accentColor,
              }}
            >
              {cfg.unitCallsign}
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>
              {cfg.radarUnitLabel}
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: 390,
              top: 175,
              background: cfg.accentColor,
              color: "#05080F",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 15,
              fontWeight: 900,
            }}
          >
            LIVE GPS TRACKING
          </div>

          <div
            style={{
              position: "absolute",
              left: 545,
              top: 72,
              background: "#0F172A",
              border: `2px solid ${cfg.secondaryAccent}`,
              borderRadius: 16,
              padding: "12px 18px",
              boxShadow: "0 16px 35px rgba(0,0,0,0.7)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: cfg.secondaryAccent,
              }}
            >
              CUSTOMER GPS PIN LOCKED
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>
              {cfg.radarCustomerPin}
            </div>
          </div>

          {/* Bottom 3-Step Verification Strip Inside Radar */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              right: 18,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {cfg.radarChecklist.map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(15, 23, 42, 0.92)",
                  border: `1.5px solid ${cfg.accentColor}`,
                  borderRadius: 12,
                  padding: "10px 12px",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   ACT 4: INSTANT SETTLEMENT, 60/40 CARISPLIT, ROI & CALL TO ACTION
   ============================================================================ */
const IndustryAct4RoiCta: React.FC<{
  cfg: IndustryThemeConfig;
  durationInFrames: number;
}> = ({ cfg, durationInFrames }) => {
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
  const subjectOnLeft = cfg.settlementPhoto.includes("showcase-field-dispatch");

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05080F",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(cfg.settlementPhoto)}
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
          background: subjectOnLeft
            ? "linear-gradient(270deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.8) 50%, rgba(5, 9, 18, 0.2) 78%, rgba(5, 9, 18, 0.5) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.92) 0%, rgba(5, 9, 18, 0) 38%)"
            : "linear-gradient(95deg, rgba(5, 9, 18, 0.94) 0%, rgba(5, 9, 18, 0.8) 50%, rgba(5, 9, 18, 0.2) 78%, rgba(5, 9, 18, 0.5) 100%), linear-gradient(0deg, rgba(5, 9, 18, 0.92) 0%, rgba(5, 9, 18, 0) 38%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 86,
          ...(subjectOnLeft ? { right: 88 } : { left: 88 }),
          bottom: 86,
          width: 1040,
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
              backgroundColor: "rgba(16, 185, 129, 0.22)",
              border: "1px solid rgba(52, 211, 153, 0.6)",
              color: "#34D399",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {cfg.brandTitle} • Instant Settlement & 60/40 CariSplit
          </div>

          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.035em",
              lineHeight: 1.03,
              margin: "0 0 16px 0",
              textShadow: "0 12px 35px rgba(0,0,0,0.7)",
            }}
          >
            {cfg.roiHeadline}
          </h1>

          <p
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#E2E8F0",
              maxWidth: 820,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {cfg.roiSub}
          </p>
        </div>

        {/* Single Floating Settlement & CTA Card */}
        <div
          style={{
            background: "rgba(10, 18, 32, 0.92)",
            backdropFilter: "blur(24px)",
            border: `1.5px solid ${cfg.accentColor}`,
            borderRadius: 28,
            padding: "28px 34px",
            boxShadow: "0 40px 90px rgba(0,0,0,0.85)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: "rgba(16, 185, 129, 0.16)",
                border: "1px solid rgba(52, 211, 153, 0.45)",
                borderRadius: 16,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, color: "#34D399" }}>
                INSTANT CHECKOUT
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                Card • CariPass • Invoice
              </div>
            </div>

            <div
              style={{
                background: "rgba(245, 158, 11, 0.16)",
                border: "1px solid rgba(251, 191, 36, 0.45)",
                borderRadius: 16,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, color: "#FBBF24" }}>
                CARISPLIT 60/40 POS
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                40% Profit Protected
              </div>
            </div>

            <div
              style={{
                background: "rgba(0, 245, 212, 0.16)",
                border: "1px solid rgba(0, 245, 212, 0.45)",
                borderRadius: 16,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, color: "#00F5D4" }}>
                CARIPROOF PASSPORT
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                842 / 900 Loan Ready
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>
              Ready in 60 Seconds • 1-Click Demo & Team Setup
            </div>
            <div
              style={{
                background: cfg.accentColor,
                color: "#05080F",
                padding: "14px 28px",
                borderRadius: 14,
                fontSize: 17,
                fontWeight: 900,
              }}
            >
              {cfg.ctaLabel}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ============================================================================
   MAIN EXPORT: DISPATCH INDUSTRY EXPLAINER
   ============================================================================ */
export const DispatchIndustryExplainer: React.FC<{
  meta: EcosystemVideoMeta;
}> = ({ meta }) => {
  const cfg =
    INDUSTRY_CONFIGS[meta.id] ||
    INDUSTRY_CONFIGS["service-dispatch-master-walkthrough"];
  const [s1, s2, s3, s4] = meta.scenes;

  return (
    <AbsoluteFill style={{ backgroundColor: "#05080F" }}>
      <Audio src={staticFile(meta.masterAudioFile)} />
      <Series>
        <Series.Sequence durationInFrames={s1.durationInFrames}>
          <IndustryAct1Pain cfg={cfg} durationInFrames={s1.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={s2.durationInFrames}>
          <IndustryAct2Setup cfg={cfg} durationInFrames={s2.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={s3.durationInFrames}>
          <IndustryAct3Radar cfg={cfg} durationInFrames={s3.durationInFrames} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={s4.durationInFrames}>
          <IndustryAct4RoiCta
            cfg={cfg}
            durationInFrames={s4.durationInFrames}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
