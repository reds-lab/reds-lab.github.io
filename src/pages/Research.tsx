import React from 'react';
import '../styles/Research.css';

const researchAreas = [
  {
    title: "Human-Robot Interaction",
    description: "Focusing on creating intelligent systems that can safely and effectively interact with humans."
  },
  {
    title: "Machine Learning for Robotics",
    description: "Developing algorithms that enable robots to learn and adapt in complex environments."
  },
  {
    title: "Autonomous Systems",
    description: "Designing reliable and safe autonomous systems for various applications."
  }
];

const Research: React.FC = () => {
  return (
    <div className="research-page">
      <h1>Research</h1>
      {researchAreas.map((area, index) => (
        <section key={index}>
          <h2>{area.title}</h2>
          <p>{area.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Research;