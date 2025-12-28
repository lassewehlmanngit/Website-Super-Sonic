export interface LeadMagnet {
  id: string;
  filename: string;
  headline: string;
  subtext: string;
  checklistItems: string[];
  cta: string;
  content: string;
}

export const LEAD_MAGNETS: Record<string, LeadMagnet> = {
  'mvp-protocol': {
    id: 'mvp-checklist',
    headline: "Don't burn budget on a bad MVP.",
    subtext: "Most apps fail because they build too much, too soon. Get the checklist used by YC founders.",
    list: [
      "The 72-Hour MVP Feature Limit",
      "Technical Debt vs. Velocity Tradeoff",
      "Investor Pitch Deck Template"
    ],
    checklistItems: [
        "The 72-Hour MVP Feature Limit",
        "Technical Debt vs. Velocity Tradeoff",
        "Investor Pitch Deck Template"
    ],
    cta: "Send MVP Checklist",
    filename: "SuperSonic_MVP_Protocol.txt",
    content: `THE SUPERSONIC PROTOCOL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
We do not deal in "best practices," which are often just the average of everyone else's mediocrity. We deal in proven patterns—data-backed methodologies derived from Y-Combinator successes and quantitative market analysis.

This document serves as the operating manual for App Founders who need to ship before they starve.

PART I: THE MVP CHECKLIST
==================================================

1. THE 72-HOUR FEATURE LIMIT
--------------------------------------------------
In software engineering, complexity scales exponentially. To counteract the "Cone of Uncertainty," we impose a draconian constraint: **The 72-Hour Rule**.

> Any single feature requiring more than 72 hours (3 engineering days) to implement in its viable state is effectively "vaporware" for V1. It must be cut, simplified, or deferred. [2]

THE CUT CLASSIFICATION MATRIX:

A) Authentication
   - Choice: Social Login (Google/FB) vs. Custom Email/Pass
   - VERDICT: CUT CUSTOM.
   - Engineering Logic: Building a robust custom auth system (hashing, security, 2FA) takes weeks. Implementing Firebase/Auth0 takes <4 hours. You save >100 dev hours. [4]

B) Payments
   - Choice: Custom Checkout vs. Hosted Page (Stripe)
   - VERDICT: CUT CUSTOM.
   - Engineering Logic: Custom checkout requires PCI compliance and complex state management. Stripe Checkout takes <72h and converts just as well for V1. [5]

C) Admin Dashboard
   - Choice: Custom Panel vs. SQL/No-Code
   - VERDICT: CUT CUSTOM.
   - Engineering Logic: Founders obsess over "seeing" data, but users never see the admin panel. Use Retool or raw SQL. Don't waste V1 cycles on internal tools. [6]

D) Onboarding
   - Choice: Multi-step "Tour" vs. Simple Video
   - VERDICT: CUT TOUR.
   - Engineering Logic: Coding interactive "coach marks" is fragile. V1 users are high-intent. Use a simple embedded Loom video. [8]

2. TECHNICAL DEBT VS. VELOCITY
--------------------------------------------------
Tech Debt is not a mistake; it is leverage. You take on debt to fuel velocity.

THE VELOCITY EQUATION:
Velocity (V) = Rate of user-facing value delivery.
Debt (D) = Compounding drag on velocity.

STRATEGY BY STAGE:
1. Prototype (Pre-PMF): "Quick & Dirty". Monolithic. Hardcoded variables. Speed is the only currency. [13]
2. Beta (Validation): "Managed Debt". Separate FE/BE. Test only core logic.
3. Scale (Post-PMF): "Robust". Microservices. Strict Types. Reliability becomes a feature. [15]

3. THE "ANTI-PITCH" DECK: 5 SLIDES
--------------------------------------------------
Investors spend ~3m 44s on a deck. Cut the fluff. [17]

SLIDE 1: THE PROBLEM (P.A.I.N. Framework)
   - Precise, Acute, Intense, Numerous.
   - "Finance teams spend 12h/week reconciling receipts, costing firms $45k/year." [18]

SLIDE 2: THE SOLUTION (Value Delta)
   - The mathematical efficiency gain.
   - "Reduces processing time from 4h to 10m (24x gain)." [18]

SLIDE 3: TRACTION (The Growth Vector)
   - Investors look for rate of change.
   - YC Standard: 10% Week-over-Week growth. [22]

SLIDE 4: THE MARKET (Bottom-Up TAM)
   - TAM = (Total Target Users) * (Annual Contract Value).
   - "240k stores * $3k ACV = $720M Opportunity." [24]

SLIDE 5: THE TEAM (Founder-Market Fit)
   - Specific technical achievements.
   - "CTO scaled infra to 10M users at Uber." [27]

REFERENCES
--------------------------------------------------
[2] "What Features Should You Prioritize?" - iSyncEvolution
[4] "How to Build an MVP App That Attracts Investors" - Lovable
[5] "How Much Does a B2B MVP Really Cost?" - Ptolemay
[6] "How I decide what features to cut" - Reddit/SideProject
[8] "Minimum Viable Product (MVP): What Is It" - Reforge
[13] "Technical Debt vs. Feature Development" - Metamindz
[15] "What Is Technical Debt?" - Full Scale
[17] "Pitch Deck Traction Slide" - Qubit Capital
[18] "How to Build the Best YC Pitch Deck" - Leland
[22] "10% WoW Traction Growth" - Reddit/Startups
[24] "TAM, SAM & SOM" - Antler
[27] "Guide to Building a Seed Round Pitch Deck" - Visible.vc

--
SuperSonic Engineering
Moves fast and builds things that work.`
  },
  'pricing-guide': {
    id: 'pricing-guide',
    headline: "Unsure about the investment?",
    subtext: "High-performance design is an asset, not a cost. See the math behind the pricing.",
    list: [
      "Transparent Pricing Breakdown",
      "ROI Calculator (Excel Sheet)",
      "Freelance vs. Agency Comparison"
    ],
    checklistItems: [
        "Transparent Pricing Breakdown",
        "ROI Calculator (Excel Sheet)",
        "Freelance vs. Agency Comparison"
    ],
    cta: "Get Pricing Guide",
    filename: "SuperSonic_Pricing_ROI_Guide.txt",
    content: `THE SUPERSONIC PROTOCOL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
A website is not a digital brochure. It is a capital asset—a machine designed to process traffic and output revenue. The "cheapest" website is often the most expensive liability a business can own.

PART II: THE PRICING & ROI GUIDE
==================================================

1. THE "HIDDEN COST" EQUATION
--------------------------------------------------
Business owners fixate on Principal Cost (P) but ignore Lost Revenue (L).

True Cost (C_total) = Principal + (Operational Cost * Time) + Lost Revenue

THE CALCULATION OF LOSS:
Let's model a business with 10k visitors/mo and $100 LTV.

Scenario A: The $500 DIY Site (Wix/Template)
- Load Time: 5 seconds
- Conversion Rate: ~1.0% [29]
- Annual Revenue: $120,000

Scenario B: The $10,000 SuperSonic Build
- Load Time: <1 second
- Conversion Rate: ~3.0% (3x lift due to speed) [29]
- Annual Revenue: $360,000

RESULT: The "cheap" site costs you $240,000/year in lost revenue. The $10k investment pays for itself in <15 days.

2. SOURCING MATRIX: FREELANCER VS. AGENCY VS. IN-HOUSE
--------------------------------------------------
A) FREELANCER (Upwork/Toptal)
   - Cost: Low ($50-$100/hr) [35]
   - Risk: Critical. "Bus Factor" of 1. If they disappear, you are stuck. [33]
   - Quality: Variable. Often "spaghetti code" with no documentation.
   - Verdict: Good for small tasks (<$5k). Dangerous for core assets.

B) AGENCY (SuperSonic)
   - Cost: Medium-High ($100-$200/hr)
   - Risk: Low. You rent a system (Redundancy, QA, DevOps).
   - Quality: Standardized. IP and Repo are transferred to you.
   - Verdict: Best for mission-critical builds and scaling.

C) IN-HOUSE TEAM
   - Cost: High (Salaries + Benefits + 30% Overhead). [32]
   - Risk: Medium (Turnover).
   - Verdict: Only viable if software IS your product (SaaS).

3. INVESTMENT TIERS: WHAT BUDGET BUYS (2025 DATA)
--------------------------------------------------
$5,000 (THE VALIDATOR)
- Architecture: Static / Template (WordPress/Webflow).
- Performance: Standard (2-4s load).
- Ideal For: Local business, Portfolios.

$15,000 (THE GROWTH ENGINE)
- Architecture: Headless / Custom (Next.js + Sanity CMS). API-first.
- Performance: Blazing (<1s load). Global CDN (Vercel).
- Security: High (Static builds = no DB to hack).
- Ideal For: B2B Service, Funded Startups, Media. [37]

$50,000+ (THE PLATFORM)
- Architecture: Web App. Full-stack React/Node. Custom DB.
- Performance: Enterprise. Auto-scaling.
- Ideal For: SaaS, Large E-commerce, FinTech.

REFERENCES
--------------------------------------------------
[29] "Website Load Time & Speed Statistics" - WP Rocket
[32] "Design Agency vs. Freelancer vs. In-House" - Cieden
[33] "The True Cost of Hiring a Freelancer" - Abbacus Tech
[35] "Laravel Development Cost in 2025" - KrishaWeb
[37] "How Much Does a Website Cost in 2025?" - Peaktwo

--
SuperSonic Engineering
Moves fast and builds things that work.`
  },
  'modern-guide': {
    id: 'modern-guide',
    headline: "STOP LOSING MONEY.",
    subtext: "Your website has holes. We found 7 things modern sites use to win. Read the simple guide.",
    list: [
      "Smart Popups: Don't annoy people. Help them before they leave.",
      "Calculators: Let users answer 'How much?' instantly.",
      "Service Tags: Hidden code that tells Google what you sell.",
      "Free Tools: Give a free gift. People will trust you.",
      "Fast Speed: Load in 1 second. Slow sites lose buyers.",
      "Visual Edits: Change text yourself. No coding needed.",
      "Ownership: Don't rent. Own your code forever."
    ],
    checklistItems: [
        "Smart Popups: Don't annoy people. Help them before they leave.",
        "Calculators: Let users answer 'How much?' instantly.",
        "Service Tags: Hidden code that tells Google what you sell.",
        "Free Tools: Give a free gift. People will trust you.",
        "Fast Speed: Load in 1 second. Slow sites lose buyers.",
        "Visual Edits: Change text yourself. No coding needed.",
        "Ownership: Don't rent. Own your code forever."
    ],
    cta: "Send Me the Guide",
    filename: "SuperSonic_Modern_Web_Laws.txt",
    content: `THE SUPERSONIC PROTOCOL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
The web has evolved. The algorithms that govern search (Google) and attention (Users) have become more sophisticated. To compete, you must adhere to the 7 Laws of Modern Web Development.

PART III: MODERN WEB STRATEGY
==================================================

LAW 1: SMART POPUPS (Behavioral Engineering)
- Theory: "In-your-face" popups destroy trust.
- Mechanism: Exit Intent. We track mouse velocity vectors. Popups only trigger when the user signals intent to leave (the "kill zone"). [40]
- Data: Contextual popups hit 10-20% conversion rates (vs 3% standard). [40]

LAW 2: CALCULATORS (The "Give to Get" Model)
- Theory: Static "Contact Us" forms are friction.
- Mechanism: Interactive Calculators. Give the user an answer ("How much?") before asking for an email.
- Data: Calculators convert at 30-40% vs. 1-2% for static forms. [42]

LAW 3: SERVICE TAGS (JSON-LD / Semantic SEO)
- Theory: Google is a robot. It parses data, not text.
- Mechanism: "Hidden code" (JSON-LD Schema) that explicitly tells Google "We sell X" and "We serve Y area". [44]
- Result: Rich Snippets (Stars, FAQ) in search results -> Higher CTR.

LAW 4: FREE TOOLS (Engineering as Marketing)
- Theory: Content is saturated. Utility wins.
- Mechanism: Build a micro-tool (e.g., "Free Meta Tag Generator").
- Result: Ranks for high-intent keywords and establishes engineering authority. HubSpot's "Website Grader" is the canonical example. [49]

LAW 5: FAST SPEED (The 1-Second Threshold)
- Theory: Latency is lost revenue.
- Data: 
  * 1s delay = -7% conversions. [31]
  * <1s load = 3x conversion lift. [29]
  * 53% of mobile users abandon sites taking >3s. [31]
- Protocol: Use Next.js/Astro (SSG) and WebP images.

LAW 6: VISUAL EDITS (Headless CMS vs. Page Builders)
- Theory: Monolithic CMS (WordPress+Elementor) couples content with code, causing "spaghetti code" and security holes. [53]
- Mechanism: Headless Architecture. Decouple Content (Sanity) from Code (React).
- Benefit: Marketing gets a Visual Editor. Engineering gets clean, secure code.

LAW 7: OWNERSHIP (Repo vs. Rent)
- Theory: Renting on Wix/Squarespace introduces Platform Risk.
- Risk: Vendor lock-in. You cannot export your logic. [56]
- Protocol: 
  1. OWN THE REPO (GitHub/GitLab).
  2. Contract must assign IP to you.
  3. Portability: Code is the asset. Hosting is a commodity.

REFERENCES
--------------------------------------------------
[29] "Website Load Time Statistics" - WP Rocket
[31] "Website Load Time Statistics in 2025" - Kanuka Digital
[40] "20+ Popup Statistics 2025" - Wisepops
[42] "Online Form Statistics" - FormStory
[44] "Intro to Structured Data" - Google Search Central
[49] "11 Best Microsite Examples" - HubSpot
[53] "Headless CMS vs Headless WordPress" - Strapi
[56] "Transferring Your Wix Domain" - Wix Help Center

--
SuperSonic Engineering
Moves fast and builds things that work.`
  }
};
