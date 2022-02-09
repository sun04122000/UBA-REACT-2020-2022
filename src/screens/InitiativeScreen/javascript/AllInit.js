import React from 'react';
import { InitCard } from '../../../components/Javascript/InitCard';
import { initiatives } from './Initiative_data';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Initiative.css'

function AllInit() {
  return <Row>
    {
      initiatives.map((entry) => {
        return <Col className='Init_card_cols'>
          <InitCard id={entry.id} image={entry.image} village={entry.village} date={entry.date} init={entry.init}
            initiative={entry.desc} />
        </Col>
      })
    }
  </Row>;
}

export default AllInit;
