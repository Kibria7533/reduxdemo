import React from 'react';
import { useSelector } from 'react-redux'
import Child from './Child'

function Demo(props) {
    const state=useSelector(state=>state.IDR);
    console.log(state)
    return (
        <div>
            <h1>Show my State {state}</h1>
            <Child />
        </div>
    );
}

export default Demo;