import React from 'react';
import {Carousel} from 'react-bootstrap';
const Carosel1 = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/colorful-pastel-background-vivid-color-260nw-337136669.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/spring-wild-flowers-on-field-260nw-773051758.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/z/stock-photo-azure-pond-champfer-is-a-unique-place-on-earth-picturesque-day-and-gorgeous-scene-location-614265488.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default Carosel1;