import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import './Features.css'

const features = [
    {
        id: 1,
        title: 'Единое окно для всех полисов',
        description: 'Оформляйте ОСАГО, КАСКО и Ипотечное страхование в одном кабинете. Забудьте про десятки паролей от разных систем.',
        bullets: ['18 ведущих страховых компаний', 'Умный подбор лучших тарифов', 'Моментальный расчет'],
        reversed: false,
    },
    {
        id: 2,
        title: 'Моментальные выплаты',
        description: 'Мы ценим ваше время. Получайте до 60% КВ от стоимости полиса прямо на свой счет по первому запросу.',
        bullets: ['Вывод средств за 3 дня', 'Официальный договор', 'Прозрачная статистика начислений'],
        reversed: true,
    },
    {
        id: 3,
        title: 'Масштабируйте свой бизнес',
        description: 'Создайте собственную сеть субагентов. Наша платформа предоставляет мощные инструменты для контроля и развития продаж.',
        bullets: ['Реферальная программа', 'Интеграция по API для вашего сайта', 'Готовые виджеты'],
        reversed: false,
    }
]

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <div className="section-header text-center">
                    <h2 className="section-title">Как UREMONT помогает <br /><span className="gradient-text">зарабатывать больше</span></h2>
                    <p className="section-subtitle">Платформа создана агентами для агентов. Мы учли все нюансы рынка страхования.</p>
                </div>

                <div className="features-list">
                    {features.map((feature) => (
                        <div key={feature.id} className={`feature-row ${feature.reversed ? 'reversed' : ''}`}>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.description}</p>
                                <ul className="feature-bullets">
                                    {feature.bullets.map((bullet, idx) => (
                                        <li key={idx}><CheckCircle2 className="bullet-icon" size={20} />{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-image-wrapper abstract-animation-container">
                                <motion.div
                                    className="abstract-shape shape-1"
                                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="abstract-shape shape-2"
                                    animate={{ y: [0, 20, 0], x: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                />
                                <motion.div
                                    className="abstract-shape shape-3"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
