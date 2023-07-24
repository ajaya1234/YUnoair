
import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'
import Single_Router from './Single_pages.jsx/Single_Router'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Single_Channel() {







  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div className="single-channel-page" id="content-wrapper">

          <div className="single-channel-image">
            <img className="img-fluid" alt="" src="img/channel-banner.png" />
            <div className="channel-profile">
              <img className="channel-profile-img" alt="" src="img/s2.png" />
              <div className="social hidden-xs">
                Social &nbsp;
                <Link className="fb" to="#">
                  Facebook
                </Link>
                <Link className="tw" to="#">
                  Twitter
                </Link>
                <Link className="gp" to="#">
                  Google
                </Link>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-sm-8 mt-1'>

              <div className="single-channel-nav">
                <nav className="navbar navbar-expand-lg navbar-light">

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

                    <Link className="channel-brand p-2" to="#">
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

                    <ul className="navbar-nav mr-auto">

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

          <Tabs className="single-channel-nav mt-2">
            <TabList>

              <Tab style={{ paddingLeft: "118px" ,border:"none" , borderBottom:"1px solid" , borderColor:"black"}}>Videos</Tab>
              <Tab style={{ paddingLeft: "118px"  ,border:"none" , borderBottom:"1px solid" , borderColor:"black"}}>Playlist</Tab>
              <Tab style={{ paddingLeft: "118px"  ,border:"none" , borderBottom:"1px solid" , borderColor:"black"}}>Channels</Tab>
              <Tab style={{ paddingLeft: "118px"  ,border:"none" , borderBottom:"1px solid" , borderColor:"black"}}>Discusion</Tab>
              <Tab style={{ paddingLeft: "118px"  ,border:"none" , borderBottom:"1px solid" , borderColor:"black"}}>About</Tab>

            </TabList>

            <TabPanel>
              <div className="container-fluid">
                <div className="video-block section-padding">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-title">
                        <div className="btn-group float-right right-action">
                          <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                              Rated</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                              Viewed</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" />
                              &nbsp; Close</a>
                          </div>
                        </div>
                        <h6>Videos</h6>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                      <div className="video-card">
                        <div className="video-card-image">
                          <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                          <a href="#"><img className="img-fluid" src="img/v1.png" /></a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div className="video-page text-success">
                            Education <a title-data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                          </div>
                          <div className="video-view">
                            1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                      <div className="video-card">
                        <div className="video-card-image">
                          <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                          <a href="#"><img className="img-fluid" src="img/v2.png" /></a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div className="video-page text-success">
                            Education <a title-data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                          </div>
                          <div className="video-view">
                            1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                      <div className="video-card">
                        <div className="video-card-image">
                          <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                          <a href="#"><img className="img-fluid" src="img/v3.png" /></a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div className="video-page text-danger">
                            Education <a title-data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
                          </div>
                          <div className="video-view">
                            1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                      <div className="video-card">
                        <div className="video-card-image">
                          <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                          <a href="#"><img className="img-fluid" src="img/v4.png" /></a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div className="video-page text-success">
                            Education <a title-data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                          </div>
                          <div className="video-view">
                            1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a tabIndex={-1} href="#" className="page-link">Previous</a>
                      </li>
                      <li className="page-item active"><a href="#" className="page-link">1</a></li>
                      <li className="page-item"><a href="#" className="page-link">2</a></li>
                      <li className="page-item"><a href="#" className="page-link">3</a></li>
                      <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>



        </div>
      </div>
    </>
  )
}

export default Single_Channel


