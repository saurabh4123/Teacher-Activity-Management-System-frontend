import React,{useState} from 'react'
import '../css/optioncomponent.css'
import routes from '../router/routes';
import { baseUrl } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Option5Component() {
  const navigate=useNavigate();
  const [studentName, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [date, setDate] = useState('');
  const [achievement, setAchievement] = useState('');
  const [remark, setRemark] = useState('');

  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      studentName,
      standard,
      date,
      achievement,
      remark,
    };
    console.log(formData);
    axios.post(baseUrl+'/api/activity/add-activity5/'+teacherId, formData)
    .then(response => {
      // console.log(response);
      alert('Activity added successfully!!')
      navigate(routes.ActivityRegistration);
    })
    .catch(error => {
      console.log(error);
      alert('Activity addition unsuccessful..')
    });
  };

  return (
    <div className='container'>
      <h1>Student achievement</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of student:</label>
        <input type="text" value={studentName} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Stanadrd:</label>
        <input type="text" value={standard} onChange={(e) => setStandard(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Achievement:</label>
        <input type="text" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
      </div>
      <div>
        <label>Remark:</label>
        <input type='text' value={remark} onChange={(e) => setRemark(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Option5Component