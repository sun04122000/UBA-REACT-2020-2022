import React from 'react';
import { InitCard } from '../../../components/Javascript/InitCard';
import { Awareness_data } from './Initiative_data';
import '../css/Initiative.css'
import { Container, Row, Col } from 'react-bootstrap'

function Awareness() {
  return <Row>
    {
      Awareness_data.map((entry) => {
        return <Col className='Init_card_cols'>
        <InitCard id={entry.id} image={entry.image} village={entry.village} date={entry.date} init={entry.init}
          initiative={entry.desc} />
          </Col>
      })
    }
  </Row>;
}

export default Awareness;
