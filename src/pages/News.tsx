// pages/NewsPage.tsx
import React from 'react';
import RecentNews from '../components/RecentNews';
import recentNews from '../assets/content/News/news.ts';

const NewsPage: React.FC = () => {
  return (
    <main>
      <h1>All News</h1>
      <RecentNews news={recentNews} />
    </main>
  );
};

export default NewsPage;