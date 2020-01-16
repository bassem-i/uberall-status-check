import React from "react";
import { Descriptions, Card } from "antd";
import styled from "styled-components";
import ListingCard from "../ListingCard";

const Padded = styled.div`
  padding: 0 2rem;
`;
const BusinessInfo = ({ name, street, city, country }) => (
  <Descriptions bordered column={2}>
    <Descriptions.Item label="Name">{name}</Descriptions.Item>
    <Descriptions.Item label="Street">{street}</Descriptions.Item>
    <Descriptions.Item label="City">{city}</Descriptions.Item>
    <Descriptions.Item label="Country">{country}</Descriptions.Item>
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
    const { name, street, city, country } = business;

    return (
      <>
        <Card bordered={false}>
          <BusinessInfo
            name={name}
            city={city}
            street={street}
            country={country}
          />
          {listings.length > 0 && (
            <Padded>
              {listings.map(({ result }) => (
                <ListingCard
                  key={result.listingId}
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
