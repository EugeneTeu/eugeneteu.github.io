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
        <section className="section" id="portfolio">
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
                    about all things Tech. Currently pursuing my Computer Science Degree @
                    National University Of Singapore. <br />
                    My focus area of study includes Software Engineering,
                    Programming languages and Database Management. I aspire to
                    use my knowledge and skills to build things that will 
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
        </section>
      </React.Fragment>
    );
  }
}

export default About;
