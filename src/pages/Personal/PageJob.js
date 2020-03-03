// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

class PageJob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" style={{padding: "50px 0px"}} id="workExperience" >
          <div className="container">
            <Row className="border-bottom">
              <Col lg={12} md={8} className="mt-sm-0 pt-sm-0">
                <div className="section-title">
                  <h4 className="title">Work Experiences</h4>
                </div>
              </Col>
            </Row>
            <Row className="row-eq-height">
              <Col lg={4} md={6} className="col-12 mt-4 ">
                <div className=" p-4 border rounded position-relative overflow-hidden">
                  <div className="head pb-3 border-bottom">
                    <ul className="list-unstyled mb-0">
                
                      <li className="list-inline-item text-success">
                        Full Time/Part-Time
                      </li>
                    </ul>
                    <h4>
                      <Link to="page-job-detail" className="text-dark title">
                       Tech Intern
                      </Link>
                    </h4>
                    <p className="mb-2 h6 text-info">
                    
                      <Link to="#" className="h6 text-dark firm">
                        Ps Love Pte Ltd
                      </Link>
                    </p>
                    <p className="mb-2 h6 text-info">
                        Dec 2019 - April 2020
                        </p>
                    <p className="mb-0">
                      <Link to="#" className="text-muted place">
                        Singapore
                      </Link>
                    </p>
                  </div>
                  <ul className="job-facts pt-3 list-unstyled">
                    <li className="list-inline-item text-muted">
                     
                    Built and deployed an internal business management system via Flutter
                    </li>
                    <li className="list-inline-item text-muted">
                      Developed company landing and ecommerce website in Flutter for Web
                      </li>
                    <li className="list-inline-item text-muted">
                      Implemented comprehensive integration and unit tests
                      </li>
                    <li className="list-inline-item text-muted">
                      Boosted automation with cloud functions written using Golang and Node Js
                      </li>
                  </ul>
                  
                </div>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 ">
                <div className="p-4 border rounded position-relative overflow-hidden">
                  <div className="head pb-3 border-bottom">
                    <ul className="list-unstyled mb-0">
                
                      <li className="list-inline-item text-success">
                        Full Time
                      </li>
                    </ul>
                    <h4>
                      <Link to="page-job-detail" className="text-dark title">
                       Full Stack Software Engineer
                      </Link>
                    </h4>
                    <p className="mb-2 h6 text-info">
                
                      <Link to="#" className="h6 text-dark firm">
                        Google Developer Student Club @ Nus
                      </Link>
                    </p>
                    <p className="mb-2 h6 text-info">
                        Dec 2019 - Jun 2020
                        </p>
                    <p className="mb-0">
                      <Link to="#" className="text-muted place">
                        Singapore
                      </Link>
                    </p>
                  </div>
                  <ul className="job-facts pt-3 list-unstyled">
                    <li className="list-inline-item text-muted">
                     Developed and deployed a Pre-employment / Career readiness platform aimed at helping disadvantaged youths
                    </li>
                    <li className="list-inline-item text-muted">
                      Spearheaded and Responsible for front-end Development using ReactJs
                    </li>
                    <li className="list-inline-item text-muted">
                    Currently working and partnering with local Social Enterprises to integrate our product and boost their effectiveness
                    </li>
                  </ul>
                  
                </div>
              </Col>

              <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                <div className=" p-4 border rounded position-relative overflow-hidden">
                  <div className="head pb-3 border-bottom">
                    <ul className="list-unstyled mb-0">
                  
                      <li className="list-inline-item text-success">
                        Full Time
                      </li>
                    </ul>
                    <h4>
                      <Link to="page-job-detail" className="text-dark title">
                        Web Developer Intern
                      </Link>
                    </h4>
                    <p className="mb-2 h6 text-info">
                      
                      <Link to="#" className="h6 text-dark firm">
                        Webpuppies Pte Ltd
                      </Link>
                    </p>
                    <p className="mb-2 h6 text-info">
                        May 2019 - Aug 2019
                        </p>
                    <p className="mb-0">
                      <Link to="#" className="text-muted place">
                        Singapore
                      </Link>
                    </p>
                  </div>
                  <ul className="job-facts pt-3 list-unstyled">
                   
                    <li className="list-inline-item text-muted">
                     
                     Incorporated technologies (Vuejs, Yii2 framework , PHP) and CMSes (Wordpress and Drupal) across various projects for clients
                    </li>
                    <li className="list-inline-item text-muted">

                     Spearheaded project management and achieved project completion for companies like Adidas/Reebok while managing key client relationships within the company
                    </li>
                    
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageJob;
