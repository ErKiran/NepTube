import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import './styles/style.css';

const API_KEY='AIzaSyBqH5x6jpGxs5NXqXNcWaLeuzarDf1zpXw';

class App extends Component {
  constructor(props){
  super(props);
  this.state ={ 
    videos:[],
    selectedVideo:null,
   
  };
  this.videoSearch('NarayanGopalSongs');
}
  videoSearch(term){
        YTsearch({key:API_KEY,term:term},(videos)=>{
        this.setState({videos:videos,
        selectedVideo: videos[0]
    });
    });
  }
  render() {
    return (
      <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      videos={this.state.videos}
      onVideoSelect={selectedVideo=> this.setState({selectedVideo})}/>
      </div>
    );
  }
}

export default App;
