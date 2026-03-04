import Header from './components/Header'
import Hero from './components/Hero'
import RegistrationForm from './components/RegistrationForm'
import Stats from './components/Stats'
import Features from './components/Features'
import Advantages from './components/Advantages'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import './App.css'

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero>
          <RegistrationForm />
        </Hero>
        <Stats />
        <Features />
        <Advantages />
        <FAQ />
        <CTA onCTAClick={scrollToTop} />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">UREMONT <span className="footer-accent">Страхование</span></div>
          <p>© 2026 UREMONT.com. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Публичная оферта</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
