import React from 'react';

import ChatBubble from './ChatBubble';
import {chatData} from './chat'




class ChatBubbles extends React.Component{

  componentDidMount(){
    const windowWidth = window.innerWidth;

    if(windowWidth<=768){
      //Do nothing for scrolling
    }else{
      var mouseWheelEvent = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
      if (document.attachEvent) { //if IE (and Opera depending on user setting)
        document.attachEvent("on"+mouseWheelEvent, this.mouseWheelEventHandler);
      } else if (document.addEventListener) { //WC3 browsers
        document.addEventListener(mouseWheelEvent, this.mouseWheelEventHandler, false);
      }
      const BubbleContainer = document.getElementById('BubbleContainer');
      const MarketingCopyContainer = document.getElementById('MarketingCopyContainer');
    }
  }

  constructor(props){
    super(props);
    window.onScroll=function(e){
    }
  }


  render(){
    return (
      <div className="chatBubbleContainer"  id="BubbleContainer" >
        {chatData.map((item) =>{
          return <ChatBubble key={item.id} data={item}  />
        })}
      </div>
    )
  }

  mouseWheelEventHandler(e) {

    var belowChatBubble = BubbleContainer.offsetHeight + BubbleContainer.scrollTop >= BubbleContainer.scrollHeight;
    var allowDivScroll = belowChatBubble ? false:true;
    var atBottom = (window.innerHeight+window.scrollY) >= document.body.offsetHeight ;
    var event = window.event || e; //equalize event object

    var delta = event.detail ? event.detail : event.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
    // console.log('TYPEOF WHEELDELTA', typeof event.wheelDelta);
    if(typeof event.wheelDelta=='undefined'){
      //This is a firefox Browser, do the weird calculations
      if(allowDivScroll && !atBottom){
        event.preventDefault();
        BubbleContainer.scrollTop = BubbleContainer.scrollTop+delta*3;
      }
      if(atBottom){
        //Do nothing
      }
    }else{
      //This is chrome/safari
      if(allowDivScroll && !atBottom){
        event.preventDefault();
        BubbleContainer.scrollTop = BubbleContainer.scrollTop-delta;
      }
      if(atBottom){
        //Do nothing
      }
    }
  }
}

export default ChatBubbles
