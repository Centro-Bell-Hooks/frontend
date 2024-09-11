import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carrossel.css'

export function Carrossel() {
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
                {/* mudar depois a src das imagens, pra aparecer no deploy*/}
                <SwiperSlide className="relative">
                    <img
                        className="swiper-slide-img gap-4 w-full h-auto object-cover"
                        src="/assets/resized1.jpeg"
                        alt="Carrossel - Slide 01"
                    />
                    <div className="absolute max-w-[40%] top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow p-4 rounded">
                        <h2 className="text-3xl font-bold mb-2">Oferecemos cursos gratuitos que transformam vidas.</h2>
                        <p className="text-xl">Aprenda novas habilidades e conecte-se com oportunidades.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="swiper-slide-img gap-4" src="/assets/resized2.jpeg" alt="Carrossel - Slide 02" />
                    <div className="absolute max-w-[40%] top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow p-4 rounded">
                        <h2 className="text-3xl font-bold mb-2">
                            Gostaria de uma nova oportunidade no mercado de trabalho?
                        </h2>
                        <p className="text-xl max-w-[80%]">
                            Nossos cursos são feitos para apoiar você na sua jornada em garantir um futuro melhor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="swiper-slide-img" src="/assets/resized3.jpeg" alt="Carrossel - Slide 03"></img>
                    <div className="absolute max-w-[40%] top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow p-4 rounded">
                        <h2 className="text-3xl font-bold mb-2">Juntas, podemos superar desafios. </h2>
                        <p className="text-xl">
                            "No momento em que escolhemos amar, começamos a nos mover contra a dominação, contra a
                            opressão. No momento em que escolhemos amar, começamos a nos mover em direção à liberdade, a
                            agir de formas que libertam a nós e aos outros." - Bell Hooks
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
