import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/User";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
