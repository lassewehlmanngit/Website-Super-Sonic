import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

interface Props {
  lang?: 'de' | 'en';
}

export const PricingGuidePDF: React.FC<Props> = ({ lang = 'en' }) => {
  const isDe = lang === 'de';

  return (
    <Document>
      <CoverPage 
          title={isDe ? "Preis & ROI Guide" : "Pricing & ROI Guide"} 
          subtitle={isDe 
            ? "High-Performance Design ist ein Vermögenswert, keine Kosten. Sehen Sie die Mathematik hinter der Preisgestaltung."
            : "High-performance design is an asset, not a cost. See the math behind the pricing."}
          targetAudience={isDe ? "Unternehmensinhaber" : "Business Owners"}
      />

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginBottom: theme.spacing.lg }}>
              <Logo />
              <Text style={pdfStyles.h2}>Executive Summary</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Eine Website ist keine digitale Broschüre. Sie ist ein Kapitalanlagegut – eine Maschine, die dazu entwickelt wurde, Traffic zu verarbeiten und Umsatz zu generieren. Die Entscheidung zu investieren sollte nicht auf 'Kosten' basieren, sondern auf dem Return on Investment (ROI)."
                    : "A website is not a digital brochure. It is a capital asset—a machine designed to process traffic and output revenue. The decision to invest in this asset should not be based on 'cost' but on Return on Investment (ROI)."}
              </Text>
              <Text style={pdfStyles.text}>
                  {isDe
                    ? "Die 'billigste' Website ist oft die teuerste Verbindlichkeit, die ein Unternehmen besitzen kann. Wir analysieren dies durch die Linse der Gesamtbetriebskosten (TCO) und Opportunitätskosten."
                    : "The 'cheapest' website is often the most expensive liability a business can own. We analyze this through the lens of Total Cost of Ownership (TCO) and Opportunity Cost."}
              </Text>
          </View>

          <View style={pdfStyles.divider} />

          <Text style={pdfStyles.h2}>1. {isDe ? "Die 'Versteckte Kosten' Gleichung" : "The 'Hidden Cost' Equation"}</Text>
          <Text style={pdfStyles.text}>
              {isDe 
                ? "Unternehmensinhaber fixieren sich auf die Anschaffungskosten (P), ignorieren aber den entgangenen Umsatz (L)."
                : "Business owners fixate on Principal Cost (P) but ignore Lost Revenue (L)."}
          </Text>
          
          <View style={pdfStyles.card}>
              <Text style={{ fontSize: 10, fontFamily: 'Helvetica-Bold', textAlign: 'center' }}>
                  {isDe 
                    ? "Wahre Kosten = Anschaffung + (Betriebskosten * Zeit) + Entgangener Umsatz"
                    : "True Cost = Principal + (Operational Cost * Time) + Lost Revenue"}
              </Text>
          </View>

          <Text style={pdfStyles.h3}>{isDe ? "Die Berechnung des Verlusts" : "The Calculation of Loss"}</Text>
          <Text style={pdfStyles.text}>{isDe ? "Modell: Unternehmen mit 10k Besuchern/Monat und 100 $ LTV." : "Model: Business with 10k visitors/mo and $100 LTV."}</Text>

          <View style={{ flexDirection: 'row', gap: 15, marginTop: 10 }}>
              <View style={{ flex: 1, border: `1pt solid ${theme.colors.zinc200}`, padding: 10, borderRadius: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>{isDe ? "Szenario A: DIY Seite" : "Scenario A: DIY Site"}</Text>
                  <Text style={pdfStyles.small}>{isDe ? "Kosten: 500 $" : "Cost: $500"}</Text>
                  <Text style={pdfStyles.small}>{isDe ? "Ladezeit: 5s" : "Load Time: 5s"}</Text>
                  <Text style={{ fontSize: 10, marginTop: 5, color: theme.colors.orange }}>{isDe ? "Konv. Rate: ~1,0%" : "Conv. Rate: ~1.0%"}</Text>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>$120k / {isDe ? "Jahr" : "yr"}</Text>
              </View>

               <View style={{ flex: 1, backgroundColor: theme.colors.zinc800, padding: 10, borderRadius: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5, color: theme.colors.white }}>{isDe ? "Szenario B: SuperSonic" : "Scenario B: SuperSonic"}</Text>
                  <Text style={{...pdfStyles.small, color: theme.colors.zinc400}}>{isDe ? "Kosten: 10.000 $" : "Cost: $10,000"}</Text>
                  <Text style={{...pdfStyles.small, color: theme.colors.zinc400}}>{isDe ? "Ladezeit: 0,8s" : "Load Time: 0.8s"}</Text>
                  <Text style={{ fontSize: 10, marginTop: 5, color: theme.colors.orange }}>{isDe ? "Konv. Rate: ~3,0%" : "Conv. Rate: ~3.0%"}</Text>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: theme.colors.white }}>$360k / {isDe ? "Jahr" : "yr"}</Text>
              </View>
          </View>

          <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.colors.orange }}>{isDe ? "ERGEBNIS:" : "RESULT:"}</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Die 'billige' Seite kostet Sie 240.000 $/Jahr an entgangenem Umsatz. Die 10k Investition macht sich in <15 Tagen bezahlt."
                    : "The 'cheap' site costs you $240,000 per year in lost revenue. The $10k investment pays for itself in less than 15 days of operation."}
              </Text>
          </View>

          <Footer currentPage={2} totalPages={4} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginTop: theme.spacing.lg }}>
              <Text style={pdfStyles.h2}>2. {isDe ? "Beschaffungs-Matrix" : "Sourcing Matrix"}</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Die Wahl eines Entwicklungspartners ist eine Risikomanagement-Übung. Sie kaufen nicht nur Code; Sie kaufen Kontinuität."
                    : "Choosing a development partner is a risk management exercise. You are not just buying code; you are buying continuity."}
              </Text>

              <View style={{ marginTop: 10 }}>
                  <SourcingItem 
                      title="Freelancer (Upwork/Toptal)" 
                      cost={isDe ? "Niedrig (50-100 $/h)" : "Low ($50-$100/hr)"} 
                      risk={isDe ? "Kritisch (Bus-Faktor 1)" : "Critical (Bus Factor 1)"} 
                      verdict={isDe ? "Gut für kleine Aufgaben (<5k $). Gefährlich für Kern-Assets." : "Good for small tasks (<$5k). Dangerous for core assets."}
                      desc={isDe 
                        ? "Sie mieten eine Person. Hohe Varianz. Wenn sie krank werden oder verschwinden, steckt Ihr Projekt fest."
                        : "You are renting a person. High variance. If they get sick, disappear, or take a full-time job, your project stalls."}
                  />
                   <SourcingItem 
                      title="Agency (SuperSonic)" 
                      cost={isDe ? "Mittel-Hoch (100-200 $/h)" : "Medium-High ($100-$200/hr)"} 
                      risk={isDe ? "Niedrig (Redundanz)" : "Low (Redundancy)"} 
                      verdict={isDe ? "Am besten für geschäftskritische Builds und Skalierung." : "Best for mission-critical builds and scaling."}
                      desc={isDe 
                        ? "Sie mieten ein System. Agenturen haben Redundanz, QA-Prozesse und diverse Fähigkeiten. IP und Repo werden an Sie übertragen."
                        : "You are renting a system. Agencies have redundancy, QA processes, and diverse skill sets. IP and Repo are transferred to you."}
                  />
                   <SourcingItem 
                      title="In-House Team" 
                      cost={isDe ? "Hoch (Gehalt + Overhead)" : "High (Salary + Benefits + Overhead)"} 
                      risk={isDe ? "Mittel (Fluktuation)" : "Medium (Turnover)"} 
                      verdict={isDe ? "Nur rentabel, wenn Software IHR Produkt ist (SaaS)." : "Only viable if software IS your product (SaaS)."}
                      desc={isDe 
                        ? "Sie kaufen Kontrolle. Hohe Fixkosten. Fluktuation kann kleine Teams lähmen."
                        : "You are buying control. High fixed cost. Turnover can cripple small teams."}
                  />
              </View>
          </View>
          <Footer currentPage={3} totalPages={4} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
           <View style={{ marginTop: theme.spacing.lg }}>
              <Text style={pdfStyles.h2}>3. {isDe ? "Investitions-Stufen (2025)" : "Investment Tiers (2025)"}</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Um Missverständnisse zu vermeiden, definieren wir Engineering-Leistungen nach strikten Budgetstufen."
                    : "To avoid misalignment, we define engineering deliverables by strict budget tiers."}
              </Text>
              
              <View style={{ gap: 15, marginTop: 10 }}>
                   <TierItem 
                      title={isDe ? "5.000 $ (Der Validator)" : "$5,000 (The Validator)"}
                      arch={isDe ? "Statisch / Template (WordPress/Webflow)" : "Static / Template (WordPress/Webflow)"}
                      perf={isDe ? "Standard (2-4s Ladezeit)" : "Standard (2-4s load)"}
                      ideal={isDe ? "Lokale Unternehmen, Portfolios" : "Local Business, Portfolios"}
                   />
                   <TierItem 
                      title={isDe ? "15.000 $ (Der Wachstumsmotor)" : "$15,000 (The Growth Engine)"}
                      arch={isDe ? "Headless / Custom (Next.js + Sanity)" : "Headless / Custom (Next.js + Sanity)"}
                      perf={isDe ? "Rasend schnell (<1s Ladezeit). Globales CDN." : "Blazing (<1s load). Global CDN."}
                      ideal={isDe ? "B2B-Dienstleister, Startups, Medien" : "B2B Service, Funded Startups, Media"}
                   />
                   <TierItem 
                      title={isDe ? "50.000 $+ (Die Plattform)" : "$50,000+ (The Platform)"}
                      arch={isDe ? "Web App. Full-Stack React/Node. Eigene DB." : "Web App. Full-stack React/Node. Custom DB."}
                      perf={isDe ? "Enterprise. Auto-Scaling." : "Enterprise. Auto-scaling."}
                      ideal={isDe ? "SaaS, Großes E-Commerce, FinTech" : "SaaS, Large E-commerce, FinTech"}
                   />
              </View>
          </View>

          <View style={{ marginTop: 'auto', marginBottom: 40 }}>
               <Text style={pdfStyles.small}>REFERENCES</Text>
               <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[29] WP Rocket - Load Time Stats</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[32] Cieden - Agency vs Freelancer</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[33] Abbacus Tech - Cost of Freelancers</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[35] KrishaWeb - Laravel Costs 2025</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[37] Peaktwo - Website Cost 2025</Text>
               </View>
          </View>

          <Footer currentPage={4} totalPages={4} />
      </Page>
    </Document>
  );
};

