# Developer Specification - Website Structure Changes

## Document Purpose
Technical specifications for structural changes to Super Sonic Prototypes website. Copy improvements are assumed complete. This document covers component additions, layout modifications, and new sections.

---

## Global Components (All Pages)

### 1. Trust Bar Component
**File:** `src/components/global/TrustBar.tsx`

**Location:** Below navigation, above page content (persistent on all pages)

**Component:**
```tsx
interface TrustBarProps {
  items: {
    icon: string;
    text: string;
  }[];
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="trust-bar">
      {items.map((item, i) => (
        <div key={i} className="trust-item">
          <span className="icon">{item.icon}</span>
          <span className="text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

// Usage:
const trustItems = [
  { icon: "✓", text: "50+ Projekte" },
  { icon: "⚡", text: "72h Durchschnitt" },
  { icon: "🔒", text: "100% Code-Eigentum" },
  { icon: "🇩🇪", text: "Frankfurt gehostet" }
];
```

**Styling Requirements:**
- Fixed position OR static after nav
- Horizontal layout on desktop (4 items in row)
- Scroll on mobile if needed
- Subtle background (light gray or white)
- Small text (14px)
- Icons 16x16px

---

### 2. Exit Intent Popup
**File:** `src/components/global/ExitIntentPopup.tsx`

**Trigger Conditions:**
- Mouse leaves viewport (top)
- 60 seconds of inactivity
- Show max once per 7 days (localStorage: `exitPopupShown`)

**Component:**
```tsx
export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('exitPopupShown');
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    if (lastShown && parseInt(lastShown) > sevenDaysAgo) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    };

    const inactivityTimer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(inactivityTimer);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem('exitPopupShown', Date.now().toString());
  };

  if (!show) return null;

  return (
    <div className="exit-popup-overlay" onClick={handleClose}>
      <div className="exit-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>×</button>
        
        <h2>Warte! Bevor du gehst...</h2>
        
        <div className="popup-body">
          <img src="/assets/lead-magnet-preview.png" alt="Guide Preview" />
          
          <h3>Hol dir den kostenlosen Guide:</h3>
          <p className="lead-title">"7 Moderne Web-Gesetze"</p>
          
          <p>Lerne, was moderne Websites brauchen. (Auch wenn du uns nicht beauftragst.)</p>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Deine Email"
              name="email"
              required
            />
            <button type="submit" className="submit-button">
              Guide Senden
            </button>
          </form>
          
          <p className="disclaimer">
            Kein Spam. Jederzeit abmelden.
          </p>
        </div>
      </div>
    </div>
  );
}
```

**Styling Requirements:**
- Full-screen overlay (rgba(0,0,0,0.6))
- Centered modal (max-width: 500px)
- Close button top-right
- Mobile responsive (full-width on small screens)
- Z-index: 9999

---

### 3. Sticky Mobile CTA
**File:** `src/components/global/StickyCTA.tsx`

**Display Logic:**
- Mobile only (< 768px)
- Show after scrolling 600px
- Fixed bottom position

**Component:**
```tsx
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <a href="/start-project" className="cta-primary">
        Projekt starten
      </a>
      <a href="tel:+4915..." className="cta-secondary">
        Anrufen
      </a>
    </div>
  );
}
```

**Styling Requirements:**
```css
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .sticky-cta {
    display: none;
  }
}
```

---

## HOME PAGE (`src/pages/Home.tsx`)

### Current Structure:
```
Hero → Services → Process → Velocity → FAQ → CTA
```

### New Structure:
```
Hero → Trust Bar → Problem Section → Services → Testimonials → Process → Velocity → FAQ (reduced) → CTA
```

---

### Change 1: Add Problem Section
**Location:** After Hero, before Services

**File:** `src/components/home/ProblemSection.tsx`

