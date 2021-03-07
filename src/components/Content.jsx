import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPenNib, FaBook } from "react-icons/fa"

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
          className="rounded-md bg-gray-100 transition duration-300 shadow-md hover:shadow-xl my-3 px-10 py-4"
          onClick={() => setContent("vote")}
        >
          Vote on Tomorrow's KWOT!
        </button>
      </div>
    );
  }

  function vote() {
    return (
      <div className="flex flex-col justify-between items-center rounded-md mx-auto p-16">
        <div className="flex flex-row justify-evenly">
          {allQuotes().map((item, index) => {
            return (
              <div className="flex flex-col justify-between" key={index}>
                <div className="">
                  <Quote
                    quote={item.quote}
                    author={item.author}
                    data={item.data}
                    left={index % 2 == 1}
                    selectable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button className="font-serif lowercase text-gray-400 hover:underline mt-3 p-2">Skip the vote</button>
        <div className="absolute bottom-2 right-2 flex">
          <button><FaPenNib className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" /></button>
          <button><FaBook className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly h-1/2 mx-20 ">
      {content === "qotd" ? qotd() : vote()}
    </div>
  );
}
