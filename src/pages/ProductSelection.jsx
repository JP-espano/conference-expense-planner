import React, { useState } from "react";
import "./ProductSelection.css"; // We'll style it next

export default function ProductSelection() {
  // Room types
  const rooms = [
    { name: "Auditorium Hall", capacity: 200, price: 5500 },
    { name: "Conference Room", capacity: 15, price: 3500 },
    { name: "Presentation Room", capacity: 50, price: 700 },
    { name: "Large Meeting Room", capacity: 10, price: 900 },
    { name: "Small Meeting Room", capacity: 5, price: 1100 },
  ];

  // State for room quantities
  const [roomCounts, setRoomCounts] = useState(
    rooms.reduce((acc, room) => ({ ...acc, [room.name]: 0 }), {})
  );

  // Increment/decrement handlers
  const increment = (roomName) => {
    setRoomCounts({ ...roomCounts, [roomName]: roomCounts[roomName] + 1 });
  };

  const decrement = (roomName) => {
    setRoomCounts({
      ...roomCounts,
      [roomName]: Math.max(0, roomCounts[roomName] - 1),
    });
  };

  return (
    <div className="product-page">
      {/* Navigation Header */}
      <header className="product-header">
        <div className="logo">
          <h1>Conference Expense Planner</h1>
        </div>
        <div className="nav-buttons">
          <button>Venue</button>
          <button>Add-ons</button>
          <button>Meals</button>
          <button className="show-details">Show Details</button>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="rooms-section">
        <h2>Rooms</h2>
        {rooms.map((room) => (
          <div key={room.name} className="room-item">
            <div className="room-info">
              <p>
                <strong>{room.name}</strong> - Capacity: {room.capacity} - $
                {room.price}
              </p>
            </div>
            <div className="room-controls">
              <button onClick={() => decrement(room.name)}>-</button>
              <span>{roomCounts[room.name]}</span>
              <button onClick={() => increment(room.name)}>+</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
