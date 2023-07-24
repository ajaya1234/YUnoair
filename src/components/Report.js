import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import '../setting.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Report = () => {

    const [ gettop , setgettop] = useState([]);

console.log("sadqqqq",gettop)

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
    
        await axios.get("http://16.16.91.234:3003/api/report_history", data, options).then(res => {
    
            setgettop(res.data.data);
            //console.log("adasd",res)
    
        }).catch(err => {
        })
      }



    return (
        <>
<Header/>
            <Sidebar />
            <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <div className="video-block section-padding">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title">
                                        <h6> Report History</h6>
                                    </div>
                                    {gettop.map((list) => {
    
    return (
                                        <h6>
                                            {list.tag}
                                        </h6>
                                    
                                    );
  })}

                                </div>



                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* <Footer /> */}
        </>
    )
}

export default Report