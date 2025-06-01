import React, { useState } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import '../css/ImageSlider.css';

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < imageUrls.length - 2) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box className="image-slider-container">
      <Box className="image-slider">
        <Image src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="active" />
        {currentImageIndex + 1 < imageUrls.length && (
          <Image src={imageUrls[currentImageIndex + 1]} alt={`Image ${currentImageIndex + 2}`} className="active" />
        )}
      </Box>
      <IconButton
        icon={<ArrowBackIcon />}
        onClick={prevImage}
        className={`prev ${currentImageIndex === 0 ? 'disabled' : ''}`}
        aria-label="Previous image"
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
      />
      <IconButton
        icon={<ArrowForwardIcon />}
        onClick={nextImage}
        className={`next ${currentImageIndex >= imageUrls.length - 2 ? 'disabled' : ''}`}
        aria-label="Next image"
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
      />
    </Box>
  );
};

export default ImageSlider;
