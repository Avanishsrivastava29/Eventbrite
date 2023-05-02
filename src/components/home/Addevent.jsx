import React, { useState, useEffect } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/events/');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.event_name}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <img src={event.image} alt="Event" />
            <p>Is Liked: {event.is_liked ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
