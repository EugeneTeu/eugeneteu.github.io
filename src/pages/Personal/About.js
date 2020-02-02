// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

// import images
import personal01 from "../../images/personal/1.jpg";
import personal02 from "../../images/personal/2.jpg";
import personal03 from "../../images/personal/3.jpg";
import personal04 from "../../images/personal/4.jpg";
import personal05 from "../../images/personal/5.jpg";
import personal06 from "../../images/personal/6.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <Row className="align-items-center">
              <Col md={6}>
                <div className="section-title">
                  <h4 className="title">About Me</h4>
                  <h6 className="text-primary mb-4">
                    Computer Science Undergraduate
                  </h6>
                  <p className="text-muted mb-0">
                    I specialize in Full Stack Software Development. Passionate
                    about all things Tech. Currently pursuing my Degree @
                    National University Of Singapore. <br />
                    My focus area of study includes Software Engineering,
                    Programming languages and Database Management. I aspire to
                    use my knowledge and skills to build things that will have
                    leave an impact on society in the future.
                  </p>
                </div>
              </Col>

              <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-md-4">
                  <div className="progress-box">
                    <h6 className="title text-muted">
                      Flutter / Flutter for Web
                    </h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      90%
                    </div>
                    <Progress value="90" />
                    {/* 2f55d4  */}
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Firebase</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      70%
                    </div>
                    <Progress value="70" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Java</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      90%
                    </div>
                    <Progress value="90" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">React</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      70%
                    </div>
                    <Progress value="72" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Golang</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      65%
                    </div>
                    <Progress value="65" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">JavaScript</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      75%
                    </div>
                    <Progress value="75" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">HTML</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      70%
                    </div>
                    <Progress value="71" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">CSS</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      70%
                    </div>
                    <Progress value="70" />
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">Haskell / Prolog</h6>
                    <div
                      className="text-right text-muted"
                      style={{
                        fontSize: "12px",
                        lineHeight: "5px",
                        marginTop: "-12px",
                        marginBottom: "6px"
                      }}
                    >
                      60%
                    </div>
                    <Progress value="60" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="container mt-100 mt-60" id="portfolio">
            <Row>
              <Col>
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">My Work & Portfolio</h4>
                  <p className="text-muted para-desc mb-0">
                    My side projects I have worked on outside of School{" "}
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal01}
                    title=""
                  >
                    <img
                      src={personal01}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Shifting Perspective
                    </Link>
                    <small className="text-light">Studio</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal02}
                    title=""
                  >
                    <img
                      src={personal02}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Colors Magazine
                    </Link>
                    <small className="text-light">Web Design</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal03}
                    title=""
                  >
                    <img
                      src={personal03}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Spa Cosmetics
                    </Link>
                    <small className="text-light">Developing</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal04}
                    title=""
                  >
                    <img
                      src={personal04}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Riser Coffee
                    </Link>
                    <small className="text-light">Branding</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal05}
                    title=""
                  >
                    <img
                      src={personal05}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      Dancing With Myself
                    </Link>
                    <small className="text-light">Photography</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className="mt-4 pt-2">
                <div className="work-container position-relative d-block overflow-hidden rounded">
                  <Link
                    className="mfp-image d-inline-block"
                    to={personal06}
                    title=""
                  >
                    <img
                      src={personal06}
                      className="img-fluid rounded"
                      alt="work"
                    />
                    <div className="overlay-work"></div>
                  </Link>
                  <div className="content personal-port">
                    <Link
                      to="page-work-detail"
                      className="title text-white d-block font-weight-bold"
                    >
                      New trends in SEO
                    </Link>
                    <small className="text-light">Business</small>
                  </div>
                  <div className="client personal-port">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Calvin Carlo
                    </small>
                    <small className="text-light date">
                      <i className="mdi mdi-calendar-check"></i> 13th August,
                      2019
                    </small>
                  </div>
                </div>
              </Col>

              <Col className="mt-4 pt-2">
                <Link to="page-work" className="btn btn-outline-primary">
                  See More <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
