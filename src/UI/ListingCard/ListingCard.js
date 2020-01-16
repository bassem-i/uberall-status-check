import React from "react";
import styled from "styled-components";
import { Descriptions } from "antd";
import logos from "../../assets/json/directory_logos";
var moment = require("moment");

const Card = styled.div`
  margin: 1rem 0;

  img {
    width: 25px;
    margin-right: 2px;
  }
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
    <Descriptions bordered column={{ xs: 1, md: 2 }} size="small">
      <Descriptions.Item label="Directory Type">
        <>
          {directoryType && (
            <img alt={directoryType} src={logos[directoryType]} />
          )}
          {isValue(directoryType)}
        </>
      </Descriptions.Item>
      <Descriptions.Item label="Name">{isValue(name)}</Descriptions.Item>
      <Descriptions.Item label="Street">{isValue(street)}</Descriptions.Item>
      <Descriptions.Item label="Phone">{isValue(phone)}</Descriptions.Item>
      <Descriptions.Item label="Website">{isValue(website)}</Descriptions.Item>
      <Descriptions.Item label="Date Created">
        {moment(dateCreated).format("YYYY-M-D")}
      </Descriptions.Item>
      <Descriptions.Item label="Sync Status">
        {isValue(syncStatus)}
      </Descriptions.Item>
    </Descriptions>
  </Card>
);

export default ListingCard;
