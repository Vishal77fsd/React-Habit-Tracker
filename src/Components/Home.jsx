import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteHabit } from "../redux/workoutSlice";
import HabitDisplay from "./HabitDisplay";
import { CgGym } from "react-icons/cg";
const Home = () => {
  const dispatch = useDispatch();

  const handleDelete = (title) => {
    dispatch(deleteHabit(title));
  };

  const { habits } = useSelector((state) => state.allHabits);
  return (
    <div>
      <div className="flex items-center gap-4 p-4">
        <CgGym className="text-2xl" />
        <h1 className="text-2xl font-apple">Habits</h1>
      </div>
      <div className="relative flex">
        <ul className=" w-[20%] sm:w-[30%]">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border bg-black font-bold font-apple m-2 rounded-md text-white"
            >
              <li className="text-1xl break-words w-[80%]">{habit.title}</li>
              <AiFillDelete
                className="cursor-pointer text-2xl"
                onClick={() => handleDelete(habit.title)}
              />
            </div>
          ))}
        </ul>
        <HabitDisplay />
      </div>
    </div>
  );
};

export default Home;
