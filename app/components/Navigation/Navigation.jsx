import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import '../../styles/componentStyles/_navbar.scss';


class Navigation extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        const {count} = this.props;



        return(

                <div className="nav navbar-nav">
                    <div className="nav-links">
                        <Link to="counter" className="nav-item nav-link"> Counter</Link>
                        <p className="nav-item navbar-brand pull-xs-right navbar-counter"> The count is: {count}</p>
                    </div>
                </div>
        )
    }
};

function mapStateToProps(state){

    return{
        count:state.CounterReducer.count,

    }
}

export default connect(mapStateToProps)(Navigation);
