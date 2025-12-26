import React from 'react';
import { SEO } from '../components/SEO';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

export const Impressum: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      <SEO
        title="Impressum | Super Sonic Prototypes"
        description="Rechtliche Informationen und Anbieterkennzeichnung für Super Sonic Prototypes."
        lang="de"
        path="/de/impressum"
      />

      <ChristmasBalls />

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-12 tracking-tighter">Impressum</h1>

        <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold">Super Sonic Prototypes Pte. Ltd.</p>
            <p>[Physical Street Address]</p>
            <p>[Postal Code] Singapore</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Vertreten durch</h2>
            <p>[Director Name]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Kontakt</h2>
            <p>E-Mail: hello@supersonic.design</p>
            <p>Telefon: [Phone Number]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Registereintrag</h2>
            <p>Eingetragen im Unternehmensregister von Singapur (ACRA).</p>
            <p>Registernummer (UEN): [UEN Number]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Umsatzsteuer</h2>
            <p>
              Als Unternehmen in Singapur unterliegen wir nicht der deutschen Umsatzsteuer.
              Es gilt das Reverse-Charge-Verfahren für B2B-Kunden in Deutschland gemäß § 13b UStG.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>[Name]</p>
            <p>[Address]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Haftungsausschluss</h2>
            <p className="mb-4">
              <strong>Haftung für Inhalte</strong><br/>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              <strong>Haftung für Links</strong><br/>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
