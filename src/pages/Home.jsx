import QuoteOfTheDay from "./../components/QuoteOfTheDay"

export default function Home() {

  function getQuoteOfTheDay(){
    return(
      <div key={1}>
        <QuoteOfTheDay day={1}/>
      </div>
    )
  };

  function getPreviousQuoteOfTheDay(){
    const items = [];
    for(let i = 2; i<=5; i++){
        items.push(
            <div key={i}>
                <QuoteOfTheDay day={i}/>
            </div>
        )
    }
    return items;
  };

  return (
    <div className="flex flex-col h-screen justify-evenly items-center">
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" />
      <div>
        <h1> QOTD</h1>
        {getQuoteOfTheDay()}
      </div>
      <div>
        <h4> previous QOTD</h4>
        {getPreviousQuoteOfTheDay()}
      </div>
    </div>
  );
}
