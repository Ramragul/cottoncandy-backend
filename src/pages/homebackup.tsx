// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/Home.css'; // Ensure you create a corresponding CSS file

// export const Home = () => {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Cotton Candy</h1>
//       <div className="tiles-container">
//         <Link to="/tailoringCatalogue" className="tile tailoring-tile">
//           <h2>Tailoring</h2>
//         </Link>
//         <Link to="/rentalCatalogue" className="tile rental-tile">
//           <h2>Rental</h2>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/Home.css';

// export const Home = () => {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Cotton Candy</h1>
//       <div className="tiles-container">
//         <Link to="/tailoringCatalogue" className="tile tailoring-tile">
//           <h2>Tailoring</h2>
//         </Link>
//         <Link to="/rentalCatalogue" className="tile rental-tile">
//           <h2>Rental</h2>
//         </Link>
//       </div>
//       <div className="about-us">
//         <h2>About Us</h2>
//         <p>
//           Cotton Candy offers premium tailoring and rental services. Our skilled team ensures that you get the best
//           fit and the most stylish designs. We cater to all your special occasions with our exquisite collections.
//         </p>
//       </div>
//       <div className="services">
//         <h2>Our Services</h2>
//         <ul>
//           <li>Custom Tailoring</li>
//           <li>Wedding Attire Rentals</li>
//           <li>Party Wear Rentals</li>
//           <li>Alterations and Repairs</li>
//         </ul>
//       </div>
//       <div className="gallery">
//         <h2>Gallery</h2>
//         <div className="gallery-images">
//           <img src="gallery1.jpg" alt="Gallery 1" />
//           <img src="gallery2.jpg" alt="Gallery 2" />
//           <img src="gallery3.jpg" alt="Gallery 3" />
//         </div>
//       </div>
//       <div className="contact-us">
//         <h2>Contact Us</h2>
//         <p>
//           Email: info@cottoncandy.com<br />
//           Phone: +123 456 7890<br />
//           Address: 123 Fashion St, Style City
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

export const Home = () => {
  return (
    <Box textAlign="center" p="5" bg="gray.50" minHeight="100vh">
      <Heading color="pink.500" mb="8">Welcome to Cotton Candy</Heading>
      <Flex justify="center" gap="8">
        <ChakraLink 
          as={RouterLink} 
          to="/tailoringCatalogue" 
          p="8" 
          bg="pink.200" 
          borderRadius="md" 
          _hover={{ bg: "pink.300" }}
        >
          Tailoring
        </ChakraLink>
        <ChakraLink 
          as={RouterLink} 
          to="/rentalCatalogue" 
          p="8" 
          bg="orange.200" 
          borderRadius="md" 
          _hover={{ bg: "orange.300" }}
        >
          Rental
        </ChakraLink>
      </Flex>
      < ImageCarousel />
    </Box>
  );
}

export default Home;
