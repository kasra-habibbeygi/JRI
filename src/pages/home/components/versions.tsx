import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Components
import { Button } from 'commons/components';
import { Link } from 'react-router-dom';

// Assets
import { VersionsContainer } from '../css';
import { Looper } from 'assets/icons';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Versions = () => {
    return (
        <VersionsContainer>
            <Link to='/full-version' className='left-side'>
                <h3>
                    Full Version BP <span className='question'>??</span>
                    <Swiper
                        className='mySwiper'
                        autoplay={{
                            delay: 3000
                        }}
                        effect={'fade'}
                        modules={[Autoplay, EffectFade]}
                        allowTouchMove={false}
                    >
                        <SwiperSlide>
                            <p className='slider-inner-text'>Read It</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>读它</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>Léelo</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>इसे पढ़ो</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>اقرأها</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>Lies es</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>읽어라</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>بخونش</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>Oku</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>Lis-le</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>читать</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='slider-inner-text'>読んで</p>
                        </SwiperSlide>
                    </Swiper>
                </h3>
            </Link>
            <Link to='/cool-version' className='right-side'>
                <div className='content'>
                    <h3>
                        Cool Version BP <span className='smile'>:)</span>
                    </h3>
                    <Button buttonType='ghost' radius='rounded'>
                        Recommended
                    </Button>
                </div>
                <Looper className='looper' />
            </Link>
        </VersionsContainer>
    );
};

export default Versions;
