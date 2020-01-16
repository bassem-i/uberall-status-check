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

class BusinessCard extends React.Component {
  render() {
    const { business } = this.props;
    const { name, street, city, country } = business;

    return (
      <BusinessCardStyled>
        <Card bordered={false} title={business.name}>
          <BusinessInfo
            name={name}
            street={street}
            city={city}
            country={country}
          />
        </Card>
      </BusinessCardStyled>
    );
  }
}

export default BusinessCard;
