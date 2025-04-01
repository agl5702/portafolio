import { Card, Image, Badge, HStack, Button, Link } from "@chakra-ui/react";

export default function CardProyect({
  image,
  title,
  description,
  badge1,
  badge1_color,
  badge2,
  badge2_color,
  badge3,
  badge3_color,
  text_button,
  link_button
}) {
  // Función para renderizar un Badge si tiene contenido
  const renderBadge = (text, color) => {
    return text ? <Badge colorPalette={color}>{text}</Badge> : null;
  };

  return (
    <Card.Root _hover={{scale:"1.005"}} mx="10px" bg="transparent" maxW="xl" overflow="hidden" border="1px solid gray">
      <Image minH="300px" maxH="300px" src={image} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title color="green.400">{title}</Card.Title>
        <Card.Description fontSize="18px">{description}</Card.Description>
        
        {/* Solo se muestra el HStack si hay al menos un badge */}
        {(badge1 || badge2 || badge3) && (
          <HStack mt="4">
            {renderBadge(badge1, badge1_color)}
            {renderBadge(badge2, badge2_color)}
            {renderBadge(badge3, badge3_color)}
          </HStack>
        )}
      </Card.Body>

      <Card.Footer gap="2">
        <Link
          outline="none"
          href={link_button}
          bg="blue.400"
          p="10px"
          textDecoration="none"
          color="white"
        >
          {text_button}
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
