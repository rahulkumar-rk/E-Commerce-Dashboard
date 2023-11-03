import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Update from './components/Update';
import Logout from './components/Logout';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <NavBar/>
       <Routes> 

        <Route element={<PrivateComponent/>}>
       <Route path="/" element={<Home />} />
       <Route path="/add" element={<AddProduct/>} />
       <Route path="/update/:id" element={<Update/>} />
       <Route path="/logout" element={<Logout/>} />
       <Route path="/profile" element={<Profile/>} />
       </Route>

       <Route path="/signup" element={<SignUp/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
