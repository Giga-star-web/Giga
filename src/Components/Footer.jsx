//Styles
import "../Styles/Footer.scss"

// imagens
import logo from '../assets/logo.png'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import youtube from '../assets/icons/youtube.svg'
import appleStore from '../assets/icons/appstore.webp'
import googlePlay from '../assets/icons/playstore.webp'

// React
import { FaPhoneAlt } from 'react-icons/fa'

// Components
import { CONTACT } from '../Config/contact.js'

const Footer = () => {
    const carregandoLink = "/carregando"

    return (
        <footer className="footer">
            <section className="cg-footer-colum container grid4col gap-xxl">
                
                <div className="footer-colum">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">App Giga+ Fibra</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Quem Somos</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Trabalhe Conosco</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Perguntas Frequentes</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Telefone Fixo</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Indique um amigo</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Internet Empresarial</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Internet Corporativa</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Internet Streaming</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Serviços Digitais</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Onde Estamos</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Starlink</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Seja um Parceiro</a></li>
                    </ul>
                </div>

                <div className="footer-colum">
                    <h3>Atendimento</h3>
                    <ul>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Central do Assinante</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Fale Conosco</a></li>
                    </ul>
                </div>

                <div className="footer-colum">
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Regulatório</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Ética e Integridade</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Contratos e Regulamentos</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Segurança da Informação</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Termos de Uso</a></li>
                        <li><a href={carregandoLink} target="_blank" rel="noopener noreferrer">Investidores</a></li>
                    </ul>
                </div>

                <div className="footer-colum">
                    <img className="logo-footer" src={logo} alt="Giga+ Fibra - Internet Fibra Óptica"
                    />

                    <h3>Redes Sociais</h3>

                    <div className="redes-sociais flex gap-md">
                        <a href={carregandoLink} target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook Giga+ Fibra" />
                        </a>

                        <a href={carregandoLink} target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram Giga+ Fibra" />
                        </a>

                        <a href={carregandoLink} target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="Canal Youtube Giga+ Fibra" />
                        </a>
                    </div>

                    <h3>Atendimento ao cliente</h3>
                    <a
                        href={`https://wa.me/${CONTACT.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaPhoneAlt color="#000b6b" /> 10353
                    </a>

                    <h3>Compre pelo telefone</h3>
                    <a
                        href={`https://wa.me/${CONTACT.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaPhoneAlt color="#000b6b" /> 0800 1035303
                    </a>

                    <h3>Baixe o App Giga+ Fibra</h3>

                    <div className="btn-footer flex gap-md">
                        <a
                            href={carregandoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            <img src={appleStore} alt="Apple Store" />
                            <span>App Store</span>
                        </a>

                        <a
                            href={carregandoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            <img src={googlePlay} alt="Google Play" />
                            <span>Play Store</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="cg-credit-footer">
                <p className="center">
                    GIGA MAIS FIBRA TELECOMUNICACOES S.A. CNPJ: 07.714.104/0001-07
                    <br />
                    ©2026. Giga+ Fibra. Todos os direitos reservados
                </p>
            </section>
        </footer>
    )
}

export default Footer