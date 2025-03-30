import { Box,Text,Image,Button } from "@chakra-ui/react"
import img_angel from "@/assets/angel.png"

function Home() {
  return (
    <Box display="flex" alignContent="center" justifyContent="center" >
        <Box p="50px" w="500px" display="flex" flexDirection="column">
            <Text fontSize="50px" fontWeight="bold" color="yellow.300">
                Hola, 
            </Text>
            <Text fontSize="75px" fontWeight="bold">
                soy Ángel
            </Text>
            <Text fontWeight="bold" fontSize="28px" color="green.300">
                Backend / Python Developer
            </Text>
            <Text fontSize="20px">
            Soy un apasionado por la programación, que tiene como meta;
            superarme cada dia con diferentes retos, mientras tomo
            una taza de café
            </Text>
            <Button m="20px" w="180px" borderRadius="15px">
                Descarga
            </Button>
        </Box>
        <Box>
            <Image src={img_angel}/>
        </Box>
        
    </Box>
    )
}

export default Home