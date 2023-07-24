import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';

const Category = () => {
  return (
    <>
<Header/>
     <Sidebar/>
     <div id="wrapper">
       <div id="content-wrapper">
      
        <div className="container-fluid">
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title">                               
                  <h6>Categories</h6>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#1EBCA5'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/art.png" alt="" />
                    <h5>Art <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
                  </Link>
                  {/* <div class="ss"><img src="img/art.png" alt=""><h5>Art </h5> </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#E76940'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/Architecture.png" alt="" />
                    <h5>Architecture  <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
                  </Link>
                  {/* <div class="ss" style="background: #E76940;"><img src="img/Architecture.png" alt=""><h5>Architecture </h5> </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#E74FB3'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/comedy.png" alt="" />
                    <h5>Comedy</h5>
                  </Link>
                  {/* <div class="ss" style="background: #E74FB3;"><img src="img/comedy.png" alt=""><h5>Comedy </h5> </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#7B49E2'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/Entertainment.png" alt="" />
                    <h5>Entertainment <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
                  </Link>
                  {/* <div class="ss" style="background: #7B49E2;"><img src="img/Entertainment.png" alt=""><h5>Entertainment </h5> </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#E76940'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/news.png" alt="" />
                    <h5>News</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#3D80E8'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/Business.png" alt="" />
                    <h5>Business</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#7B49E2'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/music.png" alt="" />
                    <h5>Music</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#1EBCA5'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/live.png" alt="" />
                    <h5>Live</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#E74FB3'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/gaming.png" alt="" />
                    <h5>Gaming</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#3D80E8'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/cricket.png" alt="" />
                    <h5>Cricket</h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#1EBCA5'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/cars.png" alt="" />
                    <h5>Cars <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-sm-3 mb-3">
                <div className="category-item mt-0 mb-0" style={{background: '#E76940'}}>
                  <Link to="/chennal_category">
                    <img className="img-fluid" src="img/all.png" alt="" />
                    <h5>All</h5>
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
     
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Category
