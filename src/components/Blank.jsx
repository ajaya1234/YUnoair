import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Blank = () => {
  return (
    <>

<div className='row'>



    <div className='col-sm-2'>
    <Sidebar/>
    </div>


    <div className='col-sm-10 p-4'>
<div id="content-wrapper">
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
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</a>
              </div>
            </div>
            <h6>Blank Page</h6>
          </div>
        </div>
        <div className="col-md-12">
          <button type="button" className="btn btn-primary border-none">Primary</button>
          <button type="button" className="btn btn-secondary border-none">Secondary</button>
          <button type="button" className="btn btn-success border-none">Success</button>
          <button type="button" className="btn btn-danger border-none">Danger</button>
          <button type="button" className="btn btn-warning border-none">Warning</button>
          <button type="button" className="btn btn-info border-none">Info</button>
          <button type="button" className="btn btn-light border-none">Light</button>
          <button type="button" className="btn btn-dark border-none">Dark</button>
          <button type="button" className="btn btn-link border-none">Link</button>
          <hr />
          <button type="button" className="btn btn-outline-primary">Primary</button>
          <button type="button" className="btn btn-outline-secondary">Secondary</button>
          <button type="button" className="btn btn-outline-success">Success</button>
          <button type="button" className="btn btn-outline-danger">Danger</button>
          <button type="button" className="btn btn-outline-warning">Warning</button>
          <button type="button" className="btn btn-outline-info">Info</button>
          <button type="button" className="btn btn-outline-light">Light</button>
          <button type="button" className="btn btn-outline-dark">Dark</button>
          <hr />
          <button type="button" className="btn btn-primary btn-lg border-none">Large button</button>
          <button type="button" className="btn btn-secondary btn-lg border-none">Large button</button>
          <hr />
          <button type="button" className="btn btn-primary btn-sm border-none">Small button</button>
          <button type="button" className="btn btn-secondary btn-sm border-none">Small button</button>
          <hr />
          <button type="button" className="btn btn-primary btn-lg btn-block border-none">Block level button</button>
          <button type="button" className="btn btn-secondary btn-lg btn-block border-none">Block level button</button>
          <hr />
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark mb-0" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="sticky-footer">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-lg-6 col-sm-6">
          <p className="mt-1 mb-0">© Copyright 2020 <strong className="text-dark">Vidoe</strong>. All Rights Reserved<br />
            <small className="mt-0 mb-0">Made with <i className="fas fa-heart text-danger" /> by <a className="text-primary" target="_blank" href="https://askbootstrap.com/">Ask Bootstrap</a>
            </small>
          </p>
        </div>
        <div className="col-lg-6 col-sm-6 text-right">
          <div className="app">
            <a href="#"><img alt src="img/google.png" /></a>
            <a href="#"><img alt src="img/apple.png" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


    </div>
    </div>
    </>
  )
}

export default Blank