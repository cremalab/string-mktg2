import React from 'react';
import SVGInline from 'react-svg-inline'
import classNames from 'classnames';
import ReactYoutube from 'react-youtube';
const playImage = require('../../images/play.svg');




class VideoContent extends React.Component{
  componentWillMount(){
    this.setState({clicked:false});
  }
  constructor(props){
    super(props);

    this.setClass = () => {
      console.log('Checking if clicked');
      if(this.state.clicked === true){
        console.log('State:', this.state.clicked)
        return 'videoCover disappear';
      }else{
        console.log('State:', this.state.clicked)
        return 'videoCover';
      }
    };
    this.playHandleClick = () => {
      this.setState({clicked:true});
   }
    this._onReady= (event)=> {
      // access to player in all event handlers via event.target
      event.target.playVideo();
    }
  }

  render(){
    var videoCoverClasses = 'videoCover';
    if(this.state.clicked) videoCoverClasses += ' disappear';

    return (
      <div id="VideoContent">
        <div className="embed-container">
          <div className={videoCoverClasses} onClick={this.playHandleClick}><SVGInline svg={playImage} className="largePlayImage"/></div>
          {
            this.state.clicked &&
            <ReactYoutube videoId="1Nc8a9gnDso" onReady={this._onReady}/>
          }

          </div>
      </div>
    )
  }
}

export default VideoContent