**Component:**
```tsx
interface CostData {
  rental: {
    month1: number;
    month6: number;
    year1: number;
    year5: number;
  };
  ownership: {
    oneTime: number;
    hosting5Years: number;
  };
}

export function ProblemSection() {
  const costs: CostData = {
    rental: {
      month1: 200,
      month6: 1200,
      year1: 2400,
      year5: 12000
    },
    ownership: {
      oneTime: 5800,
      hosting5Years: 1140
    }
  };

  const savings = costs.rental.year5 - (costs.ownership.oneTime + costs.ownership.hosting5Years);

  return (
    <section className="problem-section">
      <div className="container">
        <h2 className="section-headline">Das €2.400/Jahr Problem</h2>
        
        <div className="cost-comparison">
          <div className="comparison-column rental">
            <h3>WordPress / Webflow</h3>
            <div className="cost-breakdown">
              <div className="cost-row">
                <span>Monat 1:</span>
                <span className="amount">€{costs.rental.month1}</span>
              </div>
              <div className="cost-row">
                <span>Monat 6:</span>
                <span className="amount">€{costs.rental.month6.toLocaleString()}</span>
              </div>
              <div className="cost-row">
                <span>Jahr 1:</span>
                <span className="amount">€{costs.rental.year1.toLocaleString()}</span>
              </div>
              <div className="cost-row total">
                <span>5 Jahre:</span>
                <span className="amount">€{costs.rental.year5.toLocaleString()}</span>
              </div>
            </div>
            <div className="ownership-badge negative">
              <strong>Was dir gehört:</strong> NICHTS
            </div>
          </div>

          <div className="vs-divider">vs</div>

          <div className="comparison-column ownership">
            <h3>Du</h3>
            <div className="cost-breakdown">
              <div className="cost-row">
                <span>Einmalig:</span>
                <span className="amount">€{costs.ownership.oneTime.toLocaleString()}</span>
              </div>
              <div className="cost-row">
                <span>5 Jahre Hosting:</span>
                <span className="amount">€{costs.ownership.hosting5Years.toLocaleString()}</span>
              </div>
              <div className="cost-row total">
                <span>Total:</span>
                <span className="amount">€{(costs.ownership.oneTime + costs.ownership.hosting5Years).toLocaleString()}</span>
              </div>
            </div>
            <div className="ownership-badge positive">
              <strong>Was dir gehört:</strong> ALLES
            </div>
          </div>
        </div>

        <div className="savings-callout">
          <p className="savings-amount">Du sparst €{savings.toLocaleString()} über 5 Jahre.</p>
          <p className="savings-benefit">Und du besitzt deine Website.</p>
          <a href="/start-project" className="cta-button">
            Schluss mit Mieten →
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Styling Requirements:**
- Two-column layout on desktop
- Stacked on mobile
- "vs" divider centered between columns
- Negative/positive color coding (red/green)
- Large numbers emphasis
- Responsive padding

---

### Change 2: Add Testimonials Section
**Location:** After Services, before Process

**File:** `src/components/home/TestimonialsSection.tsx`

**Data Structure:**
```tsx
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo: string;
  logo?: string;
  rating?: number;
}
```

**Component:**
```tsx
export function TestimonialCard({ 
  quote, 
  author, 
  title, 
  company, 
  photo, 
  logo,
  rating = 5 
}: Testimonial) {
  return (
    <div className="testimonial-card">
      <div className="rating">
        {"⭐".repeat(rating)}
      </div>
      
      <blockquote className="quote">
        "{quote}"
      </blockquote>
      
      <div className="author-section">
        <img src={photo} alt={author} className="author-photo" />
        <div className="author-info">
          <div className="author-name">{author}</div>
          <div className="author-title">{title}</div>
          <div className="author-company">{company}</div>
        </div>
        {logo && (
          <img src={logo} alt={company} className="company-logo" />
        )}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "Wir brauchten einen Prototypen in 3 Wochen. Sie lieferten in 8 Tagen.",
      author: "Max Weber",
      title: "Product Manager",
      company: "TechStart GmbH",
      photo: "/testimonials/max-weber.jpg",
      logo: "/logos/techstart.png"
    },
    // Add 2 more testimonials
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-headline">Was Kunden sagen</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling Requirements:**
```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.author-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.company-logo {
  width: 80px;
  height: auto;
  opacity: 0.6;
}
```

---

### Change 3: Reduce FAQ Section
**Location:** Existing FAQ section

**Action:** Keep only these 4 questions:
1. Wem gehört meine Website, nachdem ihr sie gebaut habt?
2. Was kostet eine professionelle Website in Deutschland?
3. Wie lange dauert es eine neue Website zu entwickeln?
4. Kann ich meine Website selbst bearbeiten ohne Programmierkenntnisse?

**Add below FAQ:**
```tsx
<a href="/faq" className="view-all-faq">
  Alle FAQs ansehen →
</a>
```

---

### Change 4: Typography Adjustments

**File:** `src/styles/typography.css` (or global styles)

**Changes:**
```css
/* Hero Headlines - Increase by 25% */
.hero-headline {
  font-size: 3.5rem; /* Was ~2.8rem */
  line-height: 1.1;
  font-weight: 700;
}

@media (max-width: 768px) {
  .hero-headline {
    font-size: 2.25rem; /* Was ~1.8rem */
  }
}

/* Hero Description - Increase readability */
.hero-description {
  font-size: 1.25rem; /* Was ~1rem */
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Section Headlines */
.section-headline {
  font-size: 2.5rem; /* Was ~2rem */
  margin-bottom: 3rem;
}

/* Emphasis on key numbers */
.emphasis,
.cost-amount,
.metric-value {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--accent-color);
}

/* Add whitespace between paragraphs */
p + p {
  margin-top: 1.5rem;
}
```

---

## ABOUT PAGE (`src/pages/About.tsx`)

### Change 1: Add Personal Photo to Hero
**Location:** Top of page, hero section

**Modification:**
```tsx
<section className="about-hero">
  <div className="container">
    <div className="hero-content">
      <img 
        src="/images/founder-photo.jpg" 
        alt="[Your Name]" 
        className="founder-photo"
      />
      <h1>Hallo. Ich bin die Person, die deine Website baut.</h1>
      <p className="subheadline">
        Kein Team von 10 Leuten. Keine Agentur. Nur ich. 
        Und ich mache das seit 10 Jahren.
      </p>
    </div>
  </div>
</section>
```

**Styling:**
```css
.founder-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 2rem;
  display: block;
}
```

---

### Change 2: Add Origin Story Section
**Location:** After hero, before current bio

**File:** `src/components/about/OriginStory.tsx`

**Component:**
```tsx
export function OriginStory() {
  const timeline = [
    {
      year: "2014",
      title: "Gestartet",
      description: "Ich fing an, Websites zu bauen, als ich 23 war. Habe mir alles selbst beigebracht."
    },
    {
      year: "2016",
      title: "CEO geworden",
      description: "Führte eine Online-Teefirma in Japan. Lernte, wie es ist, sich um Geld zu sorgen."
    },
    {
      year: "2019",
      title: "Enterprise",
      description: "Arbeitete für die Großen. Banken. Autofirmen. Pharma. Lernte, wie sie Software bauen."
    },
    {
      year: "2024",
      title: "Super Sonic",
      description: "Helfe kleinen und mittleren Firmen, die gleiche Qualität zu bekommen."
    }
  ];

  return (
    <section className="origin-story">
      <div className="container">
        <h2>Warum ich Agenturen verließ</h2>
        
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="year">{item.year}</div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling Requirements:**
- Vertical timeline on mobile
- Horizontal timeline on desktop
- Connect items with line
- Year badges prominent

---

### Change 3: Add Values Section
**Location:** After "How We'll Work Together"

**Component:**
```tsx
export function ValuesSection() {
  const values = [
    {
      title: "Geschwindigkeit ohne Abstriche",
      description: "KI hilft, aber ich überprüfe jede Zeile Code."
    },
    {
      title: "Eigentum statt Miete",
      description: "Du solltest besitzen, wofür du zahlst."
    },
    {
      title: "Ehrlichkeit statt Hype",
      description: "Ich sage dir, wenn WordPress tatsächlich besser für dich ist."
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <h2>Wofür ich stehe</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## SERVICE PAGES (All 3)

### Common Changes for All Service Pages:

---

### Change 1: Add Problem Section
**Location:** After hero, before existing content

**Web Design Problem:**
```tsx
export function WebDesignProblem() {
  const problems = [
    {
      icon: "🐌",
      title: "LANGSAM",
      description: "3-5 Sekunden Ladezeit",
      impact: "50% Besucher gehen"
    },
    {
      icon: "💸",
      title: "GEMIETET",
      description: "€200/Monat für immer",
      impact: "€12.000 über 5 Jahre"
    },
    {
      icon: "🔒",
      title: "GEFANGEN",
      description: "Agentur für jede Änderung nötig",
      impact: "Wochen Wartezeit"
    }
  ];

  return (
    <section className="service-problem">
      <div className="container">
        <h2>Die meisten Business-Websites haben drei Probleme:</h2>
        <div className="problems-grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card">
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p className="description">{p.description}</p>
              <p className="impact">{p.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**MVP Problem:**
```tsx
export function MVPProblem() {
  return (
    <section className="service-problem">
      <div className="container">
        <h2>So läuft es normalerweise:</h2>
        
        <div className="timeline-fail">
          <div className="timeline-step">
            <span className="month">Monat 1-3</span>
            <p>Entwickler einstellen</p>
          </div>
          <div className="timeline-step">
            <span className="month">Monat 4-9</span>
            <p>Features bauen</p>
          </div>
          <div className="timeline-step">
            <span className="month">Monat 10-12</span>
            <p>Testen & Fixes</p>
          </div>
          <div className="timeline-step fail">
            <span className="month">Monat 13</span>
            <p>Launch... niemand will es</p>
          </div>
        </div>
        
        <div className="fail-stats">
          <div className="stat">
            <span className="value">€100.000+</span>
            <span className="label">Ausgegeben</span>
          </div>
          <div className="stat">
            <span className="value">0</span>
            <span className="label">User</span>
          </div>
        </div>
        
        <p className="cta-text">Es gibt einen besseren Weg →</p>
      </div>
    </section>
  );
}
```

**UX Problem:**
```tsx
export function UXProblem() {
  return (
    <section className="service-problem">
      <div className="container">
        <h2>Lass mich raten:</h2>
        
        <div className="problem-scenario">
          <p className="scenario-line">
            Deine Website bekommt <strong>10.000 Besucher</strong> pro Monat.
          </p>
          <p className="scenario-line">
            Aber nur <strong>50</strong> kaufen.
          </p>
          <p className="scenario-line">
            Du weißt nicht, warum die anderen <strong>9.950</strong> gehen.
          </p>
        </div>
        
        <div className="problem-explanation">
          <p>
            Dein Marketing-Team bringt Leute auf deine Website. 
            Aber etwas auf der Website lässt sie gehen.
          </p>
          <ul>
            <li>Vielleicht ist der Checkout verwirrend.</li>
            <li>Vielleicht ist das Pricing nicht klar.</li>
            <li>Vielleicht erklärt die Homepage nicht, was du tust.</li>
          </ul>
          <p className="emphasis">Das kostet dich echtes Geld. Jeden Tag.</p>
        </div>
      </div>
    </section>
  );
}
```

---

### Change 2: Add Examples Section
**Location:** After pricing, before FAQ

**File:** `src/components/services/ExamplesSection.tsx`

**Component:**
```tsx
interface ProjectExample {
  title: string;
  client: string;
  thumbnail: string;
  metrics: {
    label: string;
    value: string;
  }[];
  link: string;
}

export function ExamplesSection({ examples }: { examples: ProjectExample[] }) {
  return (
    <section className="examples-section">
      <div className="container">
        <h2>Beispiele unserer Arbeit</h2>
        
        <div className="examples-grid">
          {examples.map((ex, i) => (
            <div key={i} className="example-card">
              <div className="thumbnail">
                <img src={ex.thumbnail} alt={ex.title} />
              </div>
              <div className="content">
                <h3>{ex.title}</h3>
                <p className="client">{ex.client}</p>
                
                <div className="metrics">
                  {ex.metrics.map((m, j) => (
                    <div key={j} className="metric">
                      <span className="value">{m.value}</span>
                      <span className="label">{m.label}</span>
                    </div>
                  ))}
                </div>
                
                <a href={ex.link} className="view-case">
                  Case Study ansehen →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <a href="/work" className="view-all">
          Alle Projekte →
        </a>
      </div>
    </section>
  );
}
```

**Usage in Service Pages:**
```tsx
// In ServiceWebDesign.tsx
const webExamples = [
  {
    title: "Fashion E-Commerce",
    client: "Boutique Brand",
    thumbnail: "/work/fashion-ecommerce.jpg",
    metrics: [
      { label: "Load Time", value: "0.8s" },
      { label: "Speed Score", value: "100/100" },
      { label: "Revenue", value: "+81%" }
    ],
    link: "/work/fashion-ecommerce"
  },
  // 2 more examples
];

// Insert component:
<ExamplesSection examples={webExamples} />
```

---

### Change 3: Add "Who This Is For" Section
**Location:** Before FAQ

**Component:**
```tsx
interface AudienceProps {
  perfectFor: string[];
  notFor: string[];
}

export function AudienceSection({ perfectFor, notFor }: AudienceProps) {
  return (
    <section className="audience-section">
      <div className="container">
        <div className="audience-grid">
          <div className="audience-column perfect">
            <h3>Perfekt, wenn:</h3>
            <ul>
              {perfectFor.map((item, i) => (
                <li key={i}>
                  <span className="icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="audience-column not-for">
            <h3>Nicht für dich, wenn:</h3>
            <ul>
              {notFor.map((item, i) => (
                <li key={i}>
                  <span className="icon">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Usage per service:**
```tsx
// Web Design
<AudienceSection 
  perfectFor={[
    "€20k+ Jahresumsatz online",
    "Custom Features nötig",
    "Code-Eigentum wichtig",
    "Geschwindigkeit wichtig"
  ]}
  notFor={[
    "Gerade erst gestartet (kein Umsatz)",
    "Zufrieden mit Templates",
    "Monatlicher Support gewünscht",
    "Brauche 6+ Monate Projekt"
  ]}
/>

// MVP
<AudienceSection 
  perfectFor={[
    "Ungetestete Software-Idee",
    "Begrenztes Budget",
    "Schnelles Feedback nötig",
    "Erst-Gründer oder Corporate Innovation"
  ]}
  notFor={[
    "Bewährtes Produkt",
    "Brauche perfekten Polish",
    "Komplexe Enterprise-Systeme",
    "Kein klares Core Feature"
  ]}
/>

// UX
<AudienceSection 
  perfectFor={[
    "Traffic aber keine Sales",
    "Bounce Rate >60%",
    "Fixes funktionieren nicht",
    "€50k+ Online-Umsatz/Jahr"
  ]}
  notFor={[
    "Brandneue Site (keine Daten)",
    "Wenig Traffic (<1000/Monat)",
    "Problem ist Marketing, nicht UX",
    "Kein Budget für Fixes"
  ]}
/>
```

---

### Change 4: MVP Page - Add Pricing
**Location:** After process section

**Component:**
```tsx
export function MVPPricing() {
  const packages = [
    {
      name: "Starter MVP",
      price: "12.000",
      features: [
        "1 Kern-Feature",
        "2 Wochen Lieferung",
        "100% Code-Eigentum",
        "Basis-Design",
        "Mobile-optimiert"
      ]
    },
    {
      name: "Standard MVP",
      price: "25.000",
      features: [
        "3 Kern-Features",
        "4 Wochen Lieferung",
        "100% Code-Eigentum",
        "User Testing inklusive",
        "Premium Design"
      ],
      popular: true
    },
    {
      name: "Custom MVP",
      price: "Auf Anfrage",
      features: [
        "Unbegrenzte Features",
        "Timeline nach Bedarf",
        "100% Code-Eigentum",
        "Dedizierter Support",
        "Priority Development"
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Was kostet ein MVP?</h2>
        
        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="badge">Beliebt</div>}
              
              <h3>{pkg.name}</h3>
              <div className="price">€{pkg.price}</div>
              
              <ul className="features">
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              
              <a href="/start-project" className="cta-button">
                Angebot erhalten
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Change 5: UX Page - Add Pricing
**Location:** After capabilities section

**Component:**
```tsx
export function UXPricing() {
  const packages = [
    {
      name: "Quick Audit",
      price: "2.500",
      duration: "1 Woche",
      includes: [
        "Problem-Report",
        "Empfehlungen",
        "Prioritäten-Liste"
      ],
      notIncludes: [
        "Keine Implementierung"
      ]
    },
    {
      name: "Full Rescue",
      price: "8.500",
      duration: "4 Wochen",
      includes: [
        "2 Wochen Analyse",
        "Problem-Report",
        "Design-Lösungen",
        "Implementierung inklusive",
        "4 Wochen Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Nach Bedarf",
      includes: [
        "Mehrere Sites/Pages",
        "A/B Testing",
        "Ongoing Optimization",
        "Dediziertes Team"
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Was kostet UX Rescue?</h2>
        
        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="badge">Empfohlen</div>}
              
              <h3>{pkg.name}</h3>
              <div className="price">€{pkg.price}</div>
              <div className="duration">{pkg.duration}</div>
              
              <div className="includes">
                <h4>Enthalten:</h4>
                <ul>
                  {pkg.includes.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              
              {pkg.notIncludes && (
                <div className="not-includes">
                  {pkg.notIncludes.map((item, j) => (
                    <p key={j} className="note">* {item}</p>
                  ))}
                </div>
              )}
              
              <a href="/start-project" className="cta-button">
                Wählen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## WORK PAGE (`src/pages/Work.tsx`)

### Change 1: Add Filtering
**Location:** After hero headline

**Component:**
```tsx
export function WorkFilters() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'Alle' },
    { id: 'web', label: 'Websites' },
    { id: 'mvp', label: 'MVPs' },
    { id: 'ux', label: 'UX Fixes' }
  ];

  return (
    <div className="work-filters">
      {filters.map(f => (
        <button
          key={f.id}
          className={`filter-button ${activeFilter === f.id ? 'active' : ''}`}
          onClick={() => setActiveFilter(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
```

---

### Change 2: Add Featured Case Study
**Location:** After filters, before grid

**Component:**
```tsx
interface FeaturedCaseStudy {
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  quote: string;
  quoteAuthor: string;
  quoteTitle: string;
  link: string;
}

export function FeaturedCase({ data }: { data: FeaturedCaseStudy }) {
  return (
    <section className="featured-case">
      <div className="featured-container">
        <div className="featured-image">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        
        <div className="featured-content">
          <h2>{data.title}</h2>
          <p className="client-info">{data.client} • {data.industry}</p>
          
          <div className="challenge">
            <h3>Die Herausforderung:</h3>
            <p>{data.challenge}</p>
          </div>
          
          <div className="solution">
            <h3>Was wir gebaut haben:</h3>
            <p>{data.solution}</p>
          </div>
          
          <div className="results">
            <h3>Das Ergebnis:</h3>
            <div className="results-grid">
              {data.results.map((r, i) => (
                <div key={i} className="result-item">
                  <div className="result-value">{r.value}</div>
                  <div className="result-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <blockquote className="client-quote">
            "{data.quote}"
            <footer>— {data.quoteAuthor}, {data.quoteTitle}</footer>
          </blockquote>
          
          <a href={data.link} className="view-full">
            Komplette Case Study →
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Data:**
```tsx
const featuredCase: FeaturedCaseStudy = {
  title: "Neobank für Gen Z",
  client: "FinTech Startup",
  industry: "Banking",
  thumbnail: "/work/neobank-hero.jpg",
  challenge: "Brauchten €4M von Investoren. Investoren wollten Proof of Concept, nicht nur Folien.",
  solution: "Funktionierender Prototyp in 72 Stunden. Kernfunktionen: Account-Erstellung, Kartenverknüpfung, Ausgaben-Tracking.",
  results: [
    { label: "In 4 Tagen gesammelt", value: "€4,2M" },
    { label: "ROI", value: "35.000%" },
    { label: "Beta Launch", value: "2 Monate" }
  ],
  quote: "Ohne diesen Prototypen würden wir immer noch Folien präsentieren.",
  quoteAuthor: "CEO",
  quoteTitle: "NeoBank",
  link: "/work/neobank"
};
```

---

### Change 3: Update Project Cards
**Modification:** Add service type badge and metrics overlay

**Component Update:**
```tsx
interface ProjectCard {
  title: string;
  client: string;
  serviceType: 'web' | 'mvp' | 'ux';
  thumbnail: string;
  metrics: {
    label: string;
    value: string;
  }[];
  link: string;
}

export function ProjectCard({ data }: { data: ProjectCard }) {
  const serviceBadges = {
    web: { icon: '🌐', label: 'Website' },
    mvp: { icon: '⚡', label: 'MVP' },
    ux: { icon: '🎨', label: 'UX Audit' }
  };

  return (
    <a href={data.link} className="project-card">
      <div className="thumbnail">
        <img src={data.thumbnail} alt={data.title} />
        <div className="service-badge">
          <span className="icon">{serviceBadges[data.serviceType].icon}</span>
          <span className="label">{serviceBadges[data.serviceType].label}</span>
        </div>
        
        <div className="metrics-overlay">
          {data.metrics.map((m, i) => (
            <div key={i} className="metric">
              <span className="value">{m.value}</span>
              <span className="label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="content">
        <h3>{data.title}</h3>
        <p className="client">{data.client}</p>
      </div>
    </a>
  );
}
```

---

### Change 4: Add Results Summary
**Location:** After project grid

**Component:**
```tsx
export function ResultsSummary() {
  const stats = [
    { value: "50+", label: "Projekte geliefert" },
    { value: "€12M+", label: "Umsatz generiert" },
    { value: "8.5/10", label: "Durchschnittliche Bewertung" },
    { value: "72h", label: "Durchschnitt: Erster Entwurf" }
  ];

  return (
    <section className="results-summary">
      <div className="container">
        <h2>Nach Zahlen:</h2>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## START PROJECT PAGE (`src/pages/StartProject.tsx`)

### Change 1: Improve Path Selection Cards

**Modification:** Add more detail to each option

**Component:**
```tsx
export function PathSelector() {
  return (
    <section className="path-selector">
      <div className="container">
        <h1>Lass uns etwas Großartiges bauen.</h1>
        <p className="subtitle">Wähle, wie du starten möchtest:</p>
        
        <div className="paths-grid">
          <div className="path-card">
            <div className="path-icon">📞</div>
            <h2>Strategy Call</h2>
            
            <div className="path-details">
              <h3>Perfekt, wenn:</h3>
              <ul>
                <li>Nicht sicher, was du brauchst</li>
                <li>Erst Rat willst</li>
                <li>Komplexes Projekt</li>
              </ul>
            </div>
            
            <div className="path-info">
              <div className="info-item">
                <span className="icon">⏱️</span>
                <span>15 Minuten</span>
              </div>
              <div className="info-item">
                <span className="icon">💻</span>
                <span>Google Meet</span>
              </div>
              <div className="info-item">
                <span className="icon">✓</span>
                <span>Keine Verpflichtung</span>
              </div>
            </div>
            
            <a href="/book-call" className="path-cta">
              Call buchen →
            </a>
          </div>
          
          <div className="path-card">
            <div className="path-icon">⚙️</div>
            <h2>Projekt Engine</h2>
            
            <div className="path-details">
              <h3>Perfekt, wenn:</h3>
              <ul>
                <li>Du weißt, was du brauchst</li>
                <li>Sofort-Angebot willst</li>
                <li>Bereit zum Starten</li>
              </ul>
            </div>
            
            <div className="path-info">
              <div className="info-item">
                <span className="icon">⏱️</span>
                <span>5 Minuten</span>
              </div>
              <div className="info-item">
                <span className="icon">💰</span>
                <span>Sofort-Angebot</span>
              </div>
              <div className="info-item">
                <span className="icon">✓</span>
                <span>Keine Verpflichtung</span>
              </div>
            </div>
            
            <a href="/configurator" className="path-cta">
              Konfiguration starten →
            </a>
          </div>
        </div>
        
        <div className="trust-indicators">
          <span>✓ Keine Kreditkarte nötig</span>
          <span>✓ Kein Druck</span>
          <span>✓ Antwort in 24h</span>
        </div>
      </div>
    </section>
  );
}
```

---

### Change 2: Multi-Step Configurator

**Modification:** Break into 4 steps with progress bar

**Component Structure:**
```tsx
export function ProjectConfigurator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <div className="configurator">
      <ProgressBar current={step} total={4} />
      
      {step === 1 && (
        <StepBasics 
          data={formData} 
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(2);
          }}
        />
      )}
      
      {step === 2 && (
        <StepScope 
          data={formData}
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}
      
      {step === 3 && (
        <StepDetails 
          data={formData}
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(4);
          }}
          onBack={() => setStep(2)}
        />
      )}
      
      {step === 4 && (
        <StepContact 
          data={formData}
          onBack={() => setStep(3)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="progress-bar">
      <div className="progress-text">Schritt {current} von {total}</div>
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
```

**Step Components:**
```tsx
// Step 1: Basics
function StepBasics({ data, onNext }: StepProps) {
  const [serviceType, setServiceType] = useState(data.serviceType || '');
  const [industry, setIndustry] = useState(data.industry || '');

  return (
    <div className="step-content">
      <h2>Zuerst, was brauchst du?</h2>
      
      <div className="radio-group">
        <label className="radio-card">
          <input 
            type="radio" 
            name="serviceType" 
            value="website"
            checked={serviceType === 'website'}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <span className="radio-label">Website</span>
        </label>
        
        <label className="radio-card">
          <input 
            type="radio" 
            name="serviceType" 
            value="mvp"
            checked={serviceType === 'mvp'}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <span className="radio-label">Software/MVP</span>
        </label>
        
        <label className="radio-card">
          <input 
            type="radio" 
            name="serviceType" 
            value="ux"
            checked={serviceType === 'ux'}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <span className="radio-label">UX Audit</span>
        </label>
      </div>
      
      <div className="form-group">
        <label>Was ist dein Business?</label>
        <select 
          value={industry} 
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">Wähle...</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="saas">SaaS</option>
          <option value="consulting">Beratung</option>
          <option value="agency">Agentur</option>
          <option value="other">Andere</option>
        </select>
      </div>
      
      <button 
        className="next-button"
        onClick={() => onNext({ serviceType, industry })}
        disabled={!serviceType || !industry}
      >
        Weiter →
      </button>
    </div>
  );
}

// Step 2: Scope (adapts based on service type)
function StepScope({ data, onNext, onBack }: StepProps) {
  // Content adapts based on data.serviceType
  // If 'website': ask about pages, features, etc.
  // If 'mvp': ask about core features
  // If 'ux': ask about current traffic, conversion rate
  
  return (
    <div className="step-content">
      <h2>Scope-Fragen hier...</h2>
      {/* Conditional content based on serviceType */}
      
      <div className="step-actions">
        <button className="back-button" onClick={onBack}>
          ← Zurück
        </button>
        <button className="next-button" onClick={() => onNext({})}>
          Weiter →
        </button>
      </div>
    </div>
  );
}

// Step 3: Details
function StepDetails({ data, onNext, onBack }: StepProps) {
  const [requirements, setRequirements] = useState('');
  const [timeline, setTimeline] = useState('');

  return (
    <div className="step-content">
      <h2>Noch ein paar Details...</h2>
      
      <div className="form-group">
        <label>Besondere Anforderungen?</label>
        <textarea 
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Optional: Besondere Features, Integrationen, etc."
          rows={4}
        />
      </div>
      
      <div className="form-group">
        <label>Wann brauchst du das?</label>
        <div className="radio-group">
          <label className="radio-inline">
            <input 
              type="radio" 
              name="timeline" 
              value="rush"
              onChange={(e) => setTimeline(e.target.value)}
            />
            <span>ASAP (72h Rush)</span>
          </label>
          <label className="radio-inline">
            <input 
              type="radio" 
              name="timeline" 
              value="standard"
              onChange={(e) => setTimeline(e.target.value)}
            />
            <span>2-4 Wochen (Standard)</span>
          </label>
          <label className="radio-inline">
            <input 
              type="radio" 
              name="timeline" 
              value="flexible"
              onChange={(e) => setTimeline(e.target.value)}
            />
            <span>Flexibel (Qualität zuerst)</span>
          </label>
        </div>
      </div>
      
      <div className="step-actions">
        <button className="back-button" onClick={onBack}>
          ← Zurück
        </button>
        <button 
          className="next-button" 
          onClick={() => onNext({ requirements, timeline })}
        >
          Weiter →
        </button>
      </div>
    </div>
  );
}

// Step 4: Contact + Quote
function StepContact({ data, onBack, onSubmit }: StepProps) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  // Calculate estimated quote based on data
  const estimatedQuote = calculateQuote(data);

  return (
    <div className="step-content">
      <div className="quote-display">
        <h3>Dein geschätztes Angebot:</h3>
        <div className="quote-range">
          €{estimatedQuote.min.toLocaleString()} - €{estimatedQuote.max.toLocaleString()}
        </div>
        <p className="quote-note">
          (Finaler Preis hängt von deinen spezifischen Anforderungen ab)
        </p>
      </div>
      
      <hr />
      
      <h3>Hol dein detailliertes Angebot:</h3>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ ...data, ...contact });
      }}>
        <div className="form-group">
          <label>Name *</label>
          <input 
            type="text" 
            required
            value={contact.name}
            onChange={(e) => setContact({...contact, name: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Email *</label>
          <input 
            type="email" 
            required
            value={contact.email}
            onChange={(e) => setContact({...contact, email: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Firma (optional)</label>
          <input 
            type="text"
            value={contact.company}
            onChange={(e) => setContact({...contact, company: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Telefon (optional)</label>
          <input 
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({...contact, phone: e.target.value})}
          />
        </div>
        
        <div className="form-group checkbox">
          <label>
            <input type="checkbox" name="newsletter" />
            <span>Sende mir kostenlose Resources: "7 Moderne Web-Gesetze"</span>
          </label>
        </div>
        
        <div className="what-happens-next">
          <h4>Was passiert als Nächstes:</h4>
          <ol>
            <li>Du erhältst ein Angebot per Email</li>
            <li>Wir vereinbaren einen 15min Call</li>
            <li>Du entscheidest, ob du starten willst</li>
          </ol>
          <p className="no-pressure">Kein Druck. Keine Verpflichtung.</p>
        </div>
        
        <div className="step-actions">
          <button type="button" className="back-button" onClick={onBack}>
            ← Zurück
          </button>
          <button type="submit" className="submit-button">
            Angebot erhalten →
          </button>
        </div>
      </form>
    </div>
  );
}

// Quote calculation helper
function calculateQuote(data: any): { min: number; max: number } {
  // Logic based on service type and scope
  // This is simplified - adjust based on your pricing logic
  
  if (data.serviceType === 'website') {
    return { min: 5800, max: 12000 };
  } else if (data.serviceType === 'mvp') {
    return { min: 12000, max: 35000 };
  } else if (data.serviceType === 'ux') {
    return { min: 2500, max: 8500 };
  }
  
  return { min: 5000, max: 15000 };
}
```

---

## CSS GLOBAL UPDATES

### Typography Scale Update
**File:** `src/styles/globals.css` or main stylesheet

```css
/* Base font size increase for better readability */
html {
  font-size: 16px;
}

body {
  font-size: 1rem;
  line-height: 1.6;
}

/* Headings - increase by ~25% */
h1, .h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

h2, .h2 {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

h3, .h3 {
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  h1, .h1 {
    font-size: 2.25rem;
  }
  
  h2, .h2 {
    font-size: 1.875rem;
  }
  
  h3, .h3 {
    font-size: 1.5rem;
  }
}

/* Paragraph spacing */
p + p {
  margin-top: 1.5rem;
}

/* Emphasis/highlight class for key numbers */
.emphasis,
.highlight-number {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--accent-color);
}

/* Section spacing */
section {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  section {
    padding: 3rem 0;
  }
}

.section-headline {
  text-align: center;
  margin-bottom: 3rem;
}
```

---

## MOBILE RESPONSIVENESS

### Comparison Table Mobile Fix
**File:** Component-specific CSS

```css
/* Desktop: side-by-side */
.cost-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: start;
}

.vs-divider {
  align-self: center;
  font-size: 1.5rem;
  font-weight: 700;
}

/* Mobile: stacked */
@media (max-width: 768px) {
  .cost-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .vs-divider {
    text-align: center;
    padding: 1rem 0;
  }
}
```

### Grid Layouts Mobile Fix

```css
/* Service cards, testimonials, etc. */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

---

## DATA COLLECTION REQUIREMENTS

### Testimonials
Collect from clients:
- Full quote (50-150 words)
- Name
- Job title
- Company name
- Photo (square, min 300x300px)
- Company logo (PNG, transparent background)
- Star rating (1-5)

**Storage:** `/public/testimonials/` for photos, `/public/logos/` for company logos

---

### Project Examples
For each project:
- Title
- Client name (or "Confidential Client")
- Industry
- Service type (web/mvp/ux)
- Thumbnail image (16:9 ratio, min 800x450px)
- 3 key metrics (label + value)
- Link to full case study page

**Storage:** `/public/work/` for thumbnails

---

### Case Study Pages
Full data structure:
- Hero image
- Client info
- Challenge description (100-200 words)
- Solution description (100-200 words)
- Process timeline (4-6 steps)
- Feature screenshots (3-5 images)
- Results (3-5 metrics with values)
- Full testimonial quote
- Technical details (optional, collapsible)

---

## IMPLEMENTATION NOTES

### Priority Order:
1. Global components (Trust Bar, Exit Popup, Sticky CTA)
2. Home page (Problem Section, Testimonials, Typography)
3. Service pages (Problem sections, Examples, Who For, Pricing)
4. About page (Photo, Origin Story, Values)
5. Work page (Filtering, Featured Case, Results)
6. Start Project page (Path selector improvements, Multi-step form)

### Testing Requirements:
- Desktop: Chrome, Safari, Firefox
- Mobile: iOS Safari, Android Chrome
- Tablet: iPad Safari
- Test all interactive elements (filters, forms, popups)
- Test exit intent trigger timing
- Verify localStorage functionality for exit popup

### Performance:
- Lazy load images below fold
- Optimize testimonial photos (WebP format)
- Defer exit popup script
- Minimize CSS/JS bundle size

---

## FILES TO CREATE

### New Components:
```
src/components/
├── global/
│   ├── TrustBar.tsx
│   ├── ExitIntentPopup.tsx
│   └── StickyCTA.tsx
├── home/
│   ├── ProblemSection.tsx
│   └── TestimonialsSection.tsx
├── about/
│   ├── OriginStory.tsx
│   └── ValuesSection.tsx
├── services/
│   ├── ProblemSection.tsx
│   ├── ExamplesSection.tsx
│   ├── AudienceSection.tsx
│   ├── MVPPricing.tsx
│   └── UXPricing.tsx
├── work/
│   ├── WorkFilters.tsx
│   ├── FeaturedCase.tsx
│   ├── ProjectCard.tsx
│   └── ResultsSummary.tsx
└── configurator/
    ├── ProgressBar.tsx
    ├── StepBasics.tsx
    ├── StepScope.tsx
    ├── StepDetails.tsx
    └── StepContact.tsx
```

### New Styles:
```
src/styles/
├── components/
│   ├── trust-bar.css
│   ├── exit-popup.css
│   ├── problem-section.css
│   ├── testimonials.css
│   └── pricing.css
└── utilities/
    ├── typography.css (update)
    └── mobile.css (update)
```

---

**End of Developer Specification**