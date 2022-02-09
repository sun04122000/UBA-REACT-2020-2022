import React from 'react';
import InitNavbar from './javascript/InitNavbar.js'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';

function InitiativeScreen() {
  return (
    <>
      <InitNavbar />
      <br />
      <Container>
        <Outlet />
      </Container>

    </>)


}

export default InitiativeScreen;
