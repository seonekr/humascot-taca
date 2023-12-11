import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login'

const clientId = "130876132345-i2vshcum1jogj249d9hu9bua01co7mr6.apps.googleusercontent.com"

const Login_with_google = () => {

  const onSuccess = (res) => {
    console.log('success', res.profileObj);
  }

  const onFailure = (res) => {
    console.log('failed', res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        className="google_btn"
      />
      {/* <div>
        <h1>Hello</h1>
        <img src={profile.imageUrl} alt="asd" />
        <h3>Name: {profile.name}</h3>
        <p>Email: {profile.email}</p>
        <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut}></GoogleLogout>
      </div> */}
    </div>
  )
}

export default Login_with_google;