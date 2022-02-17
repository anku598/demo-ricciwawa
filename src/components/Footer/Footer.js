import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Footer.scss';
import Logo from '../../images/logo.png';
import PhoneIcon from '../../images/phone-icon.png'
import InstagramIcon from '../../images/instagram-icon.svg'
import EmailIcon from '../../images/email-icon.svg'
import GooglePlayButton from '../../images/google-play-button.svg'
import AppleStoreButton from '../../images/apple-store-button.svg'
import CommonButton from '../CommonButton/CommonButton.js';
const Footer = () => {
  return (
    <div className="footer">
      <div className='custom-container'>
        <div className="footer-top">
          <h3 className='footer-section-title'>Wanna learn on your own?</h3>
          <p className='footer-section-text'>Learn everywhere you go. See an interesting Chinese story? Scan it and our AI
            assistant will transform your content into interactive materials …
          </p>
          <CommonButton></CommonButton>
        </div>
        <div className="footer-bottom">
          <Row>
            <Col className='col-5'>
              <div className="footer-about">
                <div className='d-flex align-items-center '>
                  <img src={Logo} alt='logo' className='site-logo' />
                  <h1 className='footer-logo-name'>RicciWawa</h1>
                </div>
                <p className='footer-text'>We created Ricciwawa with one goal in
                  mind - to make Chinese learning fun, easy and tailored for all. </p>
                <p className='bold-text'><strong>Got any suggestions?
                  We’d love to hear from you!</strong></p>

              </div>

            </Col>

            <Col className='col-7'>
              <div className='row-height'>
                <Row className='custom-row-width'>
                  <Col className='col-4 '>
                    <div className="footer-items">
                      <h3>Contact Us</h3>
                      <ul className="info-item">
                        <li className='item-name'>
                          <a href="#">
                            <img src={PhoneIcon} alt="" />
                            <p>+852 6544 8351</p>
                          </a>
                        </li>
                        <li className='item-name'>
                          <a href="#">
                            <img src={InstagramIcon} alt="" />
                            <p>ricciwawa</p>
                          </a>
                        </li>
                        <li className='item-name'>
                          <a href="#">
                            <img src={EmailIcon} alt="" />
                            <p>info@ricciwawa.com</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col className='col-4'>
                    <div className="footer-items">
                      <h3>More</h3>
                      <ul className="info-item">
                        <li className='item-name'>

                          <a href='#'>Private Policy</a>
                        </li>
                        <li className='item-name'>
                          <a href='#'>Terms of Policy </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col className='col-4'>
                    <a className='footer-button' href="#"><img src={GooglePlayButton} alt="" /></a>
                    <a className='footer-button' href="#"><img src={AppleStoreButton} alt="" /></a>
                  </Col>
                </Row>
              </div>
            </Col>

          </Row>
        </div>
      </div>

    </div>
  )
}

export default Footer