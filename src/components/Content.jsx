import { Link } from "react-router-dom";
import { FaPenNib, FaGavel } from "react-icons/fa";

// component
// import Quote from "./../components/Quote";

export default function Content({ qod, previousQods, className }) {
  function qotd() {
    return (
      <div className={`${className} flex flex-col mx-auto`}>
        {qod}
        <span className="my-12 text-gray-400 font-serif lowercase text-center">
          Previous quotes of the day...
        </span>
        {previousQods}
        <div className="fixed bottom-2 right-2 flex">
          <Link to="/submit">
            <FaGavel className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
          </Link>
          <Link to="/vote">
            <FaPenNib className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly h-1/2 mx-20 ">{qotd()}</div>
  );
}
