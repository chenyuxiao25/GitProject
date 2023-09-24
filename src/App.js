import "./App.css";
import {useSelector,useDispath} from  'react-redux'
import { decrement, increment } from "./Redux/actions/counter";
function App() {
const counter = useSelector((state) => state.counter)
 const dispatch  = useDispath ((first) => { second })
}
return (
  <div>
    <h1>counter:{counter}</h1>
    <button onClick={() => dispatch (increment)}>in</button>
    <button onClick={() => dispatch(decrement)}>dew</button>
  </div>
)
/*  */
export default App;
