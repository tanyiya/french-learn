
import React, { useState, useEffect, useMemo } from 'react';
import { NUMBERS_DATA } from '../constants';

type QuestionMode = 'wordToNum' | 'numToWord';

interface PracticeState {
  currentNum: number;
  mode: QuestionMode;
  options: (number | string)[];
  answered: boolean;
  selectedOption: number | string | null;
  isCorrect: boolean | null;
}

const Numbers: React.FC = () => {
  const [mastered, setMastered] = useState<Set<number>>(new Set());
  const [toReview, setToReview] = useState<number[]>([]);
  const [practice, setPractice] = useState<PracticeState | null>(null);

  // Initialize or generate a new question
  const generateQuestion = (forcedNum?: number) => {
    const allNums = Array.from({ length: 100 }, (_, i) => i + 1);
    const unmastered = allNums.filter(n => !mastered.has(n));
    
    let targetNum: number;
    
    if (forcedNum) {
      targetNum = forcedNum;
    } else if (toReview.length > 0 && Math.random() < 0.4) {
      // 40% chance to pick from review list if it's not empty
      const randomIndex = Math.floor(Math.random() * toReview.length);
      targetNum = toReview[randomIndex];
    } else if (unmastered.length > 0) {
      const randomIndex = Math.floor(Math.random() * unmastered.length);
      targetNum = unmastered[randomIndex];
    } else {
      // If all mastered, just pick any random
      targetNum = Math.floor(Math.random() * 100) + 1;
    }

    const mode: QuestionMode = Math.random() > 0.5 ? 'wordToNum' : 'numToWord';
    
    // Generate 3 distractors
    const distractors: number[] = [];
    while (distractors.length < 3) {
      const d = Math.floor(Math.random() * 100) + 1;
      if (d !== targetNum && !distractors.includes(d)) {
        distractors.push(d);
      }
    }

    const rawOptions = [...distractors, targetNum].sort(() => Math.random() - 0.5);
    const finalOptions = mode === 'wordToNum' ? rawOptions : rawOptions.map(n => NUMBERS_DATA[n]);

    setPractice({
      currentNum: targetNum,
      mode,
      options: finalOptions,
      answered: false,
      selectedOption: null,
      isCorrect: null,
    });
  };

  // Initial question load
  useEffect(() => {
    generateQuestion();
  }, []);

  const handleOptionClick = (option: number | string) => {
    if (!practice || practice.answered) return;

    const correctValue = practice.mode === 'wordToNum' 
      ? practice.currentNum 
      : NUMBERS_DATA[practice.currentNum];
    
    const isCorrect = option === correctValue;

    if (isCorrect) {
      setMastered(prev => new Set(prev).add(practice.currentNum));
      // Remove from review list if it was there
      setToReview(prev => prev.filter(n => n !== practice.currentNum));
    } else {
      // Add to review list if not already there
      if (!toReview.includes(practice.currentNum)) {
        setToReview(prev => [...prev, practice.currentNum]);
      }
    }

    setPractice(prev => prev ? {
      ...prev,
      answered: true,
      selectedOption: option,
      isCorrect: isCorrect
    } : null);
  };

  const handleNext = () => {
    generateQuestion();
  };

  const progressPercentage = (mastered.size / 100) * 100;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Number Mastery</h2>
        <p className="text-slate-600">
          Practice all numbers from 1 to 100. Correct answers move you forward, while mistakes are repeated until mastered.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Progress: {mastered.size}/100 Learned</span>
          <span className="text-sm font-medium text-blue-600">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.3)]"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        {toReview.length > 0 && (
          <p className="mt-3 text-xs text-orange-600 font-medium">
            ⚠️ {toReview.length} number{toReview.length > 1 ? 's' : ''} in the review list (prioritizing for practice).
          </p>
        )}
      </div>

      {/* Quiz Card */}
      {practice && (
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 mb-16 text-center">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4 block">
            {practice.mode === 'wordToNum' ? 'What is the numeric value of...' : 'How do you say this in French?'}
          </span>
          
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12">
            {practice.mode === 'wordToNum' ? NUMBERS_DATA[practice.currentNum] : practice.currentNum}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {practice.options.map((opt, idx) => {
              const correctValue = practice.mode === 'wordToNum' 
                ? practice.currentNum 
                : NUMBERS_DATA[practice.currentNum];
              
              const isSelected = practice.selectedOption === opt;
              const isCorrectOpt = opt === correctValue;
              
              let btnClass = "py-4 px-6 rounded-2xl border-2 font-bold text-lg transition-all duration-200 ";
              
              if (!practice.answered) {
                btnClass += "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50";
              } else {
                if (isCorrectOpt) {
                  btnClass += "bg-green-50 border-green-500 text-green-700 shadow-[0_0_15px_rgba(34,197,94,0.2)]";
                } else if (isSelected && !practice.isCorrect) {
                  btnClass += "bg-red-50 border-red-500 text-red-700 opacity-80";
                } else {
                  btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={practice.answered}
                  onClick={() => handleOptionClick(opt)}
                  className={btnClass}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {practice.answered && (
            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className={`text-lg font-bold mb-6 ${practice.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {practice.isCorrect ? '✨ Excellent !' : `Incorrect. The answer is ${practice.mode === 'wordToNum' ? practice.currentNum : NUMBERS_DATA[practice.currentNum]}`}
              </p>
              <button
                onClick={handleNext}
                className="bg-slate-900 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200"
              >
                Next Number →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Reference Toggle Section */}
      <details className="group">
        <summary className="flex items-center justify-between p-4 bg-slate-100 rounded-xl cursor-pointer list-none hover:bg-slate-200 transition-colors">
          <span className="font-bold text-slate-700">Show Full Reference List (1-100)</span>
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div className="bg-white p-8 rounded-b-2xl shadow-sm border-x border-b border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(NUMBERS_DATA).map(([num, french]) => (
              <div key={num} className={`p-3 rounded-lg flex flex-col items-center justify-center border transition-all ${mastered.has(parseInt(num)) ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'}`}>
                <span className="text-xs text-slate-400 font-mono mb-1">{num}</span>
                <span className={`font-bold text-sm text-center ${mastered.has(parseInt(num)) ? 'text-green-700' : 'text-slate-800'}`}>{french}</span>
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};

export default Numbers;
