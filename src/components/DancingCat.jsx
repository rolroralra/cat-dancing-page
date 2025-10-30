import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isDancing, setIsDancing] = useState(true);

  const toggleDance = () => {
    setIsDancing(!isDancing);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>

      <div className="cat-wrapper">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={`cat-image ${isDancing ? 'dancing' : ''}`}
        />
      </div>

      <button onClick={toggleDance} className="control-button">
        {isDancing ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  );
}

export default DancingCat;
