// Styles
import '../Styles/Header.scss'

// React
import { useNavigate } from 'react-router-dom'

// Components
import { CONTACT } from '../Config/contact.js'

const Header = () => {
    const navigate = useNavigate()

    return (
        <section className='banner flex'>
            <div className='flex-colum gap-md container'>
                <p>
                    Internet Giga+ Fibra:
                </p>

                <p>
                    <strong>
                        Emita sua fatura, consulte boletos em aberto e acesse a
                        Central do Assinante de forma rápida e segura.
                    </strong>
                </p>

                <button
                    className="btn"
                    onClick={() =>
                        window.open(
                            `https://wa.me/${CONTACT.whatsapp}`,
                            '_blank'
                        )
                    }
                >
                    Emitir 2ª Via
                </button>
            </div>
        </section>
    )
}

export default Header