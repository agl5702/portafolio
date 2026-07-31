import { Text, Image, Button, Flex, VStack, HStack } from "@chakra-ui/react";

import { FaPython, FaReact, FaGithub, FaDocker, FaAws } from "react-icons/fa";

import { SiFastapi, SiPostgresql } from "react-icons/si";

import img_angel from "@/assets/angel2.png";

import "./home.css";

function Home() {
  return (
    <Flex
      id="home"
      minH="100vh"
      w="100%"
      px={{ base: "24px", md: "60px", lg: "100px" }}
      pt={{ base: "130px", md: "120px", lg: "80px" }}
      pb={{ base: "70px", md: "40px" }}
      align="center"
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 16, lg: 2 }}
      position="relative"
      overflow="hidden"
    >
      {/* LEFT CONTENT */}
      <VStack
        flex="1"
        zIndex={2}
        align={{ base: "center", lg: "start" }}
        spacing={7}
        maxW="580px"
        mt="100px"
      >
        <Text
          color="green.300"
          fontWeight="bold"
          fontSize={{ base: "20px", md: "22px" }}
          textAlign="center"
        >
          ANALISTA Y DESARROLLADOR DE SOFTWARE
        </Text>

        {/* DESCRIPTION */}
        <Text
          color="gray.300"
          fontSize={{ base: "16px", md: "18px" }}
          textAlign="justify"
          maxW="520px"
        >
          Especializado en la construcción de soluciones web completas, desde el
          análisis y diseño del sistema hasta el desarrollo, despliegue e
          implementación. Trabajo principalmente con Python, FastAPI, Django,
          React, PostgreSQL y tecnologías cloud/Linux, combinando desarrollo
          backend, frontend, arquitectura de software e infraestructura.
        </Text>

        {/* TECH STACK */}
        <HStack
          spacing={5}
          pt={1}
          flexWrap="wrap"
          justify={{ base: "center", lg: "start" }}
        >
          <FaPython size={32} color="#3776AB" />
          <SiFastapi size={32} color="#00C7B7" />
          <FaReact size={32} color="#61DAFB" />
          <FaGithub size={32} color="white" />
          <SiPostgresql size={32} color="#336791" />
          <FaDocker size={32} color="#2496ED" />
          <FaAws size={32} color="white" />
        </HStack>

        {/* BUTTONS */}
        <HStack
          spacing={4}
          pt={3}
          flexWrap="wrap"
          justify={{ base: "center", lg: "start" }}
        >
          <Button
            as="a"
            href="/cv.pdf"
            download="cv.pdf"
            size="lg"
            px={8}
            h="58px"
            bg="green.300"
            color="black"
            fontWeight="bold"
            borderRadius="18px"
            transition="0.3s"
            _hover={{
              transform: "translateY(-3px)",
              bg: "green.200",
              boxShadow: "0 0 25px rgba(74, 222, 128, 0.35)",
            }}
          >
            Download CV
          </Button>

          <Button
            as="a"
            href="https://github.com/agl5702"
            target="_blank"
            size="lg"
            px={8}
            h="58px"
            color="white"
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.10)"
            backdropFilter="blur(10px)"
            borderRadius="18px"
            transition="0.3s"
            _hover={{
              bg: "rgba(255,255,255,0.08)",
              transform: "translateY(-3px)",
            }}
          >
            GitHub
          </Button>
        </HStack>
      </VStack>

      {/* RIGHT SIDE */}
      <Flex
        flex="1"
        justify="center"
        align="center"
        position="relative"
        zIndex={2}
        mt={{ base: "20px", lg: "0px" }}
        mr={{ lg: "-40px" }}
      >
        <Image
          src={img_angel}
          alt="Angel"
          objectFit="contain"
          w={{
            base: "360px",
            md: "520px",
            lg: "760px",
          }}
          borderRadius="16px"
          filter="
            drop-shadow(0px 35px 70px rgba(0,0,0,0.55))
            drop-shadow(0px 0px 30px rgba(59,130,246,0.20))
          "
          transition="all 0.4s ease"
          _hover={{
            transform: "scale(1.02)",
          }}
          userSelect="none"
          pointerEvents="none"
        />
      </Flex>
    </Flex>
  );
}

export default Home;
