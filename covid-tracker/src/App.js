import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./Components/IndexOne";
import { fetchData } from "./api";
import styles from "./App.module.css";

import coronaImage from './images/image.png'

class App extends Component {

  state = {
    data:{},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

   this.setState({data:fetchedData})

 
  }
  handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country)
    console.log(fetchedData)

    this.setState({data:fetchedData, country:country})
    
    //fetch date
    //set the state
  }
  render() {
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='Covid-19' />
        <Cards data={data} />
        <Charts data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
