import React,{useState} from 'react'
import '../css/panels.css'

function TeacherDashboard() {
  const [activePanel, setActivePanel] = useState("panel1");

  const handleClick = (panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="two-panel-layout">
      <div className="panel-switcher">
        <button
          className={`panel-button ${activePanel === "panel1" ? "active" : ""}`}
          onClick={() => handleClick("panel1")}
        >
          Your Profile
        </button>
        <button
          className={`panel-button ${activePanel === "panel2" ? "active" : ""}`}
          onClick={() => handleClick("panel2")}
        >
          Your activities
        </button>
      </div>
      <div className={`panel ${activePanel === "panel1" ? "active" : ""}`}>
        <h2>Panel 1 Content</h2>
        <p>
          Lodu
        </p>
      </div>
      <div className={`panel ${activePanel === "panel2" ? "active" : ""}`}>
        <h2>Panel 2 Content</h2>
        <p>
          Lalit
        </p>
      </div>
    </div>
  );
}

export default TeacherDashboard
