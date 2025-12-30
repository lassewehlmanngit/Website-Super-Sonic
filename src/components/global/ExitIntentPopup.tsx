import React, { useState, useEffect } from 'react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('exitPopupShown');
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    if (lastShown && parseInt(lastShown) > sevenDaysAgo) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    };

    const inactivityTimer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(inactivityTimer);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem('exitPopupShown', Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    alert("Vielen Dank! Der Guide ist auf dem Weg.");
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="exit-popup-overlay" onClick={handleClose}>
      <div className="exit-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>×</button>
        
        <h2 className="text-2xl font-bold mb-4 text-center">Warte! Bevor du gehst...</h2>
        
        <div className="popup-body">
          {/* Placeholder image if the asset doesn't exist yet */}
          <div className="w-full h-32 bg-gray-100 flex items-center justify-center mb-6 rounded-lg">
             <span className="text-gray-400">PDF Preview</span>
          </div>
          {/* <img src="/assets/lead-magnet-preview.png" alt="Guide Preview" /> */}
          
          <h3 className="font-semibold text-lg">Hol dir den kostenlosen Guide:</h3>
          <p className="lead-title text-sonic-orange">"7 Moderne Web-Gesetze"</p>
          
          <p className="text-gray-600 mb-4">Lerne, was moderne Websites brauchen. (Auch wenn du uns nicht beauftragst.)</p>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Deine Email"
              name="email"
              required
              className="w-full"
            />
            <button type="submit" className="submit-button w-full">
              Guide Senden
            </button>
          </form>
          
          <p className="disclaimer text-xs text-gray-500 mt-4">
            Kein Spam. Jederzeit abmelden.
          </p>
        </div>
      </div>
    </div>
  );
}

