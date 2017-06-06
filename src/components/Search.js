import React from 'react';
import createClass from 'create-react-class';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import DATA from '../../data/airports.js'; //ES6 Style
//const DATA = require('../../data/airports'); //Old Style

import Map from '../components/Map.js';
//<Map />

var Search = createClass({
  
	displayName: 'Search',
  
	getInitialState () {
		return {};
	},
  
	updateValue (newValue) {
    function getIndex(value, arr, prop) {
      for(var i = 0; i < arr.length; i++) {
          if(arr[i][prop] === value) {
              return i;
          }
      }
      return -1; //to handle the case where the value doesn't exist
    }
    
    var options = DATA.airports;
    var index = getIndex(newValue, options, 'iata');
    
    console.log(options[index]);
    this.props.getValueChild(options[index]);
    
		this.setState({
			selectValue: newValue
		});
   
	},
  
	render () {
		var options = DATA.airports;
		return (
			<div className="section">
				<h3 className="section-heading">Airport - {this.props.text}</h3>
				<VirtualizedSelect ref="airportSelect"
					options={options}
					simpleValue
					clearable
					name="select-city"
					value={this.state.selectValue}
					onChange={this.updateValue}
					searchable
					labelKey="iata"
					valueKey="iata"
				/>
				<div className="airport-info">
          <Map data={this.state} />
          </div>
        
			</div>
		);
	}
});

module.exports = Search;