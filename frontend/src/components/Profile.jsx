import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { getUser } from "../reducers/users";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/changeInfo/${user._id}`);
  };
  if (!authService.getCurrentUser()) {
    return <Navigate to="/" />;
  }
  return (
    <Card
      className="text-center "
      style={{ width: "85%", marginleft: "0%", height: "100%" }}
    >
      <Card.Header as="h2">Profile </Card.Header>
      <Card.Body>
        <Row>
          <Card.Title>
            <i>{user.name}'s personal information</i>
          </Card.Title>
        </Row>
        <Row className="m-4 pt-1 bg-success">
          <Col as="h4" sm={12} md={6}>
            Full name:
          </Col>
          <Col as="h5">{user.name}</Col>
        </Row>
        <Row className="m-4 pt-1 bg-success">
          <Col as="h4" sm={12} md={6}>
            Email:
          </Col>
          <Col as="h5">{user.email}</Col>
        </Row>

        <Row className="m-4 pt-1 bg-success">
          <Col as="h4" sm={12} md={6}>
            Address:
          </Col>
          <Col as="h5">{user.address}</Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Col className="p-4">
          <Button variant="dark" onClick={handleClick}>
            Change personal info
          </Button>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Profile;
