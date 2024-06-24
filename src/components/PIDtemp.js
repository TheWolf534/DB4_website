// src/PIDPage.js
import React, { useState, useEffect, useRef } from "react";
import { COLORS, FONT } from "../Constants/theme.js";
import "../styles/sensorPage.css";
import { useNavigate } from "react-router-dom";

const PID = () => {
  const navigate = useNavigate();
  const [parameters, setParameters] = useState({
    P: "",
    I: "",
    D: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    fetchPIDdata();
  }, []);

  async function fetchPIDdata() {
    try {
      const response = await fetch(
        "http://51.20.235.196:8000/api/board-parameters/1/"
      );
      const data = await response.json();
      setParameters({
        P: data.TempProportional,
        I: data.TempIntegral,
        D: data.TempDerivative,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch(
        "http://51.20.235.196:8000/api/board-parameters/1/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TempProportional: parameters.P,
            TempIntegral: parameters.I,
            TempDerivative  : parameters.D,
          }),
        }
      );
      if (response.ok) {
        // Handle successful update here
        console.log("Parameters updated successfully");
      } else {
        // Handle errors here
        console.error("Failed to update parameters");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    formRef.current.reset();
  };

  return (
    <div className="screen">
      <center>
        <p style={FONT.base_20}>PID values</p>
      </center>
      <div className="pidcontainer">
        <div className="pid">
          <center>
            <p style={FONT.smallInfo_12}> P</p>
            <p style={FONT.bold_20}> {parameters.P}</p>
          </center>
        </div>

        <div className="pid">
          <center>
            <p style={FONT.smallInfo_12}> I</p>
            <p style={FONT.bold_20}> {parameters.I}</p>
          </center>
        </div>
        <div className="pid" style={{ borderRight: "none" }}>
          <center>
            <p style={FONT.smallInfo_12}> D</p>
            <p style={FONT.bold_20}> {parameters.D}</p>
          </center>
        </div>
      </div>
      <div
        className="leftscreen"
        style={{ paddingTop: "20px", height: "auto", border: "none" }}
      >
        <center>
          <div style={{ paddingBottom: "0px" }}>
            <h1 style={FONT.base_20}>Enter new values</h1>
          </div>

          <form onSubmit={handleSubmit} ref={formRef}>
            <div class="input-container">
              <input
                type="number"
                step="any"
                name="P"
                onChange={handleChange}
                class="focus-input"
                placeholder=" "
              />
              <label class="input-label">Proportional</label>
            </div>

            <div class="input-container">
              <input
                type="number"
                step="any"
                name="I"
                onChange={handleChange}
                class="focus-input"
                placeholder=" "
              />
              <label class="input-label">Integral</label>
            </div>

            <div class="input-container">
              <input
                type="number"
                step="any"
                name="D"
                onChange={handleChange}
                className="focus-input"
                placeholder=" "
              />
              <label class="input-label">Derivative</label>
            </div>

            <button
              type="submit"
              className="period"
              style={{ border: "0.5px solid black", marginTop: "20px" }}
            >
              <p style={FONT.base_16}>SUBMIT</p>
            </button>
          </form>
        </center>
      </div>
      <div></div>
    </div>
  );
};

export default PID;
// src/components/PID.js
