import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'

// Wrapper to filter out isActive prop from NavHashLink to prevent React warning
const SafeNavHashLink = ({ children, ...props }: any) => {
  const { isActive: _, ...safeProps } = props
  return <NavHashLink {...safeProps}>{children}</NavHashLink>
}

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20" height="20" loading="eager" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Pal Sonani</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2 Years Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <SafeNavHashLink smooth to="#contact" className="button">Contact</SafeNavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919081520068&text=Hello+Pal+Sonani+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Pal Sonani on WhatsApp"
        >
          <img src={whatsapp} alt="WhatsApp Contact" loading="lazy" />
        </a>
      </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Full Stack Developer Illustration" loading="lazy" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}