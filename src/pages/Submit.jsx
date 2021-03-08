import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi"

import Loading from "../components/Loading"
import { useVoted, useSubmit } from "../utils/api"

export default function Submit() {
  const [quote, setQuote] = useState("")
  const history = useHistory()
  const submit = useSubmit()
  const voted = useVoted()

  if (voted.isLoading) {
    return (
      <div className="w-screen h-screen"><Loading /></div>
    )
  }

  if (submit.isLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    )
  } else if (submit.isError) {
    return (
      <div className="h-screen w-screen p-8 flex justify-center items-center">
        <h2>There was an error with your submission.</h2>
      </div>
    )
  } else if (submit.isSuccess || voted.data.status === 202) {
    return (
      <div className="h-screen w-screen p-8 flex flex-col justify-center items-center">
        <h2 className="font-serif text-3xl text-center mb-3">Your submission has been received!</h2>
        <Link className="font-serif underline hover:text-gray-700" to="/vote">On to voting</Link>
      </div>
    )
  } else {
    return (
      <div className="h-screen w-screen p-8 flex flex-col">
        <textarea
          name="text"
          wrap="soft"
          className="h-full w-full font-serif rounded-md mx-auto text-6xl p-5 focus:outline-none"
          placeholder="Write your original quote here..."
          value={quote}
          onChange={e => setQuote(e.target.value)}
        ></textarea>
        <div className="flex flex-row p-8 justify-between">
          <button
            className="text-3xl font-serif text-gray-400 hover:text-red-500"
            onClick={history.goBack}
          >
            Cancel
          </button>
          <button
            className="text-3xl font-serif text-gray-900 group flex items-end"
            onClick={() => submit.mutate(quote)}
          >
            <span className="group-hover:text-green-600 transition-colors">Kwot</span><HiArrowRight className="h-6 w-6 mb-1 text-gray-800 transform group-hover:translate-x-2 transition group-hover:text-green-600" />
          </button>
        </div>
      </div>
    )
  }
}
