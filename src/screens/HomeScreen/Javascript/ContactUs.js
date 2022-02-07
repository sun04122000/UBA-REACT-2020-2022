import React from "react";
import { Col, Row, Form, Card, ListGroup, Button } from "react-bootstrap";
import { Footer } from "../../../components/Javascript/Footer";
import "../../../screens/HomeScreen/css/ContactUs.css";

export const ContactUs = () => {
  return (
    <div class="mainn">
      <Row>
        <Col>
          <Card id="cardd">
            <Card.Header id="cardheader">CONTACT US</Card.Header>
            <ListGroup>
              <ListGroup.Item id="listgroup">
                <i class="fa fa-location-arrow"></i> Unnat Bharat Abhiyan,IIT
                Roorkee,Uttarakhand
              </ListGroup.Item>
              <ListGroup.Item id="listgroup">
                <i class="fa fa-phone"></i> +91-8112283593
              </ListGroup.Item>
              <ListGroup.Item id="listgroup">
                <i class="fa fa fa-envelope"></i> uba@iitr.ac.in
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Row>
            <div className="my-5" style={{ textAlign: "center" }}>
              <h1 style={{ fontWeight: "bold" }}>
                We'd <span class="text-warning">LOVE</span> to hear from you...
              </h1>
            </div>
          </Row>
          <Form id="formm">
            <label id="labell">
              <p class="label-txt">ENTER YOUR EMAIL</p>
              <input type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
            <label id="labell">
              <p class="label-txt">ENTER YOUR NAME</p>
              <input type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
            <label id="labell">
              <p class="label-txt">ORGANIZATION</p>
              <input type="text" class="input" />
              <div class="line-box">
                <div class="line"></div>
              </div>
            </label>
            <Button style={{width:"inherit"}} variant="dark">SUBMIT</Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
