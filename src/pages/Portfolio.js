import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Portfolio extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Projects</h1>
      <Card style={{ width: '10rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
      <Card.Title>Card Title</Card.Title>
       <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
      </Card.Body>
</Card>

        
      </div>
    );
  }
}

export default Portfolio;
