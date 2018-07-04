import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';

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
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
