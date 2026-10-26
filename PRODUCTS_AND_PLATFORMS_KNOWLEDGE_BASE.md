# Complete Products & Platforms Knowledge Base

This document is the ground-truth reference for every platform, operating system, AI agent, and financial rail in the suite—what each product is, who it is for, what features it includes, and how all platforms connect end-to-end from a single customer interaction to international trade and Credit Union loan underwriting.

---

## 1. Strict Naming & Brand Architecture Rules

- **No Invented Umbrella Names:** Never use made-up umbrella titles such as *"Sovereign Digital Operating Ecosystem"*, *"Sovereign Operating System"*, *"Novelty Web Solutions Ecosystem"*, or *"NWS Suite"*.
- **Always Use the Real Product Names:**
  1. **CARICOM Business Hub** (`caricombusiness.com`) — Regional B2B/B2C Discovery Directory & Marketplace
  2. **CARI** — 24/7 AI Voice, WhatsApp & Directory Receptionist
  3. **Businesses OS** (`businesses-os`) — Purchase-Scoped Business Operations Cockpit (Store, Service, Booking, CRM, Invoicing)
  4. **Dispatch OS** (`service-dispatch-production-os`) — Single-Source Live Mapbox Radar & Field Dispatch Engine powering **6 Standalone Industry Brands**:
     - **AutoRescue OS** (Roadside Assistance & Towing)
     - **Delivery OS** (0% Commission Food, Grocery & Courier Delivery)
     - **FieldTrade OS** (HVAC, Plumbing, Electrical & Home/Commercial Trades)
     - **Patrol OS** (Private Security, Guard Tour & Mobile Alarm Response)
     - **Detailers OS** (Mobile Auto Detailing, Ceramic Coating & Fleet Wash)
     - **Freight OS** (B2B Freight, Port Hauling & Commercial Distribution)
  5. **TicketFlows** — Event Ticketing, QR Check-In & Charter/Shuttle Hauling
  6. **CBPay** — Regional & Cross-Border Payment Rail containing three core financial products:
     - **CariPass** (1:1 Pegged Digital Consumer & Merchant Wallet with \$0 Wallet-to-Wallet Fees)
     - **CariSplit POS** (Automated 60/40 Revenue Split Terminal — 60% Operations / 40% Owner Profit Vault)
     - **CariProof** (Cryptographic Income Passport & Credit Score `0–900` for Credit Union Cap. 317 Loans & Grants)

---

## 2. How the Platforms Connect End-to-End (The Golden Thread)

1. **Discovery & 24/7 Intake (`CARICOM Business Hub` + `CARI`):**
   - A consumer or B2B buyer discovers a local business on **CARICOM Business Hub** (`caricombusiness.com`) or messages via WhatsApp/Phone.
   - **Zero Login Friction:** Visitors never have to create an account just to contact a business or place an inquiry.
   - **CARI (24/7 AI Receptionist)** answers in under a second, answers questions about pricing/availability, captures the lead or order, and writes it directly to the database (`business_inquiries` / orders).
2. **Purchase-Scoped Workspace (`Businesses OS`):**
   - The lead, booking, or storefront order lands immediately inside the merchant's **Businesses OS** dashboard.
   - **Purchase-Scoped UI (Zero Clutter):** The dashboard dynamically renders **only the exact modules the business owner purchased**. A retail store owner only sees Store/Catalog/POS/Orders tabs; a service contractor only sees Service/Dispatch/Quotes tabs—never 40 irrelevant tabs.
   - **1-Click Credential Issuance & Team Setup:** Includes 1-click issued client login credentials and a guided **Team Setup Wizard** where the owner can choose **Done-For-You (We Set It Up)** or **Self-Serve** onboarding.
3. **Live Field & Fleet Execution (`Dispatch OS` + `6 Industry OS Brands`):**
   - If the order or service call requires a driver, courier, tow truck, security officer, detailer, or technician, **Businesses OS** triggers **Dispatch OS**.
   - **Three Live Surfaces in Lockstep:**
     1. **Customer Web Portal (No App Store Download):** The customer taps one link to lock their exact GPS coordinates and watch their assigned unit approach in real time.
     2. **Central Radar HQ:** The dispatcher views a live 360° **Mapbox Tactical Radar** with concentric **5 km, 10 km, and 15 km rings**, live traffic/weather telemetry, and 1-click nearest-unit routing.
     3. **Field Technician / Driver Mobile View:** The driver or tech receives turn-by-turn navigation, completes industry-specific checklists (e.g., 4-corner pre-tow photos, HVAC voltage checks, NFC guard checkpoints, or digital Bill of Lading), and captures customer glass-screen sign-off.
