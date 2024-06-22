import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/embla.css';

const OPTIONS: EmblaOptionsType = { loop: true };

// Hero.tsx
function Hero() {
  const imagePaths = [
    'src/assets/content/slides/chris-curry-GYpsSWHslHA-unsplash.jpg',
    'src/assets/content/slides/gary-bendig-6GMq7AGxNbE-unsplash.jpg',
    'src/assets/content/slides/rabbit.jpeg',
    'src/assets/content/slides/rock_ptarmigan.jpeg',
    'src/assets/content/slides/sandy-millar-kKAaCeGf5wY-unsplash.jpg',
  ];
  
  return (
    <section className="hero">
      <EmblaCarousel slides={imagePaths} options={OPTIONS} />
    </section>
  );
}

export default Hero;