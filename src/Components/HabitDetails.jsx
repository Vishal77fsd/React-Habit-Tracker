/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/workoutSlice";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();

  const handleNoneStatus = (data) => {
    dispatch(
      changeStatus({
        title: data[0],
        details: [
          {
            day: data[1],
            status: "done",
          },
        ],
      })
    );
  };

  const handleCheckStatus = (data) => {
    dispatch(
      changeStatus({
        title: data[0],
        details: [
          {
            day: data[1],
            status: "undone",
          },
        ],
      })
    );
  };

  const handleUnCheckStatus = (data) => {
    dispatch(
      changeStatus({
        title: data[0],
        details: [
          {
            day: data[1],
            status: "none",
          },
        ],
      })
    );
  };
  return (
    <div className="flex border border-blue font-apple">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col items-center gap-2 mr-4 ">
          <p>{detail.day}</p>
          <div>
            {detail.status === "none" && (
              <div
                className="h-5 w-5 border rounded-full border-black cursor-pointer"
                onClick={() => handleNoneStatus([habit.title, detail.day])}
              ></div>
            )}

            {detail.status === "done" && (
              <div>
                <MdOutlineDone
                  className="cursor-pointer text-2xl border rounded-full"
                  onClick={() => handleCheckStatus([habit.title, detail.day])}
                />
              </div>
            )}

            {detail.status === "undone" && (
              <div>
                <MdOutlineCancel
                  className="cursor-pointer h-5 w-5"
                  onClick={() => handleUnCheckStatus([habit.title, detail.day])}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitDetails;
