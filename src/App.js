import './App.css';
import {store, incrementCount, decrementCount} from './actions/action.js';


function App() {
  // const number = useSelector(state) => state.
  return (
    
    <div className="App">
      <h1>Counter</h1>
      <button onClick={e => store.dispatch(decrementCount())}>Decrement</button>
      <h2 id="num">0</h2>
      {store.subscribe(() => {
        let count = store.getState().count;
        document.getElementById("num").innerHTML = count;
      })}
      <button onClick={e => store.dispatch(incrementCount())}>Increment</button>

    </div>
  );
}

export default App;
