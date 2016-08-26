import React from 'react';
import {connect} from 'react-redux';
import poster from '../../images/videoPoster.png';



class VideoContent extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
    return (
      <div id="VideoContent">
        <div className="embed-container">
          <iframe src="https://www.youtube.com/embed//1Nc8a9gnDso" frameBorder="0" poster={poster}></iframe></div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    count:state.CounterReducer.count,
  }
}

export default connect(mapStateToProps)(VideoContent)
