import React, { useState } from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { PublicClientApplication } from '@azure/msal-browser'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

const App = () => {
  const [accountId, setAccountId] = useState('')
  const config = {
    auth: {
      clientId: 'd1a7989e-58b0-4bdd-aed1-8659eaa5bd9e',
      redirectUri: "https://transactionsolutions.netlify.app/", //defaults to application start page
      postLogoutRedirectUri: "https://transactionsolutions.netlify.app/logout"
    }
  }

  const loginRequest = {
    scopes: ["User.ReadWrite"]
  }

  const myMsal = new PublicClientApplication(config);

  React.useEffect(() => {
    myMsal.loginPopup(loginRequest)
      .then(function (loginResponse) {
        setAccountId(loginResponse.account.homeAccountId);
        // Display signed-in user content, call API, etc.
      }).catch(function (error) {
        //login failure
        console.log(error);
      });
  }, [])

  const handleLogOut = () => {

    // you can select which account application should sign out
    const logoutRequest = {
      account: myMsal.getAccountByHomeId(accountId),
      mainWindowRedirectUri: 'https://transactionsolutions.netlify.app'
    }

    myMsal.logoutPopup(logoutRequest);
  }
  return (
    <>
      <button onClick={handleLogOut}>Log Out</button>
      <AuthenticatedTemplate>
        <Routes />
      </AuthenticatedTemplate >
    </>
      );
}

      export default App;
