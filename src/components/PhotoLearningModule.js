import React, { useState } from 'react';

const PhotoLearningModule = ({ isOpen, onClose }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);

  const modules = [
    {
      id: 1,
      title: "Camera Basics",
      content: "Let's learn how to hold your camera steady!",
      tip: "Hold your camera with both hands and keep your elbows close to your body.",
      image: "/images/Photography.jpeg",
      interactive: "Try moving your device like a camera - keep it steady!",
    },
    {
      id: 2,
      title: "Wildlife Distance",
      content: "Safety first! Learn the right distance for wildlife photos.",
      tip: "Stay at least 25 meters away from animals. Use your zoom!",
      image: "/images/westernCirciut/serengeti1.jpg",
      interactive: "Drag the slider to show safe distance",
    },
    {
      id: 3,
      title: "Light and Timing",
      content: "The best times for wildlife photos are early morning and late afternoon.",
      tip: "This is called the 'Golden Hour' - perfect lighting for amazing shots!",
      image: "/images/westernCirciut/serengeti2.jpg",
      interactive: "Move the sun to see how lighting changes",
    }
  ];

  const quizQuestions = [
    {
      question: "What's the best way to hold your camera?",
      options: [
        "One hand only",
        "Both hands, elbows close to body",
        "Arms stretched out",
        "Doesn't matter"
      ],
      correct: 1
    },
    {
      question: "What's the minimum safe distance from wildlife?",
      options: [
        "5 meters",
        "15 meters",
        "25 meters",
        "50 meters"
      ],
      correct: 2
    },
    {
      question: "When is the best time for wildlife photography?",
      options: [
        "Midnight",
        "Noon",
        "Early morning and late afternoon",
        "Only at sunset"
      ],
      correct: 2
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(userAnswers).forEach(questionIndex => {
      if (userAnswers[questionIndex] === quizQuestions[questionIndex].correct) {
        correct++;
      }
    });
    return (correct / quizQuestions.length) * 100;
  };

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setProgress((currentModule + 2) * (100 / (modules.length + 1)));
    } else if (currentModule === modules.length - 1) {
      setShowQuiz(true);
      setProgress(90);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="learning-popup-overlay">
      <div className="learning-popup">
        <div className="popup-header" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '1rem' }}>
          <button 
            className="done-button" 
            onClick={onClose}
            style={{
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Done
          </button>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        {!showQuiz ? (
          <div className="module-content">
            <h3>{modules[currentModule].title}</h3>
            <div className="module-image">
              <img src={modules[currentModule].image} alt={modules[currentModule].title} />
            </div>
            <p>{modules[currentModule].content}</p>
            <div className="tip-box">
              <span className="tip-icon">💡</span>
              <p>{modules[currentModule].tip}</p>
            </div>
            <div className="interactive-element">
              <p>{modules[currentModule].interactive}</p>
              {currentModule === 1 && (
                <div className="distance-slider">
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    defaultValue="25"
                    onChange={(e) => console.log(e.target.value + 'm')}
                  />
                </div>
              )}
            </div>
            <div className="button-group">
              <button className="next-button" onClick={nextModule}>
                {currentModule === modules.length - 1 ? "Take Quiz" : "Next Tip"}
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-section">
            <h3>Test Your Knowledge!</h3>
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="quiz-question">
                <p>{q.question}</p>
                <div className="options">
                  {q.options.map((option, oIndex) => (
                    <button
                      key={oIndex}
                      className={`option-button ${
                        userAnswers[qIndex] === oIndex ? 'selected' : ''
                      }`}
                      onClick={() => handleAnswer(qIndex, oIndex)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(userAnswers).length === quizQuestions.length && (
              <div className="quiz-results">
                <h4>Your Score: {calculateScore()}%</h4>
                {calculateScore() >= 70 ? (
                  <div className="success-message">
                    <span>🎉</span>
                    <p>Great job! You're ready to take amazing wildlife photos!</p>
                    <button className="done-button" onClick={onClose}>Done</button>
                  </div>
                ) : (
                  <div className="retry-message">
                    <span>📸</span>
                    <p>Let's review the tips and try again!</p>
                    <div className="button-group">
                      <button onClick={() => {
                        setCurrentModule(0);
                        setShowQuiz(false);
                        setUserAnswers({});
                        setProgress(0);
                      }}>Retry</button>
                      <button className="done-button" onClick={onClose}>Done</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoLearningModule; 