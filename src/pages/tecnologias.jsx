import { Box,Text,Image} from "@chakra-ui/react"
import "./tecnologias.css"
import python_img  from "@/assets/pyt.svg"
import dj_img  from "@/assets/django.svg"
// import pandas_img  from "@/assets/pandas.svg"
import mysql_img from "@/assets/mysql.svg"
import postgres_img from "@/assets/post.svg"
import dokcer_img from "@/assets/dk.svg"
import aws_img from "@/assets/aws.svg"
import pytest_img from "@/assets/pytest.svg"
import github_img from "@/assets/gh.svg"
import fastapi_img from "@/assets/fastapi.svg"

function tecnologias() {

    return (
    <Box className="container-tecnologias" textAlign="center">
        <Text fontSize="28px" fontWeight="bold"> Tecnologías</Text>
        <Box display="flex" alignItems="center" justifyContent="space-around" p="20px">
            
            <Box>
                <Text fontSize="19px" fontWeight="bold">Backend</Text>
                <Box>
                    
                    <Box display="flex">
                        <Image mx="5px" src={python_img}/>
                        <Image mx="5px"  src={dj_img}/>
                        <Image mx="5px" src={fastapi_img}/>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Bases de datos</Text>
                <Box>
                    <Box display="flex">
                        <Image mx="5px" src={mysql_img}/>
                        <Image mx="5px" src={postgres_img}/>                    
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Infraestructura</Text>
                <Box>
                    <Box display="flex">
                        <Image mx="5px" src={dokcer_img}/>
                        <Image mx="5px" src={aws_img}/>                    
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Pruebas</Text>
                <Box>
                    <Box display="flex">
                        <Image mx="5px" src={pytest_img}/>
                        <Image mx="5px" src={github_img}/>
                    </Box>
                </Box>
            </Box>
        </Box>
       

    </Box>
)
}

export default tecnologias