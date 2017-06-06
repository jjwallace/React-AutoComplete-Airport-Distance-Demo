//import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  
  static defaultProps = {
    center: {lat: 40.7128, lng: -74.0059},
    zoom: 12
  };

  componentDidMount() {
      console.log('did mount');
  }

  render() {
    console.log('Map Lat: ' + this.props.myLat);
    console.log('Map Lon: ' + this.props.myLon);
    console.log('Map Center: ' + this.props.myCent);
    
    //console.log('center: ' + this.props.center);
    //this.props.myLoc = {this.props.myLat, this.props.myLon}
    
    return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          center={this.props.myCent}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
    );
  }
}

module.exports = Map;