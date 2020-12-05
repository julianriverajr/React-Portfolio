import React, { Component } from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Portf from "./pages/Portf";
import Contact from "./pages/Contact";
import Footer from "./Footer";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <Portf />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer/>
      </div>
    );
  }
}

export default Portfolio;
