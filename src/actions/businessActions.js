import uberallApiService from "../service/uberallApiService";
import { BUSINESS_ACTIONS } from "./types";

export default function searchBusiness(searchObj) {
  return dispatch => {
    dispatch({
      type: BUSINESS_ACTIONS.BUSINESS_REQUEST
    });
    uberallApiService.searchBusiness(
      searchObj,
      res => {
        dispatch({
          type: BUSINESS_ACTIONS.BUSINESS_SUCCESS,
          payload: res.data.response.searchData
        });
      },
      err => {
        dispatch({
          type: BUSINESS_ACTIONS.BUSINESS_FAILURE,
          payload: err
        });
      }
    );
  };
}
