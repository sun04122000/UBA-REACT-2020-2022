import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { InitiativeIdentityCard } from "../../InitiativeIdentityCard";
import { IdentityCard } from "../../IdentityCard";
import "../../../css/StudentTeam.css";
import "../../../css/Chharba.css";
import map1 from "../../../images/Initiatives/Chharba/map1.jpg";
import AYUSH from "../../../images/StudentTeam/AYUSH KUMAR.jpg";
import PRAMOD from "../../../images/StudentTeam/PRAMOD KUMAR.jpg";
import init1 from "../../../images/Initiatives/Chharba/init1.jpeg";
import init2 from "../../../images/Initiatives/Chharba/init2.jpeg";
import init3 from "../../../images/Initiatives/Chharba/init3.jpeg";
import init4 from "../../../images/Initiatives/Chharba/init4.jpeg";
import init5 from "../../../images/Initiatives/Chharba/init5.jpg";
import init6 from "../../../images/Initiatives/Chharba/init6.jpg";
import init7 from "../../../images/Initiatives/Chharba/init7.jpg";
import init8 from "../../../images/Initiatives/Chharba/init8.jpg";
import init9 from "../../../images/Initiatives/Chharba/init9.jpg";
import init10 from "../../../images/Initiatives/Chharba/init10.jpg";
import init11 from "../../../images/Initiatives/Chharba/init11.jpg";
import init12 from "../../../images/Initiatives/Chharba/init12.jpeg";
import init13 from "../../../images/Initiatives/Chharba/init13.jpg";
import init14 from "../../../images/Initiatives/Chharba/init14.jpg";
import init15 from "../../../images/Initiatives/Chharba/init15.jpg";
import init16 from "../../../images/Initiatives/Chharba/init16.png";

