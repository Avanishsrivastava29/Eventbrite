import React, { useState } from 'react';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '600px',
  margin: '0 auto',
});

const InputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const FileInputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

function AddEventForm() {
  const [eventData, setEventData] = useState({
    event_name: '',
    data: '',
    time: '',
    location: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    setEventData((prevEventData) => ({
      ...prevEventData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('event_name', eventData.event_name);
    formData.append('data', eventData.data);
    formData.append('time', eventData.time);
    formData.append('location', eventData.location);
    formData.append('image', eventData.image);

    fetch('/api/events/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New event added:', data);
        setEventData({
          event_name: '',
          data: '',
          time: '',
          location: '',
          image: null,
        });
      })
      .catch((error) => {
        console.error('Error adding new event:', error);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <TextField
          id="event_name"
          name="event_name"
          label="Event Name"
          value={eventData.event_name}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextareaAutosize
          id="data"
          name="data"
          label="Data"
          value={eventData.data}
          onChange={handleInputChange}
          minRows={3}
          maxRows={6}
        />
      </InputWrapper>
      <InputWrapper>
        <TextField
          id="time"
          name="time"
          label="Time"
          type="datetime-local"
          value={eventData.time}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextField
          id="location"
          name="location"
          label="Location"
          value={eventData.location}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <FileInputWrapper>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleInputChange}
        />
      </FileInputWrapper>
      <Button variant="contained" type="submit">
        Add Event
      </Button>
    </FormContainer>
  );
}

export default AddEventForm;
