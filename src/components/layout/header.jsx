import { Box, Text, Image, List, Button, Link, HStack } from "@chakra-ui/react";

import avatar from "@/assets/avataro.png";

import "./fonts.css";

function Header() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="999"
      bg="rgba(5, 8, 22, 0.72)"
      backdropFilter="blur(14px)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
      boxShadow="0 10px 40px rgba(0,0,0,0.25)"
    >
      {/* BACKGROUND GLOW */}
      <Box
        position="absolute"
        top="-80px"
        right="-100px"
        w="250px"
        h="250px"
        bg="blue.500"
        opacity="0.12"
        filter="blur(120px)"
      />

      <Box
        position="absolute"
        bottom="-120px"
        left="-100px"
        w="250px"
        h="250px"
        bg="purple.500"
        opacity="0.1"
        filter="blur(120px)"
      />

      <Box
        maxW="1500px"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: "20px", md: "40px", lg: "70px" }}
        py="18px"
        position="relative"
        zIndex={2}
      >
        {/* LEFT */}
        <HStack spacing={4}>
          {/* AVATAR GLOW */}
          <Box position="relative">
            <Box
              position="absolute"
              inset="-8px"
              bg="green.300"
              opacity="0.25"
              filter="blur(20px)"
              borderRadius="full"
            />

            <Image
              src={avatar}
              w={{ base: "60px", md: "72px" }}
              borderRadius="full"
              border="2px solid rgba(255,255,255,0.08)"
              bg="rgba(255,255,255,0.04)"
              backdropFilter="blur(10px)"
              transition="0.3s"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>

          <Box>
            <Text
              fontSize={{
                base: "24px",
                md: "30px",
                lg: "38px",
              }}
              fontFamily="Oswald"
              fontWeight="bold"
              color="white"
              lineHeight="1"
              letterSpacing="1px"
            >
              Angel
              <Text as="span" color="green.300" ml="3px">
                Dev
              </Text>
            </Text>
          </Box>
        </HStack>

        {/* CENTER MENU */}
        <List.Root
          listStyle="none"
          display={{
            base: "none",
            md: "flex",
          }}
          flexDirection="row"
          alignItems="center"
          gap="40px"
        >
          {[
            ["Inicio", "#home"],
            ["Tecnologías", "#tecnologias"],
            ["Proyectos", "#proyectos"],
            ["Contactos", "#contactos"],
          ].map(([label, href]) => (
            <List.Item key={label}>
              <Link
                href={href}
                color="gray.300"
                fontWeight="600"
                fontSize="16px"
                position="relative"
                textDecoration="none"
                transition="0.3s"
                _hover={{
                  color: "green.300",
                  textDecoration: "none",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bg: "green.300",
                  left: "0",
                  bottom: "-6px",
                  transition: "0.3s",
                }}
                sx={{
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {label}
              </Link>
            </List.Item>
          ))}
        </List.Root>

        {/* RIGHT BUTTON */}
        <Button
          as="a"
          href="/cv.pdf"
          download="cv.pdf"
          h="55px"
          px="28px"
          bg="green.300"
          color="black"
          fontWeight="bold"
          borderRadius="18px"
          display={{
            base: "none",
            lg: "flex",
          }}
          transition="0.3s"
          _hover={{
            transform: "translateY(-3px)",
            bg: "green.200",
            boxShadow: "0 0 25px rgba(74, 222, 128, 0.35)",
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
