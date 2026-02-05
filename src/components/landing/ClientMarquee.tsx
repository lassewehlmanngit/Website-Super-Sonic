import React from 'react';

interface ClientMarqueeProps {
  lang: 'de' | 'en';
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const clients = ["VOLKSWAGEN", "ALLIANZ", "NOVARTUM", "SINNERSCHRADER", "SPARKASSE", "BLVRD", "MAKROSOLUTIONS", "NEVARIS"];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-zinc-100">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap motion-safe:animate-marquee">
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-12 md:gap-24 items-center mx-6 md:mx-12">
              {clients.map((client, i) => (
                <span 
                  key={`${loopIndex}-${i}`} 
                  className="text-zinc-300 font-black fluid-2xl tracking-tighter hover:text-sonic-orange transition-colors duration-500 cursor-default uppercase"
                >
                  {client}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
