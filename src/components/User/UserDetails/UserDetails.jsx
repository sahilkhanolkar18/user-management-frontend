import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  console.log("User:", user); // Log the user object to the console

  const { id, name, email, phone } = user;

  return (
    <div>
      <table className="user-details-table">
        <tbody>
          <tr>
            <td className="user-details-label">ID:</td>
            <td className="user-details-value">{id}</td>
          </tr>
          <tr>
            <td className="user-details-label">Name:</td>
            <td className="user-details-value">{name}</td>
          </tr>
          <tr>
            <td className="user-details-label">Email:</td>
            <td className="user-details-value">{email}</td>
          </tr>
          <tr>
            <td className="user-details-label">Phone:</td>
            <td className="user-details-value">{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
