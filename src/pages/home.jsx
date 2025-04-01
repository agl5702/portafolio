import { Box, Text, Image, Button } from "@chakra-ui/react";
import img_angel from "@/assets/angel.png";
import "@/styles/animations.css"; // Importamos el CSS global
import "./home.css"

const iconStyle = {
  position: "absolute",
  width: "80px",
  height: "80px",
};

function Home() {
  return (
    <Box id="home" className="home-container" width="100vw"
    display={{'base':'column','sm':'column','md':'flex','lg':'flex'}} 
    alignContent="center" justifyContent="center" position="relative">
      <Box p="20px" w={{'base':'360px','sm':'390px','md':'450px','lg':'500px'}} display="flex" flexDirection="column" m="auto" justifyContent="center">
        <Text fontSize={{'base':'25px','sm':'30px','md':'40px','lg':'50px'}} fontWeight="bold" color="yellow.300">Hola,</Text>
        <Text fontSize={{'base':'35px','sm':'50px','md':'60px','lg':'75px'}} fontWeight="bold">soy Ángel</Text>
        <Text fontWeight="bold" fontSize={{'base':'16px','sm':'20px','md':'25px','lg':'28px'}} color="green.300">
          Backend / Python Developer
        </Text>
        <Text textAlign="justify" fontSize={{'base':'16px','sm':'18px','md':'19px','lg':'20px'}}>
          Apasionado por la programación y resolver bugs,
          mientras tomo una taza de café.
        </Text>
        <Button my="20px" w="160px" borderRadius="15px">Mi CV</Button>
      </Box>
      <Box position="relative" m="auto" display="flex" justifyContent="center">
        <Image src={img_angel} borderRadius="full" boxSize={{'base':'150px','sm':'250px','md':'350px','lg':'450px'}} />
      </Box>
    </Box>
  );
}

export default Home;