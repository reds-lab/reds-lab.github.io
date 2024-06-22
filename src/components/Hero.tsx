import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/embla.css';
import chrisCurry from '../assets/content/slides/chris-curry-GYpsSWHslHA-unsplash.jpg';
import garyBendig from '../assets/content/slides/gary-bendig-6GMq7AGxNbE-unsplash.jpg';
import rabbit from '../assets/content/slides/rabbit.jpeg';
import rockPtarmigan from '../assets/content/slides/rock_ptarmigan.jpeg';
import sandyMillar from '../assets/content/slides/sandy-millar-kKAaCeGf5wY-unsplash.jpg';

const OPTIONS: EmblaOptionsType = { loop: true };

// Hero.tsx
function Hero() {
    const imagePaths = [chrisCurry, garyBendig, rabbit, rockPtarmigan, sandyMillar];

  return (
    <section className="hero">
      <EmblaCarousel slides={imagePaths} options={OPTIONS} />
    </section>
  );
}

export default Hero;