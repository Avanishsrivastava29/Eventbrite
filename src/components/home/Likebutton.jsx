import React, { useState } from 'react';    //Importing usestate from react

const HeartLikeButton = () => {                           //Users should be able to like and unlike the event by clicking on the ‘heart’ symbol.
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
     
      <button onClick={handleClick}>
        {liked ? '❤️' : '♡'} 
      </button>
    
     
  );
};

export default HeartLikeButton;
