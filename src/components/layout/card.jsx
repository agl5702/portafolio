import {
  Card,
  Image,
  Badge,
  HStack,
  Link,
  Dialog,
  Portal,
  Box,
  IconButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";

export default function CardProyect({
  image, // Imagen principal (para la card)
  images = [], // Array de imágenes para el modal (si no se proporciona, usará la imagen principal)
  title,
  description,
  badge1,
  badge1_color,
  badge2,
  badge2_color,
  badge3,
  badge3_color,
  text_button,
  link_button,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Si no hay imágenes en el array, usamos la imagen principal
  const modalImages = images.length > 0 ? images : [image];

  const renderBadge = (text, color) => {
    return text ? <Badge colorPalette={color}>{text}</Badge> : null;
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Dialog.Root
      onOpen={() => setCurrentImageIndex(0)} // Resetear índice al abrir
    >
      {/* Tarjeta exterior */}
      <Card.Root
        _hover={{ transform: "scale(1.005)", boxShadow: "lg" }}
        mx="10px"
        bg="white"
        maxW="xl"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.200"
        transition="all 0.2s ease"
        boxShadow="md"
      >
        <Dialog.Trigger asChild>
          <Box position="relative" w="100%">
            <Image
              minH="300px"
              maxH="300px"
              w="100%"
              objectFit="cover"
              src={image}
              alt={title || "Proyecto"}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.02)" }}
            />
          </Box>
        </Dialog.Trigger>

        <Card.Body gap={3} p={5}>
          <Card.Title color="blue.800" fontSize="xl" fontWeight="bold">
            {title}
          </Card.Title>
          <Card.Description fontSize="md" color="gray.600">
            {description}
          </Card.Description>

          {(badge1 || badge2 || badge3) && (
            <HStack mt={3} spacing={2}>
              {renderBadge(badge1, badge1_color)}
              {renderBadge(badge2, badge2_color)}
              {renderBadge(badge3, badge3_color)}
            </HStack>
          )}
        </Card.Body>

        <Card.Footer p={5} pt={0}>
          <Link
            href={link_button}
            bg="blue.400"
            p={3}
            textDecoration="none"
            color="white"
            _hover={{ bg: "blue.600", transform: "translateY(-1px)" }}
            borderRadius="md"
            fontWeight="medium"
            display="inline-block"
            transition="all 0.2s ease"
            width="100%"
            textAlign="center"
          >
            {text_button}
          </Link>
        </Card.Footer>
      </Card.Root>

      {/* Modal */}
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.800" style={{ cursor: "pointer" }} />
        <Dialog.Positioner
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
          onClick={() => Dialog.close()}
        >
          <Dialog.Content
            bg="transparent"
            maxW="100vw"
            maxH="100vh"
            overflow="hidden"
            p={0}
            boxShadow="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              position="relative"
              maxW="90vw"
              maxH="90vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="xl"
              overflow="hidden"
            >
              {/* Flechas de navegación solo si hay más de una imagen */}
              {modalImages.length > 1 && (
                <>
                  <Button
                    position="absolute"
                    left="20px"
                    aria-label="Imagen anterior"
                    bg="blackAlpha.700"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    size="lg"
                    zIndex="1"
                    borderRadius="full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                  >
                    <IoChevronBack size={24} />
                  </Button>

                  <Button
                    position="absolute"
                    right="20px"
                    aria-label="Siguiente imagen"
                    bg="blackAlpha.700"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    size="lg"
                    zIndex="1"
                    borderRadius="full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                  >
                    <IoChevronForward size={24} />
                  </Button>
                </>
              )}

              {/* Indicador de imágenes (solo si hay más de una) */}
              {modalImages.length > 1 && (
                <Flex
                  position="absolute"
                  bottom="20px"
                  left="0"
                  right="0"
                  justifyContent="center"
                  gap="8px"
                  zIndex="1"
                >
                  {modalImages.map((_, index) => (
                    <Box
                      key={index}
                      w="10px"
                      h="10px"
                      borderRadius="full"
                      bg={
                        index === currentImageIndex ? "white" : "whiteAlpha.500"
                      }
                      transition="all 0.2s"
                    />
                  ))}
                </Flex>
              )}

              {/* Imagen actual */}
              <Image
                src={modalImages[currentImageIndex]}
                alt={`${title || "Proyecto"} - Imagen ${
                  currentImageIndex + 1
                } de ${modalImages.length}`}
                objectFit="contain"
                maxW="100%"
                maxH="100%"
                borderRadius="xl"
              />

              <Dialog.CloseTrigger asChild>
                <IconButton
                  position="absolute"
                  top="20px"
                  right="20px"
                  aria-label="Cerrar modal"
                  bg="blackAlpha.700"
                  color="white"
                  _hover={{ bg: "blackAlpha.800" }}
                  size="lg"
                  zIndex="1"
                >
                  <IoClose size={24} />
                </IconButton>
              </Dialog.CloseTrigger>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
