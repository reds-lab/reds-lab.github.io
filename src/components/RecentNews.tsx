// components/RecentNews.tsx
import React from 'react';
// src/types/NewsItem.ts

export interface NewsItem {
  date: string;
  content: string;
}

interface RecentNewsProps {
  news: NewsItem[];
}

const RecentNews: React.FC<RecentNewsProps> = ({ news }) => {
  return (
    <ul className="recent-news-list">
      {news.map((item, index) => (
        <li key={index}>
          <strong>{item.date}:</strong> {item.content}
        </li>
      ))}
    </ul>
  );
};

export default RecentNews;