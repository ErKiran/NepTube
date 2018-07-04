import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';

const API_KEY='AIzaSyBqH5x6jpGxs5NXqXNcWaLeuzarDf1zpXw';

class App extends Component {
  constructor(props){
  super(props);
  this.state ={ videos:[]};
  
YTsearch({key:API_KEY,term:'Nepal'},(videos)=>{
  this.setState({videos});
});

  }
  render() {
    return (
      <div>
      <SearchBar/>
      </div>
    );
  }
}

export default App;
