viewCount() {
    const id = this.props.match.params.id
    fetch(`${this.state.apiUrl}/cats/${id}`,
    {
      body: JSON.stringify(params),  // <- we need to stringify the json for fetch
      headers: {  // <- We specify that we're sending JSON, and expect JSON back
        'Content-Type': 'application/json'
      },
      method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    }).then((rawResponse)=>{
        return rawResponse.json()
    }).then((parsedResponse)=>{
        const cat = Object.assign([], this.state.cat)
        cat.push(parsedResponse.cat)
        this.setState({cat: cat})
    })
}

viewCount() {
    const id = this.props.match.params.id
    fetch(`${this.state.apiUrl}/cats/${id}`,
    {
      body: JSON.stringify({views: 1}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST"
    }).then((rawResponse)=>{
        return rawResponse.json()
    }).then((parsedResponse)=>{
        const cat = Object.assign([], this.state.cat)
        cat.push(parsedResponse.cat)
        this.setState({cat: cat})
    })
}
