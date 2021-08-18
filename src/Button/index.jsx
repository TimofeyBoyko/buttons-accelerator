import React from 'react';

export const Button = ({ value, onClick }) => {
  const [visible, setVisible] = React.useState(true);

  const clickHandler = () => {
    setVisible((prev) => !prev);
    onClick();
  };

  return (
    <>
      {visible && (
        <button className="buttons" onClick={clickHandler}>
          {value}
        </button>
      )}
    </>
  );
};
