import React, { useState, useEffect } from 'react';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <a href="/start-project" className="cta-primary">
        Projekt starten
      </a>
      <a href="tel:+4915123456789" className="cta-secondary">
        Anrufen
      </a>
    </div>
  );
}

