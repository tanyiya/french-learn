
import React from 'react';
import { Link } from 'react-router-dom';

const ModuleCard: React.FC<{
  title: string;
  description: string;
  path: string;
  icon: string;
  color: string;
}> = ({ title, description, path, icon, color }) => (
  <Link 
    to={path} 
    className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-1">
      Start Learning <span>→</span>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Master <span className="text-blue-600 italic">Basic French</span> with Ease
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Welcome to your A1 French exam preparation guide. This website is designed specifically for beginners to practice core grammar, numbers, and vocabulary through interactive modules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCard 
          title="Verb Conjugation" 
          description="Learn regular -er, -ir verbs and essential irregulars like être and avoir in the present tense."
          path="/conjugation"
          icon="✍️"
          color="bg-red-50"
        />
        <ModuleCard 
          title="French Numbers" 
          description="Master numbers from 1 to 100 with clear reference lists and interactive typing practice."
          path="/numbers"
          icon="🔢"
          color="bg-blue-50"
        />
        <ModuleCard 
          title="Definite & Indefinite Articles" 
          description="Understand masculine, feminine, and plural articles (le, la, les, un, une, des) with simple rules."
          path="/articles"
          icon="📘"
          color="bg-green-50"
        />
        <ModuleCard 
          title="Possessive Adjectives" 
          description="Master 'my', 'your', and 'his/her' in French (mon, ma, mes) and how to use them correctly."
          path="/possessives"
          icon="🤝"
          color="bg-purple-50"
        />
        <ModuleCard 
          title="Vocabulary Practice" 
          description="Broaden your word bank with essential themes like family, greetings, and daily items."
          path="/vocabulary"
          icon="🔤"
          color="bg-orange-50"
        />
      </div>

      <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Exam Ready?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            A1 is the first level of the CEFR. Our modules follow these international standards to ensure you focus on the most important basics for your upcoming exam.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">Interactive Feedback</div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">Static Study Material</div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">English Explanations</div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 text-[20rem]">
          🇫🇷
        </div>
      </div>
    </div>
  );
};

export default Home;
