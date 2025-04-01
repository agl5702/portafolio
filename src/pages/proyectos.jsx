import {Box,Text} from "@chakra-ui/react"
import ecco_img from "@/assets/ecco.png"
import keittweb_img from "@/assets/keittweb.png"
import ppt_img from "@/assets/ppt.png"
import tesoro_img from "@/assets/encuentraeltesoro.png"
import CardProyect from "../components/layout/card"
import "./proyectos.css"

function Proyectos() {
  return (
    <Box id="proyectos" p="20px" className="container_proyectos">
        <Text textAlign="center" fontSize="32px">Desarrollo Web</Text>
        <Box >
            <Box display="flex" justifyContent="center" flexWrap="wrap" gap="2">
                <CardProyect image={ecco_img} title="EccoFullStack" 
                description="Eccomerce con integración de pagos vía paypal - 
                autenticación, api rest"
                badge1="Django" badge1_color="green" badge2="Paypal" badge2_color="blue" 
                badge3="Mysql" badge3_color="yellow" 
                text_button="Ver más" link_button="https://eccofullstack.vercel.app/"
                />
                <CardProyect image={keittweb_img} title="KeittWeb" 
                description="Guía interactiva para cultivos de mango de variedad Keitt, Proyecto de mi etapa prácticas - Sennova(SENA)" 
                badge1="Django" badge1_color="green" badge2="PostgreSQL" badge2_color="orange" 
                badge3="TensorFlow" badge3_color="yellow" text_button="Ver más" link_button="https://keittweb.vercel.app/"
                />
                <CardProyect image={ecco_img} title="WebSpy" 
                description="Herramienta webscraping para comparar precios y encontrar la mejor opción" 
                badge1="FastAPI" badge1_color="blue"
                badge2="Beatifoulsoup" badge2_color="purple" badge3="Pandas" badge3_color="green" 
                text_button="Ver más" link_button="/"
                />
            </Box>
            <Text textAlign="center" fontSize="32px">Videojuegos</Text>
            <Box display="flex" justifyContent="center" flexWrap="wrap" gap="1">
                <CardProyect image={ppt_img} title="Piedra Papel o Tijeras" 
                description="Juego de piedras papel o tijera"
                text_button="Ver más" link_button="https://agl5702.github.io/juego1/"
                />
                <CardProyect image={tesoro_img} title="Encuentra el tesoro" 
                description="Juego de encontrar el tesoro"
                text_button="Ver más" link_button="https://agl5702.github.io/encuentraeltesoro/"
                />
            </Box>
        </Box>
    </Box>
)
}

export default Proyectos