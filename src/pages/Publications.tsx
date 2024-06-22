import React from 'react';
import '../styles/Publications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLink, faCode } from '@fortawesome/free-solid-svg-icons';
import arxivIcon from "../assets/arxiv-logomark-small.svg"; // Update the path to your SVG

const publications = [
  {
    title: "Learning Robust Manipulation Policies from Demonstrations",
    authors: "Jane Smith, John Doe, Alice Johnson",
    conference: "IEEE International Conference on Robotics and Automation (ICRA), May 2023",
    bibtex: `@inproceedings{smith2023learning, title={Learning Robust Manipulation Policies from Demonstrations}, author={Smith, Jane and Doe, John and Johnson, Alice}, booktitle={IEEE International Conference on Robotics and Automation (ICRA)}, year={2023}, month=may }`,
    arxiv: "https://arxiv.org/abs/2302.11827",
    website: "https://example.com/robust-manipulation"
  },
  {
    title: "Efficient Exploration in Reinforcement Learning using Curiosity-Driven Agents",
    authors: "Bob Brown, Charlie Davis, Eve Fisher",
    conference: "Conference on Robot Learning (CoRL), October 2024",
    bibtex: `@inproceedings{brown2024efficient, title={Efficient Exploration in Reinforcement Learning using Curiosity-Driven Agents}, author={Brown, Bob and Davis, Charlie and Fisher, Eve}, booktitle={Conference on Robot Learning (CoRL)}, year={2024}, month=oct }`,
    code: "https://github.com/bobbrown/curious-agents"
  },
  {
    title: "Multi-Task Learning for Robotic Grasping",
    authors: "Grace Harris, Isaac Jenkins",
    conference: "Robotics: Science and Systems (RSS), July 2023",
    bibtex: `@inproceedings{harris2023multitask, title={Multi-Task Learning for Robotic Grasping}, author={Harris, Grace and Jenkins, Isaac}, booktitle={Robotics: Science and Systems (RSS)}, year={2023}, month=jul }`,
    arxiv: "https://arxiv.org/abs/2301.08142"
  },
  {
    title: "Sim-to-Real Transfer for Dexterous Manipulation",
    authors: "Olivia Parker, Quinn Roberts",
    conference: "International Symposium on Experimental Robotics (ISER), June 2024",
    bibtex: `@inproceedings{parker2024simtoreal, title={Sim-to-Real Transfer for Dexterous Manipulation}, author={Parker, Olivia and Roberts, Quinn}, booktitle={International Symposium on Experimental Robotics (ISER)}, year={2024}, month=jun }`,
    website: "https://example.com/sim-to-real"
  }
];

const Publications: React.FC = () => {
  const downloadBibtex = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <h1>Publications</h1>
      <table>
        <tbody>
          {publications.map((pub, index) => (
            <tr key={index} style={{ height: '150px' }}>
              <td>
                <b>{pub.title}</b><br />
                {pub.authors}<br />
                <i>{pub.conference}</i><br />
                <button className="btn" onClick={() => downloadBibtex(`${pub.title}.bib`, pub.bibtex)}>
                  <FontAwesomeIcon icon={faDownload} /> BibTeX
                </button>
                {pub.arxiv && (
                  <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                      <img src={arxivIcon} alt="arXiv" style={{ width: '1em', height: '1em', marginRight: '0.25em' }} /> arXiv
                    </button>
                  </a>
                )}
                {pub.website && (
                  <a href={pub.website} target="_blank" rel="noopener noreferrer">
                    <button className="btn"><FontAwesomeIcon icon={faLink} /> Website</button>
                  </a>
                )}
                {pub.code && (
                  <a href={pub.code} target="_blank" rel="noopener noreferrer">
                    <button className="btn"><FontAwesomeIcon icon={faCode} /> Code</button>
                  </a>
                )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Publications;
