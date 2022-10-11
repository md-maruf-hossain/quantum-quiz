import React, { useState } from "react";
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const QuizQuestion = ({ quizTotalQuestion }) => {
  const { options, question, correctAnswer } = quizTotalQuestion;
    const [open, setopen] = useState(false);


  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
      <div className="flex justify-between pb-4 border-bottom">
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
            <h3 className="text-xl font-semibold"><span className="text-orange-500 font-bold">Question: </span>{question}</h3>
          <p className="leading-snug">
            <p className="text-orange-500 text-lg font-semibold">Options:</p>
            
            {
                options.map(option =>
                        <label>
                            <p className="mb-3 font-medium" >
                                <input  className="mr-2"  type="radio" name="name"/>
                                {option}
                            </p>
                        </label>
                    )
            }
          </p>
            <button className="flex justify-around" onClick={() => setopen(!open)}>
                <EyeSlashIcon className="h-6 w-6"/>
                <span>{open ? <p><span className="font-bold text-orange-400">Answer: </span><span className="font-bold">{correctAnswer}</span></p> : <p className="hidden"><span className="font-bold text-orange-400">Answer: </span><span className="font-bold">{correctAnswer}</span></p>}</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
