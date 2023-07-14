import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Fetch all users from the backend API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});

// Create a new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await axios.post("http://localhost:5000/users", userData);
    return response.data;
  }
);

// Update an existing user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const { id, ...data } = userData;
    const response = await axios.put(`http://localhost:5000/users/${id}`, data);
    return response.data;
  }
);

// Delete a user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    return userId;
  }
);

// Fetch a specific user by ID
export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const response = await axios.get(`http://localhost:5000/users/${userId}`);
  console.log("returned", response.data);
  return response.data;
});

// Create the users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        state.users = state.users.filter((user) => user.id !== userId);
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        // Update or set the specific user in the state
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (index !== -1) {
          state.users[index] = updatedUser;
        } else {
          state.users.push(updatedUser);
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default usersSlice.reducer;
