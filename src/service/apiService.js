import axios from "axios";

const UBERALL_SERVER = "https://sandbox.uberall.com/api";
const PUBLIC_KEY =
  "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf";

function searchBusiness(searchObj, onSuccess, onError) {
  axios
    .post(`${UBERALL_SERVER}/search?public_key=${PUBLIC_KEY}`, searchObj)
    .then(onSuccess)
    .catch(onError);
}

function getListing(id, token, directory, onSuccess, onError) {
  const params = `?token=${token}&directory=${directory}&public_key=${PUBLIC_KEY}`;

  axios
    .get(`${UBERALL_SERVER}/search/${id}${params}`)
    .then(onSuccess)
    .catch(onError);
}

export default {
  searchBusiness,
  getListing
};
