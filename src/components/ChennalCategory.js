import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ChennalCategory = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="top-mobile-search">
              <div className="row">
                <div className="col-md-12">
                  <form className="mobile-search">
                    <div className="input-group">
                      <input type="text" placeholder="Search for..." className="form-control" />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-dark"><i className="fas fa-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="top-category section-padding mb-4">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="main-title">
                    <h6>Channels Categories</h6>
                  </div>
                </div>
                <div className="col-md-12" style={{backgroundColor:"rgba(0,0,0,0.1)"}}> 
                  <div className="category ">
                  <Slider {...settings} >
                  
                  <div className="category_item">
                    <Link to="#">

                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/music.png" alt="" />

                      <h6 className="category_h6">Music</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/live.png" alt="" />
                      <h6 className="category_h6">Live</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/gaming.png" alt="" />
                      <h6 className="category_h6">Gaming</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/cricket.png" alt="" />
                      <h6 className="category_h6">Cricket</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img  style={{width:"40px"}} className="img-fluid category_img" src="img/cars.png" alt="" />
                      <h6 className="category_h6">Cars <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/all.png" alt="" />
                      <h6 className="category_h6">All</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/art.png" alt="" />
                      <h6 className="category_h6">Art</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <div className='text-center'>
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/Architecture.png" alt="" />
                      </div>
                      <h6 className="category_h6">Architecture</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/comedy.png" alt="" />
                      <h6 className="category_h6">Comedy</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/Entertainment.png" alt="" />
                      <h6 className="category_h6">Entertainment  <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>                                            
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/news.png" alt="" />
                      <h6 className="category_h6">News</h6>                                            
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/business.png" alt="" />
                      <h6 className="category_h6">Business</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/music.png" alt="" />
                      <h6 className="category_h6">Music</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/live.png" alt="" />
                      <h6 className="category_h6">Live</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/gaming.png" alt="" />
                      <h6 className="category_h6">Gaming</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/cricket.png" alt="" />
                      <h6 className="category_h6">Cricket</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/cars.png" alt="" />
                      <h6 className="category_h6">Cars <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/all.png" alt="" />
                      <h6 className="category_h6">All</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/art.png" alt="" />
                      <h6 className="category_h6">Art</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/Architecture.png" alt="" />
                      <h6 className="category_h6">Architecture</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/comedy.png" alt="" />
                      <h6 className="category_h6">Comedy</h6>
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/Entertainment.png" alt="" />
                      <h6 className="category_h6">Entertainment  <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>                                            
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/news.png" alt="" />
                      <h6 className="category_h6">News</h6>                                            
                    </Link>
                  </div>
                  <div className="category_item">
                    <Link to="#">
                      <img style={{width:"40px"}} className="img-fluid category_img" src="img/business.png" alt="" />
                      <h6 className="category_h6">Business</h6>
                    </Link>
                  </div>
                  </Slider>
                  </div>
                </div>
              </div></div>




            <hr />
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h6>Featured Videos</h6>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: '10px', paddingRight: '0px' }}>
                  <div className="video-card">
                    <div className="video-card-image" style={{ border: "none", borderRadius: '15px' }}>
                      <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                      <Link to="/video_page"><img className="img-fluid " src="img/v1.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="/video_page">There are many variations of passages of
                          Lorem</Link>
                      </div>
                      <div className="single-video-author box mb-3" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="float-right">
                          <p><i className="fas fa-eye" /> 10.4M</p>
                          <p><i className="fa fa-thumbs-up" /> 131K</p>
                        </div>
                        <Link to="/view_profile"> <img className="img-fluid " src="img/s4.png" alt="" /></Link>
                        <p><a to="/view_profile"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: '10px', paddingRight: '0px' }}>
                  <div className="video-card">
                    <div className="video-card-image" style={{ border: "none", borderRadius: '15px' }}>
                      <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                      <Link to="/video_page"><img className="img-fluid " src="img/v2.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="/video_page">There are many variations of passages of
                          Lorem</Link>
                      </div>
                      <div className="single-video-author box mb-3" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="float-right">
                          <p><i className="fas fa-eye" /> 10.4M</p>
                          <p><i className="fa fa-thumbs-up" /> 131K</p>
                        </div>
                        <Link to="/view_profile"> <img className="img-fluid " src="img/s4.png" alt="" /></Link>
                        <p><a to="/view_profile"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: '10px', paddingRight: '0px' }}>
                  <div className="video-card">
                    <div className="video-card-image" style={{ border: "none", borderRadius: '15px' }}>
                      <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                      <Link to="/video_page"><img className="img-fluid " src="img/v3.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="/video_page">There are many variations of passages of
                          Lorem</Link>
                      </div>
                      <div className="single-video-author box mb-3" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="float-right">
                          <p><i className="fas fa-eye" /> 10.4M</p>
                          <p><i className="fa fa-thumbs-up" /> 131K</p>
                        </div>
                        <Link to="/view_profile"> <img className="img-fluid " src="img/s4.png" alt="" /></Link>
                        <p><a to="/view_profile"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: '10px', paddingRight: '0px' }}>
                  <div className="video-card">
                    <div className="video-card-image" style={{ border: "none", borderRadius: '15px' }}>
                      <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                      <Link to="/video_page"><img className="img-fluid " src="img/v4.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="/video_page">There are many variations of passages of
                          Lorem</Link>
                      </div>
                      <div className="single-video-author box mb-3" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="float-right">
                          <p><i className="fas fa-eye" /> 10.4M</p>
                          <p><i className="fa fa-thumbs-up" /> 131K</p>
                        </div>
                        <Link to="/view_profile"> <img className="img-fluid " src="img/s4.png" alt="" /></Link>
                        <p><a to="/view_profile"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                        <p>3 Months ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-0" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ChennalCategory
