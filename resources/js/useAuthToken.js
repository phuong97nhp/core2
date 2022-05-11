import React, { useState } from 'react';
import Cookies from 'js-cookie';

function useAuthToken() {
  const [authToken, setAuthToken] = useState();

  function getToken() {
    const tokenString = Cookies.get("auth_token_user");
    return setAuthToken(tokenString?.tokenString);
  };
  
  function saveToken(userToken) {
    Cookies.set('auth_token_user', userToken.access_token, userToken.expires_in);
    setAuthToken(userToken);
  };

  
  return {
    setAuthToken: saveToken,
    authToken
  }
}

export default useAuthToken;