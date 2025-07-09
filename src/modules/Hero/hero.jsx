import { Swiper, SwiperSlide } from'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.css'

function Hero() {
    return(
        <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className='containers hero '>
                    <div className='w-[461px] '>
                        <strong className='mb-[15px] font-normal text-[20px] text-[rgba(17,17,17,1)] '>Face Makeup Brush</strong>
                        <h2 className='mb-[44px] font-normal text-[50px] text-[rgba(17,17,17,1)] '>Skincare Brush Set Sale 30% Off</h2>
                        <button className="btn w-[138px] border border-black py-[15px] font-medium text-[14px] text-[#111111]">
                        Shop now
                        </button>

                    </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className='containers'>

                Slide 2
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className='containers'>

                Slide 3
                </div>
                </SwiperSlide>
        </Swiper>
        </section>
    )
}
export default Hero


