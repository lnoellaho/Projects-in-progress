import React, { Component } from 'react';
import Header from '../Header.js'
import { Button } from 'react-bootstrap'
import '../Images/Morris.jpg'


class ProfilePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiUrl: "http://localhost:3000",
            cat: [],
            showcats: "/cats",
            makecats: "/",
            navbaraddcat: "Add a Cat",
            navbarallcats: "All the Cats",
            showmecats: "Show me the Cats",
            profile: "Profile"
        }
    }
componentWillMount(){
    const id = this.props.match.params.id
  fetch(`${this.state.apiUrl}/cats/${id}`)
  .then((rawResponse) =>{
    return rawResponse.json()
  })
  .then((parsedResponse)=>{
    this.setState({cat: parsedResponse.cat})
  })
}

deleteCat() {
    const id = this.props.match.params.id
    fetch(`${this.state.apiUrl}/cats/${id}/delete`)
    .then((rawResponse)=>{
        return rawResponse.json()
    })
    .then((parsedResponse)=>{
        this.setState({cat:parsedResponse.cat})
    })
    this.props.history.push('/')
}
    render(){
        console.log(this.state.cat)
        return(
            <div>
                <Header linked={this.state.showcats} navbartitle={this.state.profile}
                linkname={this.state.showmecats}/>
                <div className = "container">
                    <img src={require("../Images/Morris.jpg")} alt="cat"/>
                    <h3>Name: {this.state.cat.name}</h3>
                    <h2>City: {this.state.cat.city}</h2>
                    <h2>Age: {this.state.cat.age}</h2>
                    <p>Enjoys: {this.state.cat.enjoys}</p>
                    <p>Views: {this.state.cat.views}</p>
                    <Button
                        id="submit" className="btn btn-primary"
                        onClick={this.deleteCat.bind(this)}
                        > Delete Cat Profile
                    </Button>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
