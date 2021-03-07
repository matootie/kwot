import { useVote } from "./../util/api/";

export default function Quote({ quote, author, data, selectable, left }) {
  // const [selected, setSelected] = useState(false);
  const vote = useVote();

  function handleSelect() {
    if (left) {
      vote.mutate(0);
    } else {
      vote.mutate(1);
    }
    console.log(vote);
  }

  return (
    <div>
      <button
        className={`${
          left ? "rotate-3" : "-rotate-3"
        } relative z-0 hover:z-10 transform bg-white transition hover:rotate-0 hover:scale-110 hover:-translate-y-2 shadow-md ring-1 ring-black ring-opacity-5 rounded-md p-4 my-3 h-96 w-64 flex flex-col justify-between text-left font-serif overflow-scroll`}
        onClick={() => handleSelect()}
      >
        <p className="text-2xl">"{quote}"</p>
      </button>
    </div>
  );
}
