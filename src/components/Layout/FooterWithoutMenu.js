import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import americanEx from "../../images/payments/american-ex.png";
import discover from "../../images/payments/discover.png";
import masterCard from "../../images/payments/master-card.png";
import paypal from "../../images/payments/paypal.png";
import visa from "../../images/payments/visa.png";

class FooterWithoutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer footer-bar">
          <div className="container text-center">
            <Row className="align-items-center">
              <Col sm={6}>
                <div className="text-sm-left">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Eugene Teu
                  </p>
                </div>
              </Col>

              <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <p className="mb-0">Connect with Me</p>
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
              </Col>
            </Row>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterWithoutMenu;
