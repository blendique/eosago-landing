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
                    <a href="#insurance">Страхование</a>
                    <a href="#finance">Финансы</a>
                </nav>
                <div className="header-actions">
                    <button className="btn-outline">Войти</button>
                    <button className="btn-primary">Зарегистрироваться</button>
                </div>
            </div>
        </header>
    )
}

export default Header
