import React from 'react';

import axios from 'axios';


export default class EmailCapture extends React.Component {

  componentWillMount(){
    this.setState({filled:true});
    this.setState(
        {
          placeHolderText:'Email Address',
          validEmail:true,
          emailSubmitted:false
        }
    );
    console.log('Will  Mount state', this.state)
  }

  componentDidMount(){
    console.log('Did Mount State', this.state)
  }



  constructor(props){


    super(props)

    var placeHolderText = 'Email Address';

    this.buttonSubmit = ()=>{
      console.log('Current State Email:', this.state.emailField);
      let value = this.state.emailField;
      let isEmail = this.validateEmail(value);
      console.log('Field Value', value);
      if(isEmail){
        this.setState({validEmail:true})
        axios.post('/signup', value).then(
          (response)=>{
            console.log('Response', response)
            this.setState(
                {
                  emailSubmitted:true,
                  validEmail:true
                })
            }
        );
      }else{
        console.log('Sorry, this is an invalid Email');
        this.setState(
            {
              validEmail:false,
              emailSubmitted:false}
        )
      }
    };

    this.handleChange = (event)=>{
      let value = event.target.value;
      console.log('Value', value);
      this.setState({emailField:value})
    };

    this.validateEmail = (email)=>{
      var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]15f\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailTest.test(email);
    }

    this.onFocus = ()=>{
      console.log('Focused');
      this.setState({placeHolderText:''});
    }

    this.onBlur = ()=>{
      console.log('Focused');
      this.setState({placeHolderText:'Email Address'});
    }

  }


  render(){
    return(

        <div className="emailInputContainer">
          <span className="input input-string">
            <input onChange={this.handleChange}
                   type="email"
                   ref="emailInput"
                   className="inputField inputField--string"
                   placeholder={this.state.placeHolderText}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
            <button className="emailSubmit" onClick={this.buttonSubmit}>&#8594;</button>
          </span>
          {!this.state.validEmail &&
            <p className="invalidEmail">Please enter a valid email address</p>
          }
          {this.state.emailSubmitted &&
            <p className="emailSubmitted">Thanks!</p>
          }


        </div>

    )
  }
}
