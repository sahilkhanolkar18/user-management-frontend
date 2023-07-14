import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/usersSlice";
import "./UserTableRow.css";

const UserTableRow = ({ user }) => {
  const { id, name, email, phone } = user;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  return (
    <tr>
      <td className="centered">{id}</td>
      <td className="centered">{name}</td>
      <td className="centered">{email}</td>
      <td className="centered">{phone}</td>

      <td className="centered">
        <Link to={`/users/${id}`}>
          <button className="action-button view-button">View</button>
        </Link>

        <Link to={`/users/${id}/edit`}>
          <button className="action-button edit-button">Edit</button>
        </Link>
        <button className="action-button delete-button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
