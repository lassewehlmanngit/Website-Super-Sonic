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
The digital landscape is not a playground for creative exploration; it is a hostile environment governed by algorithmic ruthlessness and unforgiving economics. In this ecosystem, 90% of startups fail, not because their vision was flawed, but because their execution was inefficient. They ran out of time, they ran out of money, or they built a product that the market rejected.

This document serves as the operating manual for SuperSonic, a high-end engineering consultancy that rejects the "move fast and break things" ethos in favor of a more disciplined approach: Move fast and build things that work.

We do not deal in "best practices," which are often just the average of everyone else's mediocrity. We deal in proven patterns—data-backed methodologies derived from Y-Combinator successes, high-frequency engineering management, and quantitative market analysis.

PART I: THE MVP CHECKLIST
==================================================
TARGET: APP FOUNDERS & TECHNICAL LEADS

The Minimum Viable Product (MVP) is the most misunderstood concept in Silicon Valley. It is not a "lite" version of your product. It is not a buggy prototype. It is a scientific instrument designed to validate a core hypothesis with the minimum expenditure of kinetic energy.

The greatest threat to an early-stage startup is Scope Creep—the silent killer that bloats timelines, drains budgets, and delays the critical feedback loop required for Product-Market Fit (PMF). The following framework is designed to eliminate decision paralysis and force binary outcomes: Ship or Die.

1. THE 72-HOUR FEATURE LIMIT
--------------------------------------------------
In software engineering, complexity does not scale linearly; it scales exponentially. A feature that "feels" like it should take 5 days often takes 15 due to unforeseen dependencies, integration friction, and testing overhead. To counteract the "Cone of Uncertainty" inherent in estimation, SuperSonic imposes a draconian constraint on V1 development: The 72-Hour Rule.

THE ENGINEERING LOGIC:
Any single feature requiring more than 72 hours (3 engineering days) to implement in its viable state is effectively "vaporware" for the purpose of an MVP. It must be cut, simplified, or deferred.

Why 72 hours?
1. Cognitive Load: A 72-hour task can be held entirely in a developer's working memory. Once a task exceeds this, context switching costs incur, and bug rates spike.
2. Risk Mitigation: If a 72-hour feature fails or is cut, you have lost 3 days. If a 3-week feature fails, you have lost a month of runway.
3. Atomic Value: If a feature cannot be reduced to a 3-day build, it is likely too complex for an initial user to understand or value.

THE CUT CLASSIFICATION MATRIX:

A) Authentication
   - Choice: Social Login (Google/FB) vs. Custom Email/Pass
   - VERDICT: GOOD CUT.
   - Engineering Logic: Building a robust custom auth system (hashing, security, 2FA) takes weeks. Implementing Firebase/Auth0 takes <4 hours. You save >100 dev hours. [4]

B) Payments
   - Choice: Custom Checkout vs. Hosted Page (Stripe)
   - VERDICT: GOOD CUT.
   - Engineering Logic: Custom checkout requires PCI compliance and complex state management. Stripe Checkout takes <72h and converts just as well for V1. [5]

C) Admin Dashboard
   - Choice: Custom Panel vs. SQL/No-Code
   - VERDICT: GOOD CUT.
   - Engineering Logic: Founders obsess over "seeing" data, but users never see the admin panel. Use Retool or raw SQL. Don't waste V1 cycles on internal tools. [6]

D) Core Workflow
   - Choice: The "One Core Job" (e.g., Booking)
   - VERDICT: BAD CUT.
   - Engineering Logic: You cannot cut the primary utility. This is the hill you die on.

E) Onboarding
   - Choice: Multi-step "Tour" vs. Simple Video
   - VERDICT: GOOD CUT.
   - Engineering Logic: Coding interactive "coach marks" is fragile. V1 users are high-intent. Use a simple embedded Loom video. [8]

F) Settings
   - Choice: Dark Mode / Profile Customization
   - VERDICT: GOOD CUT.
   - Engineering Logic: These are "Vitamins," not "Painkillers." Build in V2. [9]

2. TECHNICAL DEBT VS. VELOCITY
--------------------------------------------------
Tech Debt is not a mistake; it is leverage. You take on debt to fuel velocity.

THE VELOCITY EQUATION:
Velocity (V) = Rate of user-facing value delivery.
Debt (D) = Compounding drag on velocity.

