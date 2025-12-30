import React from 'react';

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
    <section className="origin-story py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Warum ich Agenturen verließ</h2>
        
        <div className="timeline relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform md:-translate-x-1/2"></div>
          
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item flex flex-col md:flex-row gap-8 mb-12 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="flex-1 md:text-right">
                 {i % 2 !== 0 && (
                    <div className="hidden md:block">
                        <div className="text-4xl font-bold text-zinc-200 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-zinc-600">{item.description}</p>
                    </div>
                 )}
                 <div className="md:hidden pl-12">
                    <div className="text-4xl font-bold text-zinc-200 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-600">{item.description}</p>
                 </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sonic-orange rounded-full border-4 border-white transform -translate-x-1/2 mt-2 z-10"></div>

              {/* Empty Side / Content Side for Desktop Alternate */}
              <div className="flex-1">
                 {i % 2 === 0 && (
                    <div className="hidden md:block text-left">
                        <div className="text-4xl font-bold text-zinc-200 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-zinc-600">{item.description}</p>
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

