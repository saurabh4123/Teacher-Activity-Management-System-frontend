import React,{useState} from 'react'
import '../css/optioncomponent.css'
import routes from '../router/routes';
import { baseUrl } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Option1Component() {
  const navigate=useNavigate();
  const [event, setEvent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [noOfParticipants, setNoOfParticipants] = useState('');
  const [remark, setRemark] = useState('');

  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      event,
      title,
      date,
      noOfParticipants,
      remark,
    };
    console.log(formData);
    axios.post(baseUrl+'/api/activity/add-activity1/'+teacherId, formData)
    .then(response => {
      // console.log(response);
      alert('Activity added successfully!!')
      navigate(routes.ActivityRegistration);
      setEvent('');
      setTitle('');
      setDate('');
      setNoOfParticipants('');
      setRemark('');
      e.target.reset();
    })
    .catch(error => {
      console.log(error);
      alert('Activity addition unsuccessful..')
    });
  };

  return (
    <div className='container'>
      <h1>Add Conferences,Seminars,Workshops conducted</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Event Name:</label>
        <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>No. of participants:</label>
        <input type="number" value={noOfParticipants} onChange={(e) => setNoOfParticipants(e.target.value)} />
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

export default Option1Component