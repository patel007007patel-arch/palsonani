import { Container } from './styles'
import whatsapp from '../../assets/whatsapp.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Developed by Pal Sonani
        </p>
      </div>
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
    </Container>
  )
}
