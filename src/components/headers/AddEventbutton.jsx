import React, { useState } from 'react';
import AddEventForm from './AddEvent';

function AddEventButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <button onClick={handleClick}>Add Event</button>
      {isFormVisible && <AddEventForm />}
    </>
  );
}

export default AddEventButton;
