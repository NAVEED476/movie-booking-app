import React, { useState } from "react";
import Seatbooking from "../components/Seatbooking";
import "./movies.css";
import { useNavigate } from "react-router-dom";

const MovieBooking = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [seats, setSeats] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (name.trim() && number.trim() && seats.trim()) {
      const userDetails = {
        name: name,
        number: number,
        seats: seats,
      };

      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      alert("UserDetails Saved successfully!")
      // Navigate to /seats
      navigate("/seats");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleSeatChange = (e) => {
    setSeats(e.target.value);
  };

  const isAnyFieldEmpty = () => {
    return !name.trim() || !number.trim() || !seats.trim();
  };

  return (
    <div className="movie-cont">
      <div>
        <h1>Please Fill this form</h1>
      </div>
      <div className="second">
        <div className="info">
          <div>
            <h3>Booking Form</h3>
            <form onSubmit={handleSubmit} className="user-form">
              <input
                type="text"
                placeholder="user Name"
                className="user-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile"
                className="user-name"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <select
                name="select Seats"
                id="select"
                value={seats}
                onChange={handleSeatChange}
              >
                <option value="">Select Number of Seats</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <button
                className={`user-submit-btn ${
                  isAnyFieldEmpty() ? "disabled-btn" : ""
                }`}
                disabled={isAnyFieldEmpty()}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="booking-info">
            <div className="flex-cont">
              <div className="info-box info-box-size">
                <h4>15</h4>
              </div>
              <h3>Reserved</h3>
            </div>
            <div className="flex-cont">
              <div className="av-info-box info-box-size">
                <h4>19</h4>
              </div>
              <h3>Available</h3>
            </div>
            <div className="flex-cont">
              <div className="selected-info-box info-box-size">
                <h4>4</h4>
              </div>
              <h3>Selected</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
