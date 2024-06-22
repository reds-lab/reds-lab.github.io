import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { peopleData } from '../assets/content/People/People';
import '../styles/People.css';

const People: React.FC = () => {
  return (
    <>
      <h1>People</h1>
      {peopleData.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.people.map((person, personIndex) => (
            <div key={personIndex} className="person-container">
              <div className="person-profile">
                {person.profileImage && (
                  <img src={person.profileImage} alt={person.name} className="profile-image" />
                )}
                <div className="person-info">
                  <div className="person-header">
                    <h3>
                      {person.name}
                      {person.coAdvised && <span className="co-advised">{person.coAdvised}</span>}
                    </h3>
                    <div className="person-links">
                      {person.links.website && (
                        <a href={person.links.website} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGlobe} />
                        </a>
                      )}
                      {person.links.github && (
                        <a href={person.links.github} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      )}
                      {person.links.googleScholar && (
                        <a href={person.links.googleScholar} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </a>
                      )}
                      {person.links.linkedin && (
                        <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      )}
                      {person.links.twitter && (
                        <a href={person.links.twitter} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="person-details">{person.details}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default People;