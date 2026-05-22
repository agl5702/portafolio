import { Box, Text, Image } from "@chakra-ui/react";

import python_img from "@/assets/pyt.svg";
import dj_img from "@/assets/django.svg";
import mysql_img from "@/assets/mysql.svg";
import postgres_img from "@/assets/post.svg";
import docker_img from "@/assets/dk.svg";
import aws_img from "@/assets/aws.svg";
import pytest_img from "@/assets/pytest.svg";
import github_img from "@/assets/gh.svg";
import fastapi_img from "@/assets/fastapi.svg";
import react_img from "@/assets/react.svg";
import js_img from "@/assets/js.svg";

const sections = [
  {
    title: "Backend",
    items: [
      { name: "Python", img: python_img },
      { name: "Django", img: dj_img },
      { name: "FastAPI", img: fastapi_img },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", img: js_img },
      { name: "React", img: react_img },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "PostgreSQL", img: postgres_img },
      { name: "MySQL", img: mysql_img },
    ],
  },
  {
    title: "ORM & Testing",
    items: [
      { name: "Django ORM", img: dj_img },
      { name: "PostgreSQL", img: postgres_img },
      { name: "Pytest", img: pytest_img },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", img: docker_img },
      { name: "GitHub", img: github_img },
      { name: "AWS", img: aws_img },
    ],
  },
];

function Tecnologias() {
  return (
    <Box
      id="tecnologias"
      position="relative"
      overflow="hidden"
      mt="-140px"
      pt={{ base: "130px", md: "180px" }}
      pb={{ base: "90px", md: "140px" }}
      px={{ base: "18px", md: "50px", lg: "90px" }}
    >
      {/* GRID */}

      <Box position="relative" zIndex={2}>
        {/* TITLE */}
        <Box textAlign="center" mb={{ base: "55px", md: "90px" }}>
          <Text
            fontSize={{ base: "38px", md: "58px" }}
            fontWeight="black"
            color="white"
            letterSpacing="-3px"
            lineHeight="1"
          >
            Tecnologías
          </Text>

          <Text
            mt="18px"
            color="rgba(255,255,255,0.58)"
            fontSize={{ base: "14px", md: "17px" }}
            maxW="760px"
            mx="auto"
            lineHeight="1.8"
            px="10px"
          >
            Stack enfocado en desarrollo backend moderno con Python, APIs
            escalables, bases de datos relacionales y despliegue de
            aplicaciones.
          </Text>
        </Box>

        {/* CARDS */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={{ base: "18px", md: "24px", xl: "28px" }}
        >
          {sections.map((section) => (
            <Box
              key={section.title}
              position="relative"
              overflow="hidden"
              borderRadius="30px"
              p={{ base: "22px", md: "28px" }}
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(255,255,255,0.08)"
              backdropFilter="blur(16px)"
              transition="all .35s ease"
              boxShadow="0 10px 40px rgba(0,0,0,0.20)"
              minH="100%"
              _before={{
                content: '""',
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), transparent)",
                opacity: 0.7,
              }}
              _hover={{
                transform: "translateY(-8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                bg: "rgba(255,255,255,0.045)",
                boxShadow: "0 0 50px rgba(59,130,246,0.12)",
              }}
            >
              <Text
                position="relative"
                zIndex={2}
                color="white"
                fontWeight="extrabold"
                fontSize={{ base: "21px", md: "24px" }}
                mb="24px"
                letterSpacing="-1px"
                textAlign="center"
              >
                {section.title}
              </Text>

              <Box
                display="grid"
                gridTemplateColumns={
                  section.items.length === 2
                    ? "repeat(2, 1fr)"
                    : {
                        base: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                      }
                }
                gap="14px"
                position="relative"
                zIndex={2}
              >
                {section.items.map((tech) => (
                  <Box
                    key={tech.name}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="12px"
                    w="100%"
                    minH={{ base: "125px", md: "145px" }}
                    p={{ base: "14px", md: "18px" }}
                    borderRadius="24px"
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(255,255,255,0.08)"
                    backdropFilter="blur(10px)"
                    transition="all .3s ease"
                    _hover={{
                      transform: "translateY(-4px) scale(1.03)",
                      bg: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      objectFit="contain"
                      w={{
                        base: "46px",
                        md: "56px",
                        lg: "62px",
                      }}
                      h={{
                        base: "46px",
                        md: "56px",
                        lg: "62px",
                      }}
                      userSelect="none"
                      pointerEvents="none"
                    />

                    <Text
                      textAlign="center"
                      color="rgba(255,255,255,0.74)"
                      fontSize={{ base: "12px", md: "14px" }}
                      fontWeight="medium"
                    >
                      {tech.name}
                    </Text>
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
