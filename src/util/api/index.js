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
  return useQuery(["quote", date], async () => {
    const data = await axios.get(
      `https://philosopher.yoik.software/qod?date=${date}`
    );
    return data;
  });
}

export function useQuotes() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useQuery([], async () => {
    const { data } = await axios.get(
      "https://philosopher.yoik.software/quotes",
      {
        headers: {
          Authorization: fullToken,
        },
      }
    );
    return data;
  });
}

export function useVote(vote) {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useQuery(["vote", vote], async () => {
    const { data } = await axios.post(
      "https://philosopher.yoik.software/vote",
      {
        headers: {
          Authorization: fullToken,
          "Content-Type": "application/json",
        },
        data: {
          vote: vote,
        },
      }
    );
    return data;
  });
}

// export function useSubmit(quote) {
//   const token = Cookies.get("access-token");
//   const fullToken = "Bearer ".concat(token);
//   return useQuery(["submit", quote], async () => {
//     const data = await axios.post("https://philosopher.yoik.software/submit", {
//       headers: {
//         Authorization: fullToken,
//         "Content-Type": "application/json",
//       },
//       data: {
//         quote: quote,
//       },
//     });
//     return data;
//   });
// }

export function useSubmit() {
  const token = Cookies.get("access-token");
  const fullToken = "Bearer ".concat(token);
  return useMutation(async (quote) => {
    const { data } = await axios.post(
      "https://philosopher.yoik.software/submit",
      {
        headers: {
          Authorization: fullToken,
          "Content-Type": "application/json",
        },
        data: {
          quote: quote,
        },
      }
    );
    return data;
  });
}
