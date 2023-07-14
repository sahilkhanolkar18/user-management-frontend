import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser } from "../../../store/usersSlice";
import "./UserForm.css";

const UserForm = ({ initialValues, submitButtonText }) => {
  const [name, setName] = useState(initialValues?.name || "");
  const [email, setEmail] = useState(initialValues?.email || "");
  const [phone, setPhone] = useState(initialValues?.phone || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const isEditMode = !!userId;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone };
    console.log("initial", initialValues);

    if (isEditMode && userId) {
      dispatch(updateUser({ id: userId, ...userData }));
    } else {
      dispatch(createUser(userData));
    }

    navigate("/");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="user-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          className="user-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          className="user-input"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button className="submit-button" type="submit">
        {submitButtonText}
      </button>
    </form>
  );
};

export default UserForm;
