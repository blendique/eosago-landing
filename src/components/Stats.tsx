import { ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react'
import './Stats.css'

const statsData = [
    { id: 1, value: '18', label: 'Страховых компаний', icon: ShieldCheck },
    { id: 2, value: '95%', label: 'Уровень одобрения', icon: TrendingUp },
    { id: 3, value: '3 дня', label: 'Выплата КВ по запросу', icon: Zap },
    { id: 4, value: 'до 60%', label: 'Комиссионное вознаграждение', icon: Users },
]

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-container glass">
                <div className="stats-grid">
                    {statsData.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <div key={stat.id} className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <Icon className="stat-icon" size={24} />
                                </div>
                                <div className="stat-content">
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
