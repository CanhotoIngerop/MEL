import * as bimdata from "@bimdata/bimdata-api-client";

let token = "";
let Url = "";

export default function getClient({ accessToken, apiUrl }) {
  const defaultClient = bimdata.ApiClient.instance;
  defaultClient.basePath = apiUrl;
  const Bearer = defaultClient.authentications["Bearer"];

  token = accessToken;
  Url = apiUrl

  Bearer.type = "oauth2";
  Bearer.accessToken = accessToken;

  return bimdata;
}

export function getCredentials(){
  return token, Url;
}
