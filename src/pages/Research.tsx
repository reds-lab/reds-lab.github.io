import React from 'react';
import '../styles/Research.css';

const researchAreas = [
    {
      title: "Trust in AI Systems",
      description: "Exploring methodologies to enhance user trust in AI systems through transparency, reliability, and ethical considerations."
    },
    {
      title: "Safety in Autonomous Systems",
      description: "Developing robust safety protocols and fail-safes for autonomous systems to operate reliably in dynamic environments."
    },
    {
      title: "Machine Learning Security",
      description: "Investigating vulnerabilities in machine learning models and creating defenses against adversarial attacks."
    }
  ];
  

const Research: React.FC = () => {
  return (
    <>
      <h1>Research</h1>
      {researchAreas.map((area, index) => (
        <section key={index}>
          <h2>{area.title}</h2>
          <p>{area.description}</p>
        </section>
      ))}
    </>
  );
};

export default Research;
