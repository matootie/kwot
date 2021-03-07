import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useSubmit } from "./../util/api/";

export default function Submit() {
  const [quote, setQuote] = useState("");
  const history = useHistory();
  //   const [submitQuote, setSubmitQuote] = useState("")
  //   const [loading, setLoading] = useState(false)
  //   const {data, isLoading, isError} = useSubmit(submitQuote);

  function handleSubmit() {
    // while(isLoading){
    //     setLoading(true)
    // }
    // if(!isError && data === ""){
    //     setLoading(false)
    //     setSucces(true)
    // }
    console.log();
  }

  function handleBack() {
    history.push("/");
  }

  return (
    <div className="bg-white h-screen flex flex-col justify-evenly">
      <textarea
        name="text"
        wrap="soft"
        className="h-1/2 w-1/2 rounded-md mx-auto text-6xl py-24 px-5 bg-gray-100 hover:bg-gray-200 hover:shadow-md focus:bg-white focus:shadow-xl transition duration-300"
        placeholder='"Write something here..."'
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      ></textarea>
      <div className="flex flex-row justify-evenly">
        <button
          className="bg-white text-3xl text-gray-400"
          onClick={() => handleBack()}
        >
          Back
        </button>
        <button
          className="bg-white text-3xl transition duration-300 hover:text-4xl"
          onClick={() => handleSubmit()}
        >
          Kwot &#8594;
        </button>
      </div>
    </div>
  );
}
