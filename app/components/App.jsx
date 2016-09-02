import React from 'react';



class App extends React.Component {


  constructor(props){
    super(props)
  }

  render(){



    return (
        <span>

          <div className="bodyContainer" >
          {this.props.children}
        </div>
        </span>


    )
  }
}

export default App;
