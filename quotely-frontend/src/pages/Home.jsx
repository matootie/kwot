import React from "react";

// components
import Content from "./../components/Content";


//set user context to accesstoken
export default function Home() {
  const bg = "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 ";
  return (
    <div className={bg + "flex flex-col h-screen justify-evenly"}>
      <div className="text-3xl text-center text-mono pt-3">Quotely</div>
      <Content />
    </div>
  );
}
