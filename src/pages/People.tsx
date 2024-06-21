import React from 'react';
import { peopleData } from '../assets/content/People';
import '../styles/People.css';

const People: React.FC = () => {
  return (
    <div className="people-page">
      <h1>People</h1>
      {peopleData.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.people.map((person, personIndex) => (
            <div key={personIndex} className="person">
              <h3>{person.name} {person.coAdvised && <span className="co-advised">{person.coAdvised}</span>}</h3>
              <p>{person.details}</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default People;