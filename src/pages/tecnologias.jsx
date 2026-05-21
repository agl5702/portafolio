import { Box, Text, Image } from "@chakra-ui/react";

import python_img from "@/assets/pyt.svg";
import dj_img from "@/assets/django.svg";
import mysql_img from "@/assets/mysql.svg";
import postgres_img from "@/assets/post.svg";
import dokcer_img from "@/assets/dk.svg";
import aws_img from "@/assets/aws.svg";
import pytest_img from "@/assets/pytest.svg";
import github_img from "@/assets/gh.svg";
import fastapi_img from "@/assets/fastapi.svg";

function Tecnologias() {
  return (
    <Box
      id="tecnologias"
      position="relative"
      overflow="hidden"
      mt="-140px"
      pt="180px"
      pb="140px"
      px={{ base: "20px", md: "60px", lg: "100px" }}
    >
      {/* TOP FADE */}
      

      {/* CONTINUOUS RIGHT GLOW */}
      <Box
        position="absolute"
        top="-300px"
        right="-250px"
        w="700px"
        h="700px"
        bg="blue.500"
        opacity="0.16"
        filter="blur(190px)"
      />

      {/* CONTINUOUS LEFT GLOW */}
      <Box
        position="absolute"
        bottom="-300px"
        left="-250px"
        w="700px"
        h="700px"
        bg="purple.500"
        opacity="0.14"
        filter="blur(190px)"
      />

      {/* GRID */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.025"
        backgroundImage="
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        "
        backgroundSize="50px 50px"
      />

      {/* CONTENT */}
      <Box position="relative" zIndex={2}>
        <Text
          textAlign="center"
          fontSize={{ base: "42px", md: "56px" }}
          fontWeight="black"
          color="white"
          mb="90px"
          letterSpacing="-2px"
        >
          Tecnologías
        </Text>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="30px"
        >
          {[
            {
              title: "Backend",
              items: [python_img, dj_img, fastapi_img],
            },
            {
              title: "Bases de datos",
              items: [mysql_img, postgres_img],
            },
            {
              title: "Infraestructura",
              items: [dokcer_img, aws_img],
            },
            {
              title: "Pruebas",
              items: [pytest_img, github_img],
            },
          ].map((section) => (
            <Box
              key={section.title}
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(14px)"
              borderRadius="30px"
              p="30px"
              minW="250px"
              boxShadow="0 0 40px rgba(0,0,0,0.28)"
              transition="all 0.35s ease"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), transparent)",
                opacity: 0.6,
              }}
              _hover={{
                transform: "translateY(-8px)",
                bg: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 0 45px rgba(59,130,246,0.12)",
              }}
            >
              <Text
                color="white"
                fontWeight="bold"
                fontSize="24px"
                mb="25px"
                textAlign="center"
                position="relative"
                zIndex={2}
              >
                {section.title}
              </Text>

              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap="14px"
                position="relative"
                zIndex={2}
              >
                {section.items.map((img, index) => (
                  <Box
                    key={index}
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(255,255,255,0.08)"
                    borderRadius="22px"
                    p="15px"
                    transition="all 0.3s ease"
                    backdropFilter="blur(10px)"
                    _hover={{
                      transform: "translateY(-4px) scale(1.04)",
                      bg: "rgba(255,255,255,0.08)",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Image
                      src={img}
                      w={{
                        base: "60px",
                        md: "75px",
                        lg: "90px",
                      }}
                      userSelect="none"
                      pointerEvents="none"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Tecnologias;