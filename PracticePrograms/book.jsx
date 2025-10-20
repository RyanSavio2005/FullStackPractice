import React from "react";

function Parent() {
  const bookTitle = "The Alchemist";
  const bookAuthor = "Paulo Coelho";

  return (
    <div>
      <h2>Book Information</h2>
      {/* Passing props to child */}
      <Book title={bookTitle} author={bookAuthor} />
    </div>
  );
}

function Book(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>by {props.author}</p>
    </div>
  );
}

export default Parent;