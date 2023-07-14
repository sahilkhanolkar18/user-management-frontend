import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, updateUser } from "../store/usersSlice";
import UserForm from "../components/User/UserForm/UserForm";

const UserFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useParams();
  const isEditMode = !!userId;

  const handleSubmit = (userData) => {
    if (isEditMode) {
      dispatch(updateUser({ id: userId, ...userData }));
    } else {
      dispatch(createUser(userData));
    }
    navigate("/");
  };

  const containerStyle = {
    margin: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
    paddingTop: "15%",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{isEditMode ? "Edit User" : "Create User"}</h2>
      <UserForm
        onSubmit={handleSubmit}
        initialValues={isEditMode ? { name: "", email: "", phone: "" } : null}
        submitButtonText={isEditMode ? "Update" : "Create"}
      />
    </div>
  );
};

export default UserFormPage;
