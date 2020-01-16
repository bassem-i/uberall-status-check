import React from "react";
import Header from "./UI/Header";
import SearchForm from "./UI/SearchForm";
import uberallApiService from "./service/uberallApiService";

class UberallStatus extends React.Component {
  handleSearchSubmit = searchObj => {
    uberallApiService.searchListings(
      searchObj,
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
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
