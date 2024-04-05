import { create } from "zustand";
import { devtools } from "zustand/middleware";
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => Promise<void>;
  incrementWithPayload: (payload: number) => void;
};

export const useCounterStore = create<CounterStore>()(
  devtools((set, get) => ({
    count: 0,
    increment: () => {
      console.log("get count", get().count);
      set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    reset: () => {
      set({ count: 0 });
    },
    incrementAsync: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set((state) => ({ count: state.count + 1 }));
    },
    incrementWithPayload: (payload: number) => {
      set((state) => ({ count: state.count + payload }));
    },
  }))
);
