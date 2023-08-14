import { useSelector } from "react-redux";
import HabitDetails from "./HabitDetails";

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);
  return (
    <span className="relative">
      {habits.map((habit, index) => (
        <div
          key={index}
          className="flex flex-col justify-center m-2 border border-red-600 bg-blue-100 p-4 rounded-sm"
        >
          <h1 className="text-[20px] font-apple font-semibold text-blue-900">
            {habit.title}
          </h1>
          <HabitDetails key={habit.title} habit={habit} />
        </div>
      ))}
    </span>
  );
};

export default HabitDisplay;
