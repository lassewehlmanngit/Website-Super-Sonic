import React from 'react';
import { SEO } from '../components/SEO';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { businessConfig } from '../config/business';

export const Impressum: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="Impressum & Rechtliche Angaben | Norddorf Webdesign & Software"
        description="Offizielles Impressum von Norddorf. Vollständige Anbieterkennzeichnung gemäß TMG. Transparenz und Rechtssicherheit für unsere mittelständischen Kunden."
        lang="de"
        path="/de/impressum"
      />

      {/* <ChristmasBalls /> */}

      <div className="container-responsive max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-tighter">Impressum</h1>

        <div className="space-y-6 md:space-y-8 text-zinc-600 leading-relaxed text-base md:text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold">{businessConfig.name}</p>
            <p>Ein Angebot der:</p>
            <p className="font-bold">{businessConfig.legalName}</p>
            <p>{businessConfig.address.street}</p>
            <p>{businessConfig.address.building}</p>
            <p>{businessConfig.address.postalCode} {businessConfig.address.city}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Vertreten durch</h2>
            <p>{businessConfig.director}</p>
            <p>Geschäftsführer (Director)</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Kontakt</h2>
            <p>E-Mail: {businessConfig.contact.email}</p>
            <p>Telefon: {businessConfig.contact.phone}</p>
            <p>Website: {businessConfig.contact.website}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Registereintrag</h2>
            <p>Eingetragen im Unternehmensregister von Singapur ({businessConfig.registration.authority}).</p>
            <p>Registernummer (UEN): {businessConfig.registration.uen}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Umsatzsteuer</h2>
            <p>
              Als Unternehmen mit Sitz in Singapur unterliegen wir nicht der deutschen Umsatzsteuer.
              Für B2B-Kunden in Deutschland und der EU gilt das Reverse-Charge-Verfahren gemäß § 13b UStG (bzw. entsprechende EU-Richtlinien). Der Leistungsempfänger schuldet die Umsatzsteuer am Ort des Leistungsbezugs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>{businessConfig.director}</p>
            <p>{businessConfig.address.street}</p>
            <p>{businessConfig.address.postalCode} {businessConfig.address.city}</p>
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
            <h2 className="text-xl font-bold text-black mb-4">Haftungsausschluss (Disclaimer)</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold text-black mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-black mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Anwendbares Recht</h2>
            <p>
              Für alle Rechtsbeziehungen zwischen {businessConfig.legalName} und dem Kunden gilt 
              singapurisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Singapur, sofern 
              nicht zwingende gesetzliche Vorschriften dem entgegenstehen.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
