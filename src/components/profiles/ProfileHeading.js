import { useState } from "react"

export default function ProfileHeading({ picture, username, relationship }) {

  const [status, setStatus] = useState(relationship)

  function sendFriendRequest() {
    // Send the actual request.
    setStatus(1)
  }

  function renderButton() {
    switch (status) {
      case 1:
        return (
          <span
            className="inline-flex justify-center px-4 py-2 border border-blue-300 shadow-sm text-sm font-medium rounded-md text-gray-50 bg-blue-400"
          >
            <span>Request sent</span>
          </span>
        )
      case 2:
        return (
          <span
            className="inline-flex justify-center px-4 py-2 border border-green-500 shadow-sm text-sm font-medium rounded-md text-gray-50 bg-green-500"
          >
            <span>Friends</span>
          </span>
        )
      case 4:
        return (
          <span
            className="inline-flex justify-center px-4 py-2 border border-red-500 bg-red-400 shadow-sm text-sm font-medium rounded-md text-gray-50"
          >
            <span>Blocked</span>
          </span>
        )
      case 5:
        return (
          <span
            type="button"
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white"
          >
            <span>It's You!</span>
          </span>
        )
      default:
        return (
          <button
            type="button"
            onClick={sendFriendRequest}
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            <span>Add Friend</span>
          </button>
        )
    }
  }

  return (
    <div>
      <div className="h-32 lg:h-48 bg-gray-100">
        {/* <img className="h-32 w-full object-cover lg:h-48" src={} alt="" /> */}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={picture}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{username}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {renderButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}