import { Box, Text, Image, List, Button, Link } from "@chakra-ui/react";
import avatar from "@/assets/avataro.png";
import "./fonts.css";

function Header() {
  return (
    <Box className="container_header" borderBottom="2px solid transparent">
      <Box 
        display="flex" 
        alignItems="center" 
        flexWrap="wrap"
        gap="1" 
        py="20px" 
        px="20px" 
        flexDirection={{ base: "column", md: "row" }} 
        textAlign="center"
        justifyContent="center"  // Centrar todo el contenido
      >
        {/* Izquierda: Logo y Nombre */}
        <Box 
          display="flex" 
          alignItems="center"  
          justifyContent="center"
          flex="1" // Para distribuir bien el espacio
        >
          <Image w={{ base: "80px", md: "100px" }} src={avatar}></Image>
          <Text 
            fontSize={{ base: "30px", md: "45px" }}
            fontFamily="Oswald" 
            fontWeight="bold" 
            color="white"
            ml="10px"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.3)" // Sombra al texto
          >
            AngelDev
          </Text>
        </Box>

        {/* Centro: Menú (Ahora centrado correctamente) */}
        <Box 
          display="flex" 
          justifyContent="center"
          flex="2" // Asegura que el menú esté bien distribuido en el centro
        >
          <List.Root 
            listStyle="none" 
            color="black" 
            fontSize="22px" 
            fontWeight="bold"
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            alignItems="center"
          >
            <List.Item my={{ base: "10px", md: "0" }} mx="20px">
                <Link outline="none" textUnderlineOffset="20px" textDecorationColor="blue.400"
                href="/home" color="white">Inicio</Link>
            </List.Item>
            <List.Item my={{ base: "10px", md: "0" }} mx="20px">
                <Link outline="none" href="/tecnologias" textUnderlineOffset="20px"
                textDecorationColor="blue.400" color="white">Tecnologías</Link>
            </List.Item>
            <List.Item my={{ base: "10px", md: "0" }} mx="20px">
                <Link outline="none" href="/proyectos" textUnderlineOffset="20px"
                textDecorationColor="blue.400" color="white">Proyectos</Link>
            </List.Item>
            <List.Item my={{ base: "10px", md: "0" }} mx="20px">
                <Link outline="none" href="/proyectos  " textUnderlineOffset="20px" 
                textDecorationColor="blue.400" color="white">Contactos</Link>
            </List.Item>
          </List.Root>
        </Box>

        {/* Derecha: Botón */}
        <Box 
          display="flex" 
          justifyContent="center"
          flex="1" // Equilibrar espacio con el logo
        >
          <Button 
            bg="blue.400" 
            color="white"
            px={{ base: "20px", md: "30px" }}
            py={{ base: "10px", md: "15px" }}
            fontSize={{ base: "16px", md: "18px" }}
          >
            Descarga
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
