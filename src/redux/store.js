import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./workoutSlice";

const store = configureStore({
  reducer: {
    allHabits: habitReducer,
  },
});

export default store;
