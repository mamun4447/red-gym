// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Blogs />
      <ToastContainer />
    </div>
  );
}

export default App;
