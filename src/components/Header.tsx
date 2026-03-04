import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-area">
                    <div className="logo-icon"></div>
                    <span className="logo-text">UREMONT</span>
                </div>
                <nav className="header-nav">
                    <a href="#service">Обслуживание автомобиля</a>
                    <a href="#insurance">Страхование</a>
                    <a href="#business">Для бизнеса</a>
                    <a href="#partnership">Партнерство</a>
                </nav>
                <div className="header-actions">
                    <a href="#contacts" className="header-action-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>Контакты</span>
                    </a>
                    <a href="https://insurance.uremont.com/lk/auth" className="header-action-link header-login-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        <span>Войти</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
