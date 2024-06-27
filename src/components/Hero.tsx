import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/embla.css';
import { groupPhotos } from '../assets/content/slides/Images';

const OPTIONS: EmblaOptionsType = { loop: true };

// Hero.tsx
function Hero() {
    

  return (
    <section className="hero">
      <EmblaCarousel slides={groupPhotos} options={OPTIONS} />
    </section>
  );
}

export default Hero;