import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
const Single_Router = () => {
  return (
    <>

    <Sidebar />
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid">
          <div className="video-block section-padding">
          <div id="content-wrapper">
    
    <div className="single-channel-nav">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="channel-brand" to="#">
          Osahan Channel{" "}
          <span
            title=""
            data-placement="top"
            data-toggle="tooltip"
            data-original-title="Verified"
          >
            <i className="fas fa-check-circle text-success" />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/videos">
                Videos <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Playlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/singlechannels">
                Channels
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Discussion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Donate
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control form-control-sm mr-sm-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-sm my-2 my-sm-0"
              type="submit"
            >
              <i className="fas fa-search" />
            </button>{" "}
            &nbsp;&nbsp;&nbsp;{" "}
            <button className="btn btn-outline-danger btn-sm" type="button">
              Subscribe
              <strong>1.4M</strong>
            </button>
          </form>
        </div>
      </nav>
    </div>
    </div>
                
                </div>
                  </div>
                </div>
              </div>
            
          </>
  )
}

export default Single_Router