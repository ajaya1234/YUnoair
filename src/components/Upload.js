import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Upload = () => {
  return (
    <>
<Header/>
      <div id="wrapper">
   <Sidebar/>
        <div id="content-wrapper">
          <div className="container-fluid pt-5 pb-5">
            <div className="row">
              <div className="col-md-8 mx-auto text-center upload-video pt-5 pb-5">
                <form action="upload-video.html" method="post">
                  <h1>
                    <input type="file" id="file_upload_id" style={{display: 'none'}} />
                    <i className="fas fa-file-upload text-primary" onclick="_upload()" />
                  </h1>
                  <h4 className="mt-5">Select Video files to upload</h4>
                  <p className="land">or drag and drop video files</p>
                  <div className="mt-4">
                    {/* <a class="btn btn-outline-primary" href="upload-video.html">Upload Video</a> */}
                    <Link to="/upload_video">
                    <button className="btn btn-primary" type="submit" style={{background: '#000080', borderRadius: '4px'}}>Upload </button>
                    </Link>
                    </div>
                </form>
              </div>
            </div>
          </div>
       
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Upload
