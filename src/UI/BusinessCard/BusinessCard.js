import React from "react";
import { Descriptions, Card } from "antd";
import styled from "styled-components";
import ListingCard from "../ListingCard";
import countryMapperService from "../../service/countryMapperService";
var moment = require("moment");

const Padded = styled.div`
  @media only screen and (min-width: 1024px) {
    padding: 0 2rem;
  }
`;
const BusinessInfo = ({
  name,
  dateCreated,
  street,
  streetNo,
  city,
  country,
  province,
  zip
}) => (
  <Descriptions bordered column={{ xs: 1, md: 2 }} size="small">
    <Descriptions.Item label="Name">{name}</Descriptions.Item>
    <Descriptions.Item label="Date">
      {moment(dateCreated).format("YYYY-M-D")}
    </Descriptions.Item>
    <Descriptions.Item label="Street">{street}</Descriptions.Item>
    <Descriptions.Item label="Street number">{streetNo}</Descriptions.Item>
    <Descriptions.Item label="City">{city}</Descriptions.Item>
    <Descriptions.Item label="Country">
      {countryMapperService.getCountryName(country)}
    </Descriptions.Item>
    <Descriptions.Item label="Province">{province}</Descriptions.Item>
    <Descriptions.Item label="ZIP">{zip}</Descriptions.Item>
  </Descriptions>
);

class BusinessCard extends React.Component {
  state = {
    listings: []
  };

  componentDidMount() {
    const { business, getListing } = this.props;
    getListing(business);
  }

  render() {
    const {
      business,
      listingReducer: { listings }
    } = this.props;
    const {
      name,
      dateCreated,
      street,
      streetNo,
      city,
      country,
      province,
      zip
    } = business;

    return (
      <>
        <Card bordered={false}>
          <BusinessInfo
            name={name}
            dateCreated={dateCreated}
            city={city}
            street={street}
            streetNo={streetNo}
            country={country}
            province={province}
            zip={zip}
          />
          {listings.length > 0 && (
            <Padded>
              {listings.map(({ result }, i) => (
                <ListingCard
                  key={i}
                  name={result.name}
                  street={result.street}
                  phone={result.phone}
                  website={result.website}
                  directoryType={result.directoryType}
                  dateCreated={result.dateCreated}
                  syncStatus={result.syncStatus}
                />
              ))}
            </Padded>
          )}
        </Card>
      </>
    );
  }
}

export default BusinessCard;
