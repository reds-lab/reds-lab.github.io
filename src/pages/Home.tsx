// Home.tsx
import Hero from '../components/Hero';
import RecentNews from '../components/RecentNews';
import '../styles/Home.css';

function Home() {
  return (
    <main>
      <Hero />
      <p>
        The ReDS (Responsible Data Science) lab conducts research on safe and reliable AI systems and improved data economies. Focusing on machine learning, security, privacy, and game theory, they address challenges in data markets, AI robustness, and data protection. The lab aims to advance AI responsibly, impacting data democratization and economic equality through research in data economics, adversarial machine learning, and data privacy.
      </p>
      <RecentNews />
    </main>
  );
}

export default Home;