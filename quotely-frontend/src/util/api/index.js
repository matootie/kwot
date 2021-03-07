import axios from "axios";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

export function usePing() {
  //   const token = Cookies.get("access-token");
  //   console.log(token);
  const fullToken = "Bearer ".concat("Le1m8bf8Wu1gebMcaVyMvaaPBnb2nl");
  return useQuery(["ping"], async () => {
    const data = await axios.get("https://philosopher.yoik.software/ping", {
      headers: {
        Authorization: fullToken,
      },
    });
    return data;
  });
}

export function useQuoteByDate(date) {
  return useQuery(["quote", date], async () => {
    const { data } = await axios.get(
      `https://philosopher.yoik.software/qod?date=${date}`
    );
    return data;
  });
}
