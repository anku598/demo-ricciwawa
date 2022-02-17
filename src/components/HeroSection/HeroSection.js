import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Abstract from '../../images/girl_graphic.svg';
import CommonButton from '../CommonButton/CommonButton.js';
import './HeroSection.scss';
const HeroSection = () => {
	return (
		<Row className='custom-container-only-left hero-content-container mx-0 position-relative w-100 d-flex align-items-center'>
			<Col className='hero-section-content col-6'>
				<h1 className='hero-section-title'>
					<span>Make learning </span>
					<span>as it is supposed to be</span>
				</h1>
				<p className='text-content'>Fun And Interactive!</p>
				<p className='text-content'>
					We at Ricciwawa believe learning should be filled with joy and more
					learning moments.
				</p>
				<CommonButton></CommonButton>
			</Col>
			<Col className='mx-0 col-6 d-flex justify-content-end px-0'>
				<img className='abstract-image' src={Abstract} alt='..' />
			</Col>
		</Row>
	);
};

export default HeroSection;
