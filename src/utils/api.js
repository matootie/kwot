import { useQuery, useMutation } from "react-query"
import Cookies from "js-cookie"
import axios from "axios"


export function useQuote() {
  const token = Cookies.get("access-token")

  return useQuery(["get-quotes"], () => axios({
    method: "get",
    url: "https://philosopher.yoik.software/quotes",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }))
}

export function useVote() {
  const token = Cookies.get("access-token");

  return useMutation(vote => axios({
    method: "post",
    url: "https://philosopher.yoik.software/vote",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
      vote: vote,
    },
  }))
}