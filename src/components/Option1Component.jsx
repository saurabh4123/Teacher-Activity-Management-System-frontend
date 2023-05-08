import React,{useState} from 'react'
import '../css/optioncomponent.css'

function Option1Component() {
  const [event, setEvent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [noOfParticipants, setNoOfParticipants] = useState('');
  const [remark, setRemark] = useState('');

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