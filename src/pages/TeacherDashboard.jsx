import React,{useState} from 'react'
import '../css/panels.css'

function TeacherDashboard() {
  const [activePanel, setActivePanel] = useState("panel1");

  const handleClick = (panel) => {
    setActivePanel(panel);
  };

  // const [teacher, setTeacher] = useState({});

  // useEffect(() => {
  //   // Fetch teacher data from backend API
  //   axios.get(`/api/teachers/${props.teacherId}`)
  //     .then(response => {
  //       setTeacher(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [props.teacherId]);

  const teacher={ "e_id": 1,
  "name": "Jay",
  "mobilenumber": "9741354109",
  "email": "jay2@gmail.com",
  "address": "IIIT Bangalore",
  "password": "jay",
  "roles": "Admin",
  "qualification": "B.C.A",
  "joinDate": "2020-05-04T00:00:00.000+00:00",
  "activity1s": [
      {
          "a1_id": 1,
          "event": "Hallo",
          "title": "TedEx",
          "date": "2020-05-04T00:00:00.000+00:00",
          "noOfParticipants": 150,
          "remark": "Good"
      },
      {
          "a1_id": 2,
          "event": "Hallo",
          "title": "TedEx",
          "date": "2020-05-04T00:00:00.000+00:00",
          "noOfParticipants": 150,
          "remark": "Good"
      }
  ],
  "activity2s": [
      {
          "a2_id": 1,
          "author": "SD",
          "title": "Madagascar",
          "date": "2020-05-06T00:00:00.000+00:00",
          "remark": "Nice",
          "publication": "J.P publications"
      },
      {
          "a2_id": 2,
          "author": "SD",
          "title": "Madagascar",
          "date": "2020-05-06T00:00:00.000+00:00",
          "remark": "Nice",
          "publication": "J.P publications"
      }
  ],
  "activity3s": [
      {
          "a3_id": 1,
          "titleOfResearch": "sleepCycle",
          "date": "2022-04-08T00:00:00.000+00:00",
          "nameOfResearchers": "Sandy,Deepak,Palak,Tanu"
      },
      {
          "a3_id": 2,
          "titleOfResearch": "sleepCycle",
          "date": "2022-04-08T00:00:00.000+00:00",
          "nameOfResearchers": "Sandy,Deepak,Palak,Tanu"
      }
  ],
  "activity4s": [
      {
          "a4_id": 1,
          "name": "Sandy",
          "achievement": "Gold for sleeping",
          "date": "2022-05-08T00:00:00.000+00:00",
          "remark": "Nice!!But try to sleep more"
      },
      {
          "a4_id": 2,
          "name": "Sandy",
          "achievement": "Gold for sleeping",
          "date": "2022-05-08T00:00:00.000+00:00",
          "remark": "Nice!!But try to sleep more"
      }
  ],
  "activity5s": [
      {
          "a5_id": 1,
          "studentName": "Sandy",
          "standard": "X-th",
          "date": "2022-04-01T00:00:00.000+00:00",
          "achievement": "Gold medal for simping",
          "remark": "Simp more and more!!!"
      },
      {
          "a5_id": 2,
          "studentName": "Sandy",
          "standard": "X-th",
          "date": "2022-04-01T00:00:00.000+00:00",
          "achievement": "Gold medal for simping",
          "remark": "Simp more and more!!!"
      }
  ],
  "department": "CSE"}


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
        <h2>Welcome {teacher.name}</h2>
        <p>
          <div className="teacher-profile">
              <p>Name: {teacher.name}</p>
              <p>Department: {teacher.department}</p>
              <p>Email: {teacher.email}</p>
              <p>Phone: {teacher.mobilenumber}</p>
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
