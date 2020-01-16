import { BUSINESS_ACTIONS } from "../actions/types";

const initialState = {
  business: {},
  loading: false
};

export default function businessReducer(state = initialState, action) {
  switch (action.type) {
    case BUSINESS_ACTIONS.BUSINESS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case BUSINESS_ACTIONS.BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        business: action.payload
      };
    case BUSINESS_ACTIONS.BUSINESS_FAILURE:
      return {
        ...state,
        loading: false,
        business: {}
      };
    default:
      return state;
  }
}
