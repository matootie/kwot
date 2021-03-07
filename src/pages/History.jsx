import React from 'react'
import QuoteOfTheDay from "./../components/QuoteOfTheDay"



export default function History() {
    function getQuotesOfPrevDay(){
        const items = [];
        for(let i = 1; i<=5; i++){
            items.push(
                <div key={i}>
                    <QuoteOfTheDay day={i}/>
                </div>
            )
        }
        return items;
    }

    return (
        <div>
            {getQuotesOfPrevDay()}
        </div>
    )
}
