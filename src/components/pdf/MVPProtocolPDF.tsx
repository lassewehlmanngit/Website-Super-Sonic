import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

interface Props {
  lang?: 'de' | 'en';
}

export const MVPProtocolPDF: React.FC<Props> = ({ lang = 'en' }) => {
  const isDe = lang === 'de';

  return (
    <Document>
      <CoverPage 
          title={isDe ? "Das MVP Protokoll" : "The MVP Protocol"} 
          subtitle={isDe 
            ? "Verbrenne kein Budget für ein schlechtes MVP. Ein striktes Framework für V1." 
            : "Don't burn budget on a bad MVP. A strict framework for shipping V1."}
          targetAudience={isDe ? "App-Gründer & Technische Leiter" : "App Founders & Technical Leads"}
      />

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginBottom: theme.spacing.lg }}>
              <Logo />
              <Text style={pdfStyles.h2}>Executive Summary</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Die digitale Landschaft ist kein Spielplatz; sie ist eine feindliche Umgebung. 90% der Startups scheitern nicht an der Vision, sondern an ineffizienter Ausführung. Ihnen ging Zeit oder Geld aus."
                    : "The digital landscape is not a playground; it is a hostile environment. 90% of startups fail not because their vision was flawed, but because their execution was inefficient. They ran out of time or money."}
              </Text>
              <Text style={pdfStyles.text}>
                  {isDe
                    ? "Dieses Dokument ist die Betriebsanleitung für SuperSonic. Wir lehnen 'Move Fast and Break Things' ab. Unser Ansatz: Beweg dich schnell und bau Dinge, die funktionieren."
                    : "This document serves as the operating manual for SuperSonic. We reject 'Move Fast and Break Things'. Our approach: Move fast and build things that work."}
              </Text>
              <Text style={pdfStyles.text}>
                  {isDe
                    ? "Wir handeln mit bewährten Mustern – datengestützt durch Y-Combinator Erfolge und quantitative Marktanalyse."
                    : "We do not deal in 'best practices'. We deal in proven patterns—data-backed methodologies derived from Y-Combinator successes."}
              </Text>
          </View>

          <View style={pdfStyles.divider} />

          <Text style={pdfStyles.h2}>1. {isDe ? "Das 72-Stunden Feature Limit" : "The 72-Hour Feature Limit"}</Text>
          <Text style={pdfStyles.text}>
              {isDe 
                ? "Komplexität skaliert exponentiell. Um dem entgegenzuwirken, verhängen wir eine drakonische Einschränkung für die V1-Entwicklung: Die 72-Stunden-Regel."
                : "Complexity scales exponentially. To counteract this, we impose a draconian constraint on V1 development: The 72-Hour Rule."}
          </Text>
          
          <View style={pdfStyles.card}>
              <Text style={{...pdfStyles.text, fontWeight: 'bold', color: theme.colors.orange}}>{isDe ? "DIE REGEL" : "THE RULE"}</Text>
              <Text style={{...pdfStyles.text, fontStyle: 'italic'}}>
                  {isDe 
                    ? "\"Jedes Feature, das mehr als 72 Stunden benötigt, ist 'Vaporware'. Es muss gestrichen, vereinfacht oder verschoben werden.\""
                    : "\"Any single feature requiring more than 72 hours (3 engineering days) to implement is effectively 'vaporware'. It must be cut, simplified, or deferred.\""}
              </Text>
          </View>

          <Text style={pdfStyles.h3}>{isDe ? "Die Engineering Logik" : "The Engineering Logic"}</Text>
          <Text style={pdfStyles.text}>
              {isDe ? "Warum 72 Stunden?" : "Why 72 hours?"}
          </Text>
          <View style={{ marginLeft: 10 }}>
              <Text style={pdfStyles.text}>1. <Text style={{fontWeight: 'bold'}}>{isDe ? "Kognitive Last:" : "Cognitive Load:"}</Text> {isDe ? "Eine 72h-Aufgabe passt in das Arbeitsgedächtnis. Darüber hinaus steigen Fehlerraten." : "A 72-hour task fits in working memory. Beyond that, bug rates spike."}</Text>
              <Text style={pdfStyles.text}>2. <Text style={{fontWeight: 'bold'}}>{isDe ? "Risikominderung:" : "Risk Mitigation:"}</Text> {isDe ? "Wenn ein 72h-Feature scheitert, verlieren Sie 3 Tage. Bei 3 Wochen verlieren Sie einen Monat Runway." : "If a 72-hour feature fails, you lose 3 days. If a 3-week feature fails, you lose a month of runway."}</Text>
              <Text style={pdfStyles.text}>3. <Text style={{fontWeight: 'bold'}}>{isDe ? "Atomarer Wert:" : "Atomic Value:"}</Text> {isDe ? "Wenn es nicht reduziert werden kann, ist es zu komplex für V1." : "If it cannot be reduced, it is too complex for V1."}</Text>
          </View>

          <Footer currentPage={2} totalPages={5} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <Text style={pdfStyles.h3}>{isDe ? "Die Cut Classification Matrix" : "The Cut Classification Matrix"}</Text>
          <Text style={pdfStyles.text}>
              {isDe 
                ? "Das Ziel des MVP ist es, EINEN Kern-Job außergewöhnlich gut zu erledigen. Alles andere ist Reibung."
                : "The goal of the MVP is to solve One Core Job exceptionally well. Anything that distracts from that job is friction."}
          </Text>

          <View style={{ marginTop: theme.spacing.md }}>
              <CutItem 
                  title={isDe ? "Authentifizierung" : "Authentication"}
                  choice={isDe ? "Social Login vs. Eigenbau" : "Social Login vs. Custom"}
                  verdict={isDe ? "GUTER CUT" : "GOOD CUT"}
                  reason={isDe ? "Eigenbau dauert Wochen. Firebase/Auth0 dauert <4 Stunden." : "Building robust auth takes weeks. Firebase/Auth0 takes <4 hours."}
              />
              <CutItem 
                  title={isDe ? "Zahlungen" : "Payments"}
                  choice={isDe ? "Stripe Checkout vs. Custom UI" : "Stripe Checkout vs. Custom UI"}
                  verdict={isDe ? "GUTER CUT" : "GOOD CUT"}
                  reason={isDe ? "PCI-Compliance ist schwer. Stripe Page konvertiert genauso gut." : "PCI compliance is heavy. Stripe Page converts just as well for V1."}
              />
               <CutItem 
                  title="Admin Dashboard" 
                  choice={isDe ? "Retool/SQL vs. Custom Panel" : "Retool/SQL vs. Custom Panel"}
                  verdict={isDe ? "GUTER CUT" : "GOOD CUT"}
                  reason={isDe ? "Nutzer sehen das Admin-Panel nie. Verschwenden Sie keine V1-Zyklen." : "Users never see the admin panel. Don't waste V1 engineering cycles."}
              />
               <CutItem 
                  title={isDe ? "Kern-Workflow" : "Core Workflow"}
                  choice={isDe ? "Der 'Eine Job' (z.B. Buchung)" : "The 'One Core Job' (e.g., Booking)"}
                  verdict={isDe ? "SCHLECHTER CUT" : "BAD CUT"}
                  reason={isDe ? "Sie können den primären Nutzen nicht streichen." : "You cannot cut the primary utility. This is the hill you die on."}
                  isBadCut={true}
              />
               <CutItem 
                  title="Onboarding" 
                  choice={isDe ? "Tour vs. Video" : "Multi-step 'Tour' vs. Simple Video"}
                  verdict={isDe ? "GUTER CUT" : "GOOD CUT"}
                  reason={isDe ? "Interaktive Touren sind fragil. Nutzen Sie ein Loom-Video." : "Coding interactive 'coach marks' is fragile. Use a simple embedded Loom video."}
              />
               <CutItem 
                  title={isDe ? "Einstellungen" : "Settings"}
                  choice={isDe ? "Dark Mode / Profil" : "Dark Mode / Profile Customization"}
                  verdict={isDe ? "GUTER CUT" : "GOOD CUT"}
                  reason={isDe ? "Das sind Vitamine, keine Schmerzmittel. Bauen Sie dies in V2." : "These are 'Vitamins,' not 'Painkillers.' Build in V2."}
              />
          </View>
          
          <Footer currentPage={3} totalPages={5} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <Text style={pdfStyles.h2}>2. {isDe ? "Technical Debt vs. Geschwindigkeit" : "Technical Debt vs. Velocity"}</Text>
          <Text style={pdfStyles.text}>
              {isDe 
                ? "Tech Debt ist ein Hebel. Sie nehmen Schulden auf, um Geschwindigkeit zu tanken. Genau wie finanzielle Schulden."
                : "Tech Debt is not a mistake; it is leverage. You take on debt to fuel velocity."}
          </Text>

          <View style={{ backgroundColor: theme.colors.zinc50, padding: 10, marginVertical: 10, borderRadius: 4 }}>
              <Text style={{ fontSize: 10, fontFamily: 'Helvetica-Bold' }}>{isDe ? "DIE GESCHWINDIGKEITS-GLEICHUNG:" : "THE VELOCITY EQUATION:"}</Text>
              <Text style={{ fontSize: 10 }}>Velocity (V) = {isDe ? "Rate der Wertlieferung." : "Rate of user-facing value delivery."}</Text>
              <Text style={{ fontSize: 10 }}>Debt (D) = {isDe ? "Zinseszinseffekt, der bremst." : "Compounding drag on velocity."}</Text>
          </View>

          <Text style={pdfStyles.h3}>{isDe ? "Strategie nach Stufe" : "Strategy By Stage"}</Text>
          <View style={{ gap: 10, marginTop: 10, marginBottom: 20 }}>
              <StageCard 
                title="1. Prototype (Pre-PMF)" 
                strategy="Quick & Dirty" 
                desc={isDe ? "Monolithisch. Hartcodiert. Geschwindigkeit ist die einzige Währung." : "Monolithic. Hardcoded variables. Speed is the only currency."} 
              />
              <StageCard 
                title="2. Beta (Validation)" 
                strategy="Managed Debt" 
                desc={isDe ? "Trennung FE/BE. Testen Sie nur Kernlogik. 20% Zeit für Schuldendienst." : "Separate FE/BE. Test only core logic. Allocate 20% of sprint time to servicing debt."} 
              />
              <StageCard 
                title="3. Scale (Post-PMF)" 
                strategy="Robust" 
                desc={isDe ? "Microservices. Strenge Typen. Zuverlässigkeit ist ein Feature." : "Microservices. Strict Types. Reliability becomes a feature."} 
              />
          </View>

          <Text style={pdfStyles.h2}>3. {isDe ? "Das 'Anti-Pitch' Deck" : "The 'Anti-Pitch' Deck"}</Text>
          <Text style={pdfStyles.text}>
              {isDe 
                ? "Investoren verbringen ~3m 44s mit einem Deck. Streichen Sie Füllmaterial wie 'Mission'. Fokus auf 5 Folien."
                : "Investors spend ~3m 44s on a deck. Cut the fluff. Standard templates are bloated. Focus on these 5 slides."}
          </Text>

          <View style={{ marginTop: 10 }}>
              <SlideItem 
                num="01" 
                title={isDe ? "Das Problem (P.A.I.N.)" : "The Problem (P.A.I.N.)"} 
                desc={isDe ? "Präzise, Akut, Intensiv. 'Finanzteams verbringen 12h/Woche manuell.'" : "Precise, Acute, Intense. 'Finance teams spend 12h/week reconciling receipts.'"} 
              />
              <SlideItem 
                num="02" 
                title={isDe ? "Die Lösung (Value Delta)" : "The Solution (Value Delta)"} 
                desc={isDe ? "Effizienzgewinn. 'Reduziert Zeit von 4h auf 10m (24x Gewinn).'" : "The mathematical efficiency gain. 'Reduces processing time from 4h to 10m (24x gain).'"} 
              />
          </View>

          <Footer currentPage={4} totalPages={5} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginTop: theme.spacing.lg }}>
              <SlideItem 
                num="03" 
                title="Traction" 
                desc={isDe ? "Investoren suchen Änderungsraten. YC Standard: 10% Wachstum pro Woche." : "Investors look for rate of change. YC Standard: 10% Week-over-Week growth."} 
              />
              <SlideItem 
                num="04" 
                title={isDe ? "Der Markt (Bottom-Up)" : "The Market (Bottom-Up)"} 
                desc={isDe ? "TAM = Nutzer * Vertragswert. '240k Stores * $3k ACV = $720M Chance.'" : "TAM = Total Target Users * ACV. '240k stores * $3k ACV = $720M Opportunity.'"} 
              />
              <SlideItem 
                num="05" 
                title="Team (Founder-Market Fit)" 
                desc={isDe ? "Technische Errungenschaften. 'CTO skalierte Infra auf 10M Nutzer.'" : "Specific technical achievements. 'CTO scaled infra to 10M users at Uber.'"} 
              />
          </View>

          <View style={{ marginTop: 'auto', marginBottom: 40 }}>
               <Text style={pdfStyles.small}>REFERENCES</Text>
               <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[2] iSyncEvolution - Feature Prioritization</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[4] Lovable - MVP Guide</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[5] Ptolemay - B2B MVP Cost</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[8] Reforge - MVP Purpose</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[13] Metamindz - Tech Debt</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[17] Qubit Capital - Pitch Decks</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[22] Reddit/Startups - 10% WoW Growth</Text>
                  <Text style={{...pdfStyles.small, fontSize: 8}}>[24] Antler - TAM, SAM & SOM</Text>
               </View>
          </View>

          <Footer currentPage={5} totalPages={5} />
      </Page>
    </Document>
  );
};

const CutItem = ({ title, choice, verdict, reason, isBadCut }: any) => (
    <View style={{ marginBottom: 15, borderLeft: `2pt solid ${isBadCut ? theme.colors.red : theme.colors.zinc200}`, paddingLeft: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', color: theme.colors.zinc500 }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{choice}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: isBadCut ? theme.colors.red : theme.colors.orange, backgroundColor: theme.colors.zinc100, padding: 2 }}>{verdict}</Text>
        </View>
        <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>{reason}</Text>
    </View>
);

const StageCard = ({ title, strategy, desc }: any) => (
    <View style={{ backgroundColor: theme.colors.zinc50, padding: 10, borderRadius: 4 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.colors.orange, marginVertical: 2 }}>{strategy}</Text>
        <Text style={{ fontSize: 9, color: theme.colors.zinc500 }}>{desc}</Text>
    </View>
);

const SlideItem = ({ num, title, desc }: any) => (
    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: theme.colors.zinc200, marginRight: 10, width: 25 }}>{num}</Text>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>{desc}</Text>
        </View>
    </View>
);
