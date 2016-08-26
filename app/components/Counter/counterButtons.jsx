import React from 'react';

const counterButtons = ({increment, decrement, count}) =>{

    let divStyle= {
        textAlign:'center'
    };
    let isDisabled = (count) =>{
        return count ==0?true:false;
    }

    let buttonStyle={
        color:'#FFFFFF',
        backgroundColor:'blue',
        borderRadius:'3px',
        border:'none'
    };


    return(
        <div style={divStyle}>
            <button
                style={buttonStyle}
                type="button"
                onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button
                style={buttonStyle}
                type="button"
                onClick={decrement}
            disabled={isDisabled(count)}>Decrement</button>
        </div>
    )
};

export default counterButtons
