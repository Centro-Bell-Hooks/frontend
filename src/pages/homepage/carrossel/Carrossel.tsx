import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Carrossel.css'
import { Box } from '@/components'

export function Carrossel() {
    return (
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
            className="swiper"
        >
            <SwiperSlide className="relative">
                <img
                    className="swiper-slide-img gap-4"
                    src="/assets/carrossel-imagem1.jpeg"
                    alt="Carrossel - Slide 01"
                />
                <div className="absolute w-full left-1/2 md:max-w-[95%] lg:max-w-[70%] xl:max-w-[40%] top-1/2 lg:left-[38%] xl:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow sm:p-4 rounded ">
                    <Box>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            Oferecemos cursos gratuitos que transformam vidas.
                        </h2>
                        <p className="sm:text-xl">Aprenda novas habilidades e conecte-se com oportunidades.</p>
                    </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img
                    className="swiper-slide-img gap-4"
                    src="/assets/carrossel-imagem2.jpeg"
                    alt="Carrossel - Slide 02"
                />
                <div className="absolute w-full left-1/2 md:max-w-[95%] lg:max-w-[70%] xl:max-w-[40%] top-1/2 lg:left-[38%] xl:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow sm:p-4 rounded">
                    <Box>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            Gostaria de uma nova oportunidade no mercado de trabalho?
                        </h2>
                        <p className="sm:text-xl sm:max-w-[80%]">
                            Nossos cursos são feitos para apoiar você na sua jornada em garantir um futuro melhor.
                        </p>
                    </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img className="swiper-slide-img" src="/assets/carrossel-imagem3.jpeg" alt="Carrossel - Slide 03" />
                <div className="absolute w-full left-1/2 md:max-w-[95%] lg:max-w-[70%] xl:max-w-[40%] top-1/2 lg:left-[38%] xl:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow sm:p-4 rounded">
                    <Box>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Juntas, podemos superar desafios. </h2>
                        <p className="sm:text-xl">
                            "No momento em que escolhemos amar, começamos a nos mover contra a dominação, contra a
                            opressão. No momento em que escolhemos amar, começamos a nos mover em direção à liberdade, a
                            agir de formas que libertam a nós e aos outros." - Bell Hooks
                        </p>
                    </Box>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
