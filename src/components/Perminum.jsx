import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsFillBookmarkStarFill } from "react-icons/bs"
import Sidebar from './Sidebar'

const Perminum = () => {

  return (
    <div>
<Header/>
      <div id="wrapper">
       <Sidebar/>
        <div id="content-wrapper">


          <div className="container-fluid pb-0">

            <div className="top-category section-padding mb-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title row">
                    <h6 className='bg-warning p-2' style={{ borderRadius: "10px" }}>All Permium Videos For You</h6>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4'>
                    <div className="video-card" style={{ margin: '5px' }}>
                      <div className="video-card-image" style={{ borderRadius: '15px' }}>
                        <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                        <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="/video_page">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                          <div className="float-right">
                            <p><i className="fas fa-eye" /> 10.4M</p>
                            <p><i className="fa fa-thumbs-up" /> 131K</p>
                          </div>
                          <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                          <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                          <p>3 Months ago</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className="video-card" style={{ margin: '5px' }}>
                      <div className="video-card-image" style={{ borderRadius: '15px' }}>
                        <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                        <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="/video_page">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                          <div className="float-right">
                            <p><i className="fas fa-eye" /> 10.4M</p>
                            <p><i className="fa fa-thumbs-up" /> 131K</p>
                          </div>
                          <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                          <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                          <p>3 Months ago</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className="video-card" style={{ margin: '5px' }}>
                      <div className="video-card-image" style={{ borderRadius: '15px' }}>
                        <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                        <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="/video_page">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                          <div className="float-right">
                            <p><i className="fas fa-eye" /> 10.4M</p>
                            <p><i className="fa fa-thumbs-up" /> 131K</p>
                          </div>
                          <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                          <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                          <p>3 Months ago</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='col-sm-4'>
                    <div className="video-card" style={{ margin: '5px' }}>
                      <div className="video-card-image" style={{ borderRadius: '15px' }}>
                        <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                        <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="/video_page">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                          <div className="float-right">
                            <p><i className="fas fa-eye" /> 10.4M</p>
                            <p><i className="fa fa-thumbs-up" /> 131K</p>
                          </div>
                          <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                          <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                          <p>3 Months ago</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Perminum