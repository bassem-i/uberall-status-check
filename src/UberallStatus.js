import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { SearchForm, BusinessCard, Header } from "./UI";
import { searchBusiness, getListing } from "./actions";

const Padded = styled.div`
  padding: 2.5rem 5rem;
`;

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
        <Padded>
          <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
          {business.id && <BusinessCard business={business} />}
        </Padded>
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
