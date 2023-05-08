import React,{useState} from 'react'
import '../css/optioncomponent.css'


function Option3Component() {
  const [titleOfResearch, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [nameOfResearchers, setNameOfResearchers] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      titleOfResearch,
      date,
      nameOfResearchers
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default Option3Component