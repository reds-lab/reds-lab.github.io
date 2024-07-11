import React, { useEffect } from 'react';

// Extend the Window interface
declare global {
  interface Window {
    SlidesLiveEmbed?: any; // You can replace 'any' with a more specific type if available
  }
}

const DataCentricAI: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://slideslive.com/embed_presentation.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.SlidesLiveEmbed) {
      new window.SlidesLiveEmbed('presentation-embed-39013503', {
        presentationId: '39013503',
        autoPlay: false,
        verticalEnabled: true,
        startTime: 1320,
      });
    }
  }, []);

  return (
    <div>
      {/* Other components */}
      <div id="presentation-embed-39013503"></div>
      {/* Other components */}
    </div>
  );
};

export default DataCentricAI;