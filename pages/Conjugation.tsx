
import React from 'react';
import { ER_VERBS, IR_VERBS, IRREGULAR_VERBS } from '../constants';
import { VerbConjugation, QuizQuestion } from '../types';
import Quiz from '../components/Quiz';

const VerbTable: React.FC<{ data: VerbConjugation }> = ({ data }) => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <div className="bg-slate-50 p-4 border-b">
      <h4 className="text-lg font-bold text-blue-700">{data.verb}</h4>
      <p className="text-slate-500 text-sm italic">Translation: {data.translation}</p>
    </div>
    <div className="p-4 grid grid-cols-2 gap-4 text-sm">
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">je</span>
        <span className="font-bold text-slate-800">{data.forms.je}</span>
      </div>
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">nous</span>
        <span className="font-bold text-slate-800">{data.forms.nous}</span>
      </div>
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">tu</span>
        <span className="font-bold text-slate-800">{data.forms.tu}</span>
      </div>
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">vous</span>
        <span className="font-bold text-slate-800">{data.forms.vous}</span>
      </div>
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">il/elle/on</span>
        <span className="font-bold text-slate-800">{data.forms.il_elle_on}</span>
      </div>
      <div className="flex justify-between border-b pb-1">
        <span className="text-slate-500">ils/elles</span>
        <span className="font-bold text-slate-800">{data.forms.ils_elles}</span>
      </div>
    </div>
  </div>
);

const conjugationQuiz: QuizQuestion[] = [
  { 
    id: 'q1', 
    type: 'multiple-choice', 
    question: 'Je _____ (parler) français.', 
    correctAnswer: 'parle', 
    options: ['parle', 'parles', 'parlons', 'parlent'] 
  },
  { 
    id: 'q2', 
    type: 'multiple-choice', 
    question: 'Nous _____ (finir) le travail.', 
    correctAnswer: 'finissons', 
    options: ['finis', 'finit', 'finissons', 'finissez'] 
  },
  { 
    id: 'q3', 
    type: 'multiple-choice', 
    question: 'Tu _____ (être) très gentil.', 
    correctAnswer: 'es', 
    options: ['suis', 'es', 'est', 'sommes'] 
  },
  { 
    id: 'q4', 
    type: 'multiple-choice', 
    question: 'Ils _____ (aller) au restaurant.', 
    correctAnswer: 'vont', 
    options: ['vais', 'vas', 'va', 'vont'] 
  },
  { 
    id: 'q5', 
    type: 'multiple-choice', 
    question: 'Nous _____ (manger) une pomme.', 
    correctAnswer: 'mangeons', 
    options: ['mangeons', 'mangons', 'mangent', 'mangez'] 
  },
  { 
    id: 'q6', 
    type: 'multiple-choice', 
    question: 'Elle _____ (étudier) le français.', 
    correctAnswer: 'étudie', 
    options: ['étudie', 'étudies', 'étudions', 'étudiez'] 
  },
  { 
    id: 'q7', 
    type: 'multiple-choice', 
    question: 'Vous _____ (sortir) le soir.', 
    correctAnswer: 'sortez', 
    options: ['sors', 'sort', 'sortons', 'sortez'] 
  },
  { 
    id: 'q8', 
    type: 'multiple-choice', 
    question: 'Je _____ (dormir) huit heures.', 
    correctAnswer: 'dors', 
    options: ['dors', 'dort', 'dormons', 'dorment'] 
  },
  { 
    id: 'q9', 
    type: 'multiple-choice', 
    question: 'Ils _____ (chanter) bien.', 
    correctAnswer: 'chantent', 
    options: ['chante', 'chantes', 'chantons', 'chantent'] 
  },
  { 
    id: 'q10', 
    type: 'multiple-choice', 
    question: 'On _____ (faire) du sport.', 
    correctAnswer: 'fait', 
    options: ['fais', 'fait', 'faisons', 'font'] 
  },
];

const Conjugation: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Present Tense Conjugation</h2>
      <p className="text-slate-600 mb-10">
        In French, the ending of a verb changes depending on the subject. We cover regular -ER, -IR, and essential irregular verbs.
      </p>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">01</span>
          Regular -ER Verbs
        </h3>
        <p className="text-slate-600 mb-6 bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
          Regular -ER verbs follow a simple pattern. <strong>Note:</strong> for "Manger", we add an 'e' in the <em>nous</em> form (mangeons) to keep the soft 'g' sound.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ER_VERBS.map(v => <VerbTable key={v.verb} data={v} />)}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">02</span>
          -IR Verbs
        </h3>
        <p className="text-slate-600 mb-6 bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
          We include regular -IR verbs (like <em>Finir</em>) and common irregular -IR verbs (like <em>Sortir</em>, <em>Partir</em>, <em>Dormir</em>) which are essential for A1.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IR_VERBS.map(v => <VerbTable key={v.verb} data={v} />)}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">03</span>
          Core Irregular Verbs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {IRREGULAR_VERBS.map(v => <VerbTable key={v.verb} data={v} />)}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Interactive Practice</h3>
        <Quiz title="Conjugation Multiple Choice Quiz" questions={conjugationQuiz} />
      </section>
    </div>
  );
};

export default Conjugation;
