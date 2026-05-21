import { Box, Text, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contactos() {
  return (
    <Box
      id="contactos"
      position="relative"
      overflow="hidden"
      bg="#050816"
      py={{ base: "100px", md: "120px" }}
      px={{ base: "20px", md: "40px" }}
    >
      {/* BACKGROUND GLOWS */}
      <Box
        position="absolute"
        top="-250px"
        right="-250px"
        w="600px"
        h="600px"
        bg="blue.500"
        opacity="0.18"
        filter="blur(180px)"
      />

      <Box
        position="absolute"
        bottom="-250px"
        left="-250px"
        w="600px"
        h="600px"
        bg="purple.500"
        opacity="0.16"
        filter="blur(180px)"
      />

      {/* GRID EFFECT */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.05"
        backgroundImage="
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        "
        backgroundSize="50px 50px"
      />

      {/* CONTENT */}
      <Box position="relative" zIndex={2}>
        {/* TITLE */}
        <Text
          textAlign="center"
          color="white"
          fontWeight="black"
          fontSize={{ base: "42px", md: "58px" }}
          lineHeight="1"
          mb="25px"
        >
          Contactos
        </Text>

        {/* DESCRIPTION */}
        <Text
          textAlign="center"
          color="gray.300"
          maxW="700px"
          mx="auto"
          fontSize={{ base: "16px", md: "19px" }}
          lineHeight="1.9"
          mb="55px"
        >
          ¿Tienes una idea, proyecto o propuesta?
          Estoy disponible para colaborar en desarrollo backend,
          APIs modernas y aplicaciones fullstack.
        </Text>

        {/* SOCIAL ICONS */}
        <HStack
          justify="center"
          spacing={{ base: 5, md: 8 }}
          flexWrap="wrap"
        >
          {/* GITHUB */}
          <Link
            href="https://github.com/agl5702"
            target="_blank"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "78px", md: "90px" }}
            h={{ base: "78px", md: "90px" }}
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.08)"
            backdropFilter="blur(12px)"
            borderRadius="24px"
            color="white"
            transition="0.35s"
            _hover={{
              transform: "translateY(-6px)",
              bg: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 30px rgba(255,255,255,0.12)",
            }}
          >
            <FaGithub size={38} />
          </Link>

          {/* LINKEDIN */}
          <Link
            href="https://www.linkedin.com/in/angel-vasquez-pedrozo-221634297/"
            target="_blank"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "78px", md: "90px" }}
            h={{ base: "78px", md: "90px" }}
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.08)"
            backdropFilter="blur(12px)"
            borderRadius="24px"
            color="#0A66C2"
            transition="0.35s"
            _hover={{
              transform: "translateY(-6px)",
              bg: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 30px rgba(10,102,194,0.35)",
            }}
          >
            <FaLinkedin size={38} />
          </Link>

          {/* EMAIL */}
          <Link
            href="mailto:tuemail@gmail.com"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "78px", md: "90px" }}
            h={{ base: "78px", md: "90px" }}
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.08)"
            backdropFilter="blur(12px)"
            borderRadius="24px"
            color="green.300"
            transition="0.35s"
            _hover={{
              transform: "translateY(-6px)",
              bg: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 30px rgba(74,222,128,0.35)",
            }}
          >
            <FaEnvelope size={34} />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

export default Contactos;