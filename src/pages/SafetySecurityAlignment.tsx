import React from 'react';
import '../styles/Research.css';  // Assuming you have this CSS file
import { renderPublications } from './Publications';
import { vulnerabilityAssessment, robustness, alignment } from '../assets/content/Research/safetysecurityalignment.ts'

import ResearchLinks from '../components/ResearchLinks.tsx';

const SafetySecurityAlignment: React.FC = () => {
  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Safety, Security, and Alignment</h1>
      </header>
      <article className="research-content">
      <ResearchLinks/>

        <p>
          AI brings immense potential for innovation and progress across various sectors of society. However, this 
          technological leap also introduces significant risks and challenges. As AI systems become more powerful 
          and pervasive, ensuring their safety, security, and alignment with human values becomes paramount. 
          Unchecked, AI could make biased or harmful decisions, be exploited for malicious purposes, or act in ways 
          that conflict with human interests.
        </p>

        <p>
          Our research aims to address these challenges and ensure that AI systems operate safely, securely, and in 
          alignment with human values and interests. To achieve this, we focus on the following critical aspects:
        </p>

        <ol>
          <li>
            <strong>Vulnerability Assessment:</strong> We conduct comprehensive evaluations of AI models to identify 
            potential weaknesses, such as susceptibility to jailbreaking prompts (inputs designed to bypass ethical 
            constraints), backdoor attacks, and issues of excessive caution or over-refusal.
          </li>
          <li>
            <strong>Model Robustness:</strong> We develop AI models that maintain reliability and accuracy across 
            various scenarios, including edge cases and adversarial inputs designed to mislead or manipulate the system.
          </li>
          <li>
            <strong>Alignment:</strong> We explore algorithms to align AI systems' behavior with the values of 
            different stakeholders, addressing the complex challenge of balancing potentially conflicting interests 
            and ethical considerations.
          </li>
        </ol>

        <p>
          By advancing these interconnected areas, we aim to foster AI technologies that can be safely and confidently 
          deployed in real-world applications, maximizing benefits to society while minimizing potential risks.
        </p>
        <h2>Selected Publications</h2>
        <h3>Vulnerability Assessment</h3>
        {renderPublications(vulnerabilityAssessment)}

        <h3>Robustness</h3>
        {renderPublications(robustness)}

        <h3>Alignment</h3>
        {renderPublications(alignment)}
      </article>
    </div>
  );
};

export default SafetySecurityAlignment;