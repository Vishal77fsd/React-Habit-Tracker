import { createSlice } from "@reduxjs/toolkit";

export const details = [
  { day: "Mon", status: "none" },
  { day: "Tue", status: "none" },
  { day: "Wed", status: "none" },
  { day: "Thur", status: "none" },
  { day: "Fri", status: "none" },
  { day: "Sat", status: "none" },
  { day: "Sun", status: "none" },
];

// loading habits from localstorage
const habitsFromLocalStorage = localStorage.getItem("newHabits")
  ? JSON.parse(localStorage.getItem("newHabits"))
  : [
      { title: "Wake up it a brand new day", details },
      { title: "Do nothing", details },
    ];

let habits = [...habitsFromLocalStorage];

const initialState = {
  habits: habits,
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    // Add the habit in the Local Storage
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload];
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
    // Delete the habit from local storage
    deleteHabit: (state, action) => {
      // Fitering out the habit
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload
      );

      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              detail.status = payload.details[0].status;
            }
          });
        }
      });

      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
  },
});

// console.log(habitsSlice);
export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions;
export default habitsSlice.reducer;
