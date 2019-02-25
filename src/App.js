import React, { Component } from 'react';
// import { Link } from "react-router-dom"

class Home extends Component {

state = {
  senators: []
}

getSenators = async () => {
await fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    .then(results => {
    return results.json()
    })
    .then(data => {
    this.setState({senators: data})
    });
}
//function does a fetch; we call that fetch 'data'; we bind that data to a state

async componentWillMount () {
await this.getSenators()
}

filterSenators= (e) => {
let senators = this.state.senators
senators = senators.filter(senator => {
    return senator.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1
    })
    this.setState({senators: senators})
}



  render() {      
    console.log(this.state.senators)
    return (
    <div>
    <ul/>
      <li>
        <label>
          <input type="radio" value="1" checked={this.state.priority === '1'} onChange={this.handleChange} />
          Republican
        </label>
      </li>
      <li>
        <label>
          <input type="radio" value="2" checked={this.state.priority === '2'} onChange={this.handleChange} />
          Democrat
        </label>
      </li>

  ActionLink() {
    function handleChange(e) {
      
      e.preventDefault();
      console.log('The button was clicked')
    }
  }

      {this.state.senators.map((senator, index) => (
          <div key={index}>
            Name: {senator.name} 
              <p>Party: {senator.party}</p>
          </div>
      ))}
       
        {/* <Link to="Home">Home</Link> */}
        </div>
    );
  }
}
export default Home;