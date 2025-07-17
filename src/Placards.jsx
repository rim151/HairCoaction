import React from 'react';
import './App.css';

function Placards() {
  return (
    <div className="placards-container">
      <div className="placard">
        <h3>🧠 Knowledge Hub</h3>
        <p>Explore expert blogs and curated videos tailored to your hair needs.</p>
      </div>
      <div className="placard">
        <h3>🛠 Workshops</h3>
        <p>Join hands-on sessions to learn directly from professionals.</p>
      </div>
      <div className="placard">
        <h3>🎤 Seminars</h3>
        <p>Attend exclusive events to gain the latest insights in hair care science.</p>
      </div>
    </div>
  );
}

export default Placards;
