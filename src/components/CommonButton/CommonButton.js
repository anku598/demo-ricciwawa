import React from 'react'
import './CommonButton.scss'
import WhiteApple from '../../images/white-apple.svg';
import WhitePlay from '../../images/white-play.svg';
function CommonButton() {
  return (
    <button className='hero-section-button d-flex align-items-center '>
      <div className='d-flex align-items-center'>
        <img src={WhiteApple} alt='...' />
        <img src={WhitePlay} alt='...' />
      </div>
      <span className='me-2'>Download</span>
    </button>
  )
}

export default CommonButton