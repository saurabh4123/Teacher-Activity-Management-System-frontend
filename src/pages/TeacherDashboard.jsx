import React,{useState,useEffect} from 'react'
import '../css/panels.css'
import { Link } from 'react-router-dom';
import routes from '../router/routes';
import axios from 'axios';
import {baseUrl} from '../utils/constans.js'

function TeacherDashboard() {
  const [activePanel, setActivePanel] = useState("panel1");

  const handleClick = (panel) => {
    setActivePanel(panel);
  };
  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;
  const [teacher, setTeacher] = useState({});

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
      <button className='btnn'><Link to={routes.ActivityRegistration}>Add Activity</Link></button>
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
      
      <h3>Activities:</h3>
      <h4>Activity 1:</h4>
      {teacher.activity1s && teacher.activity1s.map(activity => (
        <div key={activity.a1_id}>
          <p><strong>Event:</strong> {activity.event}</p>
          <p><strong>Title:</strong> {activity.title}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Number of Participants:</strong> {activity.noOfParticipants}</p>
          <p><strong>Remark:</strong> {activity.remark}</p>
        </div>
      ))}
      
      <h4>Activity 2:</h4>
      {teacher.activity2s && teacher.activity2s.map(activity => (
        <div key={activity.a2_id}>
          <p><strong>Author:</strong> {activity.author}</p>
          <p><strong>Title:</strong> {activity.title}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Publication:</strong> {activity.publication}</p>
          <p><strong>Remark:</strong> {activity.remark}</p>
        </div>
      ))}
      
      <h4>Activity 3:</h4>
      {teacher.activity3s && teacher.activity3s.map(activity => (
        <div key={activity.a3_id}>
          <p><strong>Title of Research:</strong> {activity.titleOfResearch}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Name of Researchers:</strong> {activity.nameOfResearchers}</p>
        </div>
      ))}
      
      <h4>Activity 4:</h4>
      {teacher.activity4s && teacher.activity4s.map(activity => (
        <div key={activity.a4_id}>
          <p><strong>Name:</strong> {activity.name}</p>
          <p><strong>Achievement:</strong> {activity.achievement}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Remark:</strong> {activity.remark}</p>
        </div>
      ))}
      
      <h4>Activity 5:</h4>
      {teacher.activity5s && teacher.activity5s.map(activity => (
        <div key={activity.a5_id}>
          <p><strong>Student Name:</strong> {activity.studentName}</p>
          <p><strong>Standard:</strong> {activity.standard}</p>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Achievement:</strong> {activity.achievement}</p>
          <p><strong>Remark:</strong> {activity.remark}</p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default TeacherDashboard
