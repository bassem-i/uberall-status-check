import { LISTING_ACTIONS } from "./types";
import uberallApiService from "../service/apiService";
import CountriesAndDirectories from "../assets/json/countries_and_directories";

export default function getListing(business) {
  return dispatch => {
    dispatch({
      type: LISTING_ACTIONS.LISTING_REQUEST
    });

    const promiseArr = [];
    CountriesAndDirectories[business.country].forEach(directory => {
      const promise = new Promise((resolve, reject) => {
        uberallApiService.getListing(
          business.id,
          business.token,
          directory,
          res => resolve(res.data.response),
          err => reject(err)
        );
      });
      promiseArr.push(promise);
    });

    Promise.allSettled(promiseArr).then(res => {
      const listings = res
        .filter(item => item.status === "fulfilled")
        .map(item => item.value);

      dispatch({
        type: LISTING_ACTIONS.LISTING_SUCCESS,
        payload: listings
      });
    });
  };
}
