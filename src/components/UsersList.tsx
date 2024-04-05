"use client";

import { getUsers } from "@/zustand/actions/usersActions/userActions";
import { useUsersStore } from "@/zustand/stores/usersStore";
import { useEffect } from "react";

const UsersList = () => {

  // const check = useUsersStore(state => state)
  // console.log("checkUsers", check);

  const data = useUsersStore((state) => state.users);
  const isLoading = useUsersStore((state) => state.isLoading);
  const isError = useUsersStore((state) => state.isError);
  const error = useUsersStore((state) => state.error);
  const isSuccess = useUsersStore((state) => state.isSuccess);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h4>Users List</h4>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>{error}</h1>
      ) : isSuccess && data?.length === 0 ? (
        <h1>Data Not Found</h1>
      ) : isSuccess ? (
        <>
          {data?.map((item) => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default UsersList;