4. **Settlement, 60/40 Profit Split & Loan Underwriting (`CBPay` + `CariPass` + `CariSplit` + `CariProof`):**
   - Upon completion or counter checkout, the customer pays via Card, **1:1 CariPass Wallet** (\$0 wallet fee), or B2B Invoice.
   - **CariSplit POS** automatically divides every settled dollar **60% to the Operating Account** (fuel, inventory, crew payouts) and **40% to the Protected Owner Profit Vault** (taxes, savings, loan servicing).
   - Every verified digital transaction cryptographically mints the merchant's or driver's **CariProof Income Passport** (e.g., **842 / 900 score**), generating a 1-click verified audit dossier accepted by Caribbean Credit Unions (**Co-operative Societies Act Cap. 317**) and grant agencies to unlock microloans (e.g., **\$32,500 BBD**) without collateral friction.
5. **Country-to-Country & Global Export Scaling:**
   - A business starts locally in **Barbados (`BBD`)**, scales seamlessly across CARICOM (**Guyana `GYD`**, **Jamaica `JMD`**, **Trinidad & Tobago `TTD`**), and accepts international diaspora or export orders in **US Dollars (`USD`)** and **British Pounds (`GBP`)** on one unified rail.

---

## 3. Platform-by-Platform Breakdown

### Pillar 1: CARICOM Business Hub (`caricombusiness.com`) & CARI AI Receptionist
- **What It Is:** The regional B2B and B2C business discovery directory, trade hub, and 24/7 AI lead intake front door for Caribbean enterprises.
- **Target Audience:** All Caribbean MSMEs, retail storefronts, professional clinics, restaurants, hospitality venues, contractors, and B2B suppliers.
- **Core Capabilities:**
  - Verified regional business listings searchable by island, category, and service type.
  - Frictionless public inquiry dispatch (visitors can message or request quotes without login walls).
  - **CARI 24/7 AI Receptionist:** Answers inbound voice calls, WhatsApp messages, and directory inquiries 24/7; qualifies leads; books appointments; and dispatches orders directly into **Businesses OS** and GoHighLevel/CRM workflows.
  - Multi-tier business membership plans synced via Stripe & Cloudflare D1.

---

### Pillar 2: Businesses OS (`businesses-os`)
- **What It Is:** The modular, purchase-scoped operating cockpit where business owners manage their daily operations, storefront, bookings, customers, and team.
- **Target Audience:** Storeowners, service providers, clinics, salons/barbershops, auto parts stores, hardware counters, and multi-staff agencies.
- **Core Capabilities:**
  - **Purchase-Scoped Entitlement Engine (`entitlements.ts`):** Automatically filters the sidebar and workspace so the client only sees the exact package they bought:
    - *Store Package:* Catalog, Inventory, POS Checkout, Online Orders, CARI Inquiries, Delivery Dispatch link.
    - *Service & Trades Package:* Quotes/Estimates, Job Calendar, Field Dispatch link, Customer CRM, Invoicing.
    - *Professional / Clinic Package:* Patient/Client Check-In, Appointment Calendar, 24/7 CARI Receptionist, Billing.
  - **1-Click Client Login & Provisioning:** Instant demo and production credential issuance (`cb_session` D1 authentication) so clients can log in with a single click.
  - **Team Setup Wizard (Done-For-You vs. Self-Serve):** Lets new clients either upload their roster/rates for white-glove setup or add staff and permissions themselves in 60 seconds.
  - **10+ Industry Demo Personas:** Includes pre-configured live workspaces for Auto Parts, Barbershop POS, Hardware/Trade Counter, Dental/Medical Clinic, Hospitality Reception, Field Services, and B2B Distribution.

---

### Pillar 3: Dispatch OS (`service-dispatch-production-os`) — Master Engine & 6 Industry OS Brands
- **What It Is:** A single-codebase, white-label real-time GPS fleet and field service command engine built on **Mapbox GL**, powering **6 dedicated industry operating systems**.
- **Shared Core Architecture Across All 6 Brands:**
  - **3 Synchronized Live Views:** Customer 1-Tap GPS Request Portal (no app download) + Central Dispatcher 360° Mapbox Radar (`5km / 10km / 15km` concentric rings) + Field Driver/Tech Mobile App.
  - **1-Click Demo & Client Credential Issuance:** Instant role switching (Dispatcher HQ, Field Unit, Customer View) and 60-second white-label branding.
  - **Integrated Settlement:** Roadside/curbside card tap, **CariPass** wallet, insurance/B2B invoice generation, and **60/40 CariSplit**.

