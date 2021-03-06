import React from "react";

export default function Quote({ quote, author, data }) {
  console.log(data);
  return (
    <div>
      <div className="bg-yellow-500 rounded-md p-16 my-3">
        <div className="text-2xl">{quote}</div>
        <div>{author}</div>
      </div>
    </div>
  );
}
