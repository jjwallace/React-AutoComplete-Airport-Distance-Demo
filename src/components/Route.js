//import React from 'react';
import React, { Component } from 'react';
import './Route.css';

class Route extends Component {

  componentDidMount() {
      console.log('did mount');
  }
  
  //this.props.myLat

  render() {
    console.log('Route: ' + this.props.lat1+'-'+this.props.lon1+'-'+this.props.lat2+'-'+this.props.lon2+'-'+this.props.loc1+'-'+this.props.loc2);
    
    function haversineFormula(lat1, lon1, lat2, lon2) {
        //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
        var R = 3958.7558657440545; // Radius of earth in Miles 
        var dLat = toRad(lat2-lat1);
        var dLon = toRad(lon2-lon1); 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d;
    }

    function toRad(Value) {
        /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
    }
    
    function toKilo(miles) {
        var km = miles * 1.609;
        return km;
    }
    
//    if(this.props.lat == NaN){
//      
//    }else{
      var distMiles = haversineFormula(
        this.props.lat1,
        this.props.lon1,
        this.props.lat2,
        this.props.lon2  
      );
//    }
    
    var travelKilo = toKilo(distMiles);
    var distMiles = parseInt(distMiles) + ' Miles';
    var distKilo = '( ' + parseInt(travelKilo) + ' Km )';
    
    return (
      
        <div className="divTable">
          
        <div className="divTableBody">
        <div className="divTableRow">
          <div className="divTableCell">{this.props.loc1}</div>
          <div className="divTableCell"></div>
          <div className="divTableCell">{this.props.loc2}</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">&nbsp;</div>
          <div className="divTableCell">{distMiles}</div>
          <div className="divTableCell">&nbsp;</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">&nbsp;</div>
          <div className="divTableCell">{distKilo}</div>
          <div className="divTableCell">&nbsp;</div>
        </div>
        </div>
        </div>
    );
  }
}

module.exports = Route;