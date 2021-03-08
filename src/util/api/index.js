import axios from "axios";
import { useMutation, useQuery } from "react-query";
import Cookies from "js-cookie";

export function usePing() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useQuery(["ping"], async () => {
    const { data } = await axios.get("https://philosopher.yoik.software/ping", {
      headers: {
        Authorization: fullToken,
      },
    });
    return data;
  });
}

export function useQuoteByDate(date) {
  return useQuery(["quoteDay", date], async () => {
    const data = await axios.get(
      `https://philosopher.yoik.software/qod?date=${date}`
    );
    return data;
  });
}

export function useQuote() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useQuery(["quote"], async () => {
    const data = await axios.get("https://philosopher.yoik.software/quotes", {
      headers: {
        Authorization: fullToken,
      }
    });
    return data;
  });
}

export async function getQuotes() {
  const token = Cookies.get("access-token")

  const response = await axios.get(
    "https://philosopher.yoik.software/quotes",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  )

  return response
}

export function useVote() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useMutation(async (vote) => {
    const data = await fetch("https://philosopher.yoik.software/vote", {
      method: "POST",
      headers: {
        Authorization: fullToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: vote,
      }),
    });
    return data;
  });
}

export function useSubmit() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useMutation(async (quote) => {
    const data = await fetch("https://philosopher.yoik.software/submit", {
      method: "POST",
      headers: {
        Authorization: fullToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quote: quote,
      }),
    });
    return data;
  });
}
