import React from 'react';
import {connect} from 'react-redux';

import ChatBubble from './ChatBubble';
import {chatData} from './chat'




class ChatBubbles extends React.Component{



  componentDidMount(){
    const windowWidth = window.innerWidth;
    console.log('Width:', windowWidth);

    if(windowWidth<=768){

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

    if(allowDivScroll && !atBottom){
        event.preventDefault();
        BubbleContainer.scrollTop = BubbleContainer.scrollTop-delta;
    }
    if(atBottom){

    }

  }


  //Check if done scrolling
  isStillScrolling(){
    if(BubbleContainer.offsetHeight + BubbleContainer.scrollTop >= BubbleContainer.scrollHeight){

    }else {

    }

  }


  handleScroll() {
    console.log('Scrolling', BubbleContainer.scrollTop)
  }
}


function mapStateToProps(state){
  return{
    count:state.CounterReducer.count,
  }
}

export default connect(mapStateToProps)(ChatBubbles)
