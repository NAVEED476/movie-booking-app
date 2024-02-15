import React from "react";
import Seatbooking from "../components/Seatbooking";
import "./movies.css";
const MovieBooking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="movie-cont">
      <div>
        <h1>Movie Details</h1>
      </div>
      <div className="second">
        <div className="seat">
          <Seatbooking />
        </div>
        <div className="info">
          <div>
            <h3>Booking Form</h3>
            <form onSubmit={handleSubmit} className="user-form">
              <input
                type="text"
                placeholder="user Name"
                className="user-name"
              />
              <input type="text" placeholder="Mobile" className="user-name" />
              <select name="select Seats" id="select">
                <option value="">Select Number of Seats</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
              </select>
              <button className="user-submit-btn">Submit</button>
            </form>
          </div>
          <div className="booking-info">
            <div className="flex-cont"><div className="info-box info-box-size"> <h4>15</h4></div><h3>Reserved</h3></div>
            <div className="flex-cont"><div className="av-info-box info-box-size"><h4>19</h4></div><h3>Availble</h3></div>
            <div className="flex-cont"><div className="selected-info-box info-box-size"><h4>4</h4></div><h3>Selected</h3></div>

             </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
