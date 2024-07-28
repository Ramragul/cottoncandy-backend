import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  Image,
  SimpleGrid,
  ModalFooter,
  Link,
  HStack
} from '@chakra-ui/react';

import city1 from '../../assets/cities/city1.jpg';

interface CityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cities = [
  { name: 'City 1', img: city1 },
  { name: 'City 2', img: 'city2.jpg' },
  { name: 'City 3', img: 'city3.jpg' },
  { name: 'City 4', img: 'city4.jpg' },
  { name: 'City 5', img: 'city5.jpg' },
  { name: 'City 6', img: 'city6.jpg' },
  { name: 'City 7', img: 'city7.jpg' },
  { name: 'City 8', img: 'city8.jpg' }
];

const CityModal: React.FC<CityModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="pink.600" color="white">
          <Text fontSize="2xl" textAlign="center">Which City You Want the Delivery</Text>
          <Text fontSize="md" textAlign="center">We are currently operating only on the below cities</Text>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody bg="pink.50">
          <SimpleGrid columns={[1, 2, 4]} spacing={10} p={4}>
            {cities.map((city) => (
              <Box key={city.name} textAlign="center">
                <Image src={city.img} alt={city.name} borderRadius="md" />
                <Text mt={2} fontWeight="bold" color="pink.600">{city.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </ModalBody>
        <ModalFooter bg="pink.100" justifyContent="center">
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold">For any support connect with us</Text>
            <HStack spacing={4} justify="center" mt={2}>
              <Link href="tel:+123456789" color="pink.600">+123456789</Link>
              <Link href="mailto:support@cottoncandy.com" color="pink.600">support@cottoncandy.com</Link>
              <Link href="https://www.instagram.com/cottoncandy" color="pink.600">Instagram</Link>
              <Link href="https://twitter.com/cottoncandy" color="pink.600">X</Link>
              <Link href="https://wa.me/123456789" color="pink.600">WhatsApp</Link>
            </HStack>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CityModal;
