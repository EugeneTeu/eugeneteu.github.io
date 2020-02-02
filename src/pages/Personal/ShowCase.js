// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

//import images

import journalPage2 from "../../images/app/journalPage2.png";
import treeSecure from "../../images/app/treeSecure.png";
import vantageSg from "../../images/app/vantageSg.png";
import roundWhite from "../../images/shapes/round-white.png";

class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0 bg-light" id="project">
          <div className="container mt-50 mt-30">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-60">
                  <h4 className="main-title mb-4">
                    <span className="text-primary">Side</span> Projects
                  </h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Projects I have worked on{" "}
                    <span className="text-primary font-weight-bold">
                      outside
                    </span>{" "}
                    of school
                  </p>
                  <Row className="mt-4 justify-content-center">
                    <Col
                      lg={8}
                      md={12}
                      className="text-center"
                      style={{ marginTop: "32px" }}
                    >
                      <Nav
                        pills
                        id="navnav"
                        className="nav-justified flex-column flex-sm-row"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1"
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1 rounded"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Brew Compass
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2"
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Tree-Secure
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3"
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Vantage SG
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={journalPage2}
                          style={{maxWidth: "75%"}}
                          className="mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Brew Compass
                          </h4>
                          <p className="text-muted">
                            A specialty coffee companion app that has journaling
                            functionality and provides a platform for Coffee
                            Lovers to share recipes.
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>{" "}
                              Created for NUS Project Orbital
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Acheived highest possible level of achievement- Apollo 11
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Created with Flutter and Firebase
                            </li>
                          </ul>
                          <a href="https://github.com/EugeneTeu/BrewCompass/tree/master/coffee_app" className="mt-3 text-primary">
                            GitHub Repo{" "}
                            <i className="mdi mdi-chevron-right"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                         style={{maxWidth: "75%"}}
                          src={treeSecure}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Tree-Secure
                          </h4>
                          <p className="text-muted">
                            
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Mobile App submission for NUS HacknRoll 2020.
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              A not-so-serious cross-platform mobile app to spread the awareness of the heritage trees in Singapore
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Created with flutter, firebase(authentication), Stripe Api,Google Maps Plugin with data scraped using Python and beautifulSoup.
                            </li>
                          </ul>
                          <a href="https://github.com/EugeneTeu/trees-secure" className="mt-3 text-primary">
                            Github Repo
                            <i className="mdi mdi-chevron-right"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={vantageSg}
                          style={{maxWidth: "75%"}}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Vantage SG
                          </h4>
                          <p className="text-muted">
                            Google Developer Student Club @ NUS
                            <br>
                            </br>
                            External Team C
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Web Application build using React and Ruby on Rails
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Career readiness platform to help the disadvantaged
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Uplifting youths in Singapore
                            </li>
                          </ul>
                   
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row>
              <div className="home-shape-bottom">
                <img
                  src={roundWhite}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ShowCase;
