import React, { useState } from "react";
import '../App.css'
import Option1Component from '../components/Option1Component';
import Option2Component from '../components//Option2Component';
import Option3Component from '../components//Option3Component';
import Option4Component from '../components//Option4Component';
import Option5Component from '../components//Option5Component';

function ActivityRegistration() {
  const [activeOption, setActiveOption] = useState(1);
  
    const handleOptionClick = (option) => {
      setActiveOption(option);
    };
  
    const renderOptionComponent = () => {
      switch (activeOption) {
        case 1:
          return <Option1Component />;
        case 2:
          return <Option2Component />;
        case 3:
          return <Option3Component />;
        case 4:
          return <Option4Component />;
        case 5:
          return <Option5Component />;
        default:
          return null;
      }
    };
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleOptionClick(1)}>Conferences,Seminars,Workshops conducted</li>
          <li onClick={() => handleOptionClick(2)}>Research Publications</li>
          <li onClick={() => handleOptionClick(3)}>Research Projects Undertaken</li>
          <li onClick={() => handleOptionClick(4)}>Staff achievement</li>
          <li onClick={() => handleOptionClick(5)}>Student achievement</li>
        </ul>
      </div>
      <div className="option-container">
        {renderOptionComponent()}
      </div>
    </div>
  );
}

export default ActivityRegistration;
