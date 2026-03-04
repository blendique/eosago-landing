import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const faqData = [
    {
        question: 'Сколько стоит регистрация на платформе?',
        answer: 'Регистрация и использование платформы абсолютно бесплатны для всех агентов. Мы зарабатываем только тогда, когда зарабатываете вы.'
    },
    {
        question: 'Как быстро выводится агентское КВ?',
        answer: 'Выплаты производятся по запросу в течение 3-х рабочих дней на ваш расчетный счет, карту физического лица или счет самозанятого.'
    },
    {
        question: 'Нужен ли статус ИП для работы?',
        answer: 'Нет, вы можете работать как физическое лицо, самозанятый или ИП. Мы подберем оптимальный формат сотрудничества.'
    },
    {
        question: 'С какими страховыми компаниями вы работаете?',
        answer: 'На данный момент в системе доступно 18 ведущих страховых компаний РФ (Росгосстрах, АльфаСтрахование, Ингосстрах, РЕСО и другие).'
    },
    {
        question: 'Как получить бонус 1000 рублей?',
        answer: 'Бонус начисляется на ваш баланс сразу после регистрации. Вывести его можно после успешного оформления 3-х любых страховых полисов через нашу платформу.'
    }
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <h2 className="section-title text-center">Часто задаваемые вопросы</h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => toggleOpen(index)}>
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <ChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} size={24} />
                                </div>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="faq-answer-wrapper"
                                        >
                                            <div className="faq-answer">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ
