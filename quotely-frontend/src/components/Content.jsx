import { useState } from "react";

// component
import Quote from "./../components/Quote";

export default function Content() {
  const [content, setContent] = useState("qotd");

  const bg = "bg-yellow-500 ";

  const quote = "Pee is stored in the balls";
  const author = " - Albert Winston";
  const data = {
    votes: 100,
  };

  function qotd() {
    return (
      <div className="flex flex-col mx-auto justify-evenly">
        <div className="text-2xl text-center">🤔</div>
        <Quote quote={quote} author={author} data={data} />
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
        <div className="flex flex-col">
          <Quote quote={quote} author={author} data={data} />
          <Quote quote={quote} author={author} data={data} />
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
        <button
          className="rounded-md bg-indigo-400 my-3 px-10 py-4"
          onClick={() => setContent("qotd")}
        >
          {" "}
          View today's QOTD{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-1/2 mx-20 ">
      {content === "qotd" ? qotd() : vote()}
    </div>
  );
}
