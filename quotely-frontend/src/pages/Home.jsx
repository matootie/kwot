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

  console.log(useSubmit("I am become death, destroyer of worlds...").data);

  return (
    <div className={bg + "flex flex-col h-screen justify-evenly"}>
      <div className="text-9xl text-center font-serif pt-3">"KWOT"</div>
      <Content />
    </div>
  );
}
