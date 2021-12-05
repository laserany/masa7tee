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
      <div style={{ textAlign: 'right' }}>
        البريد الالكتروني
        <p>
          <ButtonMailto
            label='masa7tee@gmail.com'
            mailto='mailto:masa7tee@gmail.com'
          />
        </p>
        عن طريق صفحة الفيسبوك
        <p>
          <a href='https://www.facebook.com/Masa7tee'>
            <GrFacebook /> https://www.facebook.com/Masa7tee
          </a>
        </p>
        عن طريق صفحة الإنستغرام
        <p>
          <a href='https://www.instagram.com/masa7tee'>
            <GrInstagram /> https://www.instagram.com/masa7tee
          </a>
        </p>
      </div>
    </div>
  )
}

export default Connect
