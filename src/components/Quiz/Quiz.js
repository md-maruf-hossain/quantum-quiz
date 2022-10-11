import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const questions = useLoaderData();
    
    const quizTotalQuestions = questions.data.questions
    return (
        <div>
            <h2 className='mt-10 text-center text-3xl'>Quiz Topic: <span className='text-orange-600 font-bold'>{questions.data.name}</span></h2>
            <h2 className='mb-10 text-center text-3xl font-bold'>Total Questions: {quizTotalQuestions.length}</h2>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-items-center gap-5 rounded-lg'>
                {
                    quizTotalQuestions.map(quizTotalQuestion => <QuizQuestion
                        key={questions.data.id}
                        quizTotalQuestion = {quizTotalQuestion}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;