
import React from 'react'
import img2 from './images/Home/274img2.jpg'
import img3 from './images/Home/274img3.JPG'
import img4 from './images/Home/274img4.jpg'
import img5 from './images/Home/274img5.jpg'
import {Row,Col,Container} from 'react-bootstrap';

export const Images_sequence = () => {
    return (
        <>
    <section className="gallery">
    <Container>
    <center>
      <Row>
        <Col><a href="Beladi_CycleDonation.html"> <img className="img-responsive" src={img2} alt="" /></a></Col>
        <Col><a href="Meerpur_IITRCampusVisit.html"> <img className="img-responsive" src={img3} alt="" /></a></Col>
        <Col><a href="Chandpur_Inspire.html"> <img className="img-responsive" src={img4} alt="" /></a></Col>
        <Col><a href="Beladi_TreePlantation.html"> <img className="img-responsive" src={img5} alt="" /></a></Col>
      </Row>
      </center>
    </Container>
    </section>
        </>
    )
}
