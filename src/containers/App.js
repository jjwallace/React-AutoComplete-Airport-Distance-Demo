/*
* @author Jesse Jay Wallace <jjaywallace@gmail.com>
* @overview
* React Airport Distance Calculator
* http://www.jjwallace.info/
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';
import Search from '../components/Search.js';
import Map from '../components/Map.js';
import Route from '../components/Route.js';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { selection: '',
                  location1: '',
                  location2: '',
                  loc1Selected: '',
                  loc2Selected: '',
                  lat1: '',
                  lon1: '',
                  lat2: '',
                  lon2: '',
                 }
//    this.location1 = false;
//    this.location2 = false;
  }
  
//  var location1: Boolean = false;
//  var location2: Boolean = false;
  
  DisplayRoute(lat1,lon1,lat2,lon2,loc1,loc2,location1,location2){
    console.log('Location: ' + location1+'-'+location2);
    console.log('App:' + lat1+'-'+lon1+'-'+lat2+'-'+lon2+'-'+loc1+'-'+loc2);
    if(this.location1 == '' || this.location2 == ''){
      const element = (
        <div>
          
        </div>
      );
      
      ReactDOM.render(
        element,
        document.getElementById('divRoute')
      );
    }else if(this.location1 == true && this.location2 == true){
      const element = (
        
          <div>
            <Route 
              lat1={this.lat1}
              lon1={this.lon1}
              loc1={this.loc1}
              lat2={this.lat2}
              lon2={this.lon2}
              loc2={this.loc2}/>
          </div>
       
      );

      ReactDOM.render(
        element,
        document.getElementById('divRoute')
      );
    }
  }
  
  getValueParent(opt, myMap){
    if(opt == undefined){
            
      const element = (
        <div></div>
      );

      ReactDOM.render(
        element,
        document.getElementById(myMap)
      );
//      if(myMap == 1){this.loc1 = '';this.location1 = false;}
//      if(myMap == 2){this.loc2 = '';this.location2 = false;}
      console.log(myMap);
    }else{
      console.log(myMap);
      console.log('Airport: '+ opt.name);
      console.log('LOC: '+ opt.lat + opt.lon);

      var myCenter = [(opt.lat * 1),(opt.lon * 1)];

      console.log('Center: '+ myCenter);

      const element = (
        <div className="App-Info">
          <div className="App-Airport_title">
            <p>{opt.name}</p>
          </div>
          <div className="App-MapBox">
            <Map myLat={opt.lat} myLon={opt.lon} myCent={myCenter}/>
          </div>
        </div>
      );
      
      
      if(myMap == 1){this.location1 = true;
                     this.loc1Selected = '';
                     this.lat1 = opt.lat;
                     this.lon1 = opt.lon;
                     this.loc1 = opt.iata;
                     console.log("Location 1 Selected");
                    }
      if(myMap == 2){this.location2 = true;
                     this.loc2Selected = '';
                     this.lat2 = opt.lat;
                     this.lon2 = opt.lon;
                     this.loc2 = opt.iata;
                     console.log("Location 2 Selected");
                    }
      
      this.DisplayRoute(this.lat1,
                  this.lon1,
                  this.lat2,
                  this.lon2,
                  this.loc1,
                  this.loc2,
                  this.location1,
                  this.location2);

      ReactDOM.render(
        element,
        document.getElementById('divMap' + myMap)
      );
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Airport App</h2>
        </div>
        <div className="App-body">
          <Search    
            getValueChild={ options => this.getValueParent(options, 1) } 
          text="Origin" />
          <div id="divMap1"></div>
          <Search    
            getValueChild={ options => this.getValueParent(options, 2 ) } 
            text="Destination" />
          <div id="divMap2"></div>
        </div>
          <div className="App-route">
            <h3>Route Details</h3>
          <div id="divRoute">
            <h4>No Data</h4>
            Please Select Airports
              </div>
        </div>
      </div>
    );
  }
}

export default App;