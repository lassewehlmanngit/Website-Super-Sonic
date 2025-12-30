import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className="featured-case py-12 mb-20">
      <div className="featured-container bg-black rounded-[3rem] overflow-hidden text-white grid grid-cols-1 lg:grid-cols-2">
        <div className="featured-image relative min-h-[400px] lg:min-h-full">
           {data.thumbnail ? (
              <img src={data.thumbnail} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
           ) : (
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-bold text-2xl">
                  Featured Project
              </div>
           )}
        </div>
        
        <div className="featured-content p-12 lg:p-20 flex flex-col justify-center">
          <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{data.title}</h2>
              <p className="client-info text-zinc-400 font-mono text-sm uppercase tracking-wider">{data.client} • {data.industry}</p>
          </div>
          
          <div className="challenge mb-8 border-l-2 border-zinc-700 pl-6">
            <h3 className="text-zinc-500 font-bold mb-2 text-sm uppercase">Die Herausforderung</h3>
            <p className="text-zinc-300 leading-relaxed">{data.challenge}</p>
          </div>
          
          <div className="solution mb-12 border-l-2 border-sonic-orange pl-6">
            <h3 className="text-sonic-orange font-bold mb-2 text-sm uppercase">Was wir gebaut haben</h3>
            <p className="text-zinc-300 leading-relaxed">{data.solution}</p>
          </div>
          
          <div className="results mb-12">
            <h3 className="text-white font-bold mb-6 text-sm uppercase">Das Ergebnis</h3>
            <div className="results-grid grid grid-cols-3 gap-6">
              {data.results.map((r, i) => (
                <div key={i} className="result-item">
                  <div className="result-value text-3xl font-bold text-white mb-1">{r.value}</div>
                  <div className="result-label text-zinc-500 text-xs uppercase">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <blockquote className="client-quote text-lg italic text-zinc-400 mb-8">
            "{data.quote}"
            <footer className="text-sm font-normal text-zinc-500 mt-4 not-italic">— {data.quoteAuthor}, {data.quoteTitle}</footer>
          </blockquote>
          
          <Link to={data.link} className="view-full inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-center hover:bg-zinc-200 transition-colors">
            Komplette Case Study →
          </Link>
        </div>
      </div>
    </section>
  );
}

