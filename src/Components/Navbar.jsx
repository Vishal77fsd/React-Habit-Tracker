import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const date = new Date();

  return (
    <div className="flex flex-row border bg-black/[0.8] text-white border-black justify-between p-4 items-center font-apple">
      <div className="text-3xl flex gap-2 justify-center items-center">
        <Link to={"/"}>
          <AiFillHome className="cursor-pointer" />
        </Link>
        Habits Tracker
      </div>

      <div className="flex items-center gap-2">
        <div>{date.toDateString()}</div>
        <Link
          to="/add-workout"
          className="rounded-sm p-2 border-slate-800 text-black bg-slate-300 font-semibold"
        >
          Add Workout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
