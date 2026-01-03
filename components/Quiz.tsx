
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, title }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<{ [key: string]: boolean | null }>({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setResults(prev => ({ ...prev, [id]: null }));
  };

  const checkAnswers = () => {
    const newResults: { [key: string]: boolean } = {};
    questions.forEach(q => {
      newResults[q.id] = answers[q.id]?.trim().toLowerCase() === q.correctAnswer.toLowerCase();
    });
    setResults(newResults);
    setShowResults(true);
  };

  const reset = () => {
    setAnswers({});
    setResults({});
    setShowResults(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-6 text-slate-800">{title}</h3>
      <div className="space-y-8">
        {questions.map((q, idx) => (
          <div key={q.id} className="space-y-3">
            <p className="font-medium text-slate-700">
              {idx + 1}. {q.question}
            </p>
            
            {q.type === 'multiple-choice' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleInputChange(q.id, opt)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      answers[q.id] === opt
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                placeholder="Type your answer here..."
                value={answers[q.id] || ''}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                  results[q.id] === true ? 'border-green-500 ring-green-100 bg-green-50' :
                  results[q.id] === false ? 'border-red-500 ring-red-100 bg-red-50' :
                  'border-slate-300 focus:ring-blue-100 focus:border-blue-500'
                }`}
              />
            )}

            {showResults && results[q.id] !== null && (
              <div className={`text-sm font-semibold flex items-center gap-2 ${results[q.id] ? 'text-green-600' : 'text-red-600'}`}>
                {results[q.id] ? (
                  <><span>✓</span> Correct!</>
                ) : (
                  <><span>✗</span> Incorrect. The correct answer is: <span className="italic">{q.correctAnswer}</span></>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={checkAnswers}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Check Answers
        </button>
        <button
          onClick={reset}
          className="text-slate-600 px-6 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Quiz;
