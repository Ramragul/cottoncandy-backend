import { Box, Flex, Heading, Text, Icon, VStack, HStack, Link, Button } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export const ContactUsPage = () => {
  const [emailClicked, setEmailClicked] = useState(false);

  const handleEmailClick = () => {
    setEmailClicked(true);
    setTimeout(() => setEmailClicked(false), 2000);
  };

  return (
    <Box bg="pink.50" p={8}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="800px"
        mx="auto"
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="xl"
      >
        <Heading as="h1" size="xl" mb={4} color="pink.500">
          Contact Us
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.700" mb={6}>
          Have questions? We're here to help! Feel free to reach out to us using any of the options below.
        </Text>

        <VStack spacing={6} alignItems="flex-start" w="100%">
          <HStack spacing={3}>
            <Icon as={FaPhoneAlt} boxSize={6} color="pink.500" />
            <Text fontSize="lg" color="gray.700">+91 96297 05557</Text>
          </HStack>

          <HStack spacing={3}>
            <Icon as={FaEnvelope} boxSize={6} color="pink.500" />
            <Link
              href="mailto:support@cottoncandy.co.in"
              fontSize="lg"
              color="pink.500"
              onClick={handleEmailClick}
            >
              support@cottoncandy.co.in
            </Link>
            {emailClicked && <Text color="green.500" ml={2}>Email copied!</Text>}
          </HStack>

          <HStack spacing={3}>
            <Icon as={FaMapMarkerAlt} boxSize={6} color="pink.500" />
            <Text fontSize="lg" color="gray.700">India, UK, UAE</Text>
          </HStack>
        </VStack>

        <Button
          mt={8}
          size="lg"
          colorScheme="pink"
          variant="solid"
          onClick={() => window.open("mailto:support@cottoncandy.co.in")}
        >
          Get In Touch
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactUsPage;
