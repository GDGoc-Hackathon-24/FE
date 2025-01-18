import React from 'react';

type QuizOptionProps = {
  label: string;
  onClick: () => void;
};

const QuizOption: React.FC<QuizOptionProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-white border border-gray-300 rounded-md py-4 text-center hover:bg-gray-100"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default QuizOption;
