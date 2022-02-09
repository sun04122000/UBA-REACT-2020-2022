import React from "react";
import { Col, Row, Form, Card, ListGroup, Button,Container } from "react-bootstrap";
import { Footer } from "../../../components/Javascript/Footer";
import "../../../screens/HomeScreen/css/ContactUs.css";

export const ContactUs = () => {
  return (
    <Container  >
      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Contact Us</h2>
            <h5>
              <i class="fa fa-location-arrow"></i> Unnat Bharat Abhiyan,IIT
              Roorkee,Uttarakhand
            </h5>
            <h5>
              <i class="fa fa-phone"></i> +91-8112283593
            </h5>
            <h5>
              <i class="fa fa fa-envelope"></i> uba@iitr.ac.in
            </h5>

            <h2 class="my-3">We would love to hear from you !</h2>
          </div>
        </div>
        <div class="col-md-9">
          <div class="contact-form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname">
                First Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="fname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname">
                Last Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter Last Name"
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">
                Email:
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="comment">
                Comment:
              </label>
              <div class="col-sm-10">
                <textarea class="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default my-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      
      </div>
 
    </Container>
      
  

  
  );
};
