import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSubmit } from "./../util/api/";

export default function Submit() {
  const [quote, setQuote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const submit = useSubmit();
  const { data, isLoading } = submit;

  //   const [submitQuote, setSubmitQuote] = useState("")
  //   const [loading, setLoading] = useState(false)
  //   const {data, isLoading, isError} = useSubmit(submitQuote);

  useEffect(() => {
    if (data && data.status === 204) {
      setSubmitted(true);
    }
  }, [data]);

  function handleSubmit() {
    submit.mutate(quote);
    if (isLoading) {
      console.log("Loading...");
    }
    if (data && (data.status === 204 || data.status === 201)) {
      setSubmitted(true);
      history.push("/vote/:submitted");
    }
  }

  function handleBack() {
    history.push("/");
  }

  return (
    <div className="bg-white h-screen flex flex-col justify-evenly">
      <div className="flex flex-col items-center">
        <img
          className="w-64 h-64 transform -rotate-3 border-green-600"
          src="/Kwot_App.png"
          alt="Kwot Logo"
        />
      </div>
      {submitted && (
        <div className="text-center my-5">
          Thanks for submitting a quote today!
        </div>
      )}
      <textarea
        name="text"
        wrap="soft"
        className="h-1/3 w-1/2 rounded-md mx-auto text-center text-6xl py-24 px-5 bg-gray-100 hover:bg-gray-200 hover:shadow-md focus:bg-white focus:shadow-xl transition duration-300"
        placeholder={
          submitted
            ? "You have already made a submission for today!"
            : '"Write something here..."'
        }
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        disabled={submitted}
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
