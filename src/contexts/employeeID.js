// EmployeeContext.js

import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeContextProvider = (props) => {
  const [employeeId, setEmployeeId] = useState(null);

  const updateEmployeeId = (id) => {
    setEmployeeId(id);
  };

  return (
    <EmployeeContext.Provider value={{ employeeId, updateEmployeeId }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
