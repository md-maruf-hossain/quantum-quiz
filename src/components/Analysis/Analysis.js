import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const dataOfQuiz = [
  {
    name: "React",
    quiz: 8,
  },
  {
    name: "javascript",
    quiz: 9,
  },
  {
    name: "CSS",
    quiz: 8,
  },
  {
    name: "Git",
    quiz: 11,
  },
];

const Analysis = () => {
  const analysisData = useLoaderData();
  const analysisOfquiz = analysisData.data;
  console.log(analysisOfquiz[0].total);
  return (
    <div className="">
      <h2 className="text-center text-3xl my-5 font-bold">Data analysis of Quiz</h2>
      <BarChart
        width={300}
        height={400}
        data={dataOfQuiz}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Number of Quiz" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quiz" fill="#FFA000" />
      </BarChart>
    </div>
  );
};

export default Analysis;
