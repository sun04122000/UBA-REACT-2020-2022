import React from "react";
import { Card} from "react-bootstrap";
import "../../screens/HomeScreen/css/StudentTeam.css";
export const StudentIdentityCard = (props) => {
  return (
    <Card className="studCard">
      <Card.Body className="text-center cardBody">
        <Card.Img src={props.studImg} />
        <Card.Title>
          <br />
          {props.name}
          <br />
        </Card.Title>
        <Card.Text className="cardText">
          {props.pos} <br /> {props.email}
        </Card.Text>
      </Card.Body>
      <Card.Link
        className="text-center profileWord"
        href={props.linkedIn}
        target="_blank"
      >
        Profile
      </Card.Link>
    </Card>
    // </Col>
  );
};
