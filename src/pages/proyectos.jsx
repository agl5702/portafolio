import { Box, Text } from "@chakra-ui/react";
import ecco_img from "@/assets/ecco.png";
import keittweb_img from "@/assets/keittweb.png";
import ppt_img from "@/assets/ppt.png";
import tesoro_img from "@/assets/encuentraeltesoro.png";
import jhs1 from "@/assets/jhs1.png";
import jhs2 from "@/assets/jhs2.png";
import jhs3 from "@/assets/jhs3.png";
import jhs4 from "@/assets/jhs4.png";
import jhs5 from "@/assets/jhs5.png";
import jhs6 from "@/assets/jhs6.png";
import jhs7 from "@/assets/jhs7.png";
import jhs8 from "@/assets/jhs8.png";
import jhs9 from "@/assets/jhs9.png";
import lunalu1 from "@/assets/lunalu1.png";
import lunalu2 from "@/assets/lunalu2.png";
import lunalu3 from "@/assets/lunalu3.png";
import lunalu4 from "@/assets/lunalu4.png";
import lunalu5 from "@/assets/lunalu5.png";
import lunalu6 from "@/assets/lunalu6.png";
import lunalu7 from "@/assets/lunalu7.png";
import lunalu8 from "@/assets/lunalu8.png";
import lunalu9 from "@/assets/lunalu8.png";
import lunalu10 from "@/assets/lunalu10.png";
import lunalu11 from "@/assets/lunalu11.png";
import CardProyect from "../components/layout/card";
import "./proyectos.css";

function Proyectos() {
  return (
    <Box id="proyectos" p="20px" className="container_proyectos">
      <Text
        textAlign="center"
        color={{ base: "white", sm: "white", md: "white", lg: "white" }}
        fontSize="32px"
      >
        Desarrollo Web
      </Text>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="2"
          pb="10px"
        >
          <CardProyect
            image={jhs3}
            images={[jhs1, jhs2, jhs3, jhs4, jhs5, jhs6, jhs7, jhs8, jhs9]}
            title="Sistema de Iventario"
            description="Crear categorias de productos, stock, ventas,llevar el control para deudores, reportes por fechas..."
            badge1="FastAPI"
            badge1_color="green"
            badge2="AWS"
            badge2_color="blue"
            badge3="MySQL"
            badge3_color="yellow"
            text_button="Ver más"
            link_button="https://github.com/agl5702/tienda-online-backend"
          />
          <CardProyect
            image={lunalu11}
            images={[
              lunalu1,
              lunalu2,
              lunalu3,
              lunalu4,
              lunalu5,
              lunalu6,
              lunalu7,
              lunalu8,
              lunalu9,
              lunalu10,
            ]}
            title="Panel de administración para catálogos"
            description="Catálogo de prendas, con descripciones, colores,tallas, imagenes y permisos para asignar"
            badge1="Django"
            badge1_color="green"
            badge2="MySQL"
            badge2_color="orange"
            badge3="AWS"
            badge3_color="yellow"
            text_button="Ver más"
            link_button="https://github.com/agl5702/lunalu-backend"
          />
        </Box>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap="2">
          <CardProyect
            image={ecco_img}
            title="EccoFullStack"
            description="Eccomerce con integración de pagos vía paypal - 
                autenticación, api rest"
            badge1="Django"
            badge1_color="green"
            badge2="Paypal"
            badge2_color="blue"
            badge3="Mysql"
            badge3_color="yellow"
            text_button="Ver más"
            link_button="https://github.com/agl5702/eccomerce-backend"
          />
          <CardProyect
            image={keittweb_img}
            title="KeittWeb"
            description="Guía interactiva para cultivos de mango de variedad Keitt, Proyecto de mi etapa prácticas - Sennova(SENA)"
            badge1="Django"
            badge1_color="green"
            badge2="PostgreSQL"
            badge2_color="orange"
            badge3="TensorFlow"
            badge3_color="yellow"
            text_button="Ver más"
            link_button="https://github.com/agl5702/KeittWeb-Backend"
          />
        </Box>
        <Text
          textAlign="center"
          color={{ base: "white", sm: "white", md: "white", lg: "white" }}
          fontSize="32px"
        >
          Videojuegos
        </Text>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap="1">
          <CardProyect
            image={ppt_img}
            title="Piedra Papel o Tijeras"
            description="Juego de piedras papel o tijera"
            text_button="Ver más"
            link_button="https://agl5702.github.io/juego1/"
          />
          <CardProyect
            image={tesoro_img}
            title="Encuentra el tesoro"
            description="Juego de encontrar el tesoro"
            text_button="Ver más"
            link_button="https://agl5702.github.io/encuentraeltesoro/"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Proyectos;
