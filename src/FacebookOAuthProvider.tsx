import React, { createContext, useEffect } from "react";
import useLoadFBScript, { UseLoadFBScriptOptions } from "./hooks/useLoadFBScript";

declare const window: any;

interface FacebookOAuthProviderProps extends UseLoadFBScriptOptions {
  /** Facebook App ID */
  appId: string;
  /** Facebook App Version */
  appVersion: string;
  children: React.ReactNode;
};

const FacebookOAuthContext = createContext(null);

const FacebookOAuthProvider = ({ appId, appVersion, onScriptLoadSuccess, onScriptLoadError, children }: FacebookOAuthProviderProps) => {
  useLoadFBScript({ onScriptLoadSuccess: () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        version: appVersion,
        cookies: true,
        xfbml: true,  
      });
  
      window.FB.AppEvents.logPageView();
    };

    onScriptLoadSuccess?.();
  }, onScriptLoadError });

  return (
    <FacebookOAuthContext.Provider value={null}>
      {children}
    </FacebookOAuthContext.Provider>
  );
};

export default FacebookOAuthProvider;