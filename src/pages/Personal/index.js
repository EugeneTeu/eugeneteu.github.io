// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

import ScrollspyNav from './ScrollspyNav';

import bg01 from '../../images/personal/bg01.jpg';

// Import Generic components
import About from './About';
import Testi from './Testi';
import Blog from './Blog';
import Partner from '../../components/Shared/Partner';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }  
    }
 
    componentDidMount() {
        document.body.classList = "";
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
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* Hero Start */}
                <section className="bg-home" style={{ backgroundPosition : "center" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={8} md={9} >
                                        <div className="title-heading mt-4">
                                            <h1 className="display-3 font-weight-bold mb-3">
                                                <Typist>
                                               
                                                    <span className="element">Eugene Teu</span>
                                                    <Typist.Backspace count={20} delay={200} />
                                                    <span className="element">Computer Science Undergraduate</span>
                                                    <Typist.Backspace count={30} delay={200} />
                                                    <span className="element">Software Development</span>
                                                    <Typist.Backspace count={20} delay={200} />
                                                    <span className="element">Eugene Teu</span>
                                               
                                                </Typist>
                                            </h1>
                                            <div className="mt-4 pt-2">
                                                <ScrollspyNav
                                                    scrollTargetIds={["portfolio"]}
                                                    activeNavClass="active"
                                                    scrollDuration="500"
                                                    headerBackground="true"
                                                   >
                                                     <a href="#portfolio" className="btn btn-primary mt-2 mr-2 mouse-down">
                                                        <i className="mdi mdi-code-array"></i> About Me
                                                      </a> 
                                           
                                                  </ScrollspyNav>
                                                </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />

            </React.Fragment>
        );
    }
}

export default Index;
