import React from "react";
import UserTableRow from "../UserTableRow/UserTableRow";
import "./UserTable.css";

const UserTable = ({ users }) => {
  console.log("User:", users); // Log the user object to the console

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
