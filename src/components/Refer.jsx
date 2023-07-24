import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { CiCircleAlert } from 'react-icons/ci'
import { TbSquareRoundedArrowRight } from 'react-icons/tb'
import { RxCross1 } from 'react-icons/rx'
import {AiOutlineUpload} from 'react-icons/ai'

const Refer = () => {
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
                                        <div className='row justify-content-center'>
                                            <div className='col-sm-7'>
                                                <div className='card'>
                                                    <div className='card-header'>
                                                        <div className='text-center'>

                                                            <img width={"100%"} style={{}} className='img-fluid' src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/earn-money-by-referring-personal-loan-717x404.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='card-boy'>
                                                        <ol className='ml-5'>
                                                            <li style={{ color: "blue", paddingTop: "10px" }}>Share your referral code</li>
                                                            <li style={{ color: "blue", paddingTop: "10px" }}>Friends get $10 on their frist gesture</li>
                                                            <li style={{ color: "blue", paddingTop: "10px" }}>You get $10 off coupan</li>


                                                        </ol>
                                                    </div>
                                                    <div className='card-footer'>
                                                        <div className='text-center'>
                                                            <span style={{ backgroundColor: "blue", padding: "8px" ,borderRadius:"10px"}}> GSVAS35</span>
                                                        </div>
                                                        <div className='text-center mt-3'>
                                                            <button className='btn btn-info pl-3 pr-3'><AiOutlineUpload/> Invite friends now</button>
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

export default Refer