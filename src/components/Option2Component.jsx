import React,{useState} from 'react'
import '../css/optioncomponent.css'
import routes from '../router/routes';
import { baseUrl } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Option2Component() {
  const navigate=useNavigate();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [publication, setPublication] = useState('');
  const [remark, setRemark] = useState('');

  const tech=JSON.parse(localStorage.getItem("user"));
  const teacherId=tech.e_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      author,
      title,
      date,
      publication,
      remark,
    };
    console.log(formData);
    axios.post(baseUrl+'/api/activity/add-activity2/'+teacherId, formData)
    .then(response => {
      // console.log(response);
      alert('Activity added successfully!!')
      navigate(routes.ActivityRegistration);
      setAuthor('');
      setTitle('');
      setDate('');
      setPublication('');
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
      <h1>Research Publications</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Author Name:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
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
        <label>Remark:</label>
        <input type='text' value={remark} onChange={(e) => setRemark(e.target.value)} />
      </div>
      <div>
        <label>Publication:</label>
        <input type="text" value={publication} onChange={(e) => setPublication(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Option2Component