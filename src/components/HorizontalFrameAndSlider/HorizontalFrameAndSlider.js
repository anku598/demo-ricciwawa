import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Mobile from '../../images/mobile-2.svg';
import './HorizontalFrameAndSlider.scss';

const HorizontalFrameAndSlider = ({ imageOnLeft }) => {
	return (
		<section className='custom-container section-wrapper'>
			<Row className=' mx-auto px-0 d-flex align-items-center'>
				{imageOnLeft ? (
					<>
						<Col className='px-0 d-flex justify-content-center' xl={6}>
							<img src={Mobile} alt='...' />
						</Col>
						<Col className='px-0' xl={{ span: 5, offset: 1 }}>
							<div>
								<h2 className='content-title'>
									Turn a <span>Video</span> into teaching material
								</h2>
								<p className='content-text'>
									<span>
										Learn everywhere you go. See an interesting Chinese story?
									</span>
									<span>
										Our AI assistant will transform your content into
										interactive materials
									</span>
								</p>
								<div className='section-button-wrapper'>
									<button className='section-button'>Try Now</button>
								</div>
							</div>
						</Col>
					</>
				) : (
					<>
						<Col className='px-0' xl={5}>
							<div>
								<h2 className='content-title'>
									Turn a <span>Video</span> into teaching material
								</h2>
								<p className='content-text'>
									<span>
										Learn everywhere you go. See an interesting Chinese story?
									</span>
									<span>
										Our AI assistant will transform your content into
										interactive materials
									</span>
								</p>
								<div className='section-button-wrapper'>
									<button className='section-button'>Try Now</button>
								</div>
							</div>
						</Col>
						<Col
							className='px-0 d-flex justify-content-center'
							xl={{ span: 6, offset: 1 }}
						>
							<img src={Mobile} alt='...' />
						</Col>
					</>
				)}
			</Row>
		</section>
	);
};

export default HorizontalFrameAndSlider;
