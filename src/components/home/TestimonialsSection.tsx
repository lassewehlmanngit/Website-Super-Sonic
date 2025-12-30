import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo: string;
  logo?: string;
  rating?: number;
}

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
    <div className="testimonial-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="rating mb-4 text-yellow-400 text-lg">
        {"⭐".repeat(rating)}
      </div>
      
      <blockquote className="quote text-lg text-zinc-700 italic mb-6">
        "{quote}"
      </blockquote>
      
      <div className="author-section flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
             {/* Use photo if available, else fallback */}
             {photo ? (
               <img src={photo} alt={author} className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold">
                    {author.charAt(0)}
                </div>
             )}
        </div>
        <div className="author-info flex-grow">
          <div className="author-name font-bold text-zinc-900">{author}</div>
          <div className="author-title text-sm text-zinc-500">{title}</div>
          <div className="author-company text-sm text-zinc-500">{company}</div>
        </div>
        {logo && (
          <img src={logo} alt={company} className="company-logo h-8 opacity-60 grayscale hover:grayscale-0 transition-all" />
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
      photo: "",
    },
    {
      quote: "Endlich eine Agentur, die versteht, dass Geschwindigkeit Geld bedeutet.",
      author: "Sarah Meyer",
      title: "CEO",
      company: "Fashion Direct",
      photo: "",
    },
    {
      quote: "Der Code gehört uns. Das war das wichtigste Kriterium. Super Sonic hat geliefert.",
      author: "Tom Richter",
      title: "CTO",
      company: "FinApp AG",
      photo: "",
    }
  ];

  return (
    <section className="testimonials-section py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="section-headline text-center mb-12">Was Kunden sagen</h2>
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

