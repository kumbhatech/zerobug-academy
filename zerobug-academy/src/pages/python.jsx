import React, { Fragment } from 'react'
import Menu from './menu';
import DropList from './DropList';
import { Link } from 'react-router-dom'

import Footer from './Footer';
const Python = () => {
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
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                    <img src='assets/img/logo (2).png' style={{width:"200px"}}/>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <div className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle active" data-toggle="dropdown"> courses</Link>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <div className="dropdown">
                                        <Link href="" className="dropdown-item "  data-toggle="dropdown" id="blog2">Programing</Link>
                                        <div className="book">
                                            <Link to=""className="dropdown-item">Python Training</Link>
                                            <Link to=""className="dropdown-item">Core Java & J2EE</Link>
                                            <Link to=""className="dropdown-item">AngularJs Training</Link>
                                            <Link to=""className="dropdown-item">ReactjS Training</Link>
                                            <Link to=""className="dropdown-item">NodeJs Training</Link>
                                            <Link to=""className="dropdown-item">Django Training</Link>
                                            <Link to=""className="dropdown-item">PHP Training</Link>
                                        </div>
                                    </div>



                                         <Link to="" className="dropdown-item">Data Science </Link>
                                        <Link to="" className="dropdown-item">Machine Learning </Link>
                                        <Link to="" className="dropdown-item">AWS </Link>
                                        <Link to="" className="dropdown-item">Dot Net</Link>
                                        <Link to="" className="dropdown-item">Oragcle</Link>

                                      <Link to="" className="dropdown-item">WebDesign </Link>
                                      <Link to="" className="dropdown-item">Selenium Training</Link>
                                    
                                        <Link to="" className="dropdown-item">Digital Markating</Link>
                                </div>
                            </div>
                            <Link to="/About" className="nav-item nav-link ">About</Link>
                            <Link to="" className="nav-item nav-link">Development</Link>
                            
                            <Link to="" className="nav-item nav-link">blog</Link>
                            <Link to="" className="nav-item nav-link">Contact</Link>
                        </div>
                        <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="">Join Now</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
       
      {/*     <!-- Header Start --> */}
    <div className="container-fluid page-header" >
        <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                <h3 className="display-4 text-white text-uppercase">Python Training</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Python Training</p>
                </div>
            </div>
        </div>
    </div>
   {/*  <!-- Header End --> */}

   {/* <!-- Detail Start --> */}
    <div className="container-fluid py-5 body-align-text">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-5">
                      
                        <img className="img-fluid rounded w-100 mb-4" src="assets/img/python-training-in-chennai.jpg" alt="Image"/>
                        <p>Discover the Best Python Course in Chennai at Zerobug Academy – Your Gateway to Excellence in Python Programming!</p>
                        <p >Are you ready to embark on a journey of mastering Python, the language of innovation and versatility? </p>
                        <p>Look no further than Zerobug Academy, the Best Institute in Chennai, Pallikaranai, Velachery, renowned for delivering top-notch 
                            Python courses that cater to the evolving needs of the tech industry.</p>
                       <h4>Why Python?</h4>
                        <p>Python, known for its readability and versatility, has emerged as a programming
                             language of choice for developers worldwide. Whether you're a beginner or an experienced
                              coder, Python offers a seamless learning curve and a vast ecosystem that
                             spans web development, data science, artificial intelligence, and more.</p>
                       
                        <h2 className="mb-4">Key Modules of Our Python Course:</h2>
                        
                        <p>Python Basics: Lay a strong foundation by grasping the fundamentals of Python programming</p>
                        <p>Web Development with Flask: Dive into web development and learn how to create dynamic web applications with Flask.</p>
                        <p>Data Analysis and Visualization: Uncover the power of Python for data analysis and visualization using popular libraries like Pandas and Matplotlib.</p>
                        <p>Machine Learning with Python: Explore the fascinating realm of machine learning and implement algorithms using libraries like Scikit-Learn.</p>
                        
                        <h4>Benefits of Learning Python at Zerobug:</h4>
                          <p>•	Industry-Driven Curriculum: Our course is curated based on industry requirements, ensuring you're equipped with skills that employers seek.</p>
                          <p>•	Hands-On Projects: Gain practical experience by working on real-world projects, honing your problem-solving abilities</p>
                          <p>•	Expert Instructors: Learn from seasoned professionals dedicated to guiding you through your Python journey.</p>
                          <p>•	Career Support: Benefit from our career guidance and placement assistance to step confidently into the professional realm.</p>
                          
                          <h4>Career Opportunities:</h4>
                          <p>The demand for Python developers is soaring across industries. By mastering Python at Zerobug Academy, you position yourself for an array of career opportunities:</p>
                          <p>•	Python Developer: Create robust applications and software solutions.</p>
                          <p>•	Data Scientist: Dive into data analytics, machine learning, and artificial intelligence.</p>   
                          <p>•	Web Developer: Craft dynamic websites and applications using Python frameworks.</p>
                          <p>•	Automation Engineer: Streamline processes through automation scripts.</p>
                          


                    </div>

                    {/* <!-- Comment List --> */}
                    <div className="mb-5">
                        <h4 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Why Choose Zerobug Academy for Python Courses?</h4>
                        <div className="media mb-4">
                            
                            <div>
                                <h6>1. Expert Faculty:</h6>
                                <p>Learn from industry experts and certified professionals with extensive experience in Python development. Our faculty brings a wealth of knowledge
                                     and real-world insights to the classroom, ensuring you receive the best education</p>
                               
                            </div>
                        </div>
                        <div className="media mb-4">
                            
                            <div className="media-body">
                                <h6>2. Comprehensive Curriculum: </h6>
                                <p>Our Python course is designed to cover the entire spectrum of Python programming, from fundamentals to advanced concepts. Master the language 
                                    that powers web development, data science, artificial intelligence, and more.</p>
                            </div>
                        </div>
                        <div className="media mt-4">
                                    <div className="media-body">
                                       <h6>3. Hands-On Training: </h6>
                                       <p> At Zerobug Academy, we believe in a hands-on, practical approach to learning. 
                                           Our Python course includes extensive practical sessions,
                                            projects, and case studies to ensure you gain real-time exposure and expertise.</p>
                                       
                                   </div>
                        </div>

                        <div className="media mb-4">
                            
                            <div className="media-body">
                                <h6>Latest Tools and Techniques:  </h6>
                                <p>Stay ahead in the rapidly evolving tech industry by learning the latest tools and techniques in Python programming. Our courses are
                                     regularly updated to incorporate the latest industry trends and best practices.</p>
                            </div>
                        </div>
                        <div className="media mb-4">
                            
                            <div className="media-body">
                                <h6>Placement Assistance:  </h6>
                                <p>As the Best Institute in Pallikaranai, we understand the importance of kickstarting your career. Zerobug Academy provides placement assistance,
                                     connecting you with leading companies and job opportunities.</p>
                            </div>
                        </div>
                        <div className="media mb-4">
                            
                            <div className="media-body">
                                <h6>Flexible Learning Formats  </h6>
                                <p>We offer flexible learning formats to suit your preferences. Choose from classroom training, online sessions,
                                     or a blended approach – whatever works best for you.</p>
                            </div>
                        </div>
                    </div>
                      
                    <div className="mb-5">
                        <h6 className="text-primary mb-3">Jan 01, 2050</h6>
                        <h6 className="mb-5">Join Zerobug Academy for the Best Python Course in Chennai and Elevate Your Career</h6>
                       
                       
                        <p>Whether you are a beginner looking to explore the world of programming or a seasoned developer aiming to enhance your skills, Zerobug Academy is your trusted partner for success. Enroll in the Best Python Course in
                             Chennai and unlock a world of possibilities in the tech industry.</p>
                             <p>Don't miss out on this opportunity to learn from the best and shape your future in Python programming. Contact Zerobug Academy today and take the first step toward becoming a 
                                Python expert! Your journey to excellence starts here.</p>
                            <p>Enroll Now and Embrace the Future of Coding with Zerobug Academy in Chennai!</p>
                        <h6 className="mb-5">Frequently Asked Questions</h6>
                        
                            <h6>1. Why should I choose Zerobug Academy for Python training in Chennai?</h6>
                            <p>   Zerobug Academy stands out as the premier institute in Chennai for Python training. We offer expert-led courses, hands-on training, a comprehensive curriculum, and placement assistance.
                                 Our commitment to quality education and industry relevance makes us the preferred choice for Python enthusiasts.</p>
                            <h6>2. What is the duration of the Python course, and is there a flexible schedule?</h6>
                            <p>   The duration of our Python course varies based on the program you choose. We understand the importance of flexibility, and hence, we provide options for weekday and weekend batches. 
                                Our flexible schedules cater to both working professionals and students.</p>
                            <h6>3.Who are the instructors at Zerobug Academy, and what is their experience?</h6>
                            <p>   Zerobug Academy boasts a team of experienced instructors who are industry experts and certified professionals. Our instructors bring years of practical experience in Python development,
                                 ensuring that you receive top-notch education with real-world insights</p>
                            <h6>4. What is the curriculum of the Python course, and does it cover advanced topics?</h6>
                            <p> Our Python course has a comprehensive curriculum that covers everything from the fundamentals to advanced topics. You will delve into areas such as web development, data science, artificial 
                                intelligence, and more. We regularly update our curriculum to align with industry trends.</p>
                            <h6> 5. Does Zerobug Academy provide placement assistance for Python course participants?</h6>
                            <p>   Yes, Zerobug Academy is committed to helping you kickstart your career. We provide placement assistance, connecting you with leading companies and job opportunities in the tech industry. 
                                Our goal is to empower you with the skills and support needed for a successful career in Python programming.</p>
                            <p>   Have more questions about our Python courses? Feel free to reach out to us, and our team will be happy to provide you with detailed information and guidance on your Python learning journey 
                                at the best institute in Chennai, Zerobug Academy. </p>

                    </div>

                 </div>

                  

                <div className="col-lg-4 mt-5 mt-lg-0">
                   {/*  <!-- Author Bio --> */}
                    
                    <div class="card border-0">
                        <div class="card-header bg-light text-center p-4">
                            <h1 class="m-0">Register Now</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control border-0 p-4" placeholder="Your name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select border-0 px-4" style={{height: "47px"}}>
                                        <option selected>Select a course</option>
                                        <option value="1">Course 1</option>
                                        <option value="2">Course 1</option>
                                        <option value="3">Course 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-dark btn-block border-0 py-3" type="submit">Conact Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                  

                 
                   {/*  <!-- Category List --> */}
                    <div className="mb-5" style={{marginTop:"30px"}}>
                        <h3 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Recently Placed Students</h3>
                        <div className="marquee-container">
                             <marquee direction="up" scrollAmount="2">
                                <div className="marquee-text">
                                <p >Thiru L</p>
                                  <p >Eval Solution Pvt Ltd</p>

                                  <p>Android Developer</p>
                                  <p >Jahan M</p>
                                  <p >Mark Advertising</p>
                                  <p>SEO Dveloper</p>
                                </div>  
                                 
                                   
                                  

                            </marquee>
                          </div>
                    </div>

                  {/*   <!-- Recent Post --> */}
                    <div className="mb-5">
                        <h6 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Python Training Course syllabus</h6>
                     
                          <DropList/>
                    </div>

                   {/*  <!-- Tag Cloud --> */}
                    <div className="mb-5">
                        <h3 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Tag Cloud</h3>
                        <div className="d-flex flex-wrap m-n1">
                            <a href="" className="btn btn-outline-primary m-1">Design</a>
                            <a href="" className="btn btn-outline-primary m-1">Development</a>
                            <a href="" className="btn btn-outline-primary m-1">Marketing</a>
                            <a href="" className="btn btn-outline-primary m-1">SEO</a>
                            <a href="" className="btn btn-outline-primary m-1">Writing</a>
                            <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Detail End --> */}

      <Footer/>
    </Fragment>
  )
}

export default Python;