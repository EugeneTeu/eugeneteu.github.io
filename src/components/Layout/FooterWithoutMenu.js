import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
 
// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class FooterWithoutMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer footer-bar">
            <div className="container text-center">
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="text-sm-left">
                            <p className="mb-0">©  {new Date().getFullYear()} Eugene Teu</p>
                        </div>
                    </Col>

                    <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled payment-cards text-sm-right mb-0">
                           
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
