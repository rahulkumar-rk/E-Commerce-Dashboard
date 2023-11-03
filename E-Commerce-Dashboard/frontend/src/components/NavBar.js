import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const NavBar = () => {
  let auth=localStorage.getItem('user');
  let navigate=useNavigate();
  const logout=()=>{
   localStorage.clear();
   navigate('/signup');
  }
  return (
    <div>
      <img 
      alt='logo'
      className='logo'
      src='https://crowdspring3-production.s3.amazonaws.com/project_entries/4d/f4d2d73279b4407b8b00b672f2cc171f.jpg'></img>
        {auth ? <ul className='nav-ul'>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update">Update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
        :
        <ul className='nav-ul nav-right'>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        }
      </div>
  )
}

export default NavBar