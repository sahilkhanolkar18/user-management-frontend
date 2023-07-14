import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";
import UserTable from "../components/User/Tables/UserTable";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        User Management System
      </h1>
      <h2
        style={{
          textAlign: "start",
          paddingLeft: "50px",
          display: "inline-block",
        }}
      >
        Users List:
      </h2>
      <Link
        to="/users/add"
        style={{
          marginLeft: "70%",
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
        }}
      >
        Add Users
      </Link>

      <UserTable users={users} />
    </div>
  );
};

export default UserListPage;
