import QuoteOfTheDay from "./../components/QuoteOfTheDay"
import Content from "./../components/Content"
import { FaPenNib, FaGavel } from "react-icons/fa"

export default function Home() {

  function getQuoteOfTheDay() {
    return (
      <div key={1}>
        <QuoteOfTheDay day={1} />
      </div>
    )
  };

  function getPreviousQuoteOfTheDay() {
    const items = [];
    for (let i = 2; i <= 5; i++) {
      items.push(
        <div key={i}>
          <QuoteOfTheDay day={i} />
        </div>
      )
    }
    return items;
  };

  return (
    <div className="flex flex-col justify-evenly items-center py-12">
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" />
      <Content
        qod={getQuoteOfTheDay()}
        previousQods={getPreviousQuoteOfTheDay()}
        className="mt-12"
      />
    </div>
  );
}
