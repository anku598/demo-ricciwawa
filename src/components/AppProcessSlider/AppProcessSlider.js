import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBg from '../../images/background_svg_dot.svg';
import Mobile from '../../images/mobile.svg';
import './AppProcessSlider.scss';
// import './styles.css';

const AppProcessSlider = () => {
	return (
		<Row className='custom-container d-flex align-items-center position-relative slider-content-container mx-0 position-relative w-100'>
			<Col className='col-12'>
				<Row>
					<Col className='col-12'>
						<div className='slider-container-title'>
							<h1>How the app works</h1>
							<div className='bars'>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</Col>
					<Col className='slider'>
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Autoplay, Pagination, Navigation]}
							className='mySwiper'
						>
							<SwiperSlide>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='slide-title col-3'>
										<h1>
											<span>Dual</span>
											<span>Language</span>
										</h1>
									</div>
									<div className='flex-grow col-6 d-flex justify-content-center'>
										<img src={Mobile} alt='...' className='slider-mobile' />
									</div>
									<div class='col-3'>
										<div className='slide-text '>
											<p>
												One platform, two languages -Traditional &
												Simplified,Cantonese & Mandarin
											</p>
											<button></button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='slide-title col-3'>
										<h1>
											<span>Dual</span>
											<span>Language</span>
										</h1>
									</div>
									<div className='flex-grow col-6 d-flex justify-content-center'>
										<img src={Mobile} alt='...' className='slider-mobile' />
									</div>
									<div class='col-3'>
										<div className='slide-text '>
											<p>
												One platform, two languages -Traditional &
												Simplified,Cantonese & Mandarin
											</p>
											<button></button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='slide-title col-3'>
										<h1>
											<span>Dual</span>
											<span>Language</span>
										</h1>
									</div>
									<div className='flex-grow col-6 d-flex justify-content-center'>
										<img src={Mobile} alt='...' className='slider-mobile' />
									</div>
									<div class='col-3'>
										<div className='slide-text '>
											<p>
												One platform, two languages -Traditional &
												Simplified,Cantonese & Mandarin
											</p>
											<button></button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</Col>
				</Row>
			</Col>
			<Col className='d-flex justify-content-end px-0 position-absolute slider-svg-container'>
				<img src={SliderBg} alt='...' className='slider-bg-image' />
			</Col>
		</Row>
	);
};

export default AppProcessSlider;
