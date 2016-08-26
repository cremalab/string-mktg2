import React from 'react';

class App extends React.Component {


  componentWillMount(){
  }

  constructor(props){
    super(props)
  }



  render(){
    return (
      <div className="bodyContainer" >
          {this.props.children}
      </div>
    )
  }
}

export default App;
