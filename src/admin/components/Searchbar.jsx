import { Search } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredbooks } from "../../Store/book/bookSlice";

function Searchbar({ className }) {
  const { searchQuery } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filteredbooks(e.target.value));
  };
  return (
    <div className={`flex border gap-3 rounded-md ${className}`}>
      <Search />
      <input
        onChange={handleChange}
        type="text"
        value={searchQuery}
        placeholder="Search"
        className=" bg-transparent outline-none  w-full"
      />
    </div>
  );
}

export default Searchbar;
