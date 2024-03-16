import React, {useState} from 'react';
import Flashcard from './Flashcard';
import "./FlashcardSet.css";

const FlashcardSet = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const nextClick = () => {
    setIndex(index + 1);
    setInput('');
    setIsCardFlipped(false);
  };

  const prevClick = () => {
    setIndex(index - 1);
    setInput('');
    setIsCardFlipped(false);
  };

  const Shuffle = () => {
    setIndex(Math.floor(Math.random() * cards.length));
    setInput('');
    setIsCardFlipped(false);
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleScore = () => {
    if (input.trim().toLowerCase() === cards[index].answer.toLowerCase()) {
      setStreak(streak + 1);
      setScore(score + 1);
      if (streak + 1 > highestStreak) {
        setHighestStreak(streak + 1);
      }
    }
    else {
      setStreak(0);
      if (score > 0) setScore(score - 1);
    }
  }
  
  const handleToggleAnswer = () => {
    setIsCardFlipped(!isCardFlipped);
  }

  return (
    <div>
      <div className='score'>
        <p>Score: {score}</p>
        <p> Highest Streak: {highestStreak}</p>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <Flashcard question={cards[index].question} answer={cards[index].answer} onToggleAnswer={handleToggleAnswer}/>
        </div>
      </div>
      <br></br>
      <div className='form'>
        <input type='text' placeholder='Input guess here...' value={input} className='textbox' onChange={handleChange} disabled={isCardFlipped}/>
        <button onClick={handleScore}>Submit</button>
      </div>
      <br></br>
      <div className='buttons'>
        <button onClick={prevClick}>&larr;</button>
        <button onClick={Shuffle}>Shuffle</button>
        <button onClick={nextClick}>&rarr;</button>
      </div>
    </div>
  );
};

export default FlashcardSet;
