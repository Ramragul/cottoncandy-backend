import { Box, SimpleGrid, Text, VStack, Icon, Flex } from "@chakra-ui/react";
import { FaTools, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ServicePartnerLandingPage = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "View / Edit Your Services",
      icon: FaTools,
      navigateTo: "/partner/service/management",
      bgGradient: "linear(to-r, pink.400, red.400)",
    },
    {
      title: "Bookings",
      icon: FaClipboardList,
      navigateTo: "/partner/service/booking/management",
      bgGradient: "linear(to-r, purple.400, blue.400)",
    },
  ];

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-b, pink.100, purple.100)"
      p={6}
    >
      <VStack spacing={8} w="full" maxW="800px">
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="gray.700"
        >
          Welcome, Service Partner! ✨
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
          {options.map((option, index) => (
            <Box
              key={index}
              p={6}
              bgGradient={option.bgGradient}
              borderRadius="lg"
              boxShadow="lg"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
              onClick={() => navigate(option.navigateTo)}
            >
              <VStack spacing={4}>
                <Icon as={option.icon} boxSize={12} color="white" />
                <Text fontSize="xl" fontWeight="bold" color="white">
                  {option.title}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default ServicePartnerLandingPage;
