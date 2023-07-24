import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import '../setting.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Searchdata = () => {

  
    const [ gettop , setgettop] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `http://16.16.91.234:3003/api/search?term=${searchTerm}`
        );
        //console.log("Responsesdsd data:", response.data);
  
        setSearchResults(response.data.data);
      } catch (error) {
        console.error("Error searching:", error.response.data);
      }
    };
  
    const filteredResults = searchResults.filter((result) =>
      result.video_name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        gettopvideo();
      }, []);
    
      const gettopvideo = async () => {
        const options = {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": '*'
          }
        }
        const data = JSON.stringify({
        });
    
        await axios.get("http://16.16.91.234:3003/api/search", data, options).then(res => {
          setgettop(res.data.data);
    
        }).catch(err => {
        })
      }



    return (
        <>
       
                            <nav
          className="navbar navbar-expand navbar-light bg-dark static-top osahan-nav sticky-top"
          style={{ zIndex: "1" }}
        >
          &nbsp;&nbsp;
          <Link className="navbar-brand mr-1" to="/">
            <img
              style={{ backgroundColor: "", height: "59px", width: "163px" }}
              className="img-fluid"
              alt=""
              src="img/logo.png"
            />
          </Link>
          </nav>
          <Sidebar/>
          <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <div className="video-block section-padding">
                            <div className="row">
                            <div className="col-md-12">
<form
            style={{ paddingTop: "" ,width:"100%"}}
            className=" d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search"
          >
            <div className="input-group text-center">
              <input width={"100%"}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="form-control"
              />

              <div className="input-group-append">
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>

            {filteredResults.length > 0 && (
              <div className="dropdown" style={{ background: "#fff",width:"62%" }}>
                {filteredResults.map((result) => (
                  <div className="text-left" style={{fontSize:'25px'}} key={result._id}>
                    <Link
                      onClick={() => {
                        localStorage.setItem("videoiid", result._id);
                        localStorage.setItem("useridd", result.user_id);
                        localStorage.setItem("channelid", result.channel_id);
                        localStorage.setItem(
                          "categorytpee",
                          result.category_type
                        );
                      }}
                      className="dropdown-item"
                      style={{ width: "100%" }}
                      to="/video_page"
                    >
                      {result.video_name} <img style={{height:'41px' , width:'58px' ,borderRadius:'15px' , float:'right'}}
                                         
                                         className="img-fluid"
                                         src={"http://16.16.91.234:3003/uploads/" + result.video[1].filename}
                                        alt=""
                                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </form>
          </div>
                   </div>
                   </div>
                    </div>

                </div>
            </div>
            {/* <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <div className="video-block section-padding">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title">
                                        <h6> searchdata</h6>
                                    </div>
                                    {gettop.map((list) => {
  return (
    <>
      
        <img
          alt="Avatar" style={{ height: '100px', width: '100px' }} 
          src={"http://16.16.91.234:3003/uploads/" + list.channel_data[0].image[0].filename}
        />
      
    </>
  );
})} 

                                </div>



                            </div>

                        </div>
                    </div>

                </div>
            </div> */}


            {/* <Footer /> */}
        </>
    )
}

export default Searchdata