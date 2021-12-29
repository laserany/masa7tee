import React, { useContext } from 'react'
import who from './who.jpg'
import { homeImageStyling } from '../common/constants'
import { ImageWidthContext } from '../../pages/HomePage'
import ArabicParagraph from '../common/ArabicParagraph'
const Who = () => {
  const imageWidth = useContext(ImageWidthContext)
  return (
    <div>
      <img
        src={who}
        alt=''
        style={{ ...homeImageStyling, width: imageWidth }}
      />
      <br></br>
      <br></br>
      <ArabicParagraph>منصة " مساحتي " لتأمين المساحات الآمنة </ArabicParagraph>
      <ArabicParagraph>
        مساحتي هي أول منصة رقمية تساعد الشباب على الوصول إلى المساحات الآمنة
        الجغرافية ، أطلقت المنصة من الشباب لمجتمعهم لإيمان الشباب التام أنهم
        مستقبل هذا البلد.
      </ArabicParagraph>
      <ArabicParagraph>
        تأسست منصة مساحتي لتكون الأولى من نوعها وذلك بهدف تعريف الشباب على
        مؤسسات المجتمع المدني ،وتأمين مساحة آمنة لهم لإقامة فعالياتهم وإخراج
        طاقاتهم وأفكارهم الإبداعية ، وتشجيع جميع مؤسسات المجتمع المدني والمنظمات
        الخاصة والقطاع العام على العمل المجتمعي والتعاون مع الشباب.
      </ArabicParagraph>
      <ArabicParagraph>
        وتأتي مساعي منصة "مساحتي" بهدف توحيد الجهود المبذولة في مجال العمل
        المجتمعي عن طريق بناء شراكات مع القطاعين العام والخاص ومؤسّسات المجتمع
        المدنيّ وأصحاب المبادرات بحيث توفر المنصة أكبر عدد ممكن من المساحات
        الآمنة إيماناً بأن الجميع يستحق وجود مساحة آمنة تحتضنه يستطيع أن يكتسب
        فيها مهارات جديدة ، وأن يعبر عن نفسه و عن أفكاره بحرية.
      </ArabicParagraph>
      <ArabicParagraph>
        وتعمل منصة " مساحتي " على جمع القاعات المؤهلة لإقامة فعاليات شبابية
        تطوعية ذو هدف سامي ، في شتى محافظات المملكة الأردنية الهاشمية ، وتعريف
        الشباب على تلك المؤسسات و تسهيل وصول الشباب والمدربين إلى تلك المساحات
        الآمنة
      </ArabicParagraph>
    </div>
  )
}

export default Who
