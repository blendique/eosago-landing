import './Advantages.css'

const advantages = [
    { id: 1, title: 'Универсальное рабочее место', desc: 'Работа онлайн из любой точки мира и с любого устройства', icon: '🌐' },
    { id: 2, title: 'Лучшие страховые компании', desc: 'Работа сразу с 18 страховыми компаниями', icon: '🏢' },
    { id: 3, title: 'Регулярные выплаты', desc: 'Выплата комиссионного вознаграждения в течении 3-х дней по запросу', icon: '💸' },
    { id: 4, title: 'Положительное решение', desc: 'Уровень одобрения сделки выше 95%', icon: '✅' },
    { id: 5, title: 'Высокое КВ', desc: 'Размер комиссионного вознаграждения от 0 до 60%', icon: '📈' },
    { id: 6, title: 'Помощь и поддержка', desc: 'Личный помощник (куратор) и онлайн поддержка агентов', icon: '🤝' },
]

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages-container">
                <h2 className="section-title">Почему выбирают работу с UREMONT</h2>
                <div className="adv-grid">
                    {advantages.map((item) => (
                        <div key={item.id} className="adv-card">
                            <div className="adv-icon">{item.icon}</div>
                            <h3 className="adv-title">{item.title}</h3>
                            <p className="adv-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="adv-note">* бонус доступен к выводу, если вы продали не менее 3 полисов страхования</p>
            </div>
        </section>
    )
}

export default Advantages
