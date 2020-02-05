// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import dscPic from "../../images/dsc_pic.jpg";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="courses">
          <div className="container ">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="main-title mb-4">
                    <span className="text-primary">Contact</span> Me
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Have an idea you want to bring to life or passionate about
                    tech? Do not hesitate to hit me up. Slide into my Inbox or
                    message me on Linkedin!
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
            
              <Col lg={4} md={2} className="mt-4 pt-2"></Col>

              <Col lg={4} md={8} className="mt-4 pt-2">
                <div className="team text-center">
                  <div className="position-relative">
                    <img
                      src={dscPic}
                      className="img-fluid d-block rounded-pill mx-auto"
                     
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/cwteu/" className="rounded">
                          <i
                            className="mdi mdi-instagram"
                            title="Instagram"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a  href="https://www.linkedin.com/in/eugeneteu/" className="rounded">
                          <i className="mdi mdi-linkedin" title="LinkedIn"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:eugeneteu@gmail.com" className="rounded">
                          <i
                            className="mdi mdi-email"
                            title="Gmail"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                    <a
                      href="https://github.com/EugeneTeu"
                      className="rounded mr-1"
                    >
                      <i className="mdi mdi-code-tags" title="Github">
                        {" "}
                      </i>
                    </a>
                  </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <Link to="#" className="name text-dark">
                       Eugene Teu 
                      </Link>
                    </h5>
                    <small className="designation text-muted">
                     Tech Intern @ Ps Love / Full Stack Software Engineer
                    </small>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={2} className="mt-4 pt-2"></Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactMe;
