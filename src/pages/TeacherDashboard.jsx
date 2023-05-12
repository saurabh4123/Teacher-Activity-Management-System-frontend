import React,{useState,useEffect} from 'react'
import '../css/panels.css'
import { Link } from 'react-router-dom';
import routes from '../router/routes';
import axios from 'axios';
import {baseUrl} from '../utils/constans.js'
import { useNavigate } from "react-router-dom";


function TeacherDashboard() {
  const [activePanel, setActivePanel] = useState("panel1");
  const [month,setMonth]=useState(1);
  const [year,setYear]=useState(2023);
  const navigate=useNavigate();

  const handleClick = (panel) => {
    setActivePanel(panel);
  };
  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;
  const [teacher, setTeacher] = useState({});


  function handleLogout() {
    alert("Logout Successfull");
    navigate(routes.LoginPage)
  }

  function handleMonth(event) {
    setMonth(event.target.value);
  }
  
  function handleYear(event) {
    setYear(event.target.value);
  }

  function handleGenerateReport() {
    alert("Generating report");
    console.log("month :",month);
    console.log("year :",year);
    const url = `${baseUrl}/api/employee/report-employee/${teacherId}?month=${month}&year=${year}`;
    axios({
      url,
      method: 'GET',
      responseType: 'blob', // Set the response type to blob
    })
      .then((response) => {
        // Create a Blob object from the response data
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
  
        // Create a download link for the user to click on
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `report_${new Date().toISOString()}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // Fetch teacher data from backend API
    axios.get(baseUrl+`/api/employee/get-empById/${teacherId}`)
      .then(response => {
        setTeacher(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [teacherId]);

  return (
    <div className="two-panel-layout">
      <div className="logout-div">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <button className='btnn'><Link to={routes.ActivityRegistration}>Add Activity</Link></button>
      {/* <button className='btnnn'onClick={handleGenerateReport}>Generate Report</button> */}
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
        <button
          className={`panel-button ${activePanel === 'panel3' ? 'active' : ''}`}
          onClick={() => handleClick('panel3')}
        >
          Generate Report
        </button>
      </div>
      <div className={`panel ${activePanel === "panel1" ? "active" : ""}`}>
        <h2>Welcome {teacher.name}</h2>
        <p>
          <div className="teacher-profile">
              <p>Name: {teacher.name}</p>
              <p>Department: {teacher.department}</p>
              <p>Email: {teacher.email}</p>
              <p>Phone: {teacher.mobileNo}</p>
              <p>Qualification: {teacher.qualification}</p>
          </div>
        </p>
      </div>
      <div className={`panel ${activePanel === "panel2" ? "active" : ""}`}>
        {/* <h2>Panel 2 Content</h2> */}
        <div>
          <h2>{teacher.name}'s Profile</h2>
          <p><strong>Email:</strong> {teacher.email}</p>
          <p><strong>Department:</strong> {teacher.department}</p>
          
          <h3 style={{ color: "orange" }}>Activities:</h3>
          <h4 style={{ color: "blue" }}>Activity 1:</h4>
          {teacher.activity1s && teacher.activity1s.map(activity => (
            <div key={activity.a1_id}>
              <p><strong>Event:</strong> {activity.event}</p>
              <p><strong>Title:</strong> {activity.title}</p>
              <p><strong>Date:</strong> {activity.date}</p>
              <p><strong>Number of Participants:</strong> {activity.noOfParticipants}</p>
              <p><strong>Remark:</strong> {activity.remark}</p>
              <div className="dotted-line"></div>
            </div>
            ))}
      
          <h4 style={{ color: "blue" }}>Activity 2:</h4>
          {teacher.activity2s && teacher.activity2s.map(activity => (
            <div key={activity.a2_id}>
              <p><strong>Author:</strong> {activity.author}</p>
              <p><strong>Title:</strong> {activity.title}</p>
              <p><strong>Date:</strong> {activity.date}</p>
              <p><strong>Publication:</strong> {activity.publication}</p>
              <p><strong>Remark:</strong> {activity.remark}</p>
              <div className="dotted-line"></div>
            </div>
          ))}
          
          <h4 style={{ color: "blue" }}>Activity 3:</h4>
          {teacher.activity3s && teacher.activity3s.map(activity => (
            <div key={activity.a3_id}>
              <p><strong>Title of Research:</strong> {activity.titleOfResearch}</p>
              <p><strong>Date:</strong> {activity.date}</p>
              <p><strong>Name of Researchers:</strong> {activity.nameOfResearchers}</p>
              <div className="dotted-line"></div>
            </div>
          ))}
          
          <h4 style={{ color: "blue" }}>Activity 4:</h4>
          {teacher.activity4s && teacher.activity4s.map(activity => (
            <div key={activity.a4_id}>
              <p><strong>Name:</strong> {activity.name}</p>
              <p><strong>Achievement:</strong> {activity.achievement}</p>
              <p><strong>Date:</strong> {activity.date}</p>
              <p><strong>Remark:</strong> {activity.remark}</p>
              <div className="dotted-line"></div>
            </div>
          ))}
          
          <h4 style={{ color: "blue" }}>Activity 5:</h4>
          {teacher.activity5s && teacher.activity5s.map(activity => (
            <div key={activity.a5_id}>
              <p><strong>Student Name:</strong> {activity.studentName}</p>
              <p><strong>Standard:</strong> {activity.standard}</p>
              <p><strong>Date:</strong> {activity.date}</p>
              <p><strong>Achievement:</strong> {activity.achievement}</p>
              <p><strong>Remark:</strong> {activity.remark}</p>
              <div className="dotted-line"></div>
            </div>
            ))}
        </div>
      </div>
      <div className={`panel ${activePanel === "panel3" ? "active" : ""}`}>
          <h5>Please select month and year to generate report for</h5>
          <p></p>
          <div>
            <label htmlFor="month">Month:</label>
            <select id="month" onChange={handleMonth}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <label htmlFor="year">Year:</label>
            <select id="year" onChange={handleYear}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <button className='btnnn' onClick={handleGenerateReport}>Generate Report</button>
      </div>
  </div>
  );
}

export default TeacherDashboard
