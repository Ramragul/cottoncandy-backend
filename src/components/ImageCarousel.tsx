import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image } from '@chakra-ui/react';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300',
  ];

  return (
    <Box mb="4" width="100%">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`carousel image ${index + 1}`}
              width="100%"
              height={{ base: "200px", md: "300px", lg: "400px" }} // Responsive heights
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
