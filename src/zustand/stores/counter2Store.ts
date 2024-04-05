import { create } from "zustand";
import {
  Counter2InitialState,
  counter2InitialState,
} from "../initialStates/counter2InitialState";
import { devtools } from "zustand/middleware";

export const useCounterStore2 = create<Counter2InitialState>()(
  devtools((set) => ({
    ...counter2InitialState,
  }))
);
