import React, { Component } from 'react';

import './App.css';
import './Bs.min.css';

class Aggregate extends Component{
  render() {
    return (
      <div className="aggregate col-md-6">
          <h4>Number Text</h4>
      </div>
    );
  }
}
class Filter extends Component{
	render() {
		return (
			<div>
				<img/>
				<br/><br/>
				<input type="text" className="search" placeholder="Search"/>
				<br/><br/>
			</div>
		);
	}
}

class Playlist extends Component {
	render() {
		return (
				<div className="col-md-4 ">
					<img />
					<h3>Playlist name</h3>
					<br/><br/>
					<ul className="list-group">
						<a href="" className="list-group-item list-group-item-action fff">Song 1</a>
						<a href="" className="list-group-item list-group-item-action fff">Song 2</a>
						<a href="" className="list-group-item list-group-item-action fff">Song 3</a>
						<a href="" className="list-group-item list-group-item-action fff">Song 4</a>
					</ul>
				</div>
		);
	}
}

class App extends Component {
  render() {
    let appName = 'Playlist'
    return (
      <div className="App container">
	  		<br/><br/><h1>{appName}</h1><br/><br/>
		  <div className="row">
			<Aggregate/><Aggregate/>
		  </div>
		  <Filter/>
		 <div className="row">
			<Playlist/><Playlist/><Playlist/>
		  </div>
      </div>
    );
  }
}

export default App;
