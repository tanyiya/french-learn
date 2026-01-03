
import React from 'react';
import Quiz from '../components/Quiz';

const Articles: React.FC = () => {
  const quizQuestions = [
    { id: 'a1', type: 'multiple-choice' as const, question: "_____ homme (The man)", correctAnswer: "l'", options: ["le", "la", "l'", "les"] },
    { id: 'a2', type: 'multiple-choice' as const, question: "_____ filles (The girls)", correctAnswer: "les", options: ["le", "la", "l'", "les"] },
    { id: 'a3', type: 'multiple-choice' as const, question: "_____ voiture (A car - feminine)", correctAnswer: "une", options: ["un", "une", "des"] },
    { id: 'a4', type: 'multiple-choice' as const, question: "_____ stylo (The pen - masculine)", correctAnswer: "le", options: ["le", "la", "l'", "les"] },
    { id: 'a5', type: 'multiple-choice' as const, question: "_____ chats (Some cats)", correctAnswer: "des", options: ["un", "une", "des"] },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Articles</h2>
      <p className="text-slate-600 mb-10">
        Every noun in French has a gender (masculine or feminine) and a number (singular or plural).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Definite Articles (The)</h3>
            <p className="text-sm text-slate-600 mb-4">Used for specific things.</p>
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 border-b">
                  <th className="pb-2">Case</th>
                  <th className="pb-2">Article</th>
                  <th className="pb-2">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b"><td className="py-3">Masculine</td><td className="font-bold">le</td><td>le garçon</td></tr>
                <tr className="border-b"><td className="py-3">Feminine</td><td className="font-bold">la</td><td>la fille</td></tr>
                <tr className="border-b"><td className="py-3">Vowel/H</td><td className="font-bold">l'</td><td>l'ami</td></tr>
                <tr className="border-b"><td className="py-3">Plural</td><td className="font-bold">les</td><td>les enfants</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Indefinite Articles (A/An/Some)</h3>
            <p className="text-sm text-slate-600 mb-4">Used for non-specific things.</p>
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 border-b">
                  <th className="pb-2">Case</th>
                  <th className="pb-2">Article</th>
                  <th className="pb-2">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b"><td className="py-3">Masculine</td><td className="font-bold">un</td><td>un chat</td></tr>
                <tr className="border-b"><td className="py-3">Feminine</td><td className="font-bold">une</td><td>une pomme</td></tr>
                <tr className="border-b"><td className="py-3">Plural</td><td className="font-bold">des</td><td>des stylos</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Interactive Practice</h3>
        <Quiz title="Articles Selection Quiz" questions={quizQuestions} />
      </section>
    </div>
  );
};

export default Articles;
