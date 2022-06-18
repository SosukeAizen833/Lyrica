import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
const Card1 = (props) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={props.song.result.header_image_thumbnail_url}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" weight="bold" transform="uppercase" size={12}>
            {props.song.result.title}
          </Text>
          <Text size={12} weight="bold"  color="#000">
          {props.song.result.primary_artist.name}
          </Text>
          
        </Col>
        <Col>
          <Row justify="flex-end">
            <Modal1 url={props.song.result.header_image_thumbnail_url}/>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
export default Card1;