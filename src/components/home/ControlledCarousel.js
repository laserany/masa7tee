import React, { useState, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from './CarouselImage'
import hall1 from '../halls/hall1.png'
import hall2 from '../halls/hall2.png'
import hall3 from '../halls/hall3.png'
import hall4 from '../halls/hall4.png'
import { homeImageStyling } from '../common/constants'
import { ImageWidthContext } from '../../pages/HomePage'
const ControlledCarousel = () => {
  const imageWidth = useContext(ImageWidthContext)
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        backgroundImage: "url('carousel-background-arfa-2.jpg')",
        backgroundSize: '100% 400px',
        ...homeImageStyling,
        width: imageWidth,
      }}
    >
      <Carousel.Item interval={1000}>
        <CarouselImage src={hall1} alt='Hall 1' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={hall2} alt='Hall 2' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={hall3} alt='Hall 3' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={hall4} alt='Hall 4' />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
