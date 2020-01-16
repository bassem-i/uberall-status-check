import { LISTING_ACTIONS } from "../actions/types";

const initialState = {
  listings: [],
  loading: false
};

export default function listingReducer(state = initialState, action) {
  switch (action.type) {
    case LISTING_ACTIONS.LISTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LISTING_ACTIONS.LISTING_SUCCESS:
      return {
        ...state,
        loading: false,
        listings: [...state.listings, action.payload.data.response]
      };
    case LISTING_ACTIONS.LISTING_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
