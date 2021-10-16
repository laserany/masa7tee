import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from './CarouselImage'
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
        <CarouselImage src='1.png' alt='First slide' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src='2-removebg-preview.png' alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage src='3-removebg-preview.png' alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
