import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns/format';

const Graph = (props) => {

  const prepareDataToGraph = (data) => {
    if (!data) return null;
    // Take the first item of the data to extract the availables timestamps
    const timeStamps = data[0].Data.map(item => item.time);
    // Find all the currencies that are available in the data
    const currencies = data.map(item => item.currency);
    // Take the data from the server and modify it to make it have the
    // following form:
    // [{timestamp: 0000, currency1: 0000, currency2: 0000}]
    return timeStamps.map(timestamp => {
      const currencyValueAtTimestamp = currencies.map(currency => {
        const currentCurrencyData = data.find(item => item.currency === currency);
        return {
          [currency]: currentCurrencyData.Data.find(item => item.time === timestamp).low
        }
      });
      return Object.assign(
        {}, { timestamp: formatTimestamps(timestamp) }, ...currencyValueAtTimestamp
      );
    });
  }

  const formatTimestamps = (timestamp) => {
    // return format(new Date(timestamp));
    return timestamp;
  }

  const renderLines = (data) => {
    const currencies = data.map(item => item.currency);
    return currencies.map(currency => <Line type="monotone" dataKey={currency} stroke="#82ca9d" />);
  }
  
  return (
    <div>
      <LineChart width={600} height={300} data={prepareDataToGraph(props.data)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        { renderLines(props.data) }
      </LineChart>
    </div>
  )
}

export default Graph;