STRATEGY BY STAGE:
1. Prototype (Pre-PMF): "Quick & Dirty". Monolithic. Hardcoded variables. Speed is the only currency. [13]
2. Beta (Validation): "Managed Debt". Separate FE/BE. Test only core logic. Allocate 20% of sprint time to servicing debt.
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
   - Pre-Revenue: Use LOIs or Pilot Programs.

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
[9] "How to Define Your MVP's Core Features" - Designli
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
TARGET: BUSINESS OWNERS

1. THE "HIDDEN COST" EQUATION
--------------------------------------------------
Business owners fixate on Principal Cost (P) but ignore Lost Revenue (L).

True Cost (C_total) = Principal + (Operational Cost * Time) + Lost Revenue

THE CALCULATION OF LOSS:
Let's model a business with 10k visitors/mo and $100 LTV.

Scenario A: The $500 DIY Site (Wix/Template)
- Load Time: 5 seconds
- Conversion Rate: ~1.0% [29]
- Annual Revenue: $10,000 * 1.0% * $100 * 12 = $120,000

Scenario B: The $10,000 SuperSonic Build
- Load Time: <1 second
- Conversion Rate: ~3.0% (3x lift due to speed) [29]
- Annual Revenue: $10,000 * 3.0% * $100 * 12 = $360,000

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
- Security: Basic. Vulnerable to plugins.
- Ideal For: Local business, Portfolios.

$15,000 (THE GROWTH ENGINE)
- Architecture: Headless / Custom (Next.js + Sanity CMS). API-first.
- Performance: Blazing (<1s load). Global CDN (Vercel).
- Security: High (Static builds = no DB to hack).
- Ideal For: B2B Service, Funded Startups, Media. [37]

$50,000+ (THE PLATFORM)
- Architecture: Web App. Full-stack React/Node. Custom DB.
- Performance: Enterprise. Auto-scaling.
- Security: Bank-Grade (SOC2 ready).
- Ideal For: SaaS, Large E-commerce, FinTech.

REFERENCES
--------------------------------------------------
[29] "Website Load Time & Speed Statistics" - WP Rocket
[31] "Website Load Time Statistics in 2025" - Kanuka Digital
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
TARGET: GENERAL LEADS

LAW 1: SMART POPUPS (Behavioral Engineering)
- Theory: "In-your-face" popups destroy trust.
- Mechanism: Exit Intent. We track mouse velocity vectors. Popups only trigger when the user signals intent to leave (the "kill zone"). [40]
- Data: Contextual popups hit 10-20% conversion rates (vs 3% standard). [40]
- Protocol: Do not ask for email immediately. Offer value first. Use logic gates.

LAW 2: CALCULATORS (The "Give to Get" Model)
- Theory: Static "Contact Us" forms are friction.
- Mechanism: Interactive Calculators. Give the user an answer ("How much?") before asking for an email.
- Data: Calculators convert at 30-40% vs. 1-2% for static forms. [42]
- Protocol: Replace "Request Quote" with "Instant Price Estimator".

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
- Protocol: Use Next.js/Astro (SSG) and WebP images. Target <100ms TTFB.

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

CONCLUSION: THE ENGINEERING IMPERATIVE
==================================================
The strategies outlined in this report—MVP discipline, rigorous financial modeling, and modern technical architecture—are not merely "options." They are the baseline requirements for survival in a saturated digital market.

At SuperSonic, we do not sell "websites" or "apps." We sell engineered outcomes. We trade in velocity, efficiency, and ownership. By adhering to the 72-hour rule, calculating the true ROI of infrastructure, and respecting the laws of the modern web, we transition from guessing to knowing.

Execute the protocol.

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

