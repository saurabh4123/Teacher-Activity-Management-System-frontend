import React from "react";

function AdminDashboard() {
  function handleLogout() {
    alert("Logout Successfull");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
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
            name="Activity1"
            value="Activity1"
          />
          <label forHtml="Activity1"> Activity1</label>
          <input
            type="checkbox"
            id="Activity2"
            name="Activity2"
            value="Activity2"
          />
          <label forHtml="Activity2"> Activity2</label>
          <input
            type="checkbox"
            id="Activity3"
            name="Activity3"
            value="Activity3"
          />
          <label forHtml="Activity3"> Activity3</label>
          <input
            type="checkbox"
            id="Activity4"
            name="Activity4"
            value="Activity4"
          />
          <label forHtml="Activity4"> Activity14</label>
          <input
            type="checkbox"
            id="Activity5"
            name="Activity5"
            value="Activity5"
          />
          <label forHtml="Activity5"> Activity5</label>
          <br />
        </div>
      </div>

      <div className="activity">
        <h6>Filter by teachers</h6>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="Teacher1"
            name="Teacher1"
            value="Teacher1"
          />
          <label forHtml="Activity1"> Teacher 1</label>
          <input
            type="checkbox"
            id="Teacher2"
            name="Teacher2"
            value="Teacher2"
          />
          <label forHtml="Activity2"> Teacher 2</label>
        </div>
      </div>

      <div className="activity">
        <h6>Filter by date</h6>
        <div className="checkbox-container">
          From : <input type="date" name="from" />
          To : <input type="date" name="to" />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Download Report
      </button>
    </div>
  );
}

export default AdminDashboard;
