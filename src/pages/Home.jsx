import { Link } from "react-router-dom"
import { FaPenNib, FaGavel } from "react-icons/fa"
import { HiArrowDown } from "react-icons/hi"

import { useVoted } from "../utils/api"

import Loading from "../components/Loading"
import QuoteOfTheDay from "./../components/QuoteOfTheDay";


export default function Home() {

  const voted = useVoted()

  if (voted.isLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    )
  }

  const hasVoted = voted.data.status === 202

  function getQuoteOfTheDay() {
    return (
      <div key={1}>
        <QuoteOfTheDay day={1} />
      </div>
    )
  }

  function getPreviousQuoteOfTheDay() {
    const items = [];
    for (let i = 2; i <= 5; i++) {
      items.push(
        <div key={i}>
          <QuoteOfTheDay day={i} />
        </div>
      )
    }
    return items
  }

  return (
    <div className="flex flex-col justify-evenly items-center py-12">

      {/* Header image. */}
      <img
        className="w-64 h-64 transform -rotate-3"
        src="/Kwot_App.png"
        alt="Kwot Logo"
      />

      {/* Content. */}
      <div className="flex flex-col justify-evenly h-1/2 mx-20 ">
        <div className="mt-12 flex flex-col mx-auto">
          {getQuoteOfTheDay()}
          <span className="my-12 text-gray-400 font-serif lowercase text-center">
            Previous quotes of the day...
        </span>
          {getPreviousQuoteOfTheDay()}
        </div>
      </div>

      {/* Navigation buttons. */}
      <div className="fixed bottom-2 right-2 flex">
        {
          hasVoted ? (
            <div>
              <FaPenNib className="h-6 w-6 text-gray-300 m-2" />
            </div>
          ) : (
            <Link className="group" to="/submit">
              <FaPenNib className="h-6 w-6 text-gray-500 m-2 group-hover:text-gray-700" />
              <HiArrowDown className="absolute -top-2 left-2 animate-bounce w-6 h-6 text-gray-800" />
            </Link>
          )}
        <Link to="/vote">
          <FaGavel className="h-6 w-6 text-gray-500 m-2 hover:text-gray-700" />
        </Link>
      </div>

    </div>
  )
}
