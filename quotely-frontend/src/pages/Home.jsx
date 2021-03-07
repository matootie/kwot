import { useEffect } from "react";

// components
import Content from "./../components/Content";

// data from query
import { usePing } from "./../util/api/";

//set user context to accesstoken

export default function Home() {
  const bg = "bg-white ";
  const { data, isFetching } = usePing();

  useEffect(() => {
    if (!isFetching) {
      console.log(data);
    }
  }, [isFetching, data]);

  // console.log(useSubmit("I am become death, destroyer of worlds...").data);

  return (
    <div className={bg + "flex flex-col h-screen justify-evenly items-center"}>
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" />
      <Content />
    </div>
  );
}
