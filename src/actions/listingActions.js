import uberallApiService from "../service/uberallApiService";
import { LISTING_ACTIONS } from "./types";

export default function getListing(id, token, directory) {
  return dispatch => {
    dispatch({
      type: LISTING_ACTIONS.LISTING_REQUEST
    });

    uberallApiService.getListing(
      id,
      token,
      directory,
      res => {
        dispatch({
          type: LISTING_ACTIONS.LISTING_SUCCESS,
          payload: res.data.response.searchData
        });
      },
      err => {
        dispatch({
          type: LISTING_ACTIONS.LISTING_FAILURE,
          payload: err
        });
      }
    );
  };
}
