import { useQuotesFromAuthor } from "utils/api/quotes"
import Loading from "components/util/Loading"

export default function ProfileQuotes({ username }) {
  const { isLoading, error, data } = useQuotesFromAuthor(username)

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <div>Something went wrong...</div>
  }
  if (data.status === 403) {
    return <div>{data.message}</div>
  }
  if (data.result.length <= 0) {
    return <div>This user has not submitted any quotes.</div>
  }
  return (
    <ul>
      {data.result.map(quote => (
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
