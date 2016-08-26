
import React from 'react';
import ChatBubbles from '../ChatBubbles/ChatBubbles';
import MarketingCopy from '../MarketingCopy/MarketingCopy'
import VideoContent from '../VideoContent/VideoContent';



export default class MainViewContainer extends React.Component {

  componentDidMount(){
    const watchVideoButton = document.getElementById('playVideo');
    const VideoScrollTop = document.getElementById('lowerContent');
    watchVideoButton.addEventListener('click', function(){
      console.log('Clicked');
      window.scrollTo(0, VideoScrollTop.offsetTop)
    })


  }

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="mainViewContainer" onScroll={this.scrollHandler} >
        <div className="upperContent">
          <ChatBubbles />
          <MarketingCopy />
        </div>
        <div className="lowerContent" id="lowerContent">
          <VideoContent />
        </div>
      </div>
    )
  }




}
