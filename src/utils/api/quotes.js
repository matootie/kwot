import axios from "axios"
import { useQuery } from "react-query"
import { useAuth0 } from "@auth0/auth0-react"

const BASE_URL = "https://api.kwot.io/beta"

export function useQuotesFromAuthor(nickname, offset=0, count=10) {
  const { getAccessTokenSilently } = useAuth0()
  return useQuery(["get-quotes-user", nickname], async () => {
    const token = await getAccessTokenSilently({ audience: "philosopher" })
    let response
    try {
      response = await axios({
        method: "GET",
        url: `${BASE_URL}/authors/${nickname}/quotes?offset=${offset}&count=${count}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      return {
        status: error.response.status,
        ...error.response.data
      }
    }
    return {
      status: response.status,
      ...response.data
    }
  })
}
