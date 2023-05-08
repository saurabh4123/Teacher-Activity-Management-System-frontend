import React,{useState} from "react";

function AdminDashboard() {
  const [selectedFilters, setSelectedFilters] = useState({
    activities: [],
    teachers: [],
    fromDate: "",
    toDate: "",
  });

  function handleLogout() {
    alert("Logout Successfull");
  }

  function handleCheckboxChange(e) {
    const { name, value, checked } = e.target;
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[name] = [...updatedFilters[name], value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter(
          (filterValue) => filterValue !== value
        );
      }
      return updatedFilters;
    });
  }

  function handleFromDateChange(e) {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      fromDate: e.target.value,
    }));
  }

  function handleToDateChange(e) {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      toDate: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedFilters);
  }

  return (
    <div className="admin-dashboard-page">
      <div className="logout-div">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h5>Use filters combined to get results</h5>
      <div className="activity">
        <h6>Filter by activity</h6>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="Activity1"
            name="activities"
            value="Activity1"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity1"> Activity1</label>
          <input
            type="checkbox"
            id="Activity2"
            name="activities"
            value="Activity2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity2"> Activity2</label>
          <input
            type="checkbox"
            id="Activity3"
            name="activities"
            value="Activity3"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity3"> Activity3</label>
          <input
            type="checkbox"
            id="Activity4"
            name="activities"
            value="Activity4"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity4"> Activity4</label>
          <input
            type="checkbox"
            id="Activity5"
            name="activities"
            value="Activity5"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity5"> Activity5</label>
          <br />
        </div>
      </div>

      <div className="activity">
        <h6>Filter by teachers</h6>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="Teacher1"
            name="teachers"
            value="Teacher1"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity1"> Teacher 1</label>
          <input
            type="checkbox"
            id="Teacher2"
            name="teachers"
            value="Teacher2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Activity2"> Teacher 2</label>
        </div>
      </div>

      <div className="activity">
        <h6>Filter by date</h6>
        <div className="checkbox-container">
          From : <input type="date" name="from" onChange={handleFromDateChange}/>
          To : <input type="date" name="to" onChange={handleToDateChange} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Download Report
      </button>
    </div>
  );
}

export default AdminDashboard;
