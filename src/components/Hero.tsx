import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/embla.css';

const OPTIONS: EmblaOptionsType = { loop: true };

// Hero.tsx
function Hero() {
  const imagePaths = [
    '../assets/content/slides/chris-curry-GYpsSWHslHA-unsplash.jpg',
    '../assets/content/slides/gary-bendig-6GMq7AGxNbE-unsplash.jpg',
    '../assets/content/slides/rabbit.jpeg',
    '../assets/content/slides/rock_ptarmigan.jpeg',
    '../assets/content/slides/sandy-millar-kKAaCeGf5wY-unsplash.jpg',
  ];

  return (
    <section className="hero">
      <EmblaCarousel slides={imagePaths} options={OPTIONS} />
    </section>
  );
}

export default Hero;