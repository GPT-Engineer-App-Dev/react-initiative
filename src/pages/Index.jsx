import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

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
        {session && (
          <Button ml={4} onClick={logout}>
            Logout
          </Button>
        )}
      </Flex>
      <Container centerContent maxW="container.md" py={8}>
        <Text>Welcome, {session.user.email}</Text>
      </Container>
    </Box>
  );
};

export default Index;