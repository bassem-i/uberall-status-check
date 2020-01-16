import React from "react";
import styled from "styled-components";
import { Descriptions } from "antd";

const Card = styled.div`
  margin: 2rem 0;
`;
const Redspan = styled.span`
  color: red;
  font-weight: bold;
`;

const isValue = value => {
  if (value) return value;

  return <Redspan>MISSING</Redspan>;
};

const ListingCard = ({
  name,
  street,
  phone,
  website,
  directoryType,
  dateCreated,
  syncStatus
}) => (
  <Card>
    <Descriptions bordered column={1}>
      <Descriptions.Item label="Directory Type">
        {isValue(directoryType)}
      </Descriptions.Item>
      <Descriptions.Item label="Name">{isValue(name)}</Descriptions.Item>
      <Descriptions.Item label="Street">{isValue(street)}</Descriptions.Item>
      <Descriptions.Item label="Phone">{isValue(phone)}</Descriptions.Item>
      <Descriptions.Item label="Website">{isValue(website)}</Descriptions.Item>
      <Descriptions.Item label="Date Created">
        {isValue(dateCreated)}
      </Descriptions.Item>
      <Descriptions.Item label="Sync Status">
        {isValue(syncStatus)}
      </Descriptions.Item>
    </Descriptions>
  </Card>
);

export default ListingCard;
