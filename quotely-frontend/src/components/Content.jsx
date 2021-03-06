import { useState } from "react";

export default function Content() {
  const [content, setContent] = useState("qotd");

  const bg = "bg-yellow-500 ";

  function qotd() {
    return (
      <div className="flex flex-col mx-auto justify-evenly">
        <div className="text-2xl text-center">🤔</div>
        <div className="bg-yellow-500 rounded-md p-16 my-3">
          <div className="text-2xl">Pee is stored in the balls</div>
          <div> - Albert Winston</div>
        </div>
        <button
          className="rounded-md bg-indigo-400 my-3 px-10 py-4"
          onClick={() => setContent("vote")}
        >
          Vote on Tomorrow's Quote!
        </button>
      </div>
    );
  }

  function vote() {
    return (
      <div className="rounded-md shadow mx-auto p-16">
        <div className="text-2xl">Pee is stored in the balls</div>
        <div> - Albert Winston</div>
      </div>
    );
  }

  return (
    <div className="flex h-1/2 mx-20 ">
      {content === "qotd" ? qotd() : vote()}
    </div>
  );
}
