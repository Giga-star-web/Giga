import '../Styles/Qualidade.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Imagens dos prêmios
import Premio1 from '../assets/premios/premio1.png'
import Premio2 from '../assets/premios/premio2.png'
import Premio3 from '../assets/premios/premio3.png'
import Premio4 from '../assets/premios/premio4.png'
import Premio5 from '../assets/premios/premio5.png'
import Premio6 from '../assets/premios/premio6.png'
import Premio7 from '../assets/premios/premio7.png'
import Premio8 from '../assets/premios/premio8.png'

const premios = [
  Premio1,
  Premio2,
  Premio3,
  Premio4,
  Premio5,
  Premio6,
  Premio7,
  Premio8
]

const Qualidade = () => {
  return (
    <section className="qualidade container">
      <h2 className="center">
        Nossa qualidade é premiada
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={window.innerWidth > 768}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        {premios.map((premio, index) => (
          <SwiperSlide key={index}>
            <div className="premio-card flex-center">
              <img
                src={premio}
                alt={`Prêmio ${index + 1}`}
                className="premio-card__img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Qualidade