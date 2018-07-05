import React, { Component } from 'react'

export default class Trending extends Component {
    constructor(props){
        super(props);
        this.state={
          query:''
        }
      }
    search()
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

  render() {
    return (
      <div>
      var maxVideos = 5;
   $(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: maxVideos,
      regionCode: 'IN',
      key: 'Your_KEY_Here'},
      function(data){
        var output;
        $.each(data.items, function(i, item){
          console.log(item);
          videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
          output = '<div class="maindiv"><div>' +
                        '<a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank" ><img src="' + thumb + '" class="img-responsive thumbnail" ></a>' +
                        '</div>' +
                        '<div class="input-group col-md-6">' +
                            '<h3 class="Vtitle"><a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank">' + videTitle + '</a></h3>'+
                        '</div><div  id="cTitle"><a href="https://www.youtube.com/channel/'+cID+'" target="_blank">'+channelTitle+'</a></div></div>' +
                    '<div class="clearfix"></div>';
          $('#trending').append(output);
        })

      }
    );
}); 
Save file as .js

And in HTML file make div or ul by id="trending"

lik
        
      </div>
    )
  }
}
