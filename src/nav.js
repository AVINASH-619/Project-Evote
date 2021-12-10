import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaFacebook, FaInstagram, FaLocationArrow, FaTwitter, FaYahoo } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import './nav.css'
const Nav = () => {
  const [click, setClick] = useState(false)
  const [showButton, setShowButton] = useState(true);
  const showBurger = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false)

    } else {
      setClick(false)
      setShowButton(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showBurger)
    return () => {
      window.removeEventListener('resize', showBurger)
    }
  }, [])
  return (
    <div>
      <h2 className="logo">EVOTE</h2>
      <div className={showButton ? "laptop" : "hidden"}>
        <ul className="nav-items">

          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/Login'>Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/CreatePoll'>CreatePoll</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/Results'>Results</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/Register'>Register</Link></li>
        </ul>
      </div>

      <div className={showButton ? "hidden" : "laptop"}>
        <button className="Bar" onClick={() => setClick(!click)}>{!click ? <FaBars /> : <CgClose />}</button>
        <div className={click ? "show" : "hidden"}>
          <ul className="nav-items1">
            <li className="nav-item"><Link className="nav-link" to='/' onClick={() => setClick(!click)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Login' onClick={() => setClick(!click)}>Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/CreatePoll' onClick={() => setClick(!click)}>CreatePoll</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Results' onClick={() => setClick(!click)}>Results</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Register' onClick={() => setClick(!click)}>Register</Link></li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="footer">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>ContactUs</h4>
            <ul className={showButton ? "social-media" : "chMedia"}>
              <li className={showButton ? "social-links" : "chLinks"} style={{"size":"2rem"}}><FaFacebook /></li>
              <li className={showButton ? "social-links" : "chLinks"}><FaYahoo></FaYahoo></li>
              <li className={showButton ? "social-links" : "chLinks"}><FaInstagram></FaInstagram></li>
              <li className={showButton ? "social-links" : "chLinks"}><FaTwitter /></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Adderss</h4>
            <ul>
              <li className="social-links"><FaLocationArrow /></li><span> 5th Floor A-188,Hyderabad</span>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>MORE</h4>
            <ul className={showButton ? "social-media" : "chMedia"}>
              <li className="social-links">Privacy Policy</li>
              <p>Phone</p>
              <li className="social-links">+91 7893858434</li>
              <li className="social-links">+91 999999999</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nav;
