import React, { Component } from 'react'
import { Row, Card, Col } from "react-bootstrap";


export class Movie extends Component {
    render() {
        return (

            <Row xs={1} md={3} className="g-4">
          {
            this.props.movieInfo.map((item) => (
              <Col>
                <Card
                  style={{
                    width: "380px",
                    height: "400px",
                    overflow: "scroll",
                    border: "solid black 4px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image_url}
                    style={{
                      width: "300px",
                      marginLeft: "40px",
                      height: "200px",
                    }}
                    alt="no Image source"
                  />
                  <Card.Body>
                    <Card.Title>Title: {item.title}</Card.Title>
                    <Card.Text>
                    Overview: {item.overview}
                      <ul>
                        <li>
                          Average votes: <strong>{item.average_votes}</strong>
                        </li>
                        <li>
                          Total votes:<strong> {item.total_votes}</strong>
                        </li>
                        <li>
                          Popularity: <strong>{item.popularity}</strong>
                        </li>
                        <li>
                          Released on: <strong>{item.released_on}</strong>
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
           
        )
    }
}

export default Movie
