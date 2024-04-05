interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type UsersInitialState = {
  users: User[] | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
  test: string;
};

export const usersInitialState: UsersInitialState = {
  users: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
  test: "test",
};
