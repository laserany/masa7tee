import React, { useContext } from 'react'
import what from './what.jpg'
import { homeImageStyling } from '../common/constants'
import { ImageWidthContext } from '../../pages/HomePage'
const What = () => {
  const imageWidth = useContext(ImageWidthContext)
  return (
    <div>
      <img
        src={what}
        alt=''
        style={{ ...homeImageStyling, width: imageWidth }}
      />
      <br></br>
      <br></br>
      <p style={{ textAlign: 'right' }}>
        خدمتنا الأساسية جعل المساحات المتوفرة مساحات آمنة للشباب ، وذلك عن طريق
        إيصال الشباب لها ، حتى يتمكنوا من تفريغ طاقاتهم و التعبيرعن آرائهم
        والتواصل مع بعضهم البعض ، ومناقشة القضايا التي تهمهم . وهذا يعني أننا
        نقدم جميع المساحات الآمنة المتوفرة في جميع مناطق المملكة الأردنية
        الهاشمية ، حتى يَستفاد منها الشباب أصحاب الأفكار ، المنظمات ، المبادرات
        الشبابية ، مؤسسات المجتمع المدني . علماً أن خدمة حجز المساحة الآمنة بسعر
        رمزي وبسيط جداً للساعة الواحدة ، ويمكن الحجز أكثر من ساعة حسب الحاجة
        والرغبة للشخص .
      </p>
    </div>
  )
}

export default What
