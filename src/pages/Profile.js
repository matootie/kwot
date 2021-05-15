import ApplicationShell from "components/ApplicationShell"
import { useAuthor } from "utils/api/authors"
import { useQuotesFromAuthor } from "utils/api/quotes"
import Loading from "components/Loading"

export default function Profile(props) {

  const nickname = props.match.params.nickname

  const profileData = useAuthor(nickname)
  const quotesData = useQuotesFromAuthor(nickname)

  if (profileData.isLoading) {
    return <Loading />
  }

  if (profileData.error) {
    return <div>Something went wrong...</div>
  }

  function renderQuotes() {
    if (quotesData.isLoading) {
      return <Loading />
    }
    if (quotesData.error) {
      return <div>Something went wrong...</div>
    }
    if (quotesData.data.status === 403) {
      return <div>{quotesData.data.message}</div>
    }
    return (
      <ul>
        {quotesData.data.data.map(quote => (
          <li key={quote.id} className="p-4">
            <div className="flex space-x-3 border border-black p-4 rounded-xl border-opacity-5 shadow">
              <div className="flex-1">
                <div className="flex flex-col items-center justify-between space-y-4">
                  <h3 className="text-lg font-medium self-start">{quote.body}</h3>
                  <p className="text-sm text-gray-500 self-end">{new Date(quote.published).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ApplicationShell>
      <article>
        <div>
          <div className="h-32 lg:h-48 bg-gray-100">
            {/* <img className="h-32 w-full object-cover lg:h-48" src={} alt="" /> */}
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={profileData.data.data.picture}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">{profileData.data.data.nickname}</h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <span>Add Friend</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md my-16 mx-auto">
          {renderQuotes()}
        </div>
      </article>
    </ApplicationShell>
  )
}
