// Home.tsx
import Hero from '../components/Hero';
import RecentNews from '../components/RecentNews';
import '../styles/Home.css';

function Home() {
  return (
    <main>
      <Hero />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        malesuada sapien. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Sed euismod, nulla sit amet aliquam
        lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
        Nulla facilisi. Nullam euismod, nulla sit amet aliquam lacinia, nisl
        nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Nulla facilisi.
        Nullam euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl,
        nec aliquam nisl nisl sit amet nisl. Nulla facilisi.
      </p>
      <RecentNews />
    </main>
  );
}

export default Home;