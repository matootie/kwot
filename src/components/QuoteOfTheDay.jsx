import { useEffect } from "react";
import { useQuoteByDate } from "./../util/api/index"


function GetQuoteOfTheDay(date){
    return useQuoteByDate(date)
}

function convertIntToDay(prev){
    let d = new Date();
    d.setDate(d.getDate() - prev);
    const date = d.toISOString().substr(0, 10)
    return date
}


export default function QuoteOfTheDay( { day } ){
    const dayF = convertIntToDay(day) 
    const { data, isFetching } = GetQuoteOfTheDay(dayF);

    useEffect(() => {
        if (!isFetching) {
          console.log(data);
        }
      }, [isFetching, data]);

    if (isFetching){
        return(<div></div>)
    } else {
        return(
            <div key={data}>
                <p>{data.data.data.user}</p>
            </div>
        )
    }
    
};