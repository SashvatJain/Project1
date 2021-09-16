import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import {PublicClientApplication} from '@azure/msal-browser'

const App=()=> {
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

    let accountId = "";

    myMsal.loginPopup(loginRequest)
      .then(function (loginResponse) {
        accountId = loginResponse.account.homeAccountId;
        // Display signed-in user content, call API, etc.
      }).catch(function (error) {
        //login failure
        console.log(error);
      });
  }, [])

  const handleLogOut = () =>{
   
  // you can select which account application should sign out
  //  const logoutRequest = {
  //     account: myMsal.getAccountByHomeId(homeAccountId),
  //     mainWindowRedirectUri: "your_app_main_window_redirect_uri"
  // }
  
  //  myMsal.logoutPopup(logoutRequest);
  }
  return (
    <>
    <button onClick={handleLogOut}>Log Out</button>
      <Routes />
    </>
  );
}

export default App;
