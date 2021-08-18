import React from 'react';

import { Button } from './Button';
import './App.css';

const buttons = [1, 2, 3];

function App() {
  const [buttonsVisible, setButtonsVisible] = React.useState(false);
  const [buttonValue, setButtonValue] = React.useState(1);
  const [clickCount, setClickCount] = React.useState(0);

  const clickHandler = (value) => {
    setClickCount((prev) => prev + 1);
    setButtonValue(value);
  };

  React.useEffect(() => {
    if (clickCount === buttons.length) {
      setButtonsVisible(false);
      setClickCount(0);
    }
  }, [clickCount]);

  return (
    <div className="container">
      <button className="main-button" onClick={() => setButtonsVisible((prev) => !prev)}>
        {buttonValue}
      </button>
      {buttonsVisible && (
        <div className="buttons-container">
          {buttons.map((button, index) => (
            <Button
              key={`${button}_${index}`}
              value={button}
              onClick={() => clickHandler(button)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
