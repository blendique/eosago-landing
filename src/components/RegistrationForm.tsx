import { useState, useRef, useEffect } from 'react';
import './RegistrationForm.css';

const productOptions = ['ОСАГО', 'КАСКО', 'Ипотека', 'Другие виды'];
const statusOptions = [
    'Самозанятый/Физическое лицо',
    'Юридическое лицо (ООО)',
    'Индивидуальный предприниматель'
];

const RegistrationForm = () => {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<string>(statusOptions[0]);

    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const productRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (productRef.current && !productRef.current.contains(event.target as Node)) {
                setIsProductOpen(false);
            }
            if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
                setIsStatusOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleProduct = (product: string) => {
        setSelectedProducts(prev =>
            prev.includes(product)
                ? prev.filter(p => p !== product)
                : [...prev, product]
        );
    };

    const selectStatus = (status: string) => {
        setSelectedStatus(status);
        setIsStatusOpen(false);
    };

    return (
        <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
                <input type="text" className="form-input" placeholder="ФИО" />
                <input type="tel" className="form-input" placeholder="Номер телефона" />
            </div>

            <div className="form-row">
                <input type="email" className="form-input" placeholder="E-mail" />
                <div className="custom-dropdown status-dropdown" ref={statusRef}>
                    <div
                        className={`custom-dropdown-header ${isStatusOpen ? 'active' : ''}`}
                        onClick={() => setIsStatusOpen(!isStatusOpen)}
                    >
                        <div className="header-info">
                            <span className="select-label">Статус для выплаты комиссии</span>
                            <span className="custom-dropdown-selected">{selectedStatus}</span>
                        </div>
                        <svg className={`custom-dropdown-arrow ${isStatusOpen ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {isStatusOpen && (
                        <div className="custom-dropdown-list-wrapper">
                            <div className="custom-dropdown-list">
                                {statusOptions.map(option => (
                                    <div
                                        key={option}
                                        className={`custom-dropdown-item ${selectedStatus === option ? 'selected' : ''}`}
                                        onClick={() => selectStatus(option)}
                                    >
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="info-box">
                Чтобы мы подобрали для вас куратора, выберите основные продукты. Независимо от выбора сейчас, вы сможете работать с любым продуктом
            </div>

            <div className="form-row full-width">
                <div className="custom-dropdown" ref={productRef}>
                    <div
                        className={`custom-dropdown-header ${isProductOpen ? 'active' : ''}`}
                        onClick={() => setIsProductOpen(!isProductOpen)}
                    >
                        <span className={selectedProducts.length === 0 ? "custom-dropdown-placeholder" : "custom-dropdown-selected"}>
                            {selectedProducts.length === 0 ? "Основные продукты" : selectedProducts.join(', ')}
                        </span>
                        <svg className={`custom-dropdown-arrow ${isProductOpen ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {isProductOpen && (
                        <div className="custom-dropdown-list-wrapper">
                            <div className="custom-dropdown-list">
                                {productOptions.map(option => (
                                    <div
                                        key={option}
                                        className={`custom-dropdown-item ${selectedProducts.includes(option) ? 'selected' : ''}`}
                                        onClick={() => toggleProduct(option)}
                                    >
                                        <div className={`custom-checkbox ${selectedProducts.includes(option) ? 'checked' : ''}`}>
                                            {selectedProducts.includes(option) && (
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
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
