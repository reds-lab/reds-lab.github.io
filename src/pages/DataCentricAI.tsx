import React, { useEffect, useState } from 'react';

// Extend the Window interface
declare global {
  interface Window {
    SlidesLiveEmbed?: any;
  }
}

const DataCentricAI: React.FC = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://slideslive.com/embed_presentation.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.SlidesLiveEmbed) {
      setTimeout(() => {
        new window.SlidesLiveEmbed('presentation-embed-39013503', {
          presentationId: '39013503',
          autoPlay: false,
          verticalEnabled: true,
          startTime: 1320,
        });
      }, 1000);
    }
  }, [isScriptLoaded]);

  return (
    <div>
      <h2>Data Centric AI Presentation</h2>
      <div id="presentation-embed-39013503" style={{width: '100%', height: '500px'}}></div>
    </div>
  );
};

export default DataCentricAI;