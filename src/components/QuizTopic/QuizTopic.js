import React from "react";
import "./QuizTopic.css";

const quizTopic = ({ quizTopic }) => {
  const { name, logo, total } = quizTopic;
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 custom-card">
      <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
          <p className="text-gray-800">Number of questions: {total}</p>
        </div>
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-gray-50 hover:text-orange-300">
          Read more
        </button>
      </div>
    </div>
  );
};

export default quizTopic;
