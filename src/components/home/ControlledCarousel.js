import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from './CarouselImage'
import firstCarousel from './first-carousel.jpg'
import secondCarousel from './second-carousel.jpg'
import thirdCarousel from './third-carousel.jpg'
import fourthCarousel from './fourth-carousel.jpg'
const ControlledCarousel = () => {
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
        width: '100%',
        height: '400px',
      }}
    >
      <Carousel.Item interval={1000}>
        <CarouselImage src={firstCarousel} alt='First Carousel' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={secondCarousel} alt='Second Carousel' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={thirdCarousel} alt='Third Carousel' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src={fourthCarousel} alt='Third Carousel' />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
