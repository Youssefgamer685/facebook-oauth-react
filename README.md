# react-facebook-oauth

This package made for easily implement facebook oauth in your react app

## How to install
---

### yarn:

    yarn add react-facebook-oauth

### npm:

    npm install react-facebook-oauth

### pnpm:

    pnpm add react-facebook-oauth

## Usage
---

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
---

### `<FacebookOAuthProvider>`
