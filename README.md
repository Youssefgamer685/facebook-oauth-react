# facebook-oauth-react

This package made for easily implement facebook oauth in your react app

## How to install

### yarn:

    yarn add react-facebook-oauth

### npm:

    npm install react-facebook-oauth

### pnpm:

    pnpm add react-facebook-oauth

## Usage

Wrap your app in `<FacebookOAuthProvider>`

    import ReactDOM from "react-dom/client";
    import { FacebookOAuthProvider } from "react-facebook-oauth";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <FacebookOAuthProvider>
        <YOUR-APP>
      </FacebookOAuthProvider>
    );

Use `useFacebookLogin()` hook

    import { useFacebookLogin } from "react-facebook-oauth";

    const App = () => {
      const facebookLogin = useFacebookLogin({ onSuccess: (authResponse) => console.log(authresponse) });

      <MyCustomButton onClick={() => facebookLogin()}>
        Login with facebook
      </MyCustomButton>
    };

## API:

### `<FacebookOAuthProvider>`

|Property|Description|
|--------|-----------|
|appId|Required: Facebook App ID|
|appVersion|Required: Facebook App Version|
|onScriptLoadSuccess|Optional: Callback fires on load [FB](https://connect.facebook.net/en_US/sdk.js) script success|
|onScriptLoadError|Optional: Callback fires on load [FB](https://connect.facebook.net/en_US/sdk.js) script failure|

### `useFacebookLogin`

|Property|Description|
|--------|-----------|
|onSuccess|Required: Callback fires on success, This function have an [AuthResponse](#AuthResponse) argument|
|onError|Optional: Callback fires on error|

### `AuthResponse`

    {
      accessToken: string;
      expiresIn: number | string;
      reauthorize_required_in: number;
      graphDomain: string;
      signedRequest: string;
      userID: string;
    }
