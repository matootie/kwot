// import { useEffect } from "react";
import axios from "axios";

// components
import Content from "./../components/Content";

// data from query
import { usePing } from "./../util/api/";

//set user context to accesstoken

export default function Home() {
  const bg = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ";
  const fullToken = "Bearer ".concat("Le1m8bf8Wu1gebMcaVyMvaaPBnb2nl");
  // const { data, isFetching } = usePing();

  // useEffect(() => {
  //   console.log(data);
  // }, [isFetching]);

  console.log(
    axios.get("https://philosopher.yoik.software/ping", {
      headers: {
        Authorization: fullToken,
      },
    })
  );

  return (
    <div className={bg + "flex flex-col h-screen justify-evenly"}>
      <div className="text-9xl text-center font-serif pt-3">"KWOT"</div>
      <Content />
    </div>
  );
}
