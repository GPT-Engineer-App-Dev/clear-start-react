import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" p={4} boxShadow="lg" borderRadius="md">
        <VStack spacing={4}>
          <Heading as="h1" size="xl">Login</Heading>
          <Text>Welcome back! Please login to your account.</Text>
          <SupabaseAuthUI />
          <Text>
            <Link to="/">Go back to Home</Link>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;