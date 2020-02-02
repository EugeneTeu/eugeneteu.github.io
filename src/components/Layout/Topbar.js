import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      page: false,
      landing: false,
      docs: false,
      new: false,
      utility: false,
      user: false,
      work: false,
      blog: false,
      carr: false
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    //var ul = document.getElementById("top-menu");
    //var items = ul.getElementsByTagName("a");
    /*for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }*/
  }

  activateParentDropdown = item => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div>
              <Link className="logo" to="/index">
                Eugene Teu<span className="text-primary"></span>
              </Link>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
        
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
