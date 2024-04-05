"use client"

import { decrementFromCounter2, incrementFromCounter2, incrementWithAsycFromCounter2, incrementWithPayloadFromCounter2, resetCounter2 } from "@/zustand/actions/counter2Actions/counter2Actions";
import { useCounterStore2 } from "@/zustand/stores/counter2Store"

const Counter2 = () => {
  const count = useCounterStore2(state => state.count);

  return (
    <div>
      <h1>Counter 2</h1>
      <h1>Count is : {count}</h1>
      <button onClick={incrementFromCounter2}>Increment</button>
      <button onClick={decrementFromCounter2}>Decrement</button>
      <button onClick={resetCounter2}>Reset</button>
      <button onClick={incrementWithAsycFromCounter2}>Increment Async</button>
      <button onClick={() => incrementWithPayloadFromCounter2(10)} >incrementWithPayload</button>
    </div>
  )
}

export default Counter2