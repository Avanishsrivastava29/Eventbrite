 CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    data VARCHAR(255),
    time TIME,
    location VARCHAR(255),
    image VARCHAR(255),
    is_liked BOOLEAN DEFAULT FALSE
);
