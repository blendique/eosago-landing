import { ArrowUp } from 'lucide-react'
import './CTA.css'

interface CTAProps {
    onCTAClick: () => void;
}

const CTA = ({ onCTAClick }: CTAProps) => {
    return (
        <div className="cta-minimal">
            <div className="cta-minimal-content">
                <span className="cta-minimal-text">Готовы начать зарабатывать? Присоединяйтесь к UREMONT.</span>
                <button onClick={onCTAClick} className="cta-minimal-btn">
                    К регистрации <ArrowUp size={18} className="cta-minimal-icon" />
                </button>
            </div>
        </div>
    )
}

export default CTA
