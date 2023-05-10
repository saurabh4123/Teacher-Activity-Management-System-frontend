import "./App.css";
import axios from "axios";
import AppRouter from "./router/AppRouter";
import { baseUrl } from "./utils/constans";

// Set the base URL for Axios
axios.defaults.baseURL = baseUrl;

// Add the JWT token to every request
axios.interceptors.request.use(
  (config) => {
    const user=JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  return (
    <>
        <AppRouter />
    </>
  );
}

export default App;
