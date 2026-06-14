import '../Styles/Precos.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useNavigate } from 'react-router-dom'
import { CONTACT } from '../Config/contact'

// Imagens
import Globo from '../assets/globo-play.png'

const planos = [
    {
        titulo: 'Exclusivo no Cartão de Crédito',
        mega: '600 MEGA',
        preco: '99,99',
        destaque: true
    },
    {
        titulo: 'Exclusivo no Cartão de Crédito',
        mega: '800 MEGA',
        preco: '109,99',
        destaque: false
    },
    {
        titulo: 'Exclusivo no Cartão de Crédito',
        mega: 'GIGA',
        preco: '139,99',
        destaque: false
    },
    {
        titulo: 'No Boleto Bancário',
        mega: '600 MEGA',
        preco: '99,99',
        destaque: false
    },
    {
        titulo: 'No Boleto Bancário',
        mega: '800 MEGA',
        preco: '109,99',
        destaque: false
    },
    {
        titulo: 'No Boleto Bancário',
        mega: 'GIGA',
        preco: '139,99',
        destaque: false
    }
]

const Precos = () => {
    const navigate = useNavigate()

    return (
        <section className='precos container'>
            <h1 className='center'>
                Conecte toda a sua casa com Internet Giga+ Fibra
            </h1>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={window.innerWidth > 768}
                pagination={{ clickable: true }}
                spaceBetween={24}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                {planos.map((plano, index) => (
                    <SwiperSlide key={index}>
                        <article
                            className={`card ${plano.destaque ? 'card--destaque' : ''
                                }`}
                        >
                            <span className='card__titulo'>
                                {plano.titulo}
                            </span>

                            <h2 className='card__mega'>
                                {plano.mega}
                            </h2>

                            {plano.destaque && (
                                <span className='card__badge flex-center'>
                                    Melhor oferta
                                </span>
                            )}

                            <img
                                src={Globo}
                                alt='Benefícios do plano'
                                className='card__imagem'
                            />

                            <div className='card__preco flex-center gap-md'>
                                <small>Por</small>
                                <strong>
                                    R${plano.preco}
                                </strong>
                                <small>/mês</small>
                            </div>

                            <p className='card__texto center'>
                                Preço fixo por 12 meses
                            </p>

                            <div className='card__acoes'>
                                <button
                                    className='btn'
                                    onClick={() => navigate('/carregando')}
                                >
                                    Contratar Online
                                </button>

                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='btn whatsapp'
                                >
                                    Contratar pelo WhatsApp
                                </a>
                            </div>

                            <a
                                href={`https://wa.me/${CONTACT.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mais detalhes
                            </a>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Precos