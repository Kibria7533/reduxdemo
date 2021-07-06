import { combineReducers} from 'redux'
import IDR from './IncrementDecrement'
import NameReducer from './NameReducer';
 const Rootreducer=combineReducers({
IDR,NameReducer
})

export default Rootreducer;