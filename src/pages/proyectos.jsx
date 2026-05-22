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

function Proyectos() {
  return (
    <Box
      id="proyectos"
      position="relative"
      overflow="hidden"
      py={{ base: "100px", md: "120px" }}
      px={{ base: "20px", md: "40px", lg: "60px" }}
    >
      {/* CONTENT */}
      <Box position="relative" zIndex={2}>
        {/* TITLE */}
        <Text
          textAlign="center"
          color="white"
          fontWeight="black"
          fontSize={{ base: "42px", md: "58px" }}
          mb="70px"
          lineHeight="1"
        >
          Proyectos
        </Text>

        {/* WEB DEVELOPMENT */}
        <Box mb="90px">
          <Text
            textAlign="center"
            color="white"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="bold"
            mb="40px"
          >
            Desarrollo Web
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="28px"
            pb="28px"
          >
            <CardProyect
              image={jhs3}
              images={[jhs1, jhs2, jhs3, jhs4, jhs5, jhs6, jhs7, jhs8, jhs9]}
              title="Sistema de Inventario"
              description="Crear categorías de productos, stock, ventas, control de deudores y reportes por fechas."
              badge1="FastAPI"
              badge1_color="green"
              badge2="AWS"
              badge2_color="blue"
              badge3="MySQL"
              badge3_color="yellow"
              text_button="Ver más"
              link_button="https://github.com/agl5702/tienda2"
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
              title="Panel de administración"
              description="Catálogo de prendas con imágenes, colores, tallas y sistema de permisos."
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

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="28px"
          >
            <CardProyect
              image={ecco_img}
              title="EccoFullStack"
              description="Ecommerce con integración de pagos vía PayPal, autenticación y API REST."
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
              description="Guía interactiva para cultivos de mango Keitt. Proyecto desarrollado en Sennova."
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
        </Box>

        {/* GAMES */}
        <Box>
          <Text
            textAlign="center"
            color="white"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="bold"
            mb="40px"
          >
            Videojuegos
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="28px"
          >
            <CardProyect
              image={ppt_img}
              title="Piedra Papel o Tijeras"
              description="Juego clásico desarrollado con JavaScript."
              text_button="Ver más"
              link_button="https://agl5702.github.io/juego1/"
            />

            <CardProyect
              image={tesoro_img}
              title="Encuentra el Tesoro"
              description="Videojuego interactivo de exploración."
              text_button="Ver más"
              link_button="https://agl5702.github.io/encuentraeltesoro/"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Proyectos;
