import React from "react";
import Searchbar from "../components/Searchbar";
import { FunnelPlus } from "lucide-react";
import { toggleModel } from "../../Store/Preferance/preferanceSlice";
import { useDispatch } from "react-redux";
function Datatabhead() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(toggleModel());
  };
  return (
    <div>
      <div className="flex justify-between px-10 py-5">
        <div className="flex gap-5 items-center">
          <button className="hover:bg-gray-400/30 shadow-md rounded-sm">
            <FunnelPlus />
          </button>
          <Searchbar />
        </div>
        <div className="flex gap-2 rounded bg-blue-500 text-white px-5 shadow-md">
          <button onClick={handleOpen}> + Add Book</button>
        </div>
      </div>
    </div>
  );
}

export default Datatabhead;
