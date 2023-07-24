import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
    return (
        <div>

            <footer className="sticky-footer">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mt-1 mb-0">
                                © Copyright 2020 <strong className="text-dark">Yuonair</strong>.
                                All Rights Reserved
                                <br />
                                <small className="mt-0 mb-0">
                                    Made with <i className="fas fa-heart text-danger" /> by{" "}
                                    <Link
                                        className="text-primary"
                                        target="_blank"
                                        to="https://askbootstrap.com/"
                                    >
                                        Ask Bootstrap
                                    </Link>
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <div className="app">
                                <Link to="#" className='footer_app_btn'>
                                    <img alt="" src="img/google.png" />
                                </Link>
                                <Link to="#">
                                    <img alt="" src="img/apple.png" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Link className="scroll-to-top rounded" to="#page-top">
                <i className="fas fa-angle-up" />
            </Link>
            <div
                className="modal fade"
                id="logoutModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-sm modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Ready to Leave?
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <Link className="btn btn-primary" to="login.html">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
