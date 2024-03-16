import React, { useState } from 'react';

const Flashcard = ({ question, answer, onToggleAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleAnswer = () => {
    setIsFlipped(!isFlipped);
    onToggleAnswer();
  };

  return (
    <div className="flashcard" onClick={handleToggleAnswer}>
      {isFlipped ? answer : question}
    </div>
  );
};

export default Flashcard;
