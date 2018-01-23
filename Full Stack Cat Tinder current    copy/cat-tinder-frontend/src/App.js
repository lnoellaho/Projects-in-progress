import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {
    Row,
    Col,
} from 'react-bootstrap'
import Header from './Header.js'
import Cats from './pages/Cats.js'
import NewCat from './pages/NewCat.js'
import ProfilePage from './pages/ProfilePage.js'


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        apiUrl: "http://localhost:3000",
        cats: [],
        newCatSuccess: false,
        errors: null,
        showcats: "/cats",
        makecats: "/",
        navbaraddcat: "Add a Cat",
        navbarallcats: "All the Cats",
        showmecats: "Show me the Cats"
      }
    }

/*
 * componentWillMount fires everytime the component is rendered
 * to the dom
 */
componentWillMount(){
  fetch(`${this.state.apiUrl}/cats`)
  .then((rawResponse) =>{
    return rawResponse.json()
  })
  .then((parsedResponse)=>{
    this.setState({cats: parsedResponse.cats})
  })
}

handleNewcat(params){
    fetch(`${this.state.apiUrl}/cats`,
      {
        body: JSON.stringify(params),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
          'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){ // <- Check for any server side errors
        this.setState({errors: parsedResponse.errors})
      }else{
        const cats = Object.assign([], this.state.cats)
        cats.push(parsedResponse.cat) // <- Add the new cat to our list of cats
        this.setState({
          cats: cats,  // <- Update cats in state
          errors: null, // <- Clear out any errors if they exist
          newCatSuccess: true // <- This is the new flag in state
        })
      }
    })
  }

render() {
    return (
        <Router>
            <div>
                <Route exact path="/" render={props => (
                    <div>
                        <Header linked={this.state.showcats} navbartitle={this.state.navbaraddcat}
                        linkname={this.state.showmecats}/>
                        <div className = "container">
                            <Row>
                                <Col sm={8}>
                                <NewCat
                                onSubmit={this.handleNewcat.bind(this)}
                                errors={this.state.errors && this.state.errors.validations}
                                />
                                {this.state.newCatSuccess &&
                                    <Redirect to="/cats" />
                                }
                                </Col>
                            </Row>
                        </div>
                    </div>
                )} />

                <Route exact path="/cats" render={props => (
                    <div>
                        <Header linked={this.state.makecats} navbartitle={this.state.navbarallcats}
                        linkname={this.state.navbaraddcat}/>
                        <div className= "container">
                            <Row>
                                <Col>
                                    <Cats cats={this.state.cats} />
                                    {!this.state.newCatSuccess &&
                                        <Redirect to="/cats" />
                                    }
                                    </Col>
                            </Row>
                        </div>
                    </div>
                )} />
                <Route path="/cats/:id" component={ProfilePage} />
            </div>
        </Router>
    );
  }
}

export default App;
