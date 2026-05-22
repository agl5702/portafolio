import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { FaPython, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import { SiFastapi, SiPostgresql } from "react-icons/si";

import img_angel from "@/assets/angel2.png";

import "./home.css";

function Home() {
  return (
    <Flex
      id="home"
      minH="115vh"
      w="100%"
      px={{ base: "20px", md: "60px", lg: "100px" }}
      py={{ base: "120px", md: "0px" }}
      align="center"
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
      position="relative"
    >
      {/* LEFT CONTENT */}
      <VStack
        zIndex={2}
        align={{ base: "center", lg: "start" }}
        spacing={6}
        maxW="650px"
      >
        <Text
          color="green.300"
          fontWeight="bold"
          fontSize={{ base: "16px", md: "20px" }}
          letterSpacing="3px"
        >
          FULLSTACK PYTHON / REACT
        </Text>

        <Text
          color="white"
          fontWeight="black"
          lineHeight="0.95"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "60px", md: "85px", lg: "105px" }}
        >
          Ángel
        </Text>

        <Text
          color="gray.300"
          fontSize={{ base: "17px", md: "20px" }}
          textAlign="justify"
          maxW="560px"
          lineHeight="1.9"
        >
          Backend developer specialized in scalable APIs, authentication
          systems, business logic and modern full stack applications using
          Python, FastAPI, Django, React and PostgreSQL.
        </Text>

        {/* TECH STACK */}
        <HStack
          spacing={5}
          pt={2}
          flexWrap="wrap"
          justify={{ base: "center", lg: "start" }}
        >
          <FaPython size={34} color="#3776AB" />
          <SiFastapi size={34} color="#00C7B7" />
          <FaReact size={34} color="#61DAFB" />
          <FaGithub size={34} color="white" />
          <SiPostgresql size={34} color="#336791" />
          <FaDocker size={34} color="#2496ED" />
        </HStack>

        {/* BUTTONS */}
        <HStack spacing={4} pt={4} flexWrap="wrap">
          <Button
            as="a"
            href="/cvangel.docx"
            download="CV_Angel.docx"
            size="lg"
            px={8}
            h="60px"
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
            h="60px"
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
        mt={{ base: "80px", lg: "0px" }}
      >
        {/* IMAGE */}
        <Image
          src={img_angel}
          alt="Angel"
          position="relative"
          objectFit="contain"
          w={{ base: "360px", md: "520px", lg: "720px" }}
          borderRadius="10px"
          ml="30px"
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
