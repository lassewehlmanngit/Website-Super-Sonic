import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

interface Props {
  lang?: 'de' | 'en';
}

export const ModernWebLawsPDF: React.FC<Props> = ({ lang = 'en' }) => {
  const isDe = lang === 'de';

  return (
    <Document>
      <CoverPage 
          title={isDe ? "Moderne Web-Gesetze" : "Modern Web Laws"} 
          subtitle={isDe 
            ? "Ihre Website hat Löcher. Wir haben 7 Dinge gefunden, die moderne Seiten nutzen, um zu gewinnen."
            : "Your website has holes. We found 7 things modern sites use to win."}
          targetAudience={isDe ? "Allgemeine Leads / Growth Leaders" : "General Leads / Growth Leaders"}
      />

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginBottom: theme.spacing.lg }}>
              <Logo />
              <Text style={pdfStyles.h2}>Executive Summary</Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Das Web hat sich entwickelt. Die Algorithmen, die Suche (Google) und Aufmerksamkeit (Nutzer) steuern, sind ausgefeilter geworden. Um wettbewerbsfähig zu sein, müssen Sie die 7 Gesetze der modernen Webentwicklung einhalten."
                    : "The web has evolved. The algorithms that govern search (Google) and attention (Users) have become more sophisticated. To compete, you must adhere to the 7 Laws of Modern Web Development."}
              </Text>
              <Text style={pdfStyles.text}>
                  {isDe 
                    ? "Dies sind keine Marketingvorschläge. Es sind technische Anforderungen."
                    : "These are not marketing suggestions. They are engineering requirements."}
              </Text>
          </View>

          <View style={pdfStyles.divider} />

          <View style={{ marginTop: 10 }}>
              <LawItem 
                  num="01" 
                  title={isDe ? "Smart Popups (Verhaltens-Engineering)" : "Smart Popups (Behavioral Engineering)"} 
                  theory={isDe ? "\"In-your-face\" Popups zerstören Vertrauen. Nutzer haben \"Banner-Blindheit\"." : "In-your-face popups destroy trust. Users have developed 'banner blindness.'"} 
                  mechanism={isDe ? "Exit Intent. Wir verfolgen Maus-Vektoren. Auslösung nur bei Absicht zu gehen." : "Exit Intent. We track mouse velocity vectors. Popups only trigger when the user signals intent to leave (the 'kill zone')."}
                  data={isDe ? "Kontextbezogene Popups: 10-20% Konversion (vs 3% Standard)." : "Contextual popups hit 10-20% conversion rates (vs 3% standard)."}
                  protocol={isDe ? "Fragen Sie nicht sofort nach E-Mail. Bieten Sie erst Wert an." : "Do not ask for email immediately. Offer value first. Use logic gates."}
              />
              <LawItem 
                  num="02" 
                  title={isDe ? "Rechner (Das \"Geben um zu Nehmen\" Modell)" : "Calculators (The 'Give to Get' Model)"} 
                  theory={isDe ? "Statische \"Kontakt\" Formulare sind Reibung. Nutzer wollen sofortige Befriedigung." : "Static 'Contact Us' forms are friction. Users want instant gratification."} 
                  mechanism={isDe ? "Interaktive Rechner. Geben Sie eine Antwort (\"Wie viel?\"), bevor Sie fragen." : "Interactive Calculators. Give the user an answer ('How much?') before asking for an email."}
                  data={isDe ? "Rechner konvertieren zu 30-40% vs. 1-2% bei statischen Formularen." : "Calculators convert at 30-40% vs. 1-2% for static forms."}
                  protocol={isDe ? "Ersetzen Sie \"Angebot anfordern\" durch \"Sofort-Preis-Schätzer\"." : "Replace 'Request Quote' with 'Instant Price Estimator'."}
              />
          </View>
          
          <Footer currentPage={2} totalPages={4} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginTop: theme.spacing.lg }}>
              <LawItem 
                  num="03" 
                  title={isDe ? "Service Tags (JSON-LD & Semantisches SEO)" : "Service Tags (JSON-LD & Semantic SEO)"} 
                  theory={isDe ? "Google ist ein Roboter. Es parst Daten, keinen Text." : "Google is a robot. It parses data, not text."} 
                  mechanism={isDe ? "\"Versteckter Code\" (JSON-LD), der Google explizit sagt \"Wir verkaufen X\"." : "'Hidden code' (JSON-LD Schema) that explicitly tells Google 'We sell X'."}
                  result={isDe ? "Rich Snippets (Sterne, FAQ) in Suchergebnissen -> Höhere CTR." : "Rich Snippets (Stars, FAQ) in search results -> Higher CTR."}
                  protocol={isDe ? "Implementieren Sie LocalBusiness & Service Schema. Nest AggregateRating." : "Implement LocalBusiness & Service Schema. Nest AggregateRating."}
              />
               <LawItem 
                  num="04" 
                  title={isDe ? "Kostenlose Tools (Engineering als Marketing)" : "Free Tools (Engineering as Marketing)"} 
                  theory={isDe ? "Inhalt ist gesättigt. Nutzen gewinnt." : "Content is saturated. Utility wins."} 
                  mechanism={isDe ? "Bauen Sie ein Mikro-Tool (z.B. \"Kostenloser Meta Tag Generator\")." : "Build a micro-tool (e.g., 'Free Meta Tag Generator')."}
                  result={isDe ? "Rankt für Keywords mit hoher Absicht und etabliert Autorität." : "Ranks for high-intent keywords and establishes engineering authority."}
                  protocol={isDe ? "Identifizieren Sie ein Fragment Ihres Wertversprechens und bauen Sie ein Tool." : "Identify a fragment of your value proposition and build a tool for it."}
              />
               <LawItem 
                  num="05" 
                  title={isDe ? "Schnelle Geschwindigkeit (Die 1-Sekunden-Schwelle)" : "Fast Speed (The 1-Second Threshold)"} 
                  theory={isDe ? "Latenz ist entgangener Umsatz. Geschwindigkeit ist ein Feature." : "Latency is lost revenue. Speed is a feature."} 
                  data={isDe ? "1s Verzögerung = -7% Konversionen. <1s Ladezeit = 3x Anstieg." : "1s delay = -7% conversions. <1s load = 3x conversion lift."}
                  protocol={isDe ? "Nutzen Sie Next.js/Astro (SSG) und WebP. Ziel <100ms TTFB." : "Use Next.js/Astro (SSG) and WebP images. Target <100ms TTFB."}
              />
          </View>
          <Footer currentPage={3} totalPages={4} />
      </Page>

      <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
          <View style={{ marginTop: theme.spacing.lg }}>
               <LawItem 
                  num="06" 
                  title={isDe ? "Visuelle Bearbeitung (Headless CMS vs. Page Builder)" : "Visual Edits (Headless CMS vs. Page Builders)"} 
                  theory={isDe ? "Monolithische CMS (WordPress) koppeln Inhalt mit Code -> Spaghetti-Code." : "Monolithic CMS (WordPress) couples content with code, causing 'spaghetti code'."} 
                  mechanism={isDe ? "Headless Architektur. Entkoppeln Sie Inhalt (Sanity) von Code (React)." : "Headless Architecture. Decouple Content (Sanity) from Code (React)."}
                  result={isDe ? "Marketing erhält visuellen Editor. Engineering erhält sicheren Code." : "Marketing gets a Visual Editor. Engineering gets clean, secure code."}
              />
               <LawItem 
                  num="07" 
                  title={isDe ? "Eigentum (Repo vs. Miete)" : "Ownership (Repo vs. Rent)"} 
                  theory={isDe ? "Mieten auf Wix/Squarespace führt Plattformrisiko ein." : "Renting on Wix/Squarespace introduces Platform Risk."} 
                  risk={isDe ? "Vendor Lock-in. Sie können Ihre Logik nicht exportieren." : "Vendor lock-in. You cannot export your logic."}
                  protocol={isDe ? "Besitzen Sie das Repo (GitHub). Vertrag muss Ihnen IP zuweisen." : "Own the Repo (GitHub). Contract must assign IP. Code is the asset."}
              />

              <View style={{ marginTop: 20, padding: 10, backgroundColor: theme.colors.zinc50, borderRadius: 4 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>{isDe ? "FAZIT: DER ENGINEERING-IMPERATIV" : "CONCLUSION: THE ENGINEERING IMPERATIVE"}</Text>
                  <Text style={pdfStyles.text}>
                      {isDe 
                        ? "Die Strategien in diesem Bericht sind Grundvoraussetzungen für das Überleben. Wir verkaufen keine Websites; wir verkaufen Ergebnisse. Führen Sie das Protokoll aus."
                        : "The strategies outlined in this report are baseline requirements for survival. We do not sell websites; we sell engineered outcomes. Execute the protocol."}
                  </Text>
              </View>

              <View style={{ marginTop: 'auto', marginBottom: 40 }}>
                  <Text style={pdfStyles.small}>REFERENCES</Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[29] WP Rocket - Speed Stats</Text>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[31] Kanuka Digital - Load Time 2025</Text>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[40] Wisepops - Popup Stats</Text>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[42] FormStory - Form Stats</Text>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[44] Google - Structured Data</Text>
                      <Text style={{...pdfStyles.small, fontSize: 8}}>[53] Strapi - Headless vs WP</Text>
                  </View>
              </View>
          </View>
          <Footer currentPage={4} totalPages={4} />
      </Page>
    </Document>
  );
};

