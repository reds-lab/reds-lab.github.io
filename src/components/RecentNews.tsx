// RecentNews.tsx
import React from 'react';
import '../styles/RecentNews.css';

const RecentNews: React.FC = () => {
  return (
    <section className="recent-news">
      <div className="container">
        <h2>Recent News</h2>
        <ul>
          <li>
            <span>Sep 21, 2023:</span> Our 4 papers got accepted to the Conference on Neural Information Processing Systems (NeurIPS) 2023:
            <ul>
              <li>Parallel Sampling of Diffusion Models (Spotlight)</li>
              <li>Diverse Conventions for Human-AI Collaboration</li>
              <li>Data Quality in Imitation Learning</li>
              <li>Inverse Preference Learning: Preference-based RL without a Reward Function</li>
            </ul>
          </li>
          {/* Add more news items */}
        </ul>
      </div>
    </section>
  );
};

export default RecentNews;