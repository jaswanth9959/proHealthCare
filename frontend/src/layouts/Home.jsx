import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSelect = () => {
    localStorage.setItem("dates", JSON.stringify(startDate));
    navigate("/tests");
  };
  return (
    <Container className="py-3">
      <Row
        className="justify-content-md-center my-3"
        style={{ paddingTop: "200px" }}
      >
        <Col md={{ span: 4, offset: 1 }}>
          <h3> Select a Date for appointment: </h3>
        </Col>
        <Col md={2}>
          <DatePicker
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
            value={startDate}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={{ span: 4, offset: 3 }}>
          <Button onClick={handleSelect}>Search for Tests</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
