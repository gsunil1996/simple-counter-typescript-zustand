import { User } from "@/zustand/initialStates/usersInitialState";
import { useUsersStore } from "@/zustand/stores/usersStore";
import axios, { AxiosError } from "axios";

export type UsersErrorResponse = {
  message: string; // Assuming error message is a string
};

export const getUsers = async (): Promise<void> => {
  try {
    // pending
    useUsersStore.setState((state) => ({
      ...state,
      users: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: "",
    }));

    // Fetch users
    const { data } = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Update store on successful fetch
    useUsersStore.setState((state) => ({
      ...state,
      users: data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: "",
    }));
  } catch (error) {
    // Handle errors
    const axiosError = error as AxiosError<UsersErrorResponse>;
    const errorMessage = axiosError.response?.data?.message || "Unknown error";
    useUsersStore.setState((state) => ({
      ...state,
      users: null,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: errorMessage,
    }));
  }
};
