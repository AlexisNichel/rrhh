import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <header id="header-wrap">
          <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
            <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                  <span className="icon-menu" />
                  <span className="icon-menu" />
                  <span className="icon-menu" />
                </button>
                <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto w-100 justify-content-left clearfix">
                  <li className="nav-item active">
                    <a className="nav-link" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#feature">
                      feature
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="btn-sing float-right">
                  <a className="btn btn-border" href="#feature">FAQ</a>
                </div>
              </div>
            </div>
            <ul className="mobile-menu navbar-nav">
              <li>
                <a className="page-scroll" href="#hero-area">
                  Home
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#feature">
                  feature
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div id="hero-area" className="hero-area-bg">
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="contents text-center">
                    <h2 className="head-title wow fadeInUp">Super Simple Bootstrap HTML5 Template<br /> For Business, SaaS and Apps</h2>
                    <div className="header-button wow fadeInUp" data-wow-delay="0.3s">
                      <a href="#" className="btn btn-common">Download Now</a>
                    </div>
                  </div>
                  <div className="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
                    <img className="img-fluid" src="assets/img/hero-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="services" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Our Services</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
                  <div className="icon">
                    <i className="lni-cog" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Web Development</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="lni-bar-chart" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Graphic Design</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="lni-briefcase" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Business Branding</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="lni-pencil-alt" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Content Writing</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
                  <div className="icon">
                    <i className="lni-mobile" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">App Development</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12">
                <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
                  <div className="icon">
                    <i className="lni-layers" />
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Digital Marketing</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="feature">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text-wrapper">
                  <div>
                    <h2 className="title-hl wow fadeInLeft" data-wow-delay="0.3s">Learn More About Us</h2>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="features-box wow fadeInLeft" data-wow-delay="0.3s">
                          <div className="features-icon">
                            <i className="lni-layers" />
                          </div>
                          <div className="features-content">
                            <h4>
                              Bootstrap 4
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint. 
                            </p>
                          </div>
                        </div>
                      </div> 
                      <div className="col-md-6 col-sm-6">
                        <div className="features-box wow fadeInLeft" data-wow-delay="0.6s">
                          <div className="features-icon">
                            <i className="lni-briefcase" />
                          </div>
                          <div className="features-content">
                            <h4>
                              100% Free
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint. 
                            </p>
                          </div>
                        </div>
                      </div>           
                      <div className="col-md-6 col-sm-6">
                        <div className="features-box wow fadeInLeft" data-wow-delay="0.9s">
                          <div className="features-icon">
                            <i className="lni-cog" />
                          </div>
                          <div className="features-content">
                            <h4>
                              Responsive
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint. 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="features-box wow fadeInLeft" data-wow-delay="1.2s">
                          <div className="features-icon">
                            <i className="lni-leaf" />
                          </div>
                          <div className="features-content">
                            <h4>
                              Easy to Use
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 padding-none">
                <div className="feature-thumb wow fadeInRight" data-wow-delay="0.3s">
                  <img src="assets/img/feature/img-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="team" className="section-padding text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="team-item text-center">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/team/team-01.jpg" alt="" />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3><a href="#">Rafael Basilla</a></h3>
                    <p>Front-end Developer, Dropbox</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="team-item text-center">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/team/team-02.jpg" alt="" />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3><a href="#">Renee Fleck</a></h3>
                    <p>Product Designer, Tesla</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="team-item text-center">
                  <div className="team-img">
                    <img className="img-fluid" src="assets/img/team/team-03.jpg" alt="" />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true" /></a></li>
                          <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3><a href="#">Paul Kowalsy</a></h3>
                    <p>Lead Designer, TNW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="clients" className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">As Seen On</h2>
            </div>
            <div className="row text-align-">
              <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="client-item-wrapper">
                  <img className="img-fluid" src="assets/img/clients/img1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                <div className="client-item-wrapper">
                  <img className="img-fluid" src="assets/img/clients/img2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="0.9s">
                <div className="client-item-wrapper">
                  <img className="img-fluid" src="assets/img/clients/img3.png" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp" data-wow-delay="1.2s">
                <div className="client-item-wrapper">
                  <img className="img-fluid" src="assets/img/clients/img4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="testimonial" className="testimonial section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div id="testimonials" className="owl-carousel wow fadeInUp" data-wow-delay="1.2s">
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                      </div>
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img1.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2><a href="#">Grenchen Pearce</a></h2>
                        <h3><a href="#">Boston Brothers co.</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                      </div>
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img2.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2><a href="#">Domeni GEsson</a></h2>
                        <h3><a href="#">Awesome Technology co.</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                      </div>
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img3.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h2><a href="#">Dommini Albert</a></h2>
                        <h3><a href="#">Nesnal Design co.</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                      </div>
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img4.png" alt="" />
                      </div>
                      <div className="info">
                        <h2><a href="#">Fernanda Anaya</a></h2>
                        <h3><a href="#">Developer</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                      </div>
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img5.png" alt="" />
                      </div>
                      <div className="info">
                        <h2><a href="#">Jason A.</a></h2>
                        <h3><a href="#">Designer</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="table wow fadeInLeft" data-wow-delay="1.2s">
                  <div className="title">
                    <h3>Basic</h3>
                  </div>
                  <div className="pricing-header">
                    <p className="price-value">$12.90<span>/ Month</span></p>
                  </div>
                  <ul className="description">
                    <li>Up to 5 projects </li>
                    <li>Up to 10 collabrators</li>
                    <li>2gb of storage</li>
                  </ul>
                  <button className="btn btn-common">Get It</button>
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 active">
                <div className="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
                  <div className="title">
                    <h3>Profesional</h3>
                  </div>
                  <div className="pricing-header">
                    <p className="price-value">$49.90<span>/ Month</span></p>
                  </div>
                  <ul className="description">   
                    <li>Up to 10 projects</li>
                    <li>Up to 20 collabrators</li>
                    <li>10gb of storage</li>
                    <li>Real-time collabration</li>
                  </ul>
                  <button className="btn btn-common">Get It</button>
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="table wow fadeInRight" data-wow-delay="1.2s">
                  <div className="title">
                    <h3>Expert</h3>
                  </div>
                  <div className="pricing-header">
                    <p className="price-value">$89.90<span>/ Month</span></p>
                  </div>
                  <ul className="description">
                    <li>unlimited projects </li>
                    <li>Unlimited collabrators</li>
                    <li>Unlimited of storage</li>
                    <li>Real-time collabration</li>
                    <li>24x7 Support</li>
                  </ul>
                  <button className="btn btn-common">Get It</button>
                </div> 
              </div>
            </div>
          </div>
        </section>
        <section className="sloder-img section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="slider-center slider">
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img1.jpg" alt="" />
                  </div>
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img2.jpg" alt="" />
                  </div>
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img3.jpg" alt="" />
                  </div>
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img4.jpg" alt="" />
                  </div>
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img5.jpg" alt="" />
                  </div>
                  <div>
                    <img className="img-fluid" src="assets/img/slide/img6.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Subscribes" className="subscribes section-padding">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-5">
                <h4 className="wow fadeInUp" data-wow-delay="0.3s">Start For Free</h4>
                <p className="wow fadeInUp" data-wow-delay="0.6s">Existing customized ideas through client-based deliverables. <br /> Compellingly unleash fully tested outsourcing</p>
                <form htmlFor>
                  <div className="subscribe wow fadeInDown" data-wow-delay="0.3s">
                    <input type="Email" className="form-control" name="email" placeholder="Email Address" />
                    <button className="btn-submit" type="submit"><i className="lni-arrow-right" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section-padding">    
          <div className="container wow fadeIn animated" style={{visibility: 'visible'}}>        
            <h2 className="section-title">You're Using Free Lite Version</h2>
            <div className="row">
              <div className="text-center">
                <h4>Please, purchase full version to get all features and pages</h4><br />
                <b>Including:</b>
                <p>- All Elements and Features</p>
                <p>- Permission to Use in Commercial Projects</p>
                <p>- Footer Credit Removal</p>
                <p>- Working Contact Form</p>
                <p>- SASS Files</p>
                <br />
                <a href="http://rebrand.ly/vanilla-purchase" target="_blank" className="btn btn-common btn-lg">Purchase Now</a>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer-area section-padding">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="footer-logo mb-3">
                    <img src="assets/img/logo.png" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi quasi, ipsam voluptatem.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                  <h3 className="footer-titel">Company</h3>
                  <ul>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Strategy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                  <h3 className="footer-titel">About</h3>
                  <ul>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Clients</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                  <h3 className="footer-titel">Find us on</h3>
                  <div className="social-icon">
                    <a className="facebook" href="#"><i className="lni-facebook-filled" /></a>
                    <a className="twitter" href="#"><i className="lni-twitter-filled" /></a>
                    <a className="instagram" href="#"><i className="lni-instagram-filled" /></a>
                    <a className="linkedin" href="#"><i className="lni-linkedin-filled" /></a>
                  </div>
                </div>
              </div>
            </div>  
          </div>     
        </footer> 
        <section id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Copyright © 2018 UIdeck All Right Reserved</p>
              </div>
            </div>
          </div>
        </section>   
        <a href="#" className="back-to-top">
          <i className="lni-arrow-up" />
        </a>
       
      </div>
    );
  }
}

export default Login;
