import React, { useState, useEffect } from 'react';
import { FaStar, FaMedal, FaTrophy, FaArrowRight, FaRedo } from 'react-icons/fa';

const WildlifeQuizModule = ({ isOpen, onClose }) => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [streak, setStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [animation, setAnimation] = useState('');

  const levels = [
    {
      name: "Beginner Explorer",
      icon: "🌱",
      questions: [
        {
          question: "Which animal is known as the 'King of the Jungle'?",
          image: "/images/westernCirciut/serengeti1.jpg",
          options: ["Lion", "Elephant", "Giraffe", "Zebra"],
          correct: 0,
          funFact: "Despite being called 'King of the Jungle', lions actually live in savannas!",
          animation: "lion"
        },
        {
          question: "What is a baby elephant called?",
          image: "/images/westernCirciut/tarangire1.jpg",
          options: ["Calf", "Puppy", "Kitten", "Cub"],
          correct: 0,
          funFact: "Baby elephants can weigh up to 200 pounds at birth!",
          animation: "elephant"
        }
      ]
    },
    {
      name: "Safari Ranger",
      icon: "🦁",
      questions: [
        {
          question: "How tall can a giraffe grow?",
          image: "/images/westernCirciut/serengeti2.jpg",
          options: ["Up to 18 feet", "Up to 10 feet", "Up to 15 feet", "Up to 20 feet"],
          correct: 0,
          funFact: "Giraffes have the same number of neck vertebrae as humans - just much longer!",
          animation: "giraffe"
        },
        {
          question: "What is special about zebra stripes?",
          image: "/images/westernCirciut/ngorongoro1.jpg",
          options: ["Each is unique", "They're always black", "They glow at night", "They change color"],
          correct: 0,
          funFact: "Like human fingerprints, no two zebras have exactly the same stripe pattern!",
          animation: "zebra"
        }
      ]
    },
    {
      name: "Wildlife Master",
      icon: "🏆",
      questions: [
        {
          question: "How do elephants communicate over long distances?",
          image: "/images/westernCirciut/tarangire2.jpg",
          options: ["Infrasound rumbles", "Loud trumpeting", "Sign language", "Telepathy"],
          correct: 0,
          funFact: "Elephants can communicate through rumbles that travel through the ground for miles!",
          animation: "elephant-sound"
        },
        {
          question: "What is a group of lions called?",
          image: "/images/westernCirciut/ngorongoro2.jpg",
          options: ["Pride", "Herd", "Pack", "Colony"],
          correct: 0,
          funFact: "A lion pride usually consists of related females and their cubs!",
          animation: "pride"
        }
      ]
    }
  ];

  const badges = {
    streak3: { name: "Quick Learner", icon: "🎯" },
    perfectLevel: { name: "Perfect Score", icon: "⭐" },
    allLevels: { name: "Wildlife Master", icon: "👑" }
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const currentQ = levels[level].questions[currentQuestion];
    const correct = answerIndex === currentQ.correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 100);
      setStreak(streak + 1);
      if (streak === 2) {
        setEarnedBadges([...earnedBadges, badges.streak3]);
      }
      setAnimation(currentQ.animation);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setAnimation('');
      if (currentQuestion < levels[level].questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        if (score === (level + 1) * 200) {
          setEarnedBadges([...earnedBadges, badges.perfectLevel]);
        }
        setShowResult(true);
      }
      setSelectedAnswer(null);
    }, 2000);
  };

  const nextLevel = () => {
    if (level < levels.length - 1) {
      setLevel(level + 1);
      setCurrentQuestion(0);
      setShowResult(false);
    } else {
      setEarnedBadges([...earnedBadges, badges.allLevels]);
    }
  };

  const restartQuiz = () => {
    setLevel(0);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setStreak(0);
    setEarnedBadges([]);
  };

  if (!isOpen) return null;

  const currentQ = levels[level].questions[currentQuestion];

  return (
    <div className="quiz-popup-overlay">
      <div className="quiz-popup">
        <div className="quiz-header">
          <div className="quiz-progress">
            <div className="level-info">
              <span className="level-icon">{levels[level].icon}</span>
              <h3>{levels[level].name}</h3>
            </div>
            <div className="score-display">
              <FaTrophy className="score-icon" />
              <span>{score}</span>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {!showResult ? (
          <div className="quiz-content">
            <div className="question-image">
              <img src={currentQ.image} alt="Quiz" />
            </div>
            <div className="question-container">
              <h3 className="question">{currentQ.question}</h3>
              <div className="options-grid">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${
                      selectedAnswer === index 
                        ? isCorrect 
                          ? 'correct' 
                          : 'incorrect'
                        : ''
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            {showFeedback && (
              <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                <span className="feedback-icon">
                  {isCorrect ? '🎉' : '💡'}
                </span>
                <p>{isCorrect ? 'Correct!' : 'Not quite...'}</p>
                <p className="fun-fact">{currentQ.funFact}</p>
              </div>
            )}
            {animation && (
              <div className={`animation ${animation}`} />
            )}
          </div>
        ) : (
          <div className="result-container">
            <h2>Level Complete!</h2>
            <div className="score-summary">
              <div className="final-score">
                <FaTrophy className="trophy-icon" />
                <span>{score} points</span>
              </div>
              {earnedBadges.length > 0 && (
                <div className="earned-badges">
                  <h3>Earned Badges</h3>
                  <div className="badges-grid">
                    {earnedBadges.map((badge, index) => (
                      <div key={index} className="badge">
                        <span className="badge-icon">{badge.icon}</span>
                        <span className="badge-name">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="action-buttons">
              {level < levels.length - 1 ? (
                <button className="next-level" onClick={nextLevel}>
                  Next Level <FaArrowRight />
                </button>
              ) : (
                <button className="restart-quiz" onClick={restartQuiz}>
                  Play Again <FaRedo />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WildlifeQuizModule; 