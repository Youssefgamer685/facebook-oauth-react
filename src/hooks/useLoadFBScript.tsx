import { useEffect } from "react";

export interface UseLoadFBScriptOptions {
  /** Callback fires on load [FB](https://connect.facebook.net/en_US/sdk.js) script success */
  onScriptLoadSuccess?: () => void;
  /** Callback fires on load [FB](https://connect.facebook.net/en_US/sdk.js) script failure */
  onScriptLoadError?: () => void;
};

const useLoadFBScript = ({ onScriptLoadError, onScriptLoadSuccess }: UseLoadFBScriptOptions) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => onScriptLoadSuccess?.());
    script.addEventListener("error", () => onScriptLoadError?.());

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useLoadFBScript;