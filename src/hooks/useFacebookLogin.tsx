declare const window: any;

interface AuthResponse {
  accessToken: string;
  expiresIn: number | string;
  reauthorize_required_in: number;
  graphDomain: string;
  signedRequest: string;
  userID: string;
};

interface UseFacebooksLoginProps {
  /** Callback fires on success */
  onSuccess: (response: AuthResponse) => void;
  /** Callback fires on error */
  onError?: () => void;
};

const useFacebookLogin = ({ onSuccess, onError }: UseFacebooksLoginProps) => {
  return () => {
    window.FB.login((response: { status: "connected" | "not_authorized" | "unknown", authResponse: AuthResponse }) => {
      if (response.status === "connected") {
        onSuccess(response.authResponse);
      } else {
        onError?.();
      };
    });
  };
};

export default useFacebookLogin;