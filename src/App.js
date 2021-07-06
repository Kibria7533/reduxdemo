import { useState } from 'react'


import { Provider, useDispatch } from 'react-redux';
import Demo from './Demo'
import {useReducer} from 'react'




const App = () => {
  const [name, setName] = useState("Yousuf");
  const dispatch=useDispatch();

  return (
    
      <div className="App">
        <h1>Welcome you all </h1>
        <button onClick={()=>dispatch(
          { type: 'addname', payload: name }
        )}>Set name</button>
        <Demo />
      </div>
   

  );

}

export default App;
