import React from 'react';
import '../styles/Research.css';  // Assuming you have this CSS file
import { renderPublications } from './Publications.tsx';
import { privacyRiskAssessment, privacyPreservingLearning } from '../assets/content/Research/privacy.ts';
import ResearchLinks from '../components/ResearchLinks.tsx';

const Privacy: React.FC = () => {
  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Privacy</h1>
      </header>
      <article className="research-content">
      <ResearchLinks/>

        <p>
          The proliferation of machine learning and data analytics has revolutionized our ability to extract 
          insights and build predictive models from vast amounts of data. However, this advancement comes with 
          a significant challenge: much of this data is sensitive and proprietary. Our research focuses on two key areas:
        </p>

        <ol>
          <li>
            <strong>Privacy Risk Assessment:</strong> We aim to quantify and understand potential privacy 
            leakages in machine learning models. This includes investigating attacks such as membership 
            inference and model inversion.
          </li>
          <li>
            <strong>Privacy-Preserving Learning and Defenses:</strong> We develop techniques to mitigate 
            privacy risks faced by users who contribute their data to build AI models and safeguard them 
            from unauthorized usage of their data.
          </li>
        </ol>

        <p>
          By advancing these interconnected areas, we aim to develop an AI ecosystem that offers strong 
          utility while respecting individuals' privacy.
        </p>
        
        <h2>Selected Publications</h2>
        <h3>Privacy Risk Assessment</h3>
        {renderPublications(privacyRiskAssessment)}

        <h3>Privacy-Preserving Learning and Defenses</h3>
        {renderPublications(privacyPreservingLearning)}
      </article>
    </div>
  );
};

export default Privacy;