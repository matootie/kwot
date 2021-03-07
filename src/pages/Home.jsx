import { useEffect } from "react";

// components
import Content from "./../components/Content";

// data from query
import { usePing, useSubmit } from "./../util/api/";

//set user context to accesstoken

export default function Home() {
  const bg = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ";
  const { data, isFetching } = usePing();

  useEffect(() => {
    if (!isFetching) {
      console.log(data);
    }
  }, [isFetching, data]);

  return (
    <div className={bg + "flex flex-col h-screen justify-evenly items-center"}>
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" />
      <Content />
    </div>
  );
}