export const LEAD_MAGNETS_DE: Record<string, LeadMagnet> = {
  'mvp-protocol': {
    id: 'mvp-checklist',
    headline: "Verbrenne kein Budget für ein schlechtes MVP.",
    subtext: "Die meisten Apps scheitern, weil zu viel und zu früh gebaut wird. Hol dir die Checkliste, die YC-Gründer nutzen.",
    checklistItems: [
        "Das 72-Stunden MVP Feature Limit",
        "Technical Debt vs. Velocity Tradeoff",
        "Investor Pitch Deck Vorlage"
    ],
    cta: "MVP Checkliste Senden",
    filename: "SuperSonic_MVP_Protocol_DE.txt",
    content: `DAS SUPERSONIC PROTOKOLL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
Die digitale Landschaft ist kein Spielplatz für kreative Entdeckungen; sie ist eine feindliche Umgebung, beherrscht von algorithmischer Härte und unnachgiebiger Ökonomie. In diesem Ökosystem scheitern 90% der Startups nicht, weil ihre Vision fehlerhaft war, sondern weil ihre Ausführung ineffizient war. Ihnen ging die Zeit aus, das Geld aus, oder sie bauten ein Produkt, das der Markt ablehnte.

Dieses Dokument dient als Betriebsanleitung für SuperSonic, eine High-End-Engineering-Beratung, die das "Move Fast and Break Things"-Ethos ablehnt zugunsten eines disziplinierteren Ansatzes: Move Fast and Build Things That Work.

Wir handeln nicht mit "Best Practices", die oft nur der Durchschnitt der Mittelmäßigkeit aller anderen sind. Wir handeln mit bewährten Mustern – datengestützten Methodologien, abgeleitet von Y-Combinator-Erfolgen, hochfrequentem Engineering-Management und quantitativer Marktanalyse.

TEIL I: DIE MVP CHECKLISTE
==================================================
ZIELGRUPPE: APP-GRÜNDER & TECHNISCHE LEITER

Das Minimum Viable Product (MVP) ist das am meisten missverstandene Konzept im Silicon Valley. Es ist keine "Lite"-Version Ihres Produkts. Es ist kein fehlerhafter Prototyp. Es ist ein wissenschaftliches Instrument, entwickelt um eine Kernhypothese mit minimalem Aufwand an kinetischer Energie zu validieren.

Die größte Bedrohung für ein Startup in der Frühphase ist Scope Creep – der stille Killer, der Zeitpläne aufbläht, Budgets leert und die kritische Feedback-Schleife verzögert, die für den Product-Market Fit (PMF) erforderlich ist. Das folgende Framework ist darauf ausgelegt, Entscheidungsparalyse zu eliminieren und binäre Ergebnisse zu erzwingen: Ship or Die.

1. DAS 72-STUNDEN FEATURE LIMIT
--------------------------------------------------
In der Softwareentwicklung skaliert Komplexität nicht linear; sie skaliert exponentiell. Ein Feature, das sich "anfühlt", als sollte es 5 Tage dauern, dauert oft 15 aufgrund unvorhergesehener Abhängigkeiten, Integrationsreibung und Testaufwand. Um dem "Cone of Uncertainty" bei Schätzungen entgegenzuwirken, verhängt SuperSonic eine drakonische Einschränkung für die V1-Entwicklung: Die 72-Stunden-Regel.

DIE ENGINEERING-LOGIK:
Jedes einzelne Feature, das mehr als 72 Stunden (3 Engineering-Tage) benötigt, um in seinem funktionsfähigen Zustand implementiert zu werden, ist effektiv "Vaporware" für den Zweck eines MVP. Es muss gestrichen, vereinfacht oder verschoben werden.

Warum 72 Stunden?
1. Kognitive Last: Eine 72-Stunden-Aufgabe kann vollständig im Arbeitsgedächtnis eines Entwicklers gehalten werden. Sobald eine Aufgabe dies überschreitet, fallen Kosten für Kontextwechsel an, und die Fehlerraten steigen sprunghaft an.
2. Risikominderung: Wenn ein 72-Stunden-Feature fehlschlägt oder gestrichen wird, haben Sie 3 Tage verloren. Wenn ein 3-Wochen-Feature fehlschlägt, haben Sie einen Monat Runway verloren.
3. Atomarer Wert: Wenn ein Feature nicht auf einen 3-Tage-Build reduziert werden kann, ist es wahrscheinlich zu komplex, als dass ein initialer Benutzer es verstehen oder wertschätzen könnte.

DIE CUT CLASSIFICATION MATRIX:

A) Authentifizierung
   - Wahl: Social Login (Google/FB) vs. Benutzerdefinierte E-Mail/Passwort
   - URTEIL: GUTER CUT.
   - Engineering-Logik: Der Bau eines robusten benutzerdefinierten Auth-Systems (Hashing, Sicherheit, 2FA) dauert Wochen. Die Implementierung von Firebase/Auth0 dauert <4 Stunden. Sie sparen >100 Entwicklerstunden. [4]

B) Zahlungen
   - Wahl: Benutzerdefinierter Checkout vs. Gehostete Seite (Stripe)
   - URTEIL: GUTER CUT.
   - Engineering-Logik: Benutzerdefinierter Checkout erfordert PCI-Compliance und komplexes Zustandsmanagement. Stripe Checkout dauert <72h und konvertiert für V1 genauso gut. [5]

C) Admin Dashboard
   - Wahl: Benutzerdefiniertes Panel vs. SQL/No-Code
   - URTEIL: GUTER CUT.
   - Engineering-Logik: Gründer sind besessen davon, Daten zu "sehen", aber Benutzer sehen das Admin-Panel nie. Verwenden Sie Retool oder rohes SQL. Verschwenden Sie keine V1-Zyklen für interne Tools. [6]

D) Kern-Workflow
   - Wahl: Der "Eine Kern-Job" (z.B. Buchung)
   - URTEIL: SCHLECHTER CUT.
   - Engineering-Logik: Sie können den primären Nutzen nicht streichen. Dies ist der Hügel, auf dem Sie sterben.

E) Onboarding
   - Wahl: Mehrstufige "Tour" vs. Einfaches Video
   - URTEIL: GUTER CUT.
   - Engineering-Logik: Das Codieren interaktiver "Coach Marks" ist fragil. V1-Benutzer haben hohe Absichten. Verwenden Sie ein einfaches eingebettetes Loom-Video. [8]

F) Einstellungen
   - Wahl: Dark Mode / Profilanpassung
   - URTEIL: GUTER CUT.
   - Engineering-Logik: Dies sind "Vitamine", keine "Schmerzmittel". Bauen Sie dies in V2. [9]

2. TECHNICAL DEBT VS. VELOCITY
--------------------------------------------------
Tech Debt ist kein Fehler; es ist ein Hebel. Sie nehmen Schulden auf, um Geschwindigkeit zu tanken.

DIE GESCHWINDIGKEITS-GLEICHUNG:
Velocity (V) = Rate der nutzerorientierten Wertlieferung.
Debt (D) = Zinseszinseffekt, der die Geschwindigkeit bremst.

STRATEGIE NACH STUFE:
1. Prototyp (Pre-PMF): "Quick & Dirty". Monolithisch. Hartcodierte Variablen. Geschwindigkeit ist die einzige Währung. [13]
2. Beta (Validierung): "Managed Debt". Trennung FE/BE. Testen Sie nur die Kernlogik. Allokieren Sie 20% der Sprintzeit für den Schuldendienst.
3. Skalierung (Post-PMF): "Robust". Microservices. Strenge Typisierung. Zuverlässigkeit wird zum Feature. [15]

3. DAS "ANTI-PITCH" DECK: 5 FOLIEN
--------------------------------------------------
Investoren verbringen ~3m 44s mit einem Deck. Streichen Sie das Füllmaterial. [17]

FOLIE 1: DAS PROBLEM (P.A.I.N. Framework)
   - Präzise, Akut, Intensiv, Zahlreich.
   - "Finanzteams verbringen 12h/Woche mit dem manuellen Abgleich von Belegen, was Firmen 45.000 $/Jahr kostet." [18]

FOLIE 2: DIE LÖSUNG (Value Delta)
   - Der mathematische Effizienzgewinn.
   - "Reduziert die Bearbeitungszeit von 4h auf 10m (24x Gewinn)." [18]

FOLIE 3: TRACTION (Der Wachstumsvektor)
   - Investoren suchen nach der Änderungsrate.
   - YC-Standard: 10% Wachstum Woche für Woche. [22]
   - Pre-Revenue: Verwenden Sie LOIs oder Pilotprogramme.

FOLIE 4: DER MARKT (Bottom-Up TAM)
   - TAM = (Gesamtzahl der Zielbenutzer) * (Jährlicher Vertragswert).
   - "240k Geschäfte * 3k $ ACV = 720 Mio. $ Chance." [24]

FOLIE 5: DAS TEAM (Founder-Market Fit)
   - Spezifische technische Errungenschaften.
   - "CTO skalierte Infra auf 10 Mio. Nutzer bei Uber." [27]

REFERENZEN
--------------------------------------------------
[2] "What Features Should You Prioritize?" - iSyncEvolution
[4] "How to Build an MVP App That Attracts Investors" - Lovable
[5] "How Much Does a B2B MVP Really Cost?" - Ptolemay
[6] "How I decide what features to cut" - Reddit/SideProject
[8] "Minimum Viable Product (MVP): What Is It" - Reforge
[9] "How to Define Your MVP's Core Features" - Designli
[13] "Technical Debt vs. Feature Development" - Metamindz
[15] "What Is Technical Debt?" - Full Scale
[17] "Pitch Deck Traction Slide" - Qubit Capital
[18] "How to Build the Best YC Pitch Deck" - Leland
[22] "10% WoW Traction Growth" - Reddit/Startups
[24] "TAM, SAM & SOM" - Antler
[27] "Guide to Building a Seed Round Pitch Deck" - Visible.vc

--
SuperSonic Engineering
Bewegt sich schnell und baut Dinge, die funktionieren.`
  },
  'pricing-guide': {
    id: 'pricing-guide',
    headline: "Unsicher über die Investition?",
    subtext: "High-Performance Design ist ein Vermögenswert, keine Kosten. Sehen Sie die Mathematik hinter der Preisgestaltung.",
    checklistItems: [
        "Transparente Preisaufschlüsselung",
        "ROI-Rechner (Excel-Tabelle)",
        "Vergleich Freelancer vs. Agentur"
    ],
    cta: "Preis-Guide Senden",
    filename: "SuperSonic_Pricing_ROI_Guide_DE.txt",
    content: `DAS SUPERSONIC PROTOKOLL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
Eine Website ist keine digitale Broschüre. Sie ist ein Kapitalanlagegut – eine Maschine, die dazu entwickelt wurde, Traffic zu verarbeiten und Umsatz zu generieren. Die "billigste" Website ist oft die teuerste Verbindlichkeit, die ein Unternehmen besitzen kann.

TEIL II: DER PREIS & ROI GUIDE
==================================================
ZIELGRUPPE: UNTERNEHMENSINHABER

1. DIE "VERSTECKTE KOSTEN" GLEICHUNG
--------------------------------------------------
Unternehmensinhaber fixieren sich auf die Anschaffungskosten (P), ignorieren aber den entgangenen Umsatz (L).

Wahre Kosten (C_total) = Anschaffung + (Betriebskosten * Zeit) + Entgangener Umsatz

DIE BERECHNUNG DES VERLUSTS:
Modellieren wir ein Unternehmen mit 10k Besuchern/Monat und 100 $ LTV.

Szenario A: Die 500 $ DIY-Seite (Wix/Template)
- Ladezeit: 5 Sekunden
- Konversionsrate: ~1,0% [29]
- Jahresumsatz: 10.000 * 1,0% * 100 $ * 12 = 120.000 $

Szenario B: Der 10.000 $ SuperSonic Build
- Ladezeit: <1 Sekunde
- Konversionsrate: ~3,0% (3x Anstieg durch Geschwindigkeit) [29]
- Jahresumsatz: 10.000 * 3,0% * 100 $ * 12 = 360.000 $

ERGEBNIS: Die "billige" Seite kostet Sie 240.000 $/Jahr an entgangenem Umsatz. Die 10k Investition macht sich in <15 Tagen bezahlt.

2. BESCHAFFUNGS-MATRIX: FREELANCER VS. AGENTUR VS. IN-HOUSE
--------------------------------------------------
A) FREELANCER (Upwork/Toptal)
   - Kosten: Niedrig (50-100 $/h) [35]
   - Risiko: Kritisch. "Bus-Faktor" von 1. Wenn sie verschwinden, stecken Sie fest. [33]
   - Qualität: Variabel. Oft "Spaghetti-Code" ohne Dokumentation.
   - Urteil: Gut für kleine Aufgaben (<5k $). Gefährlich für Kern-Assets.

B) AGENTUR (SuperSonic)
   - Kosten: Mittel-Hoch (100-200 $/h)
   - Risiko: Niedrig. Sie mieten ein System (Redundanz, QA, DevOps).
   - Qualität: Standardisiert. IP und Repo werden an Sie übertragen.
   - Urteil: Am besten für geschäftskritische Builds und Skalierung.

C) IN-HOUSE TEAM
   - Kosten: Hoch (Gehälter + Sozialleistungen + 30% Overhead). [32]
   - Risiko: Mittel (Fluktuation).
   - Urteil: Nur rentabel, wenn Software IHR Produkt ist (SaaS).

3. INVESTITIONS-STUFEN: WAS IHR BUDGET KAUFT (DATEN 2025)
--------------------------------------------------
5.000 $ (DER VALIDATOR)
- Architektur: Statisch / Template (WordPress/Webflow).
- Performance: Standard (2-4s Ladezeit).
- Sicherheit: Basis. Anfällig für Plugins.
- Ideal für: Lokale Unternehmen, Portfolios.

15.000 $ (DER WACHSTUMSMOTOR)
- Architektur: Headless / Custom (Next.js + Sanity CMS). API-first.
- Performance: Rasend schnell (<1s Ladezeit). Globales CDN (Vercel).
- Sicherheit: Hoch (Statische Builds = keine DB zum Hacken).
- Ideal für: B2B-Dienstleister, Finanzierte Startups, Medien. [37]

50.000 $+ (DIE PLATTFORM)
- Architektur: Web App. Full-Stack React/Node. Eigene DB.
- Performance: Enterprise. Auto-Scaling.
- Sicherheit: Banken-Niveau (SOC2 ready).
- Ideal für: SaaS, Großes E-Commerce, FinTech.

REFERENZEN
--------------------------------------------------
[29] "Website Load Time & Speed Statistics" - WP Rocket
[31] "Website Load Time Statistics in 2025" - Kanuka Digital
[32] "Design Agency vs. Freelancer vs. In-House" - Cieden
[33] "The True Cost of Hiring a Freelancer" - Abbacus Tech
[35] "Laravel Development Cost in 2025" - KrishaWeb
[37] "How Much Does a Website Cost in 2025?" - Peaktwo

--
SuperSonic Engineering
Bewegt sich schnell und baut Dinge, die funktionieren.`
  },
  'modern-guide': {
    id: 'modern-guide',
    headline: "HÖREN SIE AUF, GELD ZU VERLIEREN.",
    subtext: "Ihre Website hat Löcher. Wir haben 7 Dinge gefunden, die moderne Seiten nutzen, um zu gewinnen. Lesen Sie den einfachen Leitfaden.",
    checklistItems: [
        "Smart Popups: Nerven Sie niemanden. Helfen Sie, bevor sie gehen.",
        "Rechner: Lassen Sie Nutzer 'Wie viel?' sofort beantworten.",
        "Service Tags: Versteckter Code, der Google sagt, was Sie verkaufen.",
        "Kostenlose Tools: Geben Sie ein Geschenk. Menschen werden Ihnen vertrauen.",
        "Schnelle Geschwindigkeit: Laden in 1 Sekunde. Langsame Seiten verlieren Käufer.",
        "Visuelle Bearbeitung: Ändern Sie Text selbst. Kein Coding nötig.",
        "Eigentum: Mieten Sie nicht. Besitzen Sie Ihren Code für immer."
    ],
    cta: "Senden Sie mir den Guide",
    filename: "SuperSonic_Modern_Web_Laws_DE.txt",
    content: `DAS SUPERSONIC PROTOKOLL: ENGINEERING TRUST & VELOCITY
EXECUTIVE SUMMARY
==================================================
Das Web hat sich entwickelt. Die Algorithmen, die Suche (Google) und Aufmerksamkeit (Nutzer) steuern, sind ausgefeilter geworden. Um wettbewerbsfähig zu sein, müssen Sie die 7 Gesetze der modernen Webentwicklung einhalten.

TEIL III: MODERNE WEB-STRATEGIE
==================================================
ZIELGRUPPE: ALLGEMEINE LEADS

GESETZ 1: SMART POPUPS (Verhaltens-Engineering)
- Theorie: "In-your-face" Popups zerstören Vertrauen.
- Mechanismus: Exit Intent. Wir verfolgen Mausgeschwindigkeitsvektoren. Popups lösen nur aus, wenn der Benutzer die Absicht signalisiert, zu gehen (die "Kill-Zone"). [40]
- Daten: Kontextbezogene Popups erreichen 10-20% Konversionsraten (vs. 3% Standard). [40]
- Protokoll: Fragen Sie nicht sofort nach E-Mail. Bieten Sie erst Wert an. Nutzen Sie Logik-Gatter.

GESETZ 2: RECHNER (Das "Geben um zu Nehmen" Modell)
- Theorie: Statische "Kontaktieren Sie uns" Formulare sind Reibung.
- Mechanismus: Interaktive Rechner. Geben Sie dem Benutzer eine Antwort ("Wie viel?"), bevor Sie nach einer E-Mail fragen.
- Daten: Rechner konvertieren zu 30-40% vs. 1-2% bei statischen Formularen. [42]
- Protokoll: Ersetzen Sie "Angebot anfordern" durch "Sofort-Preis-Schätzer".

GESETZ 3: SERVICE TAGS (JSON-LD / Semantisches SEO)
- Theorie: Google ist ein Roboter. Es parst Daten, keinen Text.
- Mechanismus: "Versteckter Code" (JSON-LD Schema), der Google explizit sagt "Wir verkaufen X" und "Wir bedienen Gebiet Y". [44]
- Ergebnis: Rich Snippets (Sterne, FAQ) in Suchergebnissen -> Höhere CTR.

GESETZ 4: KOSTENLOSE TOOLS (Engineering als Marketing)
- Theorie: Inhalt ist gesättigt. Nutzen gewinnt.
- Mechanismus: Bauen Sie ein Mikro-Tool (z.B. "Kostenloser Meta Tag Generator").
- Ergebnis: Rankt für Keywords mit hoher Absicht und etabliert Engineering-Autorität. HubSpot's "Website Grader" ist das kanonische Beispiel. [49]

GESETZ 5: SCHNELLE GESCHWINDIGKEIT (Die 1-Sekunden-Schwelle)
- Theorie: Latenz ist entgangener Umsatz.
- Daten:
  * 1s Verzögerung = -7% Konversionen. [31]
  * <1s Ladezeit = 3x Konversions-Anstieg. [29]
  * 53% der mobilen Nutzer verlassen Seiten, die >3s laden. [31]
- Protokoll: Nutzen Sie Next.js/Astro (SSG) und WebP Bilder. Ziel <100ms TTFB.

GESETZ 6: VISUELLE BEARBEITUNG (Headless CMS vs. Page Builder)
- Theorie: Monolithische CMS (WordPress+Elementor) koppeln Inhalt mit Code, was "Spaghetti-Code" und Sicherheitslücken verursacht. [53]
- Mechanismus: Headless Architektur. Entkoppeln Sie Inhalt (Sanity) von Code (React).
- Vorteil: Marketing erhält einen visuellen Editor. Engineering erhält sauberen, sicheren Code.

GESETZ 7: EIGENTUM (Repo vs. Miete)
- Theorie: Mieten auf Wix/Squarespace führt Plattformrisiko ein.
- Risiko: Vendor Lock-in. Sie können Ihre Logik nicht exportieren. [56]
- Protokoll:
  1. BESITZEN SIE DAS REPO (GitHub/GitLab).
  2. Vertrag muss Ihnen das IP zuweisen.
  3. Portabilität: Code ist der Vermögenswert. Hosting ist eine Ware.

FAZIT: DER ENGINEERING-IMPERATIV
==================================================
Die in diesem Bericht skizzierten Strategien – MVP-Disziplin, strenge Finanzmodellierung und moderne technische Architektur – sind nicht bloß "Optionen". Sie sind die Grundvoraussetzungen für das Überleben in einem gesättigten digitalen Markt.

Bei SuperSonic verkaufen wir keine "Websites" oder "Apps". Wir verkaufen konstruierte Ergebnisse. Wir handeln mit Geschwindigkeit, Effizienz und Eigentum. Indem wir die 72-Stunden-Regel einhalten, den wahren ROI der Infrastruktur berechnen und die Gesetze des modernen Webs respektieren, gehen wir vom Raten zum Wissen über.

Führen Sie das Protokoll aus.

REFERENZEN
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
Bewegt sich schnell und baut Dinge, die funktionieren.`
  }
};
