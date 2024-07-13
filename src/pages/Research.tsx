// Research.tsx
import React from 'react';
import ResearchLinks from '../components/ResearchLinks';
import '../styles/Research.css';

const Research: React.FC = () => {

  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Research</h1>
      </header>
      <article className="research-content">
        <p>
          Our mission is to develop theoretical foundations and practical algorithms for responsible AI.
          Our group focuses on establishing a formal understanding of data's impact on machine learning outcomes
          and co-designing data and learning algorithms to build sample-efficient, safe, human-aligned AI systems.
          To realize this vision, we conduct interdisciplinary research that integrates insights from machine learning,
          game theory, optimization, statistics, and social science.
        </p>
        <ResearchLinks/>
      </article>
    </div>
  );
};

export default Research;
