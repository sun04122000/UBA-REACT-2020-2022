import React from 'react';
import { useParams } from 'react-router-dom';
import { initiatives } from './javascript/Initiative_data';
import { Container, Row, Col } from 'react-bootstrap'
import './css/Initiative_detail.css'

function Initiative_detail() {
  const params = useParams()
  // console.log(params)
  const init = initiatives.filter((obj) => obj.init == params.name && obj.village == params.village)[0]
  // console.log(init)
  return (
  <Container>
    <Row className='init_detail_upper'><Col><h1>{init.init}</h1></Col></Row>
    <Row className='init_detail_mid1'>
      <Col><img src={init.image} /></Col>
      <Col><img src={init.image} /></Col>
      <Col><img src={init.image} /></Col>
    </Row>
    <Row className='init_detail_mid2'>
      <Col><span>
        <h4>Village: {init.village}</h4>
        <h4>Date: {init.date}</h4>
        </span></Col>
      <Col></Col>
      <Col><h4>{init.short_det}</h4></Col>
    </Row>
    
    <Row className='init_detail_lower'>
    <h5><hr /></h5>
      <p>
        {init.text}
      </p>
    </Row>
  </Container>
  )
}

export default Initiative_detail;
