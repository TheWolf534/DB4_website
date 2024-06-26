// src/PIDPage.js
import React, { useState } from "react";
import { COLORS, FONT } from "../../Constants/theme.js";
import "../../styles/sensorPage.css";
import { useNavigate } from "react-router-dom";
import PlotError from "../../components/PlotError.js";
import PID from "../../components/PID.js";

const PIDPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="periodContainer">
        <button onClick={() => navigate("/")} className="period">
          <p style={FONT.base_16}>OVERVIEW</p>
        </button>
        <button onClick={() => navigate("/temperature")} className="period">
          <p style={FONT.base_16}>TEMPERATURE</p>
        </button>
        <button onClick={() => navigate("/concentration")} className="period">
          <p style={FONT.base_16}>CONCENTRATION</p>
        </button>
        <button onClick={() => navigate("/motor")} className="period">
          <p style={FONT.base_16}>MOTOR</p>
        </button>
        <div className="selected-period">
          <p style={FONT.base_16}>PID</p>
        </div>
        <button onClick={() => navigate("/pidTemp")} className="period">
          <p style={FONT.base_16}>PID_TEMP</p>
      </button>
      </div>

      <div className="screenContainer">
        <div className="period1">
          <PID />
        </div>

        <div className="period1">
          <div className="rightscreen">
            <center>
              <PlotError />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIDPage;
