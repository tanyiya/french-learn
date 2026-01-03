
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Conjugation from './pages/Conjugation';
import Numbers from './pages/Numbers';
import Articles from './pages/Articles';
import Possessives from './pages/Possessives';
import Vocabulary from './pages/Vocabulary';

const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-slate-600 hover:bg-slate-200'
      }`}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🇫🇷</span>
            <span className="font-bold text-xl tracking-tight text-blue-700">A1 French Prep</span>
          </Link>
          <div className="hidden md:flex gap-2">
            <NavItem to="/conjugation" label="Conjugation" />
            <NavItem to="/numbers" label="Numbers" />
            <NavItem to="/articles" label="Articles" />
            <NavItem to="/possessives" label="Possessives" />
            <NavItem to="/vocabulary" label="Vocabulary" />
          </div>
          {/* Mobile menu trigger could go here, but keeping it simple for now */}
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conjugation" element={<Conjugation />} />
            <Route path="/numbers" element={<Numbers />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/possessives" element={<Possessives />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
          </Routes>
        </main>
        <footer className="bg-slate-100 border-t py-8 text-center text-slate-500 text-sm">
          <p>© 2024 French A1 Preparation - Self-Study Guide</p>
          <p className="mt-1">All instructions and explanations are in English.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
