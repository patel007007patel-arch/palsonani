import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

// Wrapper to filter out isActive prop from NavHashLink to prevent React warning
const SafeNavHashLink = ({ children, ...props }: any) => {
  // Filter out isActive if it's passed as a prop (it shouldn't be, but just in case)
  const { isActive: _, ...safeProps } = props
  return <NavHashLink {...safeProps}>{children}</NavHashLink>
}

export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Pal "}</span>
          <span>{" Sonani/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <SafeNavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </SafeNavHashLink>
          <SafeNavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </SafeNavHashLink>
          <SafeNavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </SafeNavHashLink>
          <SafeNavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </SafeNavHashLink>
          <a href="#" target="_blank" className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
