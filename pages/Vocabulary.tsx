
import React, { useState } from 'react';
import { VOCABULARY } from '../constants';

const Vocabulary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Vocabulary Lists</h2>
          <p className="text-slate-600">Essential words and phrases for A1 learners.</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search words..."
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-100 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      <div className="space-y-12">
        {VOCABULARY.map((category) => {
          const filteredItems = category.items.filter(
            item => 
              item.french.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.english.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <section key={category.title}>
              <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-lg font-bold text-blue-700">{item.french}</span>
                      <span className="text-sm font-medium text-slate-500 px-2 py-1 bg-slate-100 rounded">FR</span>
                    </div>
                    <div className="text-slate-800 font-medium mb-3">{item.english}</div>
                    <div className="text-xs text-slate-500 italic border-t pt-3 mt-1">
                      <strong>Context:</strong> {item.context}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-20 p-8 bg-slate-900 text-white rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Practice Tip!</h3>
        <p className="text-slate-400 max-w-xl mx-auto mb-6">
          Try writing 3 sentences today using words from the list above. Speaking them out loud also helps reinforce your memory for the oral part of the exam!
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Vocabulary;
