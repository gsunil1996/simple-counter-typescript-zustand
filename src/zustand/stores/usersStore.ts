import { create } from "zustand";
import {
  UsersInitialState,
  usersInitialState,
} from "../initialStates/usersInitialState";
import { devtools } from "zustand/middleware";

export const useUsersStore = create<UsersInitialState>()(
  devtools((set) => ({
    ...usersInitialState,
  }))
);
