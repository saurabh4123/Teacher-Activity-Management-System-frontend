import React,{useState,useEffect} from "react";
import '../css/admindash.css'
import axios from "axios";
import { baseUrl } from "../utils/constans";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";

function AdminDashboard() {
  const [selectedFilters, setSelectedFilters] = useState({
    activities: [],
    teachers: [],
    fromDate: "",
    toDate: "",
  });

  const navigate=useNavigate();

  function handleLogout() {
    alert("Logout Successfull");
    navigate(routes.LoginPage)
  }

  function handleCheckboxChange(e) {
    const { name, value, checked } = e.target;
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[name] = [...updatedFilters[name], value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter(
          (filterValue) => filterValue !== value
        );
      }
      return updatedFilters;
    });
  }

  // const teachers = ["Teacher 1", "Teacher 2", "Teacher 3"];
  // Get teacher list from backend
  const [teachers, setTeachers] = useState([]);
  const [tIDs,setTids] = useState([]);
  useEffect(() => {
    axios.get(baseUrl+"/api/employee/get-all")
      .then(response => {
        const teacherNames = response.data.map(teacher => teacher.name);
                            setTeachers(teacherNames);
                            // console.log(teacherNames);
        const teacherID = response.data.map(teacher=>teacher.e_id);
                        setTids(teacherID);
                        // console.log(teacherID)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  function handleFromDateChange(e) {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      fromDate: e.target.value,
    }));
  }

  function handleToDateChange(e) {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      toDate: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedFilters);
  }

  return (
    <div className="admin-dashboard-page">
      <div className="logout-div">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h5>Use filters combined to get results</h5>
      <div className="activity">
        <h6>Filter by activity</h6>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="Activity1"
            name="activities"
            value="Activity1"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity1"> Conferences,Seminars,Workshops conducted</label>
          <input
            type="checkbox"
            id="Activity2"
            name="activities"
            value="Activity2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity2"> Research Publications</label>
          <input
            type="checkbox"
            id="Activity3"
            name="activities"
            value="Activity3"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity3"> Research Projects Undertaken</label>
          <input
            type="checkbox"
            id="Activity4"
            name="activities"
            value="Activity4"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity4"> Staff achievement</label>
          <input
            type="checkbox"
            id="Activity5"
            name="activities"
            value="Activity5"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity5"> Student achievement</label>
          <br />
        </div>
      </div>

      <div className="activity">
        <h6>Filter by teachers</h6>
        <div className="checkbox-container">
          {teachers && teachers.map((teacher, index) => (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                id={teacher}
                name="teachers"
                value={tIDs[index]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={teacher}>{teacher}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="activity">
        <h6>Filter by date</h6>
        <div className="checkbox-container">
          From : <input type="date" name="from" onChange={handleFromDateChange}/>
          To : <input type="date" name="to" onChange={handleToDateChange} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Download Report
      </button>
    </div>
  );
}

export default AdminDashboard;
