
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../styles/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Hero.tsx
function Hero() {
    return (
      <section className="hero">
         <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    )
  }

export default Hero