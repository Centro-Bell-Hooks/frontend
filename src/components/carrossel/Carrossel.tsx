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
                spaceBetween={3}
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
                        className="swiper-slide-img flex items-center justify-center my-12 gap-4 h-screen"
                        src="https://media.istockphoto.com/id/1468068296/pt/foto/student-using-laptop-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=TKlb3-qaS93iJTpIP81fc4JQ4fhSUbn39dLRCgKk_SI="
                        alt="Carrossel - Slide 02"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="swiper-slide-img flex items-center justify-center my-12 gap-4 h-screen"
                        src="src/assets/ibagem-homepage.jpg"
                        alt="Carrossel - Slide 03"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Home
