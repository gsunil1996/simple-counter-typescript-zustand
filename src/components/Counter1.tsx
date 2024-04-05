"use client"

import { useCounterStore } from "@/zustand/stores/counterStore";

const logCount = () => {
  const count = useCounterStore.getState().count;
  alert(count)
}

const setCount = () => {
  useCounterStore.setState({ count: 1 })
}

const Counter1 = () => {

  // const { count, increment, decrement, reset, incrementAsync } = useCounterStore(state => state);

  // always use specific end points, because if we do like above then when ever there is change in state the compenent will re-render. For the best practice look the below code

  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);
  const reset = useCounterStore(state => state.reset);
  const incrementAsync = useCounterStore(state => state.incrementAsync);
  const incrementWithPayload = useCounterStore(state => state.incrementWithPayload);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={logCount} >Alert Count</button>
      <button onClick={() => incrementWithPayload(10)} >incrementWithPayload</button>
      <button onClick={setCount} >Set Count to 1</button>
    </div>
  )
}

export default Counter1