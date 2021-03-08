import { Link } from "react-router-dom"
import { HiOutlineExclamationCircle } from "react-icons/hi"
import { FaPenNib, FaBook } from "react-icons/fa"

import { useQuote, useVote } from "../utils/api"

import Quote from "../components/Quote"


export default function Vote() {

  const quotes = useQuote()
  const votes = useVote()

  function votingModule() {
    if (votes.isLoading) {
      // The vote is being processed, show a loading screen.
      return (
        <>
          <div className="flex flex-row justify-center">
            <h2 className="text-xl font-serif text-gray-400">Processing your vote...</h2>
          </div>
        </>
      )
    } else if (votes.isError) {
      // The vote has run into an error, show an error screen.
      console.log(votes)
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <HiOutlineExclamationCircle className="w-12 h-12 text-red-500" />
            <h2 className="text-3xl font-serif text-gray-700 text-center my-3">There was a problem with your vote!</h2>
            <h2 className="text-xl font-serif text-gray-400 text-center">Try again later</h2>
          </div>
        </>
      )
    } else if (votes.isSuccess) {
      // The vote has succeeded. Reset the vote mutation and refetch quotes.
      votes.reset()
      quotes.remove()
      return quotes.refetch()
    } else if (quotes.isLoading) {
      // Quotes are loading, show a loading screen.
      return (
        <>
          <div className="flex flex-row justify-center">
            <h2 className="text-xl font-serif text-gray-400">Loading some fresh quotes...</h2>
          </div>
        </>
      )
    } else if (quotes.isError) {
      // Fetching quotes has run into an error, show an error screen.
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <HiOutlineExclamationCircle className="w-12 h-12 text-gray-600" />
            <h2 className="text-3xl font-serif text-gray-700 text-center my-3">No quotes for you yet!</h2>
            <h2 className="text-xl font-serif text-gray-400 text-center">Come back later when more people have submitted quotes</h2>
          </div>
        </>
      )
    } else {
      // Everything is good, display the data.
      return (
        <>
          <div className="flex flex-row justify-evenly">
            {quotes.data.data.data.map((quote, index) => (
              <div className="flex flex-col justify-between" key={index}>
                <button className="" onClick={() => votes.mutate(index)}>
                  <Quote
                    quote={quote}
                    left={index % 2 === 1}
                  />
                </button>
              </div>
            ))}
          </div>
          <button className="font-serif lowercase text-gray-400 hover:underline mt-3 p-2" onClick={() => votes.mutate(2)}>
            Skip the vote
          </button>
        </>
      )
    }
  }

  // Show quotes screen.
  return (
    <div className="flex flex-col justify-evenly items-center h-1/2 mx-20 ">

      {/* App icon header. */}
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" alt="Kwot Logo" />

      {/* Voting module. */}
      <div className="flex flex-col justify-between items-center rounded-md mx-auto p-16">
        {votingModule()}
      </div>

      {/* Navigation buttons. */}
      <div className="fixed bottom-2 right-2 flex">
        <Link to="/submit">
          <FaPenNib className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
        </Link>
        <Link to="/">
          <FaBook className="h-6 w-6 text-gray-400 m-2 hover:text-gray-700" />
        </Link>
      </div>
    </div>
  )
}
