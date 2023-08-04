import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Row className="mx-3 justify-content-md-center">
        <Col className="px-4" sm>
          <h3>Real Shoes</h3>
          <div className="small text-secondary">
            <span className="d-block">경기도 신발시 신발동 2023</span>
            <span className="d-block">
              TEL : 1644-7000 / MAIL
              <a href="mailto:HELPDESK@shoes.com" className="d-inline-block mx-1"></a>
              HELPDESK@shoes.com
            </span>
          </div>
        </Col>
        <Col sm>
          <h4>1644 - 7000</h4>
          <div className="small text-secondary">
            <span className="d-block">평일 10:00 - 17:00</span>
            <span className="d-block">점심 12:00 - 13:00</span>
            <span className="d-block">휴일 토/일/공휴일</span>
          </div>
        </Col>
        <Col sm>
          <h4>배송</h4>
          <div className="small text-secondary">
            <span className="d-block">타 택배 반품시 : </span>
            <span className="d-block">경기도 신발시 신발동 2023</span>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="px-4 text-secondary">CORYRIGHT &copy; RealShoes. ALL RIGHTS RESERVED.</Col>
      </Row>
    </Container>
  );
}
export default Footer;
