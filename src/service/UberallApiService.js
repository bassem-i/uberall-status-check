import axios from "axios";

const UBERALL_SERVER = "https://sandbox.uberall.com/api";
const PUBLIC_KEY =
  "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf";

function searchListings(searchObj, onSuccess, onError) {
  searchObj["public_key"] = PUBLIC_KEY;
  axios
    .post(`${UBERALL_SERVER}/search`, searchObj)
    .then(onSuccess)
    .catch(onError);
}

export default {
  searchListings
};
