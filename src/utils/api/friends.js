import axios from "axios"
import { useQuery } from "react-query"
import { useAuth0 } from "@auth0/auth0-react"

const BASE_URL = "https://api.kwot.io/beta"

export function useRelationship(nickname) {
  const { getAccessTokenSilently } = useAuth0()
  return useQuery(["get-relationship", nickname], async () => {
    const token = await getAccessTokenSilently({ audience: "philosopher" })
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}/authors/${nickname}/@me`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return {
      status: response.status,
      ...response.data
    }
  })
}
