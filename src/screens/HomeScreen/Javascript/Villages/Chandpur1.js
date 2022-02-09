import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { InitiativeIdentityCard } from "../../InitiativeIdentityCard";
import { IdentityCard } from "../../IdentityCard";
import "../../../css/StudentTeam.css";
import "../../../css/Chandpur.css";
import map1 from "../../../images/Initiatives/Chandpur/map1.jpg";
import KESHAV from "../../../images/StudentTeam/KESHAV-PARETA.jpg";
import ABHINAV from "../../../images/StudentTeam/ABHINAV-SAINI.jpg";
import init1 from "../../../images/Initiatives/Chandpur/init1.jpeg";
import init2 from "../../../images/Initiatives/Chandpur/init2.jpeg";
import init3 from "../../../images/Initiatives/Chandpur/init3.jpg";
import init4 from "../../../images/Initiatives/Chandpur/init4.jpg";
import init5 from "../../../images/Initiatives/Chandpur/init5.jpeg";
import init6 from "../../../images/Initiatives/Chandpur/init6.jpg";
import init7 from "../../../images/Initiatives/Chandpur/init7.jpg";
import init8 from "../../../images/Initiatives/Chandpur/init8.jpg";
import init9 from "../../../images/Initiatives/Chandpur/init9.jpg";
import init10 from "../../../images/Initiatives/Chandpur/init10.jpg";
import init11 from "../../../images/Initiatives/Chandpur/init11.jpg";
import init12 from "../../../images/Initiatives/Chandpur/init12.jpg";

