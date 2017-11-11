import React, { Component } from 'react';
import Graph from './components/graph';

export class App extends Component {
  constructor() {
    super();
    this.state = { data: null }
  }
  componentDidMount() {
    fetch('http://localhost:8080/getCurrencies')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data
        });
      });
  }
  render() { 
    return ( <div>
      {this.state.data ? <Graph data={this.state.data} /> : <p>Loading...</p>}
    </div> )
  }
}
 
export default App;