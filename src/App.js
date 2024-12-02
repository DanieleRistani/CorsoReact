import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './static/navbar';
import Footer from './static/footer';

function App() {
  return (
          <>
          <Navbar/>
          <Outlet/>
          <Footer/>
          </>
  );
}

export default App;
