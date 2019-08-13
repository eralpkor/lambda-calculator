import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button
      className='specialButton button'
      >
      {props.unicorn}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;