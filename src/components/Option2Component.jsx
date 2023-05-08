import React,{useState} from 'react'
import '../css/optioncomponent.css'


function Option2Component() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [publication, setPublication] = useState('');
  const [remark, setRemark] = useState('');

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