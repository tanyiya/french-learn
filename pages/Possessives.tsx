
import React from 'react';
import Quiz from '../components/Quiz';

const Possessives: React.FC = () => {
  const quizQuestions = [
    { id: 'p1', type: 'multiple-choice' as const, question: "_____ livre (My book - book is masc.)", correctAnswer: "mon", options: ["mon", "ma", "mes"] },
    { id: 'p2', type: 'multiple-choice' as const, question: "_____ mère (Your mother - formal/plural)", correctAnswer: "votre", options: ["ton", "ta", "votre"] },
    { id: 'p3', type: 'multiple-choice' as const, question: "_____ clés (Her keys - plural)", correctAnswer: "ses", options: ["son", "sa", "ses"] },
    { id: 'p4', type: 'multiple-choice' as const, question: "_____ maison (Our house)", correctAnswer: "notre", options: ["notre", "nos", "leur"] },
    { id: 'p5', type: 'multiple-choice' as const, question: "_____ amie (My friend - fem. starting with vowel)", correctAnswer: "mon", options: ["ma", "mon", "mes"] },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Possessive Adjectives</h2>
      <p className="text-slate-600 mb-10">
        In French, possessive adjectives (my, your, his/her) must match the <span className="font-bold">gender and number of the object possessed</span>, not the owner.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-16 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">Owner</th>
              <th className="px-6 py-4">Masculine</th>
              <th className="px-6 py-4">Feminine</th>
              <th className="px-6 py-4">Plural</th>
            </tr>
          </thead>
          <tbody className="text-slate-800 divide-y divide-slate-100">
            <tr><td className="px-6 py-4 font-medium">I (Je)</td><td className="px-6 py-4 font-bold text-blue-600">mon</td><td className="px-6 py-4 font-bold text-pink-600">ma</td><td className="px-6 py-4 font-bold text-purple-600">mes</td></tr>
            <tr><td className="px-6 py-4 font-medium">You (Tu)</td><td className="px-6 py-4 font-bold text-blue-600">ton</td><td className="px-6 py-4 font-bold text-pink-600">ta</td><td className="px-6 py-4 font-bold text-purple-600">tes</td></tr>
            <tr><td className="px-6 py-4 font-medium">He/She/It (Il/Elle)</td><td className="px-6 py-4 font-bold text-blue-600">son</td><td className="px-6 py-4 font-bold text-pink-600">sa</td><td className="px-6 py-4 font-bold text-purple-600">ses</td></tr>
            <tr><td className="px-6 py-4 font-medium">We (Nous)</td><td className="px-6 py-4 font-bold text-blue-600" colSpan={2}>notre</td><td className="px-6 py-4 font-bold text-purple-600">nos</td></tr>
            <tr><td className="px-6 py-4 font-medium">You (Vous)</td><td className="px-6 py-4 font-bold text-blue-600" colSpan={2}>votre</td><td className="px-6 py-4 font-bold text-purple-600">vos</td></tr>
            <tr><td className="px-6 py-4 font-medium">They (Ils/Elles)</td><td className="px-6 py-4 font-bold text-blue-600" colSpan={2}>leur</td><td className="px-6 py-4 font-bold text-purple-600">leurs</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mb-16 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
        <h4 className="font-bold text-blue-800 mb-2">Special Rule: The Vowel Rule</h4>
        <p className="text-blue-700 text-sm">
          Use the masculine form (<strong>mon, ton, son</strong>) before a feminine noun that starts with a vowel or a silent 'h'. 
          Example: <em>Mon amie</em> (My friend - female) instead of <em>Ma amie</em>.
        </p>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Interactive Practice</h3>
        <Quiz title="Possessives Practice Quiz" questions={quizQuestions} />
      </section>
    </div>
  );
};

export default Possessives;
