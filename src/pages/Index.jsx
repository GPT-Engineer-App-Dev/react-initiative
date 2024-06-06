import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Input, Button, Heading } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const LoginBox = () => (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      p={8}
      borderRadius="md"
      boxShadow="lg"
      w={{ base: "90%", md: "400px" }}
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Login
      </Heading>
      <VStack spacing={4}>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue" w="full">
          Submit
        </Button>
      </VStack>
    </Box>
  );

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Flex as="nav" bg={useColorModeValue("white", "gray.800")} p={4} boxShadow="md">
        <Box fontWeight="bold">MyApp</Box>
        <Spacer />
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Container centerContent maxW="container.md" py={8}>
        <LoginBox />
      </Container>
    </Box>
  );
};

export default Index;