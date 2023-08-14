import { useState } from "react";
import { addHabit, details } from "../redux/workoutSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const NewWorkout = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddHabitHandle = (e) => {
    e.preventDefault();
    dispatch(addHabit({ title, details }));
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <form onSubmit={AddHabitHandle} className=" flex flex-col gap-4">
        <input
          type="text"
          required
          placeholder="Enter Habit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border focus:outline-none p-4 border-blue-950 rounded-sm"
        />
        <button
          type="submit"
          className="border border-red-950 bg-red-800 text-white font-apple p-2"
        >
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default NewWorkout;
