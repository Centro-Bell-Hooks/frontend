import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Carrossel.css'


function Home() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/*  <SwiperSlide>
                    
                </SwiperSlide> */}
                <SwiperSlide>
                    <img
                        className="swiper-slide-img gap-4"
                        src="src/assets/resized1.jpeg"
                        alt="Carrossel - Slide 02"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="swiper-slide-img gap-4"
                        src="src/assets/resized2.jpeg"
                        alt="Carrossel - Slide 03"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img flex gap-4"
                        src="src/assets/resized3.jpeg" alt="Foto de Garotas Estudando"></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home
