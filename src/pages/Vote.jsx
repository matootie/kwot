import Quote from "./../components/Quote";
import { useQuote } from "./../util/api/";
import { Link } from "react-router-dom";
import { FaPenNib, FaBook } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Vote() {
  const { data, status } = useQuote();
  const history = useHistory();

  function allQuotes() {
    // console.log(data);
    if (status === "success" && data) {
      return data.data.data;
    }
  }

  function handleSkip() {
    history.go(0);
  }

  function vote() {
    return (
      <div className="flex flex-col justify-between items-center rounded-md mx-auto p-16">
        <div className="flex flex-row justify-evenly">
          {status === "success" &&
            allQuotes().map((item, index) => {
              return (
                <div className="flex flex-col justify-between" key={index}>
                  <div className="">
                    <Quote
                      quote={item}
                      left={index % 2 === 1}
                      selectable={false}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="font-serif lowercase text-gray-400 hover:underline mt-3 p-2"
          onClick={() => handleSkip()}
        >
          Skip the vote
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly items-center h-1/2 mx-20 ">
      <img
        className="w-64 h-64 transform -rotate-3"
        src="/Kwot_App.png"
        alt="Kwot Logo"
      />
      {vote()}
      <div className="fixed bottom-2 right-2 flex">
        <Link to="/submit">
          <FaPenNib className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
        </Link>
        <Link to="/">
          <FaBook className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
        </Link>
      </div>
    </div>
  );
}
