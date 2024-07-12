// Home.tsx

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import RecentNews from '../components/RecentNews';
import recentNews from '../assets/content/News/news.ts';
import { NewsItem } from '../components/RecentNews.tsx';
import '../styles/Home.css';

function Home() {
  // Get the 5 most recent news items
  const latestNews: NewsItem[] = recentNews.slice(0, 5);

  return (
    <main>
      <Hero />
      <p>
      Welcome to the ReDS (Responsible Data Science) lab website! Our mission is to develop theoretical foundations and practical algorithms for responsible AI. Our group focuses on establishing a formal understanding of data's impact on machine learning outcomes and co-designing data and learning algorithms to build <strong>efficient, safe, human-aligned</strong> AI systems.
      </p>
      <section>
        <h2>Recent News</h2>
        <RecentNews news={latestNews} />
        <Link to="/news" className="more-news-link">See all news</Link>
      </section>
    </main>
  );
}

export default Home;