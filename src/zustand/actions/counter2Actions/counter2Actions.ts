import { useCounterStore2 } from "../../stores/counter2Store";
import { counter2InitialState } from "../../initialStates/counter2InitialState";

export const incrementFromCounter2 = (): void => {
  console.log("get count counter2", useCounterStore2.getState().count);
  useCounterStore2.setState((state) => ({ count: state.count + 1 }));
};

export const decrementFromCounter2 = (): void => {
  useCounterStore2.setState((state) => ({ count: state.count - 1 }));
};

export const incrementWithPayloadFromCounter2 = (payload: number): void => {
  useCounterStore2.setState((state) => ({ count: state.count + payload }));
};

export const incrementWithAsycFromCounter2 = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  useCounterStore2.setState((state) => ({ count: state.count + 1 }));
};

export const resetCounter2 = (): void => {
  useCounterStore2.setState(() => counter2InitialState);
};
