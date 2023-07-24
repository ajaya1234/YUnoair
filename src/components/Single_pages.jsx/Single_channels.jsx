import Header from '../Header'
import Sidebar from '../Sidebar'
import React from 'react'
import { Link } from 'react-router-dom'
const Single_channels = () => {
  return (
    <>

    <Sidebar />
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid">
          <div className="video-block section-padding">
          <div id="content-wrapper">
                    <div className="container-fluid pb-0">
                        <div className="video-block section-padding">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title">
                                        <div className="btn-group float-right right-action">
                                            <Link
                                                to="#"
                                                className="right-action-link text-gray"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-times-circle" />
                                                    &nbsp; Close
                                                </Link>
                                            </div>
                                        </div>
                                        <h6>Channels</h6>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s1.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s2.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s3.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    Subscribed
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">
                                                    Channels Name{" "}
                                                    <span
                                                        title=""
                                                        data-placement="top"
                                                        data-toggle="tooltip"
                                                        data-original-title="Verified"
                                                    >
                                                        <i className="fas fa-check-circle" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s4.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s6.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s8.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s5.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s6.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s8.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s7.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    Subscribed
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">
                                                    Channels Name{" "}
                                                    <span
                                                        title=""
                                                        data-placement="top"
                                                        data-toggle="tooltip"
                                                        data-original-title="Verified"
                                                    >
                                                        <i className="fas fa-check-circle" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s1.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="channels-card">
                                        <div className="channels-card-image">
                                            <Link to="#">
                                                <img className="img-fluid" src="img/s2.png" alt="" />
                                            </Link>
                                            <div className="channels-card-image-btn">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    Subscribe
                                                    <strong>1.4M</strong>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="channels-card-body">
                                            <div className="channels-title">
                                                <Link to="#">Channels Name</Link>
                                            </div>
                                            <div className="channels-view">382,323 subscribers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center pagination-sm mb-4">
                                    <li className="page-item disabled">
                                        <Link className="page-link" to="#" tabIndex={-1}>
                                            Previous
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            Next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <hr />
                        <div className="video-block section-padding">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title">
                                        <div className="btn-group float-right right-action">
                                            <Link
                                                to="#"
                                                className="right-action-link text-gray"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="fas fa-fw fa-times-circle" />
                                                    &nbsp; Close
                                                </Link>
                                            </div>
                                        </div>
                                        <h6>Featured Videos</h6>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="video-card">
                                        <div className="video-card-image">
                                            <Link className="play-icon" to="#">
                                                <i className="fas fa-play-circle" />
                                            </Link>
                                            <Link to="#">
                                                <img className="img-fluid" src="img/v5.png" alt="" />
                                            </Link>
                                            <div className="time">3:50</div>
                                        </div>
                                        <div className="video-card-body">
                                            <div className="video-title">
                                                <Link to="#">There are many variations of passages of Lorem</Link>
                                            </div>
                                            <div className="video-page text-success">
                                                Education{" "}
                                                <Link
                                                    title=""
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    to="#"
                                                    data-original-title="Verified"
                                                >
                                                    <i className="fas fa-check-circle text-success" />
                                                </Link>
                                            </div>
                                            <div className="video-view">
                                                1.8M views &nbsp;
                                                <i className="fas fa-calendar-alt" /> 11 Months ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="video-card">
                                        <div className="video-card-image">
                                            <Link className="play-icon" to="#">
                                                <i className="fas fa-play-circle" />
                                            </Link>
                                            <Link to="#">
                                                <img className="img-fluid" src="img/v6.png" alt="" />
                                            </Link>
                                            <div className="time">3:50</div>
                                        </div>
                                        <div className="video-card-body">
                                            <div className="video-title">
                                                <Link to="#">There are many variations of passages of Lorem</Link>
                                            </div>
                                            <div className="video-page text-danger">
                                                Education{" "}
                                                <Link
                                                    title=""
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    to="#"
                                                    data-original-title="Unverified"
                                                >
                                                    <i className="fas fa-frown text-danger" />
                                                </Link>
                                            </div>
                                            <div className="video-view">
                                                1.8M views &nbsp;
                                                <i className="fas fa-calendar-alt" /> 11 Months ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="video-card">
                                        <div className="video-card-image">
                                            <Link className="play-icon" to="#">
                                                <i className="fas fa-play-circle" />
                                            </Link>
                                            <Link to="#">
                                                <img className="img-fluid" src="img/v7.png" alt="" />
                                            </Link>
                                            <div className="time">3:50</div>
                                        </div>
                                        <div className="video-card-body">
                                            <div className="video-title">
                                                <Link to="#">There are many variations of passages of Lorem</Link>
                                            </div>
                                            <div className="video-page text-success">
                                                Education{" "}
                                                <Link
                                                    title=""
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    to="#"
                                                    data-original-title="Verified"
                                                >
                                                    <i className="fas fa-check-circle text-success" />
                                                </Link>
                                            </div>
                                            <div className="video-view">
                                                1.8M views &nbsp;
                                                <i className="fas fa-calendar-alt" /> 11 Months ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="video-card">
                                        <div className="video-card-image">
                                            <Link className="play-icon" to="#">
                                                <i className="fas fa-play-circle" />
                                            </Link>
                                            <Link to="#">
                                                <img className="img-fluid" src="img/v8.png" alt="" />
                                            </Link>
                                            <div className="time">3:50</div>
                                        </div>
                                        <div className="video-card-body">
                                            <div className="video-title">
                                                <Link to="#">There are many variations of passages of Lorem</Link>
                                            </div>
                                            <div className="video-page text-success">
                                                Education{" "}
                                                <Link
                                                    title=""
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    to="#"
                                                    data-original-title="Verified"
                                                >
                                                    <i className="fas fa-check-circle text-success" />
                                                </Link>
                                            </div>
                                            <div className="video-view">
                                                1.8M views &nbsp;
                                                <i className="fas fa-calendar-alt" /> 11 Months ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
          </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Single_channels