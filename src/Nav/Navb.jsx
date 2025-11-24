import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";

function Navbar() {
  const [isOpen,setIsOpen] =useState(false);
  const menuRef = useRef(null); // reference to the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <header>
    <div className="container">
      <nav>
        {/* <div className="logo">
    <div className="baderschool"><Link className="bader-link" to="/homesch">
          BaderSchool
             </Link></div>        </div> */}
             <div className="logo">
      {/* <Link className="bader-link" to="/homesch">BaderSchool</Link> */}
  <Link to="/">
<img 
  className="img1-Navb-sch" 
  src={myImage} 
  alt="productName" 
/>           </Link>

</div>
        {/* <ul className={isOpen ? "nav-link active" : "nav-link"}>
          <li><a href="/homesch "className={({ isActive }) => isActive ? "active-link" : ""} >Home</a></li>
          <li><a href="/aboutsch">About Us</a></li>
          <li><a href="/eventsch">Events</a></li>
          <li><a href="/contactsch">Contacts</a></li>
        </ul> */}
        <ul ref={menuRef} className={isOpen ? "nav-link active" : "nav-link"}>
  <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
  >الرئيسية</NavLink></li>
  <li><NavLink to="/aboutsch" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
  >حول المدرسة  </NavLink></li>
  <li><NavLink to="/eventsch" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
>الأنشطة</NavLink></li>
  <li><NavLink to="/contactsch" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
  >الاتصال</NavLink></li>
    <li><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}
          onClick={() => setIsOpen(false)}   // 👈 Close menu here
    >تسجيل</NavLink></li>

</ul>

<div className="icon" onClick={toggleMenu}> 
      {isOpen ? <FaTimes /> : <FaBars />}
</div>
      </nav>
    </div>
</header>
<section>
  {/* <div className="container"> */}
    {/* <div className="container-image">

  <div className="content">
<h2>Home </h2>
  </div>
  </div> */}
</section>

</>
  )
}
export default Navbar;
