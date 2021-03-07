import { useEffect } from "react";
import { useQuoteByDate } from "./../util/api/index"


function convertIntToDay(prev) {
  let d = new Date();
  d.setDate(d.getDate() - prev);
  const date = d.toISOString().substr(0, 10)
  return date
}


export default function QuoteOfTheDay({ day }) {
  const dayF = convertIntToDay(day)
  const { data, isFetching } = useQuoteByDate(dayF);

  useEffect(() => {
    if (!isFetching) {
      console.log(data);
    }
  }, [isFetching, data]);

  if (isFetching) {
    return (<div></div>)
  } else {

    const d = data.data.data;
    if (!d) return (<></>)

    return (
      <div key={data} className="my-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-4xl font-serif">{dayF}</h3>
          <p className="text-gray-400 font-serif ml-5">@{d.user}</p>
        </div>
        <p className="text-gray-900 font-serif text-xl mb-8">"{d.quote ? d.quote : "bungers"}"</p>
        <hr />
      </div>
    )
  }
};