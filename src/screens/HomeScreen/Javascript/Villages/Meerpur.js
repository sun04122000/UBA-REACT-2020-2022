import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { StudentIdentityCard } from "../../../../components/Javascript/StudentIdentityCard";
import { InitCard } from "../../../../components/Javascript/InitCard";
import "../../css/StudentTeam.css";
import "../../css/Villages.css";
import map1 from "../../../../Images/Initiatives/Meerpur/map1.jpg";
import map2 from "../../../../Images/Initiatives/Meerpur/map2.jpg";
import HINGANE from "../../../../Images/StudentTeam/HINGANE YASH.jpg";
import VISHAL from "../../../../Images/StudentTeam/VISHAL YADAV.jpg";
import init9 from "../../../../Images/Initiatives/Meerpur/init9.jpg";
import init10 from "../../../../Images/Initiatives/Meerpur/init10.jpg";
import init11 from "../../../../Images/Initiatives/Meerpur/init11.jpg";

export const Meerpur = () => {
  return (
    <>
      <div>
        <Row>
          <div class="container tittle1 bg-overlay1">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>MEERPUR</h3>
              <p>HOME/VILLAGE/MEERPUR</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1">
              <Row>
                <Col class="col-md-8 with-map1">
                  <span class="big-text1">
                    <small>About Meerpur</small>
                  </span>
                  <hr
                    style={{
                      width: "7rem",
                      height: "0.3rem",
                      background: "#ecc731",
                      opacity: "1",
                    }}
                  />
                  <p align="justify">
                    The Meerpur Muwazarpur village has population of 3061 of
                    which 1589 are males while 1472 are females as per
                    Population Census 2011.The population of children in the age
                    group of 0-6 is 450 which makes up 14.70 % of total
                    population of village. Average Sex Ratio of Meerpur
                    Muwazarpur village is 926 which is lower than Uttrakhand
                    state average of 963. Child Sex Ratio for the Meerpur
                    Muwazarpur as per 2011 census is 1009, higher than
                    Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                    Meerpur Muwazarpur village has lower literacy rate compared
                    to Uttarakhand. In 2011, literacy rate of Meerpur Muwazarpur
                    village was 76.91 % compared to 78.82 % of Uttarakhand. In
                    Meerpur Muwazarpur Male literacy stands at 84.18 % while
                    female literacy rate was 68.94 %..
                  </p>
                  <p></p>
                </Col>

                <Col className="col-md-4 ">
                  <div className="program1">
                    <div className="inner1">
                      <h3>
                        Covid Help <br />
                        August 16, 2021 <br />
                        <span>25 ration kits distributed</span>
                      </h3>
                      <a href="docs/Newsletter2.pdf" class="btn">
                        FOR MORE DETAILS
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </Row>
        <Row>
          <Row>
            <div className="tittle1" style={{ textAlign: "center" }}>
              <h2>Village Details</h2>
              <p>Comprehensive data about the village.</p>
            </div>
          </Row>
          <Col className="my-5" md={{ span: 4, offset: 2 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Location</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State</td>
                  <td>Uttarakhand</td>
                </tr>
                <tr>
                  <td>District</td>
                  <td>Haridwar</td>
                </tr>
                <tr>
                  <td>Gram Panchayat</td>
                  <td>Meerpur Muwazarpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Reena</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Roorkee</td>
                </tr>
                <tr>
                  <td>Bahadarabad</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Police Station</td>
                  <td>--</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="my-5" md={{ span: 4 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Demography</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Total</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total no. of Houses</td>
                  <td>542</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>3061</td>
                  <td>1589</td>
                  <td>1472</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>450</td>
                  <td>224</td>
                  <td>226</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>141</td>
                  <td>78</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>76.91%</td>
                  <td>84.18%</td>
                  <td>68.94%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>898</td>
                  <td>820</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>479</td>
                  <td>449</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>791</td>
                  <td>729</td>
                  <td>62</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <Row className="tittle1">
        <h2 className="text-center my-3">
          Land Use Map & <span>Physical Map</span>
        </h2>
        <p className="text-center">
          Mapped data of land use and area of the village.
        </p>
        <br />
        <p className="text-center">
          <b>Land Use Map</b>
        </p>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <img className="center video-blog1" src={map1} />
        </Col>
        <Col md={12} lg={6}>
          <img className="center video-blog1" src={map2} />
        </Col>
      </Row>
      <br />
      <br />

      <section class="don-counter1">
        <div class="overlay1">
          <Container>
            <Row id="counters1">
              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-heart"></i>
                      </Col>
                      <Col xs={9}>
                        {/* <span class="count1"></span> */}
                        <span>50+</span>
                        <p>Iniatives Undertaken</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="fa fa-users"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count2"></span> */}
                        <span>460+</span>
                        <p>volunteers</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>

              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-thumbs-up"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count3"></span> */}
                        <span>5+</span>
                        <p>years of work</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-smile"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count4"></span> */}
                        <span>5500+</span>
                        <p>people benefitted</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Initiatives</h1>
        <div className="row">
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init11}
                village="Meerpur |"
                date="July 31, 2021"
                init="Book Distribution"
                initiative="Distributed NCERT books to students of class 6th to 12th."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init10}
                village="Meerpur |"
                date="September 13, 2020"
                init="Science Session"
                initiative="Created awareness about applications of science in daily life."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init9}
                village="Meerpur |"
                date="August 30, 2020"
                init="Gov. Schemes Awareness"
                initiative="Created awareness about various government schemes among villagers."
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={VISHAL}
              name="Vishal Yadav"
              pos="Village Co-ordinator"
              email="Meerpur"
              linkedIn="https://www.linkedin.com/in/vishal-yadav-b3b1a5158"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginRight: "auto" }}>
            <StudentIdentityCard
              studImg={HINGANE}
              name="Yash Hingane"
              pos="Village Co-ordinator"
              email="Meerpur"
              linkedIn="https://www.linkedin.com/in/yash-hingane-b63645120"
            />
            <br />
          </div>
        </Row>
      </Container>
      <Row className="text-center my-4">
        <h2>
          Be the change <i style={{ color: "#ecc731" }} class="fa fa-heart"></i>{" "}
          <strong>You wish to see</strong>.
        </h2>
      </Row>
    </>
  );
};
