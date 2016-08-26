//React Imports
import React from 'react';
//Testing imports
import TestUtils,  { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import {expect} from 'chai';
//Module Imports
import {Counter} from './Counter';
import CounterReducer from '../../reducers/counter.reducer';
import * as counterActionTypes from '../../actions/CounterActions';


describe('Counter Module', () =>{
    it('Renders Two Buttons Labeled \'Increment\' and \'Decrement\'', ()=> {
       const component = renderIntoDocument(
           <Counter />
       );
       const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

       expect(buttons.length).to.equal(2);
       expect(buttons[0].textContent).to.equal('Increment');
       expect(buttons[1].textContent).to.equal('Decrement');
    });
    it('disables the decrement button when count is equal to zero', ()=> {
        const count = 0;
        const component = renderIntoDocument(
            <Counter count={count} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[1].disabled).to.equal(true)
    });
    it('enables the decrement button when count is above zero', ()=> {
        const count = 4;
        const component = renderIntoDocument(
            <Counter count={count} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons[1].disabled).to.equal(false)
    });
});

describe('Counter Reducer', ()=>{
    it('should return the initial state', ()=> {
        expect(
            CounterReducer(undefined, {})
        ).to.deep.equal(
            {
                count:0
            }
        )
    });
    it('should return handle INCREMENT_NUMBER', ()=> {
        expect(
            CounterReducer({
                count:0
            }, {
                type:counterActionTypes.INCREMENT_NUMBER
            })
        ).to.deep.equal(
            {
                count:1
            }
        )
    });
    it('should return handle DECREMENT_NUMBER', ()=> {
        expect(
            CounterReducer({
                count:2
            }, {
                type:counterActionTypes.DECREMENT_NUMBER
            })
        ).to.deep.equal(
            {
                count:1
            }
        )
    });

});
