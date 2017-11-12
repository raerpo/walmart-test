import React, { Component } from 'react';
import Graph from './components/Graph.js';
import Wrapper from './containers/Wrapper.js';

export class App extends Component {

  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    const data = this.thereIsDataCached();
    if(data) {
      this.setState({
        data
      });
    } else {
      fetch('http://localhost:8080/getCurrencies')
        .then((res) => res.json())
        .then((data) => {
          // Save data in sessionStorage to avoid hiting the API so often
          window.sessionStorage.setItem('currencies', JSON.stringify(data));
          const expirationDate = new Date();
          expirationDate.setMinutes(expirationDate.getMinutes() + 1);
          window.sessionStorage.setItem('currenciesExpirationDate', expirationDate)
          this.setState({
            data
          });
        });
    }
  }

  thereIsDataCached = (data) => {
    const currencies = window.sessionStorage.getItem('currencies') && 
                       JSON.parse(window.sessionStorage.getItem('currencies'));
    const expirationDate = window.sessionStorage.getItem('currenciesExpirationDate') && 
                           new Date(window.sessionStorage.getItem('currenciesExpirationDate'));
    const currentDate = new Date();
    return currencies && expirationDate > currentDate ? currencies : null;
  }

  renderGraphs = (data) => {
    if(!data) return null;
    const graphs = Array(data.length).fill(null);

    return graphs.map((data, index) => {
      return (
        <div className="graph-wrapper">
          <h3>{this.state.data[index].currency}</h3>
          <div className="graph">
            {this.state.data ? <Graph data={[this.state.data[index]]} /> : <p>Loading...</p>}
          </div>
        </div>
      )
    });
  }

  renderMainGraph = (data) => {
    return (
      <div className='graph-inner-container main-graph'>
        <div className="graph-wrapper">
          <h3>USD exchange rates</h3>
          <div className="graph">
            {data ? <Graph data={data} /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    )
  }

  renderPage = () => {
    const { data } = this.state;
    return <Wrapper>
      <div className="graphs-container">
        {this.renderMainGraph(data)}
        <div className="graph-inner-container">
          {this.renderGraphs(data)}
        </div>
      </div>
    </Wrapper>
  }

  render() { 
    return this.renderPage();
  }
}
 
export default App;