const SourcingItem = ({ title, cost, risk, verdict, desc }: any) => (
    <View style={{ marginBottom: 15, paddingBottom: 10, borderBottom: `1pt solid ${theme.colors.zinc100}` }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 10, color: theme.colors.zinc500, marginTop: 2 }}>{desc}</Text>
        <View style={{ flexDirection: 'row', gap: 20, marginVertical: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Cost: <Text style={{fontWeight: 'normal', color: theme.colors.zinc500}}>{cost}</Text></Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Risk: <Text style={{fontWeight: 'normal', color: theme.colors.zinc500}}>{risk}</Text></Text>
        </View>
        <Text style={{ fontSize: 10, fontStyle: 'italic', color: theme.colors.orange }}>{verdict}</Text>
    </View>
);

const TierItem = ({ title, arch, perf, ideal }: any) => (
    <View style={{ padding: 10, backgroundColor: theme.colors.zinc50, borderRadius: 4 }}>
         <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>{title}</Text>
         <View style={{ gap: 2 }}>
            <Text style={{ fontSize: 10 }}><Text style={{fontWeight: 'bold'}}>Architecture:</Text> {arch}</Text>
            <Text style={{ fontSize: 10 }}><Text style={{fontWeight: 'bold'}}>Performance:</Text> {perf}</Text>
            <Text style={{ fontSize: 10 }}><Text style={{fontWeight: 'bold'}}>Ideal For:</Text> {ideal}</Text>
         </View>
    </View>
);
