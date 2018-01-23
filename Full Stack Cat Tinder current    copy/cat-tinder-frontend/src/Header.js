import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap'

class Header extends Component {
    render(){
        return(
            <div className="container-fluid">
              <Row>
                <Col lg={12}>
                  <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Cat tinder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <a className="nav-link">{this.props.navbartitle} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href={this.props.linked}>{this.props.linkname}</a>
                            </li>
                        </ul>
                    </div>
                  </nav>
                </Col>
              </Row>
            </div>
      );
   }
}

export default Header;
