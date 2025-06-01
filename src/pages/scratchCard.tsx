import React, { useState, useRef, useEffect } from 'react';
import '../css/ScratchCard.css'; // Ensure to import the updated CSS file

export const ScratchCard = () => {
  const [scratched, setScratched] = useState(false);
  const [result, setResult] = useState('');
  const scratchAreaRef = useRef(null);

  const prizes = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4'];
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (scratched) {
      setResult(prizes[Math.floor(Math.random() * prizes.length)]);
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000); // Celebration effect duration
    }
  }, [scratched]);

  const handleScratch = (e) => {
    if (!scratched) {
      setScratched(true);
    }
  };

  return (
    <div className="scratch-card-container">
      <div className="scratch-card">
        {!scratched && (
          <div
            className="scratch-area"
            ref={scratchAreaRef}
            onClick={handleScratch}
          />
        )}
        <div className={`text-overlay ${scratched ? 'hidden' : ''}`}>
          {scratched ? 'Congratulations!' : 'Scratch to Win!'}
        </div>
        {scratched && (
          <div className="prize">
            {result}
          </div>
        )}
        {celebrate && (
          <div className="celebration" style={{ animation: 'celebrate 1s ease' }}>
            🎉 You Won! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchCard;
