import React from 'react';
import {connect} from 'react-redux';


import EmailCapture from './EmailCapture';
import SVGInline from 'react-svg-inline'
const playImage = require('../../images/play.svg');
const logoLarge = require('../../images/logo-lg.png')







class MarketingCopy extends React.Component{

  componentDidMount(){
  }

  constructor(props){
    super(props);
  }


  render(){
    return (

      <div className="marketingCopyContainer" id="MarketingCopyContainer" >
        <img className="stringLogoMarketing" src={logoLarge} alt=""/>
        <h1 className="marketingHeader">Find what's next...</h1>
        <h3 className="marketingSubHeader">Your mobile concierge for what you're going to do tonight</h3>
        <div className="playVideo" id="playVideo">
          <SVGInline svg={playImage} className="smallPlayImage"/>
          <p className="playText">PLAY VIDEO</p>
        </div>
        <EmailCapture />
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    count:state.CounterReducer.count,
  }
}

export default connect(mapStateToProps)(MarketingCopy)

