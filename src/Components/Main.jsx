// style
import '../Styles/Main.scss'

// Components
import { CONTACT } from '../Config/contact.js'

// React
import {
    FaFileInvoiceDollar,
    FaArrowCircleDown,
    FaTachometerAlt,
    FaUserCircle,
    FaLock,
    FaExchangeAlt
} from 'react-icons/fa'

const Main = () => {
    return (
        <main className="space-between container">
            <div className="cg-text-main flex-colum gap-md">
                <h2>
                    2ª Via da Conta, Central do Assinante e Autoatendimento Giga+ Fibra
                </h2>
                <p>
                    Emita sua 2ª via da fatura, consulte boletos,
                    faça teste de velocidade, altere sua senha
                    e acesse a Central do Assinante.
                </p>
            </div>
            <div className="grid3col gap-md card-main">
                <div>
                    <FaFileInvoiceDollar />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${CONTACT.whatsapp}`}
                    >
                        2ª Via da fatura
                    </a>
                </div>

                <div>
                    <FaArrowCircleDown />
                    <a
                        href="/carregando"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Baixe o App da Giga+ Fibra
                    </a>
                </div>

                <div>
                    <FaTachometerAlt />
                    <a
                        href="/carregando"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Teste de velocidade
                    </a>
                </div>

                <div>
                    <FaUserCircle />
                    <a
                        href="/carregando"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Central do Assinante
                    </a>
                </div>

                <div>
                    <FaLock />
                    <a
                        href="/carregando"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Alterar aqui a sua senha
                    </a>
                </div>

                <div>
                    <FaExchangeAlt />
                    <a
                        href="/carregando"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Devolução de valores a ex-cliente
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Main