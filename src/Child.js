import React from 'react';
import { useSelector } from 'react-redux'
function Child(props) {
    const state=useSelector(state=>state.NameReducer);
    console.log(state)
    return (
        <div>
            <h1>I am Third Child {state.count}</h1>
        </div>
    );
}

export default Child;