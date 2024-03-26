import { FaBars,FaUserCircle } from "react-icons/fa";



import "./index.css"

const Header = () => {
  return (
    <nav className='nav-bar heading'>
      <div className="logo">
        <FaBars className="logo-icon"/>
        <p className="logo-heading">IndigoLearn</p>


      </div>
    <div className="options">
      <p className="option">BUY COURSE</p>
      <p className="option">BUY BOOKS</p>
      <p className="option">RROGRAMS</p>
      <p className="option">FREE RESOURSES</p>
    </div>
    <button className="login-button">
      <FaUserCircle className="login-logo "/>

        Log In /Sign Up
    </button>

    </nav>
   
   
  )
}

export default Header