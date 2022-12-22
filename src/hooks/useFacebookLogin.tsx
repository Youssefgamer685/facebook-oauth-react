declare const window: any;

interface AuthResponse {
  accessToken: string;
  expiresIn: number | string;
  reauthorize_required_in: number;
  graphDomain: string;
  grantedScopes?: string;
  signedRequest: string;
  userID: string;
};

interface Options {
  /** Optional key, supports 3 values: rerequest, reauthenticate, reauthorize. Use rerequest when re-requesting a [declined permission](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=EG&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Ffacebook-login%2Fweb%2Fpermissions%2F%23re-asking-declined-permissions&event_type=click&last_nav_impression_id=0pY1wCrsJXUyzT2Ms&max_percent_page_viewed=73&max_viewport_height_px=625&max_viewport_width_px=1366&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Fjavascript%2FFB.login%2Fv15.0&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dreference%26path2%3Djavascript%26path3%3DFB.login%26path4%3Dv15.0&region=emea&scrolled=true&session_id=1I6UzZixFZbwPJf9E&site=developers) */
  auth_type?: "rerequest" | "reauthenticate" | "reauthorize";
  /** Comma separated list of [extended permissions](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=EG&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Flogin%2Fextended-permissions&event_type=click&last_nav_impression_id=0pY1wCrsJXUyzT2Ms&max_percent_page_viewed=76&max_viewport_height_px=625&max_viewport_width_px=1366&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Fjavascript%2FFB.login%2Fv15.0&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dreference%26path2%3Djavascript%26path3%3DFB.login%26path4%3Dv15.0&region=emea&scrolled=true&session_id=1I6UzZixFZbwPJf9E&site=developers) */
  scope?: string;
  /** When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the [authResponse](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=EG&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Fjavascript%2FFB.getLoginStatus&event_type=click&last_nav_impression_id=0AzqaNo5wizN3Uopx&max_percent_page_viewed=89&max_viewport_height_px=625&max_viewport_width_px=1366&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freference%2Fjavascript%2FFB.login%2Fv15.0&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dreference%26path2%3Djavascript%26path3%3DFB.login%26path4%3Dv15.0&region=emea&scrolled=true&session_id=1I6UzZixFZbwPJf9E&site=developers) */
  return_scopes?: boolean;
  /** When true, prompt the user to grant permission for one or more Pages */
  enable_profile_selector?: boolean;
  /** Comma separated list of IDs to display in the profile selector */
  profile_selector_ids?: string;
};

interface UseFacebooksLoginProps {
  /** Callback fires on success */
  onSuccess: (response: AuthResponse) => void;
  /** Callback fires on error */
  onError?: () => void;
};

const useFacebookLogin = ({ onSuccess, onError }: UseFacebooksLoginProps) => {
  return (options?: Options) => {
    window.FB.login((response: { status: "connected" | "not_authorized" | "unknown", authResponse: AuthResponse }) => {
      if (response.status === "connected") {
        onSuccess(response.authResponse);
      } else {
        onError?.();
      };
    }, options);
  };
};

export default useFacebookLogin;