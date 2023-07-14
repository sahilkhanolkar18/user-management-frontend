import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/usersSlice";
import UserDetails from "../components/User/UserDetails/UserDetails";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector((state) => {
    console.log(
      "State in:",
      state.users.users.find((user) => user.id == userId),
      "User ID",
      userId
    ); // Log the state value
    return state.users.users.find((user) => user.id == userId);
  });
  console.log("State out:", user);
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <div
      style={{
        display: "block",
        width: "20%",
        margin: "auto",
        paddingTop: "15%",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>User Details</h2>
      {user ? <UserDetails user={user} /> : <p>Loading user details...</p>}
    </div>
  );
};

export default UserDetailsPage;