const LawItem = ({ num, title, theory, mechanism, data, result, risk, protocol }: any) => (
    <View style={{ marginBottom: 20, flexDirection: 'row' }}>
        <View style={{ width: 30, height: 30, backgroundColor: theme.colors.zinc800, alignItems: 'center', justifyContent: 'center', marginRight: 15, borderRadius: 4 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.colors.white }}>{num}</Text>
        </View>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 4, color: theme.colors.zinc800 }}>{title}</Text>
            
            <View style={{ paddingLeft: 10, borderLeft: `2pt solid ${theme.colors.zinc200}` }}>
                <Text style={{ fontSize: 10, marginBottom: 2 }}><Text style={{fontWeight: 'bold'}}>Theory:</Text> {theory}</Text>
                {mechanism && <Text style={{ fontSize: 10, marginBottom: 2 }}><Text style={{fontWeight: 'bold'}}>Mechanism:</Text> {mechanism}</Text>}
                {data && <Text style={{ fontSize: 10, marginBottom: 2 }}><Text style={{fontWeight: 'bold'}}>Data:</Text> {data}</Text>}
                {result && <Text style={{ fontSize: 10, marginBottom: 2 }}><Text style={{fontWeight: 'bold'}}>Result:</Text> {result}</Text>}
                {risk && <Text style={{ fontSize: 10, marginBottom: 2, color: theme.colors.red }}><Text style={{fontWeight: 'bold'}}>Risk:</Text> {risk}</Text>}
                {protocol && <Text style={{ fontSize: 10, marginTop: 2, color: theme.colors.orange }}><Text style={{fontWeight: 'bold'}}>Protocol:</Text> {protocol}</Text>}
            </View>
        </View>
    </View>
);
