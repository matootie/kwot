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
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly h-1/2 mx-20 ">
      <div className={`${className} flex flex-col mx-auto`}>
        {qod}
        <span className="my-12 text-gray-400 font-serif lowercase text-center">
          Previous quotes of the day...
        </span>
        {previousQods}
      </div>
    </div>
  );
}
