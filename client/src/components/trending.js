import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Trending extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          videos:[],
          selectedVideo:null,
         
        };
Trendingsearch()
{
  console.log('this.state',this.state);
  const BASE_URL='https://api.spotify.com/v1/search?';
  const FETCH_URL= `${BASE_URL}'q='${this.state.query}'&type=artist`;
  console.log('FETCH_URL',FETCH_URL);

  fetch(FETCH_URL,{
    method:'GET'
  })
  .then(response=> response.json())
  .then(json=> console.log('JSON',json))
}

    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
