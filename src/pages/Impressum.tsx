import React from 'react';
import { SEO } from '../components/SEO';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

export const Impressum: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="Impressum | Super Sonic Prototypes"
        description="Rechtliche Informationen und Anbieterkennzeichnung für Super Sonic Prototypes."
        lang="de"
        path="/de/impressum"
      />

      {/* <ChristmasBalls /> */}

      <div className="container-responsive max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-tighter">Impressum</h1>

        <div className="space-y-6 md:space-y-8 text-zinc-600 leading-relaxed text-base md:text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold">Super Sonic Prototypes Pte. Ltd.</p>
            <p>[Physical Street Address]</p>
            <p>[Postal Code] Singapore</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Vertreten durch</h2>
            <p>Lasse [Nachname]</p>
            <p>Geschäftsführer (Director)</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Kontakt</h2>
            <p>E-Mail: hello@supersonic.design</p>
            <p>Telefon: [Phone Number]</p>
            <p>Website: https://supersonic.design</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Registereintrag</h2>
            <p>Eingetragen im Unternehmensregister von Singapur (ACRA).</p>
            <p>Registernummer (UEN): [UEN Number]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Umsatzsteuer</h2>
            <p>
              Als Unternehmen mit Sitz in Singapur unterliegen wir nicht der deutschen Umsatzsteuer.
              Für B2B-Kunden in Deutschland gilt das Reverse-Charge-Verfahren gemäß § 13b UStG.
              Der Leistungsempfänger schuldet die Umsatzsteuer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Lasse [Nachname]</p>
            <p>[Address]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:no-underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen, da wir ausschließlich B2B-Dienstleistungen anbieten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Haftungsausschluss</h2>
            <p className="mb-4">
              <strong>Haftung für Inhalte</strong><br/>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch 
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-4">
              <strong>Haftung für Links</strong><br/>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              <strong>Urheberrecht</strong><br/>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
              der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. 
              Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Anwendbares Recht</h2>
            <p>
              Für alle Rechtsbeziehungen zwischen Super Sonic Prototypes Pte. Ltd. und dem Kunden gilt 
              singapurisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Singapur, sofern 
              nicht zwingende gesetzliche Vorschriften dem entgegenstehen.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
