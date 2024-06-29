import { useEffect } from 'react';
import { flush, injectGlobal } from '@emotion/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Assets
import { OnLoadContainer } from './on-load.style';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from 'commons/components';
import { Link } from 'react-router-dom';

const OnLoad = () => {
    useEffect(() => {
        injectGlobal`
            footer {
                display: none !important;
            }
        `;

        return () => flush();
    }, []);

    return (
        <OnLoadContainer>
            <img src='monkey.gif' alt='Description of GIF' />
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
                    <p className='slider-inner-text'>🚀 We're upgrading our engines! Check back soon to see what's new and improved.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🔄 System overhaul in progress. Come back shortly to catch the magic!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🎨 Adding the finishing touches. Visit us again soon for something special!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>⚙️ Fine-tuning our gears. We'll be back in a bit with some exciting updates!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🔧 We're tinkering behind the scenes. Check back in a few hours for a surprise!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🛠️ Under construction! We're building something amazing for you. Stay tuned!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🚧 Maintenance mode: Engaged. Return soon to explore our new features!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>✨ Enhancing your experience. Check back shortly to see the sparkle!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>🔍 Fine-tuning our site for you. Come back soon for a smoother ride!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='slider-inner-text'>💻 Busy coding magic. Visit us again soon to see the enchantment unfold!</p>
                </SwiperSlide>
            </Swiper>

            <Link to='/'>
                <Button>Back To Home</Button>
            </Link>
        </OnLoadContainer>
    );
};

export default OnLoad;
