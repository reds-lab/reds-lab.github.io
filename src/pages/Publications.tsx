import React from 'react';
import '../styles/Publications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLink, faCode, faFile } from '@fortawesome/free-solid-svg-icons';
import arxivIcon from "../assets/arxiv-logomark-small.svg";

import publications2020 from '../assets/content/Publications/2020pubs';
import publications2021  from '../assets/content/Publications/2021pubs';
import publicationsPre2020  from '../assets/content/Publications/pre2020pubs';
import publications2022 from '../assets/content/Publications/2022pubs';
import publications2023 from '../assets/content/Publications/2023pubs';
import publications2024 from '../assets/content/Publications/2024pubs';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  bibtex?: any;
  arxiv?: string;
  website?: string;
  code?: string;
  openreview?: string;
  highlights?: string[];
}

export const renderPublications = (publications: Publication[]) => {
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
    <table>
      <tbody>
        {publications.map((pub, index) => (
          <tr key={index} style={{ height: '150px' }}>
            <td>
              <b>{pub.title}</b><br />
              {pub.authors}<br />
              <i>{pub.conference}</i><br />
              {pub.highlights && pub.highlights.length > 0 && (
                <ul style={{ margin: '0px', paddingLeft: '0px', listStyleType: 'none' }}>
                  {pub.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex} 
                      style={{ color: 'red', fontWeight: 'bold' }}
                      dangerouslySetInnerHTML={{ __html: highlight }}
                    />
                  ))}
                </ul>
              )}
              {pub.bibtex && (
                <button className="btn" onClick={() => downloadBibtex(`${pub.title}.bib`, pub.bibtex)}>
                  <FontAwesomeIcon icon={faDownload} /> BibTeX
                </button>
              )}
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
              {pub.openreview && (
                <a href={pub.openreview} target="_blank" rel="noopener noreferrer">
                  <button className="btn"><FontAwesomeIcon icon={faFile} /> OpenReview</button>
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Publications: React.FC = () => {
  return (
    <>
      <h1>Publications</h1>
      <h2>2024</h2>
      {renderPublications(publications2024)}
      <h2>2023</h2>
      {renderPublications(publications2023)}
      <h2>2022</h2>
      {renderPublications(publications2022)}
      <h2>2021</h2>
      {renderPublications(publications2021)}
      <h2>2020</h2>
      {renderPublications(publications2020)}
      <h2>Pre-2020</h2>
      {renderPublications(publicationsPre2020)}
    </>
  );
};

export default Publications;