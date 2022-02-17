import './App.css';
import {incrementCount, decrementCount, getTimestamp} from './actions/';
import { store } from './store'
import {useDispatch , useSelector } from 'react-redux'
function App() {
    const data = useSelector((state) => state.reducer)
    const num = data.count;
    const timestp = data.timestamp;
    const dispatch = useDispatch();//For useDispatch() usage instead of store.dispatch;
  return (
    
    <div className="App">
      <h1>Counter</h1>
      <button onClick={e => store.dispatch(decrementCount())}>Decrement</button>
      <h2 id="num">{num}</h2>
      <button onClick={e => store.dispatch(incrementCount())}>Increment</button>
      <h2 id="time">{timestp}</h2>
      <button onClick={e => dispatch(getTimestamp())}>Get time</button>
      {/* {document.getElementById('time').innerHTML = timestp} */}
    </div>
  );
}

export default App;
