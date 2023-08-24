import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) setMessage("you are underweight");
      else if (bmi > 25 && bmi < 30) setMessage("you are healthy");
      else setMessage("you are overweight");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div className="input-container">
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p className={`message-${message.toLowerCase()}`}>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
