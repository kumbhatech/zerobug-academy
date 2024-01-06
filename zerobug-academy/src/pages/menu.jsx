import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Fragment>
        {/*  <!-- Topbar Start --> */}
    <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
                <Link to="/" className="text-decoration-none">
                    <img src='assets/img/logo (2).png' style={{width:"200px"}}/>
                </Link>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                        <small>Chennai</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                        <small>zerobugacademy.info@gmail.com</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                        <small>+91-8946004709 +91-9750061584</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    </Fragment>
  )
}

export default Menu;