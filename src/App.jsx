import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './redux/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>The count is: {counter}</h1>
      <div style={{ display: 'flex', flexDirection:'row', gap: 20, justifyContent: 'center'   }}>
        <button style={{ padding: 10, fontSize: 16 }} onClick={() => dispatch(increment())}>Increment</button>
        <button style={{ padding: 10, fontSize: 16 }} onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
