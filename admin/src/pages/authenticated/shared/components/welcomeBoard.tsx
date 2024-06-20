import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// Assets
import { WelcomeBoardContainer } from '../css';
import { userPic } from 'assets/images';
import { useMediaQuery } from '@mui/material';

const WelcomeBoard = () => {
    const matches = useMediaQuery('(max-width:800px)');

    return (
        <WelcomeBoardContainer>
            <p className='logo'>QTRooms[logo]</p>
            <h2>
                Come <span className='highlight'>Join</span> Us
            </h2>
            <div className='attributes'>
                <p>Test your product with us and find bugs faster</p>
                <p>Community with other Testers</p>
                <p>Engage with a community of learners and share insights</p>
            </div>
            {!matches ? (
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400]
                        },
                        next: {
                            translate: ['100%', 0, 0]
                        }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[EffectCreative, Autoplay]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem minus totam culpa tenetur,
                            officia minima.
                        </p>
                        <div className='user'>
                            <img src={userPic} alt='user image' />
                            <div className='user-name'>
                                <span>Timson K</span>
                                <small>developer</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>
                            Lorem ipsum ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem minus totam culpa
                            tenetur, officia minima.
                        </p>
                        <div className='user'>
                            <img src={userPic} alt='user image' />
                            <div className='user-name'>
                                <span>Timson K</span>
                                <small>developer</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>
                            Lorem ipsum ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem minus totam culpa
                            tenetur, officia minima.
                        </p>
                        <div className='user'>
                            <img src={userPic} alt='user image' />
                            <div className='user-name'>
                                <span>Timson K</span>
                                <small>developer</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>
                            Lorem ipsum ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem minus totam culpa
                            tenetur, officia minima.
                        </p>
                        <div className='user'>
                            <img src={userPic} alt='user image' />
                            <div className='user-name'>
                                <span>Timson K</span>
                                <small>developer</small>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            ) : (
                ''
            )}
        </WelcomeBoardContainer>
    );
};

export default WelcomeBoard;