#### The 6 Standalone Industry Operating Systems Powered by Dispatch OS:

1. **AutoRescue OS (`vsl-auto-rescue.mp4`) — Roadside Assistance & Towing**
   - **Problem Solved:** Stranded motorists on the highway unable to describe their location, 6+ missed phone calls, blind flatbed ETAs, and disputed vehicle damage claims.
   - **Key Features:**
     - 1-Tap Stranded Motorist Highway GPS Lock (zero app download required).
     - Vehicle type, tire/battery/winch triage, and automated hook-up + mileage rate matrix.
     - 360° Mapbox tow truck radar routing the closest flatbed or wrecker.
     - Mandatory **4-corner pre-tow condition photos** and digital winch sign-off to eliminate damage disputes.
     - Instant roadside card tap, CariPass wallet, or direct insurance claim invoice.

2. **Delivery OS (`vsl-food-delivery.mp4`) — 0% Commission Food, Grocery & Courier Dispatch**
   - **Problem Solved:** Losing 30% of every order's margin to third-party delivery apps that keep the restaurant's customer data, plus customers calling to ask *"Where is my food?"*
   - **Key Features:**
     - 100% commission-free direct ordering portal under the merchant's own brand.
     - Multi-drop route batching across `5km / 10km / 15km` Mapbox radar zones so couriers never zigzag across town.
     - Automated SMS/WhatsApp live rider tracking link for the customer.
     - Doorstep thermal-bag photo proof of delivery and 1-tap courier tip capture.
     - Automatic **60/40 CariSplit** rider-to-merchant settlement.

3. **FieldTrade OS (`vsl-hvac-trades.mp4`) — HVAC, Plumbing, Electrical & Contracting**
   - **Problem Solved:** Missed emergency leak/AC calls (`-\$1,200/job`), sending the wrong technician without the right parts (2x return trips), and unpaid paper estimates sitting in 30-day accounts receivable.
   - **Key Features:**
     - Skill-matched technician radar (EPA HVAC cert, Master Plumber, High-Voltage Electrical).
     - Customer pre-dispatch photo/video upload of the leaking pipe, breaker panel, or AC unit.
     - On-site digital parts, voltage/pressure, and safety inspection checklists.
     - Before-and-after repair photo gallery, digital warranty signature, and on-site payment before the van leaves the driveway.

4. **Patrol OS (`vsl-security-patrol.mp4`) — Private Security, Guard Tour & Mobile Alarm Response**
   - **Problem Solved:** Unverified night guard rounds, handwritten paper clipboards filled out at the end of a shift, zero liability proof, and slow alarm response times that cost security agencies commercial contracts.
   - **Key Features:**
     - Geofenced NFC and GPS checkpoint verification across commercial plazas, marinas, and residential estates.
     - Live 360° mobile patrol SUV radar for rapid 40-second alarm dispatch.
     - Timestamped incident dossiers with locked GPS coordinates, photo evidence, and audio notes.
     - Transparent client verification portals and automated monthly retainer billing.

5. **Detailers OS (`vsl-mobile-detailing.mp4`) — Mobile Auto Detailing, Ceramic Coating & Fleet Wash**
   - **Problem Solved:** Losing 90 minutes a day driving across opposite ends of the island between unclustered appointments, \$250 empty slots from last-minute no-shows, and arriving on-site without water/power hookup confirmation.
   - **Key Features:**
     - Neighborhood-clustered mobile van scheduling on the live Mapbox radar.
     - Upfront vehicle size selection, water/power access confirmation, and mandatory deposit lock.
     - High-gloss before-and-after ceramic coating photo sign-off.
     - Curbside payment, 1-tap 20% tip prompt, and automated 30-day maintenance wash rebooking.

6. **Freight OS (`vsl-commercial-logistics.mp4`) — B2B Freight, Port Hauling & Commercial Distribution**
   - **Problem Solved:** Lost carbon-copy paper delivery notes causing 45-day distributor payment holds, disputed pallet counts at loading docks, and blind port-to-warehouse routing causing demurrage fees.
   - **Key Features:**
     - Multi-stop commercial manifest and tonnage route optimization from port depot to warehouse/receiver.
     - Live heavy-fleet Mapbox radar tracking box trucks and tractor-trailers across 15 km rings.
     - Digital **Bill of Lading (BOL)** with pallet count verification, temperature logs, dockside photos, and glass-screen receiver signature.
     - Instant digital Proof of Delivery (POD) that triggers accounting ledger invoices and **CariProof** volume verification in seconds.

---

