import Header from './components/Header'
import Hero from './components/Hero'
import RegistrationForm from './components/RegistrationForm'
import Stats from './components/Stats'
import Features from './components/Features'
import Advantages from './components/Advantages'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
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
      <Footer />
    </div>
  )
}

export default App
