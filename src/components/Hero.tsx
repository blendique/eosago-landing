import { ReactNode } from 'react'
import './Hero.css'

interface HeroProps {
    children: ReactNode // Will receive the Registration Form
}

const Hero = ({ children }: HeroProps) => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-card">
                    <div className="hero-content">
                        <h1 className="hero-title">Регистрация в личном кабинете</h1>
                        {children}
                    </div>
                    <div className="hero-illustration">
                        {/* Placeholder for the illustration from the screenshot */}
                        <div className="illustration-placeholder">
                            <div className="figure-left"></div>
                            <div className="figure-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
