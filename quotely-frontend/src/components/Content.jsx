import { useState } from "react";
import { Link } from "react-router-dom";

// component
import Quote from "./../components/Quote";

export default function Content() {
  const [content, setContent] = useState("qotd");

  // const bg = "bg-yellow-500 ";

  const quote = "Pee is stored in the balls";
  const author = " - Albert Winston";
  const data = {
    votes: 100,
  };

  function allQuotes() {
    return [
      {
        quote: quote,
        author: author,
        data: data,
      },
      {
        quote: quote,
        author: author,
        data: data,
      },
    ];
  }

  function qotd() {
    return (
      <div className="flex flex-col mx-auto justify-evenly">
        <div className="text-2xl text-center">🤔</div>
        <Quote quote={quote} author={author} data={data} />
        <button
          className="rounded-md bg-indigo-400 my-3 px-10 py-4"
          onClick={() => setContent("vote")}
        >
          Vote on Tomorrow's KWOT!
        </button>
      </div>
    );
  }

  function vote() {
    return (
      <div className="flex flex-col justify-between rounded-md shadow mx-auto p-16">
        <div className="text-2xl text-center">📩</div>

        <div className="flex flex-row justify-evenly">
          {allQuotes().map((item) => {
            return (
              <div className="flex flex-col justify-between">
                <div className="m-5">
                  <Quote
                    quote={item.quote}
                    author={item.author}
                    data={item.data}
                    selectable={true}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="rounded-md bg-indigo-400 mx-auto my-3 px-10 py-4"
          onClick={() => setContent("qotd")}
        >
          View today's KWOT
        </button>
        <Link
          className="rounded-md bg-indigo-400 mx-auto my-3 px-10 py-4"
          to="/history"
        >
          View past KWOTs
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly h-1/2 mx-20 ">
      {content === "qotd" ? qotd() : vote()}
    </div>
  );
}
