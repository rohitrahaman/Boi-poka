import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModel } from "../../Store/Preferance/preferanceSlice";

function Model({ children }) {
  const dispatch = useDispatch();
  const { modelOpen } = useSelector((state) => state.preferance);

  const handleClose = () => {
    dispatch(toggleModel());
  };
  return (
    <div
      className={`fixed z-10 top-0 right-0 w-1/2 h-full bg-black/90 p-5 transition-all transition-duration-500 ease-in-out ${
        modelOpen === "open" ? "right-0" : "right-[-999px]"
      }`}
    >
      <div className="text-white flex justify-end cursor-pointer ">
        <button
          className="bg-white/90 rounded-md text-black px-5 py-2"
          onClick={handleClose}
        >
          X
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default Model;
