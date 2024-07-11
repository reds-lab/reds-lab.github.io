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
        The ReDS (Responsible Data Science) lab conducts research on safe and reliable AI systems and improved data economies. Focusing on machine learning, security, privacy, and game theory, they address challenges in data markets, AI robustness, and data protection. The lab aims to advance AI responsibly, impacting data democratization and economic equality through research in data economics, adversarial machine learning, and data privacy.
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