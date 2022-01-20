import "../css/contact.css";
import { Row, Col, Container, Image, ListGroup } from "react-bootstrap";
const Contact = () => {
  return (
    <Container className="contact">
      <Row>
        <Col md="8" sm="12">
          <Image src="backgroundImages/market.jpg" alt="" fluid />
        </Col>
        <Col as="h2" md="4" sm="12">
          <Container>
            <Row as="h2" className="ml-4">
              Grocery Store
            </Row>
            <Row as="h5">
              <Col>
                Grocery store is a shop that is operating from 15 years now in
                the city of Durres. You can find all sort of products with the
                lowest prices in the market. We are only a step away.
              </Col>
            </Row>
            <Row as="h6" className="m-2">
              <ListGroup variant="flush">
                <ListGroup.Item className="mt-3">
                  <Row>
                    <Col md="4">Address:</Col>
                    <Col>Street Alexander Goga, near the hospital</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="mt-3">
                  <Row>
                    <Col>Contact</Col>
                    <Col>+355697777777</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="mt-3">
                  <Row>
                    <Col>Email</Col>
                    <Col>groceryStore@gmail.com</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="mt-3">
                  <Row>
                    <Col>
                      <b>Open from 7:00-21:00</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
