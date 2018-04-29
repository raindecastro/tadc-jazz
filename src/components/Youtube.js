import React from 'react';
import YouTube from 'react-youtube';
 
export default class Example extends React.Component {
  render() {
    const opts = {
      height: '220',
      width: '360',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
    <div>
        <YouTube
            videoId="SZa1T6tRNN4"
            opts={opts}
            onReady={this._onReady}
        />
    </div>
      
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}