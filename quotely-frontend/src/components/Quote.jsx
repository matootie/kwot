import React, { useState } from "react";

export default function Quote({ quote, author, data, selectable }) {
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    if (selectable) {
      console.log(selected);
      setSelected(true);
    }
  }

  return (
    <div>
      <button
        className={`bg-yellow-500 rounded-md p-16 my-3 ${
          selected ? " border-black" : ""
        }`}
        onClick={() => handleSelect()}
      >
        <div className="text-2xl">{quote}</div>
        <div>{author}</div>
      </button>
    </div>
  );
}
