//style
import '../Styles/Menu.scss'
import '../Styles/Index.scss'

// imagens
import logo from '../assets/logo.png'

// React
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Components
import { CONTACT } from '../Config/contact.js'


const Menu = () => {

    return (
        <nav className='container flex-center gap-xxl'>
            <Link to="/" className='flex-center logo'>
                <img src={logo} alt="Logo" />
            </Link>
            <div className='text-nav'>
                <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-center gap-md'>
                    <FaPhoneAlt color="#000b6b" />
                    <p>Compre pelo <strong>0800 1035303</strong></p>
                </a>
            </div>
            <div className='text-nav'>
                <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>2º Via da Fatura</p>
                </a>
            </div>
            <div className='text-nav'>
                <a href="#faq">
                    <p>Perguntas Frequentes</p>
                </a>
            </div>
        </nav>
    )
}

export default Menu