import axios from "axios"
import { useQuery, useMutation } from "react-query"

import { getAccessTokenCookie } from "./auth"


export function useQuoteByDate(date) {
  return useQuery(["get-quotes-day", date], () => axios({
    method: "get",
    url: `https://philosopher.yoik.software/qod?date=${date}`,
  }))
}

export function useQuote() {
  const token = getAccessTokenCookie()

  return useQuery(["get-quotes"], () => axios({
    method: "get",
    url: "https://philosopher.yoik.software/quotes",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }))
}

export function useVoted() {
  const token = getAccessTokenCookie()

  return useQuery(["check-voted"], () => axios({
    method: "get",
    "url": "https://philosopher.yoik.software/voted",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }), { cacheTime: 0 })
}

export function useVote() {
  const token = getAccessTokenCookie()

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

export function useSubmit() {
  const token = getAccessTokenCookie()

  return useMutation(quote => axios({
    method: "post",
    url: "https://philosopher.yoik.software/submit",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    data: {
      quote: quote
    }
  }))
}
