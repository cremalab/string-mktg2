import React from 'react';



export default class ChatBubble extends React.Component {

  constructor(props){
    super(props);
    this.image = this.props.data.img
  }

  render(){
    const {data} = this.props;
    const BotChat = ({data}) => (
      <div className="chatBubble botChatBubble">

        <p className="botP">
          <span className="botSpan"> {data.chatContent} <br/></span>
          {data.img &&
            <img src={data.img} alt=""/>
          }
          {data.rating &&
          <span>
            <span className="botSpan">{data.rating.distance}</span>
            <span className="botSpan">{data.rating.price}</span>
            <span className="botSpan">{data.rating.stars}</span>
          </span>}
        </p>
        <div className="botSquare"></div>
      </div>
    )


    const HumanChat = ({data}) => (

      <div className="chatBubble humanChatBubble">
        <p className="humanP">
          <span className="humanSpan">{data.chatContent} <br/></span>
          {data.img &&

          <img src={this.image} alt=""/>
          }
        </p>
        <div className="humanSquare"></div>
      </div>
    )

    if(data.speaker==="bot"){
      return (<BotChat data={data} />)
    }else{
      return (<HumanChat data={data} />)
    }
  }
}
