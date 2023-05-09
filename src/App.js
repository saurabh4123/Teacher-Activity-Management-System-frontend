import "./App.css";
import Navbar from "./components/Navbar";
import { EmployeeContextProvider } from "./contexts/employeeID";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
    <EmployeeContextProvider>
      <Navbar />
      <AppRouter />
      </EmployeeContextProvider>
    </>
  );
}

export default App;
