import React from 'react';
import {connect} from 'react-redux';
import {increaseCount, decreaseCount} from '../../actions/CounterActions'

import CounterButtons from './counterButtons'


export class Counter extends React.Component{

    constructor(props){
        super(props);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);

    }

    increment(){
        this.props.dispatch(increaseCount());

    }

    decrement(){
        this.props.dispatch(decreaseCount());

    }

    render(){
        const{count, feedback} = this.props;
        return (
            <div className="col-md-12 col-sm-12">
                <CounterButtons
                    increment={this.increment.bind()}
                    decrement={this.decrement.bind()}
                    count={count}/>
                <p>Feedback: {feedback?'True':'False'}</p>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        count:state.CounterReducer.count,
    }
}

export default connect(mapStateToProps)(Counter)

