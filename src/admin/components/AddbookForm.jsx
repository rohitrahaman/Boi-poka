import React from "react";
import { useDispatch } from "react-redux";
import { toggleModel } from "../../Store/Preferance/preferanceSlice";
import { addBook } from "../../Store/book/bookSlice";

function AddbookForm() {
  const dispatch = useDispatch();
  const handleAddbook = (e) => {
    const bookName = e.target[0].value;
    const bookDescription = e.target[1].value;
    const bookAuthor = e.target[2].value;
    const bookStatus = e.target[3].value;
    const bookPrice = e.target[4].value;
    const bookofferPrice = e.target[5].value;

    e.preventDefault();

    dispatch(
      addBook({
        id: Date.now(),
        name: bookName,
        description: bookDescription,
        author: bookAuthor,
        status: bookStatus,
        price: bookPrice,
        offerPrice: bookofferPrice,
      })
    );
    dispatch(toggleModel());

    e.target.reset();
  };
  return (
    <div className="text-white">
      <h1 className="mb-5 uppercase font-bold text-xl">Add Book</h1>
      <form onSubmit={handleAddbook} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Book Name"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="text"
          name="Description"
          id="Description"
          placeholder="Description"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="text"
          name="Author"
          id="Author"
          placeholder="Author"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="text"
          name="Status"
          id="Status"
          placeholder="Status"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="text"
          name="Price"
          id="Price"
          placeholder="Price"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="text"
          name="Offer Price"
          id="Offer Price"
          placeholder="Offer Price"
          className="border border-gray-400 py-2 px-3 rounded-md w-full text-black outline-none"
        />
        <input
          type="submit"
          value="Submit"
          id="Price"
          placeholder="Price"
          className="border bg-blue-500 py-2 px-3 rounded-md w-full font-bold outline-none"
        />
      </form>
    </div>
  );
}

export default AddbookForm;
