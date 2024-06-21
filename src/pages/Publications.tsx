import React from 'react';
import '../styles/Publications.css';

const publications = [
  {
    title: "An Example Paper Title",
    authors: "John Doe, Jane Smith, Alice Johnson",
    conference: "ICRA 2024",
    link: "https://example.com/paper1"
  },
  {
    title: "Another Research Paper",
    authors: "Bob Brown, Charlie Davis",
    conference: "RSS 2023",
    link: "https://example.com/paper2"
  }
];

const Publications: React.FC = () => {
  return (
    <div className="publications-page">
      <h1>Publications</h1>
      <ul>
        {publications.map((pub, index) => (
          <li key={index}>
            <h3><a href={pub.link}>{pub.title}</a></h3>
            <p>{pub.authors}</p>
            <p><em>{pub.conference}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;