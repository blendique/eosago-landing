import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-col footer-brand">
                        <div className="logo-area">
                            <div className="logo-icon"></div>
                            <span className="logo-text">UREMONT</span>
                        </div>

                        <div className="footer-contact-block">
                            <h4 className="footer-col-title">Горячая линия</h4>
                            <a href="tel:+78003500507" className="footer-link">+7 (800) 350-05-07</a>
                        </div>

                        <div className="footer-contact-block">
                            <h4 className="footer-col-title">Telegram</h4>
                            <a href="https://t.me/uremont_support" className="footer-link">t.me/uremont_support</a>
                        </div>

                        <div className="footer-contact-block" style={{ marginTop: '16px' }}>
                            <a href="mailto:support@uremont.com" className="footer-link footer-email">support@uremont.com</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Города</h4>
                        <ul className="footer-links-list">
                            <li><a href="#">Москва</a></li>
                            <li><a href="#">Санкт-Петербург</a></li>
                            <li><a href="#">Воронеж</a></li>
                            <li><a href="#">Екатеринбург</a></li>
                            <li><a href="#">Казань</a></li>
                            <li><a href="#">Краснодар</a></li>
                            <li><a href="#">Красноярск</a></li>
                            <li><a href="#">Челябинск</a></li>
                            <li><a href="#">Ростов-на-Дону</a></li>
                            <li><a href="#">Сочи</a></li>
                            <li><a href="#">Нижний Новгород</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">UREMONT</h4>
                        <ul className="footer-links-list">
                            <li><a href="#">Ремонт авто</a></li>
                            <li><a href="#">Страхование</a></li>
                            <li><a href="#">Для бизнеса</a></li>
                            <li><a href="#">Вопрос-ответ</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Информация</h4>
                        <ul className="footer-links-list">
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Согласия и оферты</a></li>
                            <li><a href="#">Как это работает</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2016-2026 – UREMONT. Все права защищены
                    </div>
                    <div className="footer-badges">
                        <div className="footer-badge">
                            <span className="badge-text" style={{ fontSize: '9px', lineHeight: 1.2 }}>Цифровой<br />Прорыв года 2019</span>
                        </div>
                        <div className="footer-badge">
                            <span className="badge-text" style={{ fontSize: '9px', lineHeight: 1.2 }}>Премия<br />Рунета 2018</span>
                        </div>
                        <div className="footer-badge badge-sk">
                            <span className="badge-icon-text">Sk</span>
                            <span className="badge-text" style={{ fontSize: '9px', lineHeight: 1.2 }}>Сколково</span>
                        </div>
                        <div className="footer-socials">
                            <a href="#" className="social-icon">VK</a>
                            <a href="#" className="social-icon">TG</a>
                            <a href="#" className="social-icon">OK</a>
                            <a href="#" className="social-icon" style={{ borderRadius: '50%' }}>ru</a>
                        </div>
                    </div>
                </div>

                <div className="footer-legal">
                    Свидетельство на товарный знак UREMONT №600792 зарегистрировано в Государственном реестре товарных знаков и знаков обслуживания Российской Федерации 09.01.2017г. Свидетельство о регистрации СМИ ЭЛ №ФС77-68496 выдано федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) 27.01.2017г. При использовании материалов гиперссылка на Uremont.com обязательна.<br />
                    Правообладатель ООО "Юремонт" ИНН 7722475214
                </div>
            </div>
        </footer>
    );
};

export default Footer;
