import React from "react";
import { Descriptions, Card } from "antd";
import styled from "styled-components";

const BusinessCardStyled = styled.div``;

const BusinessInfo = ({ name, street, city, country }) => (
  <Descriptions bordered column={2}>
    <Descriptions.Item label="name">{name}</Descriptions.Item>
    <Descriptions.Item label="street">{street}</Descriptions.Item>
    <Descriptions.Item label="city">{city}</Descriptions.Item>
    <Descriptions.Item label="country">{country}</Descriptions.Item>
  </Descriptions>
);

const ListingInfo = ({
  name,
  street,
  phone,
  website,
  directoryType,
  dateCreated,
  syncStatus
}) => (
  <Descriptions bordered column={3}>
    <Descriptions.Item label="name">{name}</Descriptions.Item>
    <Descriptions.Item label="street">{street}</Descriptions.Item>
    <Descriptions.Item label="phone">{phone}</Descriptions.Item>
    <Descriptions.Item label="website">{website}</Descriptions.Item>
    <Descriptions.Item label="directoryType">{directoryType}</Descriptions.Item>
    <Descriptions.Item label="dateCreated">{dateCreated}</Descriptions.Item>
    <Descriptions.Item label="syncStatus">{syncStatus}</Descriptions.Item>
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
      <BusinessCardStyled>
        <Card bordered={false} title={business.name}>
          <BusinessInfo
            country={country}
            street={street}
            city={city}
            name={name}
          />
          {listings.length > 0 &&
            listings.map(({ result }) => (
              <ListingInfo
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
        </Card>
      </BusinessCardStyled>
    );
  }
}

export default BusinessCard;
