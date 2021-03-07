import Quote from "./../components/Quote";
export default function Vote() {
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
                    left={index % 2 === 1}
                    selectable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button className="font-serif lowercase text-gray-400 hover:underline mt-3 p-2">
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
    </div>
  );
}
