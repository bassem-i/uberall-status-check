import axios from "axios";

const UBERALL_SERVER = "https://sandbox.uberall.com/api";

function searchListings(searchObj, onSuccess, onError) {
  axios
    .post(`${UBERALL_SERVER}/search`, searchObj)
    .then(onSuccess)
    .catch(onError);
}

export default {
  searchListings
};
