import React from "react";
import { Th, Td } from "../../Utils/utils";

function Datatab({ book }) {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="bg-gray-200/30">
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Author</Th>
            <Th>Status</Th>
            <Th>Price</Th>
            <Th>Offer Price</Th>
          </tr>
        </thead>
        <tbody>
          {book.map((book) => (
            <tr key={book.id}>
              <Td>{book.name}</Td>
              <Td>{book.description}</Td>
              <Td>{book.author}</Td>
              <Td>{book.status}</Td>
              <Td>{book.price}</Td>
              <Td>{book.offerPrice}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatab;
