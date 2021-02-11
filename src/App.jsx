import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
    qodArray: {}
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }
  componentDidMount() {
    this.getlandingPageData();
    this.getQOD()
  }
  
  getQOD() {
    var myHeaders = new Headers();
    myHeaders.append("X-TheySaidSo-Api-Secret", "dollipop");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://quotes.rest/qod?language=en", requestOptions)
      .then((response) => response.text())
      .then(qod => this.setState({qodArray: JSON.parse(qod) }))
      .catch((error) => console.log("error", error));
  }

  render() {
    // console.log(this.state.qodArray.contents.quotes[0].quote)
    return (
      <div>
        <Navigation qod={this.state.qodArray}/>
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
