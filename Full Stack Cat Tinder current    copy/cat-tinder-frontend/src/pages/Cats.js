import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Cats extends Component {
    
  render() {
    return (
    <div>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (

                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                    <a href={`/cats/${cat.id}`}>
                      <span className='cat-name'>
                        {cat.name}
                      </span>
                      </a>
                      - <small className='cat-age'>{cat.age} years old</small>
                    </h4>
                  }>
                      <span className='cat-city'>
                        Location: {cat.city}
                      </span> <br />
                      <span className='cat-enjoys'>
                        {cat.enjoys}
                      </span>
                </ListGroupItem>

              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </div>
    );
  }
}
export default Cats
