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
    <Box className="container-tecnologias" textAlign="center" flexWrap="wrap" gap="1">
        <Text fontSize="28px" fontWeight="bold"> Tecnologías</Text>
        <Box display="flex" alignItems="center" justifyContent="space-around" p="20px" flexWrap="wrap" gap="1" >
            
            <Box >
                <Text fontSize="19px" fontWeight="bold">Backend</Text>
                <Box>
                    
                    <Box display="flex" flexWrap="wrap" gap="1">
                        <Image mx="5px" alt="python_logo" title="Python" src={python_img}/>
                        <Image mx="5px" alt="django_logo" title="Django" src={dj_img}/>
                        <Image mx="5px" alt="fastapi_logo" title="FastAPI" src={fastapi_img}/>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Bases de datos</Text>
                <Box>
                    <Box display="flex" flexWrap="wrap" gap="1">
                        <Image alt="mysql_logo" title="Mysql" mx="5px" src={mysql_img}/>
                        <Image alt="postgres_logo" title="Postgresql" mx="5px" src={postgres_img}/>                    
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Infraestructura</Text>
                <Box>
                    <Box display="flex" flexWrap="wrap" gap="1">
                        <Image alt="docker_logo" title="Docker" mx="5px" src={dokcer_img}/>
                        <Image alt="aws_logo" title="Amazon Web Services" mx="5px" src={aws_img}/>                    
                    </Box>
                </Box>
            </Box>
            <Box>
                <Text fontSize="19px" fontWeight="bold">Pruebas</Text>
                <Box>
                    <Box display="flex" flexWrap="wrap" gap="1">
                        <Image alt="pytest_logo" title="Pytest" mx="5px" src={pytest_img}/>
                        <Image alt="github_logo" title="Github Actions" mx="5px" src={github_img}/>
                    </Box>
                </Box>
            </Box>
        </Box>
       

    </Box>
)
}

export default tecnologias