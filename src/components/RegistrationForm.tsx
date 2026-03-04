import './RegistrationForm.css'

const RegistrationForm = () => {
    return (
        <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
                <input type="text" className="form-input" placeholder="ФИО" />
                <input type="tel" className="form-input" placeholder="Номер телефона" />
            </div>

            <div className="form-row">
                <input type="email" className="form-input" placeholder="E-mail" />
                <div className="form-select-wrapper">
                    <span className="select-label">Статус для выплаты комиссии</span>
                    <select className="form-select">
                        <option>Самозанятый/Физическое лицо</option>
                        <option>ООО</option>
                        <option>ИП</option>
                    </select>
                </div>
            </div>

            <div className="info-box">
                Чтобы мы подобрали для вас куратора, выберите основные продукты. Независимо от выбора сейчас, вы сможете работать с любым продуктом
            </div>

            <div className="form-row full-width">
                <select className="form-select large">
                    <option value="" disabled selected>Основные продукты</option>
                    <option>ОСАГО / КАСКО</option>
                    <option>Ипотека</option>
                    <option>Другие виды</option>
                </select>
            </div>

            <div className="form-footer">
                <div className="checkbox-group">
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Принимаю условия <a href="#">публичной оферты</a>
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Согласен с <a href="#">политикой конфиденциальности</a>
                    </label>
                </div>

                <button type="submit" className="submit-btn">Продолжить</button>
            </div>
        </form>
    )
}

export default RegistrationForm
