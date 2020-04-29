import React from 'react';
import { Typography } from '@material-ui/core';
import './App.css';

import { Chart, Cards, CountryPicker} from './components';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country:country });
  }

  render() {
    const { data, country } = this.state;
     return (
      <div className="container">
      <div className="heading">
          
          <img className="images" src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19" />
          <Typography variant="h4">Tracker</Typography>
          </div>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          
        
       
      </div>
    );
  }
 
}

export default App;
