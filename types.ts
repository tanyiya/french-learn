
export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching';
  question: string;
  correctAnswer: string;
  options?: string[];
  explanation?: string;
}

export interface VerbConjugation {
  verb: string;
  translation: string;
  forms: {
    je: string;
    tu: string;
    il_elle_on: string;
    nous: string;
    vous: string;
    ils_elles: string;
  };
}

export interface VocabularyItem {
  french: string;
  english: string;
  context: string;
}

export interface VocabularyCategory {
  title: string;
  items: VocabularyItem[];
}
