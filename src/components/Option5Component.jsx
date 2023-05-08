import React,{useState} from 'react'
import '../css/optioncomponent.css'


function Option5Component() {
  const [studentName, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [date, setDate] = useState('');
  const [achievement, setAchievement] = useState('');
  const [remark, setRemark] = useState('');

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