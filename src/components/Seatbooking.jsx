import React, { useState } from "react";
import "./seats.css";
import Grid from '@mui/material/Grid';
import Col from "react-bootstrap/Col";
import post from "./post.json";

const Seatbooking = () => {
  const [seatState, setSeatState] = useState({
    seat: [
      "A1", "A2", "A3", "A4", "A5", "A6", "A7",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7",
      "C1", "C2", "C3", "C4", "C5", "C6", "C7",
      "D1", "D2", "D3", "D4", "D5", "D6", "D7",
      "E1", "E2", "E3", "E4", "E5", "E6", "E7",
      "F1", "F2", "F3", "F4", "F5", "F6", "F7"
    ],
    seatAvailable: [
      "A1", "A2", "A3", "A4", "A5", "A6", "A7",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7",
      "C1", "C2", "C3", "C4", "C5", "C6", "C7",
      "D1", "D2", "D3", "D4", "D5", "D6", "D7",
      "E1", "E2", "E3", "E4", "E5", "E6", "E7",
      "F1", "F2", "F3", "F4", "F5", "F6"
    ],
    seatReserved: [],
    seatSelected: post
  });

  const onClickData = (seat) => {
    if (seatState.seatReserved.indexOf(seat) > -1) {
      setSeatState({
        ...seatState,
        seatAvailable: seatState.seatAvailable.concat(seat),
        seatReserved: seatState.seatReserved.filter(res => res !== seat)
      });
    } else {
      setSeatState({
        ...seatState,
        seatReserved: seatState.seatReserved.concat(seat),
        seatAvailable: seatState.seatAvailable.filter(res => res !== seat)
      });
    }
  };

  const checktrue = (row) => {
    return seatState.seatSelected.indexOf(row) === -1;
  };

  const handleSubmited = () => {
    setSeatState({
      ...seatState,
      seatSelected: seatState.seatSelected.concat(seatState.seatReserved),
      seatReserved: []
    });
  };

  return (
    <div style={{
      display:"flex",
      alignContent:"center",
      justifyContent:"center",
      flexDirection:"column"
      
    }}>
      <div className="screen"></div>
      <DrawGrid
        seat={seatState.seat}
        available={seatState.seatAvailable}
        reserved={seatState.seatReserved}
        selected={seatState.seatSelected}
        onClickData={onClickData}
        checktrue={checktrue}
        handleSubmited={handleSubmited}
      />
    </div>
  );
};

const DrawGrid = ({ seat, selected, reserved, checktrue, onClickData, handleSubmited }) => {
  return (<>
    <Grid container>
      
      <Grid item xs={10}>
        <h2 />
        <Col xs={17}>
          <table className="grid">
            <tbody>
              <tr>
                {seat.map(row => (
                  <td
                    className={
                      selected.indexOf(row) > -1
                        ? "reserved"
                        : reserved.indexOf(row) > -1
                        ? "selected"
                        : "available"
                    }
                    key={row}
                    onClick={checktrue(row) ? () => onClickData(row) : null}
                  >
                    {row}{" "}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="btn-success btnmargin confirm-btn"
            onClick={handleSubmited}
          >
            Confirm Booking
          </button>
        </Col>
      </Grid>
    </Grid>
    </>
  );
};

export default Seatbooking;
