import { Container, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  if (session) {
    navigate("/");
  }

  return (
    <Container centerContent>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        w={{ base: "90%", md: "400px" }}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <VStack spacing={4}>
          <SupabaseAuthUI />
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;