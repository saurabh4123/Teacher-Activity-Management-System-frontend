import React,{useState} from 'react'
import '../css/optioncomponent.css'


function Option4Component() {
  const [name, setName] = useState('');
  const [achievement, setAchievement] = useState('');
  const [date, setDate] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      achievement,
      date,
      remark,
    };
    console.log(formData);
  };

  return (
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
  );
}

export default Option4Component