import React, { useContext } from 'react'
import what from './what.jpg'
import { homeImageStyling } from '../common/constants'
import { ImageWidthContext } from '../../pages/HomePage'
import ArabicParagraph from '../common/ArabicParagraph'
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
      <ArabicParagraph>
        خدمتنا الأساسية جعل المساحات المتوفرة مساحات آمنة للشباب ، وذلك عن طريق
        إيصال الشباب لها ، حتى يتمكنوا من تفريغ طاقاتهم و التعبير عن آرائهم
        والتواصل مع بعضهم البعض ، ومناقشة القضايا التي تهمهم.
      </ArabicParagraph>
      <ArabicParagraph>
        وهذا يعني أننا نقدم جميع المساحات الآمنة المتوفرة في جميع مناطق المملكة
        الأردنية الهاشمية ، حتى يَستفاد منها الشباب أصحاب الأفكار ، المنظمات ،
        المبادرات الشبابية ، مؤسسات المجتمع المدني.
      </ArabicParagraph>
      <ArabicParagraph>
        علماً أن خدمة حجز المساحة الآمنة بسعر رمزي وبسيط جداً للساعة الواحدة ،
        ويمكن الحجز أكثر من ساعة حسب الحاجة والرغبة للشخص .
      </ArabicParagraph>
    </div>
  )
}

export default What