### Pillar 4: CBPay, CariPass, CariSplit POS & CariProof (`regional payment plan`)
- **What It Is:** The financial settlement, automated profit-splitting, and credit-underwriting backbone connecting consumers, merchants, field crews, and Credit Unions across CARICOM and international markets.
- **Three Core Financial Products Inside CBPay:**
  1. **CariPass (1:1 Pegged Digital Wallet):**
     - Local currency digital wallet (`1 CariPass = 1.00 BBD` locally, with multi-currency support across `GYD`, `JMD`, `TTD`, `USD`, `GBP`).
     - **\$0 Wallet-to-Wallet Fees** for consumers paying merchants or tipping drivers via QR scan or 1-tap checkout.
  2. **CariSplit POS (Automated 60/40 Split Terminal):**
     - Every sale at the counter or in the field is automatically split at settlement:
       - **60% Operations Rail:** Immediately available for inventory restocking, fuel, and crew/rider payouts.
       - **40% Owner Profit Vault:** Automatically ring-fenced for owner profit, tax reserves, and Credit Union loan servicing.
  3. **CariProof (Cryptographic Income Passport & Credit Score `0–900`):**
     - Solves the #1 barrier facing Caribbean MSMEs, sole traders, and gig drivers: **unverified cash income rejected by traditional banks**.
     - Every settled transaction on **Businesses OS** and **Dispatch OS** is cryptographically hashed into a tamper-proof **CariProof Income Passport** with a live underwriting score (e.g., **842 / 900**).
     - Generates a 1-click **Credit Union Cap. 317 Loan Dossier** (compliant with the Co-operative Societies Act Cap. 317) and Sovereign Grant audit package, unlocking working-capital and equipment microloans (e.g., **\$32,500 BBD**) based on real verified cashflow.

---

## 4. Multi-Country & International Trade Corridors

- **Phase 1 Anchor Market:** **Barbados (`BBD`)**
- **Phase 2 CARICOM Expansion Corridors:**
  - **Guyana (`GYD`)**
  - **Jamaica (`JMD`)**
  - **Trinidad & Tobago (`TTD`)**
- **Phase 3 Global Diaspora & Export Corridors:**
  - **United States (`USD`)**
  - **United Kingdom (`GBP`)**
- **How Cross-Border Scaling Works:** A merchant or fleet operator on **Businesses OS** / **Dispatch OS** can open a second branch in another CARICOM island or accept international diaspora bookings and B2B export orders in `USD` and `GBP` without changing software platforms.

---

## 5. Summary Table: Video File-to-Product Mapping

| Video Filename | Script Filename | Product / Platform Covered | Duration |
| :--- | :--- | :--- | :--- |
| `ecosystem-master-infomercial.mp4` | `ecosystem-master-infomercial.txt` | **Full Suite:** CARICOM Business Hub + CARI AI + Businesses OS + Dispatch OS (6 Brands) + CBPay / CariSplit / CariProof + 6-Currency Global Scale | `93.8s` |
| `service-dispatch-master-walkthrough.mp4` | `service-dispatch-master-walkthrough.txt` | **Dispatch OS Master Engine:** 1 Codebase powering 6 Industry OS Brands + 3 Live Surfaces + 1-Click Credentials | `52.2s` |
| `vsl-auto-rescue.mp4` | `vsl-auto-rescue.txt` | **AutoRescue OS:** 24/7 Roadside Assistance, Highway GPS Lock, 4-Corner Pre-Tow Photos & Towing Radar | `42.9s` |
| `vsl-food-delivery.mp4` | `vsl-food-delivery.txt` | **Delivery OS:** 0% Commission Restaurant, Grocery & Courier Multi-Drop Radar + Doorstep Photo Proof | `40.3s` |
| `vsl-hvac-trades.mp4` | `vsl-hvac-trades.txt` | **FieldTrade OS:** Skill-Matched HVAC, Plumbing & Electrical Radar + Safety Checklists & On-Site Pay | `43.5s` |
| `vsl-security-patrol.mp4` | `vsl-security-patrol.txt` | **Patrol OS:** Private Security, Geofenced NFC/GPS Guard Checkpoints, Incident Dossiers & Alarm Radar | `38.8s` |
| `vsl-mobile-detailing.mp4` | `vsl-mobile-detailing.txt` | **Detailers OS:** Neighborhood-Clustered Mobile Auto Detailing, Upfront Deposits & Before/After Gallery | `37.3s` |
| `vsl-commercial-logistics.mp4` | `vsl-commercial-logistics.txt` | **Freight OS:** B2B Port-to-Warehouse Fleet Radar, Multi-Stop Manifests & Digital Bill of Lading (BOL) | `39.7s` |
