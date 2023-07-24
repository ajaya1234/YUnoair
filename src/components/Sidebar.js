import React from 'react'
import { Link } from 'react-router-dom'
import {MdExplore} from 'react-icons/md'
import {BsFileMusicFill} from 'react-icons/bs'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import { BiHelpCircle } from 'react-icons/bi';

function Sidebar() {
  return (
   <>
   <ul className="sidebar navbar-nav">
    <li className="nav-item ">
      <Link className="nav-link" to="/home">
        <i className="fas fa-fw fa-home" />
        <span>Home</span>
      </Link>
    </li>
    <li className="nav-item ">
    <Link className="nav-link" to="/music">
    <BsFileMusicFill style={{ fontSize: "20px" }} />
    <span>Music</span>
</Link>
  </li>
    {/* <li className="nav-item">
      <Link className="nav-link" to="/channels">
        <i className="fas fa-fw fa-users" />
        <span>Channels</span>
      </Link>
    </li> */}
    {/* <li className="nav-item">
      <Link className="nav-link" to="/single_channel">
        <i className="fas fa-fw fa-user-alt" />
        <span>Single Channel</span>
      </Link>
    </li> */}
    {/* <li className="nav-item">
      <Link className="nav-link" to="/video_page">
        <i className="fas fa-fw fa-video" />
        <span>Video Page</span>
      </Link>
    </li> */}
    {/* <li className="nav-item">
      <Link className="nav-link" to="/upload_video">
        <i className="fas fa-fw fa-cloud-upload-alt" />
        <span>Upload Video</span>
      </Link>
    </li> */}
    {/* <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-fw fa-folder" />
        <span>Pages</span>
      </Link>
      <div className="dropdown-menu">
        <h6 className="dropdown-header">Login Screens:</h6>
        <Link className="dropdown-item" to="/login">
          Login
        </Link>
        <Link className="dropdown-item" to="/register">
          Register
        </Link>
        <Link className="dropdown-item" to="/forgot_password">
          Forgot Password
        </Link>
        <div className="dropdown-divider" />
        <h6 className="dropdown-header">Other Pages:</h6>
        <Link className="dropdown-item" to="/404">
          404 Page
        </Link>
        <Link className="dropdown-item" to="/blank">
          Blank Page
        </Link>
      </div>
    </li> */}
    <li className="nav-item">
      <Link className="nav-link" to="/history_page">
        <i className="fas fa-fw fa-history" />
        <span>History</span>
      </Link>
    </li>
    {/* <li className="nav-item">
    <Link className="nav-link" to="/explore">
    <MdExplore style={{fontSize:"20px"}}/>
      <span>Explore</span>
    </Link>
  </li> */}
    <li className="nav-item dropdown">
      <Link to="/category" className="nav-link">
        <i className="fas fa-fw fa-list-alt" />
        <span>Categories</span>
      </Link>
     
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/help">

        <BiHelpCircle style={{ fontSize: "20px" }}/>
        <span>Help</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">
        <i className="fas fa-fw fa-history" />
        
        <span>About</span>
      </Link>
    </li>
    {/* <li className="nav-item dropdown">
    <Link to="/permium" className="nav-link">
    <BsFillBookmarkStarFill style={{fontSize:"20px"}}/>
      <span>Permium Videos</span>
    </Link>
   
  </li> */}
    {/* <li className="nav-item channel-sidebar-list">
      <h6>SUBSCRIPTIONS</h6>
      <ul>
        <li>
          <Link to="/subscriptions">
            <img className="img-fluid" alt="" src="img/s1.png" /> Your Life
          </Link>
        </li>
        <li>
          <Link to="/subscriptions">
            <img className="img-fluid" alt="" src="img/s2.png" /> Unboxing{" "}
            <span className="badge badge-warning">2</span>
          </Link>
        </li>
        <li>
          <Link to="/subscriptions">
            <img className="img-fluid" alt="" src="img/s3.png" /> Product /
            Service
          </Link>
        </li>
        <li>
          <Link to="/subscriptions">
            <img className="img-fluid" alt="" src="img/s4.png" /> Gaming
          </Link>
        </li>
      </ul>
    </li> */}
  </ul></>
  )
}

export default Sidebar
