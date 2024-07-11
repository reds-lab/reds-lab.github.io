// Research.tsx
import React from 'react';
import { Link } from 'react-router-dom';
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

        <table className="research-bubble">
          <tr>
            <td className="rb-img">
              <Link to="/research/data-centric-ai">
                <img src="/research/website_images/data-centric-ai.gif" alt="Data-Centric AI" />
              </Link>
            </td>
            <td className="rb-text">
              <Link to="/research/data-centric-ai">Better Data, Better Models</Link>
            </td>
          </tr>
          <tr>
            <td className="rb-img">
              <Link to="/research/safety-security-alignment">
                <img src="/research/website_images/safety-security-alignment.gif" alt="Safety, Security, and Alignment" />
              </Link>
            </td>
            <td className="rb-text">
              <Link to="/research/safety-security-alignment">Safety, Security, and Alignment</Link>
            </td>
          </tr>
          <tr>
            <td className="rb-img">
              <Link to="/research/privacy">
                <img src="/research/website_images/privacy.gif" alt="Privacy" />
              </Link>
            </td>
            <td className="rb-text">
              <Link to="/research/privacy">Privacy Risk Assessment</Link>
            </td>
          </tr>
        </table>
      </article>
    </div>
  );
};

export default Research;