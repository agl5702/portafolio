import { Box, Text, Image, Button } from "@chakra-ui/react";
import img_angel from "@/assets/angel.png";
import img_python from "@/assets/pyt.svg";
import img_docker from "@/assets/dk.svg";
import img_github from "@/assets/gh.svg";
import img_aws from "@/assets/aws.svg";
import "@/styles/animations.css"; // Importamos el CSS global
import "./home.css"

const iconStyle = {
  position: "absolute",
  width: "80px",
  height: "80px",
};

function Home() {
  return (
    <Box className="home-container" width="100vw" display="flex" alignContent="center" justifyContent="center" position="relative">
      <Box p="50px" w="500px" display="flex" flexDirection="column">
        <Text fontSize="50px" fontWeight="bold" color="yellow.300">Hola,</Text>
        <Text fontSize="75px" fontWeight="bold">soy Ángel</Text>
        <Text fontWeight="bold" fontSize="28px" color="green.300">
          Backend / Python Developer
        </Text>
        <Text fontSize="20px">
          Apasionado por la programación y resolver bugs, mientras tomo una taza de café.
        </Text>
        <Button m="20px" w="180px" borderRadius="15px">Descarga</Button>
      </Box>
      <Box position="relative">
        <Image src={img_angel} borderRadius="full" boxSize="450px" />
      </Box>
    </Box>
  );
}

export default Home;