export const IDENTITY_CONFIG = {
  authority: process.env.REACT_APP_AUTH_URL, //(string): The URL of the OIDC provider.
  client_id: process.env.REACT_APP_IDENTITY_CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
  redirect_uri:
    process.env.REACT_APP_REDIRECT_URL || "http://localhost:3000/signin-oidc", //The URI of your client application to receive a response from the OIDC provider.
  loadUserInfo: true, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
  response_type: "code", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
  scope: "openid profile email api" //(string, default: 'openid'): The scope being requested from the OIDC provider.
};