export const Chharba = () => {
  return (
    <>
      <div>
        <Row>
          <Container className="container bg-overlay">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h1>Chharba</h1>
            </div>
          </Container>
        </Row>
        <Row>
          <section className="how-can-help what-we">
            <div className="container">
              <Row>
                <Col class="col-md-8 with-map">
                  <span class="big-text font-lora">
                    <small>About Chharba</small>
                  </span>
                  <hr />
                  <p align="justify">
                    {" "}
                    Chharba is a large village located in the Vikasnagar block
                    of Dehradun district, Uttarakhand with a total of 1425
                    families residing. According to Census 2011, the location
                    code or village code of Chharba village is 045088. Chharba
                    covers an area of about 1567.9 hectares. It is situated 7km
                    away from sub-district headquarter Vikasnagar and 22km away
                    from district headquarter Dehradun. Herbertpur is nearest
                    town to Chharba which is approximately 6km away. As per 2009
                    stats, Chharba is the gram panchayat of Chharba village.
                  </p>
                  <p align="justify">
                    {" "}
                    The current Pradhan of Chharba is Amir Khan. The ex-Pradhan,
                    Mr. Roomi Ram, is also interested and active in the
                    functioning of the village.
                  </p>
                  <p align="justify">
                    {" "}
                    Chharba, inspite of being in Uttarakhand, is devoid of tough
                    and rocky terrains. It is in the foothills of the Himalayan
                    Terrains. Because of this, it is fairly accessible and can
                    be reached easily. Chharba is primarily divided into 3
                    parts, lower Chharba, middle Chharba, and upper Chharba.
                    This divide is a road branching out from NH72 passing
                    through Chharba. After Upper Chharba, the hilly terrains of
                    Uttarakhand take shape.
                  </p>
                  <p align="justify">
                    {" "}
                    Children of Chharba can receive education in 4 primary
                    schools, 3 madrasas, 1 Government Inter College (GIC), and
                    multiple private schools in and out of the village. All in
                    all, most children receive education and hence are more
                    aware of the role of the upcoming generation of teenagers in
                    the shaping of the country.
                  </p>
                  <p align="justify">
                    {" "}
                    Schedule Caste (SC) constitutes 5.78 % while Schedule Tribe
                    (ST) are 0.28 % of total population in Chharba village. In
                    Chharba village out of the total population, 1935 were
                    engaged in working activities.
                  </p>
                  <p align="justify">
                    {" "}
                    One of the prime ingredients for growth of a place is
                    present in Chharba. That factor is religious and cultural
                    diversity. Although the majority of people are Hindus, there
                    are about 40% Muslims and 3% Sikhs. But, the village lags
                    behind the state in gender ratio. The average sex ratio in
                    Uttarakhand is 963, while in Chharba it is just 918.
                  </p>
                  <p align="justify">
                    {" "}
                    The village has all the primary shops, including clothing,
                    food, stationary and general appliances. It also has a
                    branch of PNB bank. This means that almost every family in
                    the village, not every adult, has a bank account and a debit
                    card in their name.
                  </p>
                  <p></p>
                </Col>

                <Col className="col-md-4 ">
                  <div className="program">
                    <div className="inner">
                      <h3>
                        LIBRARY SETUP
                        <br />
                        <span>
                          August 20, 2021 <br />
                          A Public Library was implemented at GIC,
                          <br /> Chharba under the caretaking of Principal, GIC.
                          <br /> More than 250 books were collected with the
                          help of Goonj organisation.
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
                  <td>Dehradun</td>
                </tr>
                <tr>
                  <td>Gram Panchayat</td>
                  <td>Chharba Muwazarpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Seema Devi</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Sahaspur</td>
                </tr>
                <tr>
                  <td>Block Officer</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Polica Station</td>
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
                  <td>1425</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>7628</td>
                  <td>3790</td>
                  <td>3478</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>1013</td>
                  <td>536</td>
                  <td>477</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>420</td>
                  <td>228</td>
                  <td>192</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>20</td>
                  <td>9</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>76.80%</td>
                  <td>82.73%</td>
                  <td>70.38%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>1935</td>
                  <td>1737</td>
                  <td>198</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>1381</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>554</td>
                  <td>493</td>
                  <td>61</td>
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
            initImg={init12}
            villageDate="Chharba |January 26, 2019"
            initiativeName="iNSPIRE"
            aboutInitiative="Organized fun activities, quizzes and games for schoolchildren on Republic Day."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init1}
            villageDate="Chharba | February 2, 2019"
            initiativeName="Cycle Donation"
            aboutInitiative="Unused cycles at IITR donated to needy students in village Chharba."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init2}
            villageDate="Chharba |February, 2019"
            initiativeName="ICT Initiative"
            aboutInitiative="Team UBA introduced the students of primary schools of Chharba with basics of computers."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init4}
            villageDate="Chharba |September 29, 2019"
            initiativeName="Swacchta Hi Seva"
            aboutInitiative="A step towards greener and cleaner India promoted through a campaign."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init15}
            villageDate="Chharba |  August 3, 2019"
            initiativeName="Science Exhibition"
            aboutInitiative="Helped students of GIC in making Science models and explained the working principle."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init3}
            villageDate="Chharba |September 17, 2019"
            initiativeName="Self Defence Camp"
            aboutInitiative="In collaboration with Taekwondo Team IITR, empowered village school girls in personal safety."
            knowMore=""
          />




          <InitiativeIdentityCard
            initImg={init6}
            villageDate="Chharba |  February, 2020"
            initiativeName="Menstrual Hygiene Awareness Camp"
            aboutInitiative="Creating awareness about menstrual hygiene and practices along with distribution of pads."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init7}
            villageDate="Chharba |  January, 2020"
            initiativeName="Women Employment Generation"
            aboutInitiative="An initiative to encourage women to produce and sell food items for extra income"
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init11}
            villageDate="Chharba | February, 2 and 15, 2020"
            initiativeName="Cattle Vaccination Camp"
            aboutInitiative="Expedite the cattle vaccination aid at the doorstep for the ease of the residents."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init10}
            villageDate="Chharba | February 16, 2020"
            initiativeName="Digital Payment Workshop"
            aboutInitiative="An initiative to promote cashless transactions; converting India into a cashless society, as digital payments see momentous growth."
            knowMore=""
          />



          <InitiativeIdentityCard
            initImg={init8}
            villageDate="Chharba |  February, 2021"
            initiativeName="Webinar cum training on menstrual hygiene"
            aboutInitiative="Lay emphasis on the importance of menstrual hygiene and trained women to make cloth pads"
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init16}
            villageDate="Chharba | September 28, 2020"
            initiativeName="E-Library Initiative"
            aboutInitiative="A google drive was created in which team members uploaded pdf versions of books and question papers."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init5}
            villageDate="Chharba | March, 2021"
            initiativeName="Paper Cup Production Unit Installation"
            aboutInitiative="An attempt to uplift the rural women by installing the Paper Cup Production Unit under SHG(Tulsi)."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init13}
            villageDate="Chharba | March 7, 2021"
            initiativeName="Computer Installation"
            aboutInitiative="Identified schools with poor digital infrastructure, installed computers and helped provide training."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init9}
            villageDate="Chharba |  March, 2021"
            initiativeName="Kisan Vikas Initiative"
            aboutInitiative="Training session to tackle the farming issues such as lack of awareness/knowledge regarding various farming aspects."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init14}
            villageDate="Chharba |  August 20, 2021"
            initiativeName="Library Setup"
            aboutInitiative="A Public Library was implemented at GIC, Chharba under the caretaking of Principal, GIC."
            knowMore=""
          />
        </Row>
      </Container>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
          <IdentityCard
            studImg={AYUSH}
            name="Ayush Kumar"
            pos="Village Co-ordinator"
            email="Chharba"
            linkedIn="https://www.linkedin.com/in/ayush-kumar-92a5aa192/"
          />
          <IdentityCard
            studImg={PRAMOD}
            name="Pramod Kumar"
            pos="Village Co-ordinator"
            email="Chharba"
            linkedIn="https://www.linkedin.com/in/pramod-kumar-b4b595218/"
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
