import React,{useState} from 'react'
import '../css/optioncomponent.css'
import routes from '../router/routes';
import { baseUrl } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Option3Component() {
  const navigate=useNavigate();
  const [titleOfResearch, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [nameOfResearchers, setNameOfResearchers] = useState('');

  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      titleOfResearch,
      date,
      nameOfResearchers
    };
    console.log(formData);
    axios.post(baseUrl+'/api/activity/add-activity3/'+teacherId, formData)
    .then(response => {
      // console.log(response);
      alert('Activity added successfully!!')
      navigate(routes.ActivityRegistration);
      setDate('');
      setNameOfResearchers('');
      setTitle('');
      event.target.reset();
    })
    .catch(error => {
      console.log(error);
      alert('Activity addition unsuccessful..')
    });
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <h1>Add Research Projects Undertaken</h1>
      <div>
        <label>Title of research:</label>
        <input type="text" value={titleOfResearch} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Name of researchers:</label>
        <input type='text' value={nameOfResearchers} onChange={(e) => setNameOfResearchers(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Option3Component