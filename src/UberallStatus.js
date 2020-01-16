import React from "react";
import Header from "./UI/Header";
import SearchForm from "./UI/SearchForm";

class UberallStatus extends React.Component {
  handleSearchSubmit = searchObj => {
    console.log(searchObj);
  };

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
        <p>Awesomeness is about to happen! Stay Tuned :)</p>
      </>
    );
  }
}

export default UberallStatus;
