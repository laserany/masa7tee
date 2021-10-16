import React from 'react'
import connect from './connect.jpg'
import { GrFacebook, GrInstagram } from 'react-icons/gr'
import ButtonMailto from './ButtonMailto'
const Connect = () => {
  return (
    <div>
      <img src={connect} alt='' style={{ width: '100%', height: '400px' }} />
      <br></br>
      <br></br>
      <p style={{ textAlign: 'right' }}>
        <ButtonMailto
          label='masa7tee@gmail.com'
          mailto='mailto:masa7tee@gmail.com'
        />
        <span>البريد الالكتروني</span>
      </p>
      <p style={{ textAlign: 'right' }}>
        <a href='https://www.facebook.com/Masa7tee'>
          <GrFacebook /> https://www.facebook.com/Masa7tee
        </a>
        عن طريق صفحة الفيسبوك
      </p>
      <p style={{ textAlign: 'right' }}>
        <a href='https://www.instagram.com/masa7tee'>
          <GrInstagram /> https://www.instagram.com/masa7tee
        </a>
        عن طريق صفحة الإنستغرام
      </p>
    </div>
  )
}

export default Connect
