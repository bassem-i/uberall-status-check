import React from "react";
import { connect } from "react-redux";
import Header from "./UI/Header";
import SearchForm from "./UI/SearchForm";
import searchBusiness from "./actions/businessActions";
import getListing from "./actions/listingActions";

class UberallStatus extends React.Component {
  handleSearchSubmit = searchObj => {
    const { searchBusiness } = this.props;
    searchBusiness(searchObj);
  };

  render() {
    const {
      businessReducer: { business }
    } = this.props;

    return (
      <>
        <Header />
        <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
        <p>Awesomeness is about to happen! Stay Tuned :)</p>
        {business.id}
      </>
    );
  }
}

export default connect(
  ({ businessReducer, listingReducer }) => ({
    businessReducer,
    listingReducer
  }),
  { searchBusiness, getListing }
)(UberallStatus);
