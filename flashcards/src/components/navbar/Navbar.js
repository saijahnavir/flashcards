import Errorpage from '../errorpage/Errorpage';
import Home from '../hometab/Home';
import Body from '../body/Body';
import Calendar from '../calendar/Calendar';
import './Navbar.css'

import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';


const Navbar = () => {

    return(
      <Router>

      <div className="Nav-container">
      <nav className="navbar navbar-expand-lg ">
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calendar">
                  My Calendar
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Widgets
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                    <img src="https://i.pinimg.com/originals/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg" width="30px" height="30px"></img>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>

        

        <Routes>
        <Route path='/' element={<Body/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Calendar' element={<Calendar/>}/>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
</Router>
      
       
    )

}

export default Navbar;