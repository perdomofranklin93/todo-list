import { Auth, AUTH_STRATEGIES } from "@8base/auth";
/**
 * Creating an Authentication Profile in 8base will provide 
 * you with a Client ID and Domain.
 */
const domain = 'https://6143f7ef498740000974b86a.auth.us-east-1.amazoncognito.com';
const clientId = '7j368jvab0vfh4gecv2agna773';
/**
 * The redirect and logout URIs are all configured in the 
 * authentication profile that gets set up in the 8base
 * management console.
 */
const logoutRedirectUri = `${window.location.origin}/logout`;
const redirectUri = `${window.location.origin}/home`;
/**
 * There are multiple auth strategies that can be 
 * used when using 8base. By default, specifying
 * 'web_8base' will configure the 8base auth client.
 */
const authClient = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES['WEB_8BASE_COGNITO']
  },
  {
    domain,
    clientId,
    redirectUri,
    logoutRedirectUri
  }
);

export { authClient }