export const Chandpur = () => {
  return (
    <>
      <div>
        <Row>
          <Container className="container bg-overlay">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h1>Chandpur</h1>
            </div>
          </Container>
        </Row>
        <Row>
          <section className="how-can-help what-we">
            <div className="container">
              <Row>
                <Col class="col-md-8 with-map">
                  <span class="big-text font-lora">
                    <small>About Chandpur</small>
                  </span>
                  <hr />
                  <p align="justify">
                    {" "}
                    Chandpur village comes under Vikasnagar block of district
                    Dehradun, Uttarakhand. Being very close to mountains, it is
                    situated on the banks of one of the tributaries of Yamuna
                    River. It is nearly 36 km from Dehradun in the North-West
                    direction. From West, it is surrounded by Chharba village
                    (of Sahaspur block) and from East Horawala village
                    (Vikasnagar block) surrounds it.
                  </p>
                  <p align="justify">
                    {" "}
                    The village is divided in two parts namely- Chandpur Khurd
                    and Chandpur Kala, of which Chandpur Kala is nearly 1.25
                    times larger than Chandpur Khurd (population wise).
                  </p>
                  <p align="justify">
                    {" "}
                    Chandpur Kala is a small village with total 46 families
                    residing. The Chandpur Kala village has population of 227 of
                    which 117 are males while 110 are females as per Population
                    Census 2011.
                  </p>
                  <p align="justify">
                    {" "}
                    In Chandpur Kala village population of children with age 0-6
                    is 26 which makes up 11.45 % of the total population of the
                    village. Average Sex Ratio of Chandpur Kala village is 940
                    which is lower than Uttarakhand state average of 963. Child
                    Sex Ratio for the Chandpur Kala as per census is 1167,
                    higher than Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                    {" "}
                    Chandpur Kala village has higher literacy rate as compared
                    to Uttarakhand. In 2011, literacy rate of Chandpur Kala
                    village was 85.57 % compared to 78.82 % of Uttarakhand. In
                    Chandpur Kala male literacy stands at 92.38 % while female
                    literacy rate was 78.13 %.
                  </p>
                  <p align="justify">
                    {" "}
                    Chandpur Khurd is a small village with total 44 families
                    residing. The Chandpur Khurd village has a population of 183
                    of which 87 are males while 96 are females as per Census
                    2011. In Chandpur Khurd village the population of children
                    with age 0-6 is 24 which makes up 13.11 % of total
                    population of village. Average Sex Ratio of Chandpur Khurd
                    village is 1103 which is higher than Uttarakhand state
                    average of 963. Child Sex Ratio for the Chandpur Khurd as
                    per census is 846, lower than Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                    {" "}
                    Chandpur Khurd village has higher literacy rate compared to
                    Uttarakhand. In 2011, literacy rate of Chandpur Khurd
                    village was 84.91 % compared to 78.82 % of Uttarakhand. In
                    Chandpur Khurd male literacy stands at 95.95 % while female
                    literacy rate was 75.29 %.
                  </p>
                  <p></p>
                </Col>

                <Col className="col-md-4 ">
                  <div className="program">
                    <div className="inner">
                      <h3>
                        Essay Writing Competition
                        <br />
                        <span>
                          September 14, 2020 <br />
                          For students in Government Inter College (GIC) <br />
                          Horawala
                        </span>
                      </h3>
                      <a href="docs/Newsletter2.pdf" class="btn btn-1">
                        Know More
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
            <div style={{ textAlign: "center" }}>
              <h2>Village Details</h2>
              Comprehensive data about the village.
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
                  <td>Chandpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Pinki</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Roorkee</td>
                </tr>
                <tr>
                  <td>Block Officer</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Police Station</td>
                  <td></td>
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
                  <td>340</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>1860</td>
                  <td>1001</td>
                  <td>859</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>309</td>
                  <td>172</td>
                  <td>137</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>1263</td>
                  <td>675</td>
                  <td>588</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>60.16%</td>
                  <td>68.03%</td>
                  <td>50.98%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>504</td>
                  <td>469</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>479</td>
                  <td>449</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>25</td>
                  <td>20</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <Row className="tittle">
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
      <img className="center video-blog" src={map1} />
      <br />
      <br />

      <section class="don-counter">
        <div class="overlay">
          <Container>
            <Row id="counters">
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
        <Row>
          <InitiativeIdentityCard
            initImg={init1}
            villageDate="Chandpur | July 3, 2021
            "
            initiativeName="Student Help Initiative"
            aboutInitiative="Addressing the problems faced by students and providing study material in Chandpur."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init2}
            villageDate="Chandpur |  April 05-10, 2021"
            initiativeName="Computer Installation Initiative"
            aboutInitiative="Team UBA set up computers in GIC school to ease in online education in pandemic time."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init3}
            villageDate="Chandpur | September 14, 2020"
            initiativeName="Essay Writing Competition"
            aboutInitiative="Celebrating Hindi Diwas with village students of GIC Horawala"
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init5}
            villageDate="Chandpur | February 08, 2020"
            initiativeName="Senitary Pad Distribution Initiative"
            aboutInitiative="Team UBA distributed sanitary pads and cleared the myths related to menstrual hygiene."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init6}
            villageDate="Chandpur | Autumn, 2019"
            initiativeName="ICT Initiative"
            aboutInitiative="Providing computer education to students of secondary wing in Chandpur cluster."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init4}
            villageDate="Chandpur |October 12, 2019"
            initiativeName="Digi-School Initiative"
            aboutInitiative="Setting up digitised teaching medium in Government Inter-College (GIC), Horawala."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init9}
            villageDate="Chandpur |September 29, 2019"
            initiativeName="Swacchta Hi Seva"
            aboutInitiative="Campaign on reducing the use of plastic bags in Chandpur-Horawala."
            knowMore=""
          />

          <InitiativeIdentityCard
            initImg={init8}
            villageDate="Chandpur |Autumn, 2019"
            initiativeName="Sanitary Pad Distribution"
            aboutInitiative="Team UBA discussed about the health changes in girls during puberty."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init7}
            villageDate="Chandpur | Autumn, 2019"
            initiativeName="iNSPIRE"
            aboutInitiative="A fun and engaging way to bond with the village students."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init11}
            villageDate="Chandpur |March 30, 2019"
            initiativeName="Cattle Vaccination Drive"
            aboutInitiative="Addressing the issue of no vaccination provided to livestock in Chandpur cluster."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init12}
            villageDate="Chandpur |November 27, 2018"
            initiativeName="Centre for Aromatic Plants Initiative"
            aboutInitiative="Enhancing the agronomy of villagers in Chandpur cluster."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init10}
            villageDate="Chandpur |June 28, 2019"
            initiativeName="Mini-Bank Initiative"
            aboutInitiative="Team UBA set up a SBI Banking Kiosk in Horawala to make banking accesible."
            knowMore=""
          />
        </Row>
      </Container>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
          <IdentityCard
            studImg={KESHAV}
            name="Keshav Pareta"
            pos="Village Co-ordinator"
            email="Chandpur"
            linkedIn="https://www.linkedin.com/in/keshav-pareta-041029179/"
          />
          <IdentityCard
            studImg={ABHINAV}
            name="Abhinav Saini"
            pos="Village Co-ordinator"
            email="Chandpur"
            linkedIn="https://www.linkedin.com/in/abhinav-saini-7a860519b/"
          />
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
