import { Box,Text,Link } from "@chakra-ui/react"
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import "./contactos.css"

function Contactos() {
  return (
    <Box id="contactos" className="container_contactos" p="60px">
        <Text textAlign="center" fontSize="32px">Contactos</Text>
        <Box display="flex" justifyContent="center">
            <Link fontSize="55px" mx="10px" outline="none" textDecoration="none" href="https://github.com/agl5702">
                <FaGithub/>
            </Link>
            <Link fontSize="55px" mx="10px" color="blue.500" outline="none" textDecoration="none" 
            href="https://www.linkedin.com/in/angel-vasquez-pedrozo-221634297/">
                <FaLinkedin/>
            </Link>
        </Box>
    </Box>
)
}

export default Contactos