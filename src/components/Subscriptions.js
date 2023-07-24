import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Subscriptions = () => {
  return (
    <>
<Header/>
       <div id="wrapper">
      <Sidebar/>
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <div className="btn-group float-right right-action">
                      <Link to="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</Link>
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</Link>
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</Link>
                      </div>
                    </div>
                    <h6>Subscriptions</h6>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s1.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-success btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s2.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s3.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-secondary btn-sm border-none">Subscribed <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s4.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s6.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s8.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s5.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s6.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s8.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s7.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-secondary btn-sm border-none">Subscribed <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s1.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="channels-card">
                    <div className="channels-card-image">
                      <Link to="#"><img className="img-fluid" src="img/s2.png" alt="" /></Link>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm border-none">Subscribe <strong>1.4M</strong></button> <button type="button" className="btn btn-warning btn-sm border-none"><i className="fas fa-times-circle" /></button></div>
                    </div>
                    <div className="channels-card-body">
                      <div className="channels-title">
                        <Link to="#">Channels Name</Link>
                      </div>
                      <div className="channels-view">
                        382,323 subscribers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center pagination-sm mb-0">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                  </li>
                  <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item">
                    <Link className="page-link" to="#">Next</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Subscriptions
