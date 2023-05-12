import React,{useState} from 'react'
import '../css/optioncomponent.css'
import routes from '../router/routes';
import { baseUrl } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Option4Component() {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [achievement, setAchievement] = useState('');
  const [date, setDate] = useState('');
  const [remark, setRemark] = useState('');

  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      achievement,
      date,
      remark,
    };
    console.log(formData);
    axios.post(baseUrl+'/api/activity/add-activity4/'+teacherId, formData)
    .then(response => {
      // console.log(response);
      alert('Activity added successfully!!')
      navigate(routes.ActivityRegistration);
      setAchievement('');
      setDate('');
      setName('');
      setRemark('');
      event.target.reset();
    })
    .catch(error => {
      console.log(error);
      alert('Activity addition unsuccessful..')
    });
  };

  return (
    <div className='container'>
      <h1>Add Staff achievement</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of staff:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Achievement:</label>
        <input type="text" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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

export default Option4Component