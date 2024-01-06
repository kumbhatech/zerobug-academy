import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'
import Footer from './Footer'
const About = () => {
  return (
 <Fragment>
   <Menu/>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: "67px", padding: "0 30px"}}>
                    <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>Subjects</h5>
                    <i className="fa fa-angle-down text-primary"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "9"}}>
                    <div className="navbar-nav w-100">
                      
                        
                       <Link to="" className="nav-item nav-link">Apps Design</Link> 
                        <Link to="" className="nav-item nav-link">Marketing</Link>
                        
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="/" className="text-decoration-none d-block d-lg-none">
                    <img src='assets/img/logo (2).png' style={{width:"200px"}}/>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <div className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown"> courses</Link>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <div className="dropdown">
                                        <Link to="" className="dropdown-item "  data-toggle="dropdown" id="blog2">Programing</Link>
                                        <div className="book">
                                            <Link to="/blog" className="dropdown-item">Python Training</Link>
                                            <Link to=""className="dropdown-item">Core Java & J2EE</Link>
                                            <Link to=""className="dropdown-item">AngularJs Training</Link>
                                            <Link to=""className="dropdown-item">ReactjS Training</Link>
                                            <Link to=""className="dropdown-item">NodeJs Training</Link>
                                            <Link to=""className="dropdown-item">Django Training</Link>
                                            <Link to=""className="dropdown-item">PHP Training</Link>
                                        </div>
                                    </div>
                                    <Link to="" className="dropdown-item" >AWS</Link>
                                    <Link to="" className="dropdown-item" >Data Science</Link>
                                    <Link to="" className="dropdown-item" >Machine Learning</Link>
                                    <Link to="" className="dropdown-item" >Oragcle</Link>
                                    <Link to="" className="dropdown-item" >Dot Net</Link>
                                   
                                    <Link to="" className="dropdown-item">WebDesign </Link>
                                    <Link to="" className="dropdown-item">Selenium Training</Link>
                                    
                                    <Link to="" className="dropdown-item">Digital Markating</Link>
                                </div>
                            </div>
                            <Link to="" className="nav-item nav-link active">About</Link>
                            <Link to="" className="nav-item nav-link">Development</Link>
                            
                            <Link to="/blog" className="nav-item nav-link">blog</Link>
                            <Link to="" className="nav-item nav-link">Contact</Link>
                        </div>
                        <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="">Join Now</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
   {/* <!-- Header Start --> */}
    <div className="container-fluid page-header1" >
        <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                <h3 className="display-4 text-white text-uppercase">About</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">About</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


   {/*  <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="assets/img/about.jpg" alt=""/>
                </div>
                <div className="col-lg-7">
                    <div className="text-left mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo
                         dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus
                          gubergren sit
                         rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur 
                         diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit
                          gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
   {/*  <!-- About End --> */}
   <Footer/>
 </Fragment> 
  )
}

export default About;