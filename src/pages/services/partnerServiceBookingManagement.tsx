// import React from "react";
// import Lottie from "lottie-react";
// import NoBooking from "../../animations/NoBooking.json";
// import { Button } from "@chakra-ui/react";

// export const PartnerServiceBookingManagementPage: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6 text-white text-center">
//       <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">No Bookings Yet!</h1>
//       <p className="text-lg mb-6 max-w-md drop-shadow-md">
//         It looks like you haven't made any bookings yet. Start exploring our collection and book your favorite items today!
//       </p>
//       <div className="w-64 h-64">
//         <Lottie animationData={NoBooking} loop autoPlay />
//       </div>

//     </div>
//   );
// };

// export default PartnerServiceBookingManagementPage;


import React from "react";
import Lottie from "lottie-react";
import emptyAnimation from "../../animations/NoBooking.json";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom';

export const PartnerServiceBookingManagementPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="100vh" bgGradient="linear(to-r, pink.400, purple.400, blue.400)" p={6} textAlign="center" color="white" overflow="hidden">
      <Box fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={4} textShadow="lg">
        No Bookings Yet!
      </Box>
      <Box fontSize={{ base: "md", md: "lg" }} mb={6} maxW="md" textShadow="md">
      You haven't received any bookings from clients yet. Stay tuned! Once a booking is made, it will appear here.
      </Box>
      <Box w={{ base: "32", sm: "40", md: "44", lg: "48" }} h={{ base: "32", sm: "40", md: "44", lg: "48" }} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
        <Lottie animationData={emptyAnimation} loop autoPlay style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </Box>
      <Button mt={6} px={6} py={3} fontSize="lg" fontWeight="semibold" bg="yellow.400" color="black" borderRadius="xl" shadow="lg" _hover={{ bg: "yellow.500" }} onClick={()=>navigate('/service/partner/landing/page')}>
       Back to Admin Dashboard
      </Button>
    </Box>
  );
};

export default PartnerServiceBookingManagementPage;


