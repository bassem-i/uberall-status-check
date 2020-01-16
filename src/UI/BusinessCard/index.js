import { connect } from "react-redux";
import BusinessCard from "./BusinessCard";
import { getListing } from "../../actions";

export default connect(
  ({ listingReducer }) => ({
    listingReducer
  }),
  { getListing }
)(BusinessCard);
