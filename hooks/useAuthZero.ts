import { useState, useEffect } from 'react';
import { useAuth0 } from 'react-native-auth0';
import { Alert } from 'react-native';
import {router} from "expo-router";

export const useAuthZero = () => {
  const { authorize, clearSession, user, error, isLoading,clearCredentials, getCredentials} = useAuth0();



  const  apiSignUpPostRaw = async (user: UserDto) => {

 try {

   const response = await fetch(`https://api.masareef.io/api/Auth/signup`, {
     method: 'POST',
     body: JSON.stringify(user),
   });
   const res = await response.json();

   if (res.error) {
     throw new Error(res.error);
   }

   router.push('/email');
 }
    catch (error) {
      console.error('Error:', error);
      return error
    }
  }

  const onLogin = async () => {
    try {
      const credentials = await authorize({audience:"https://api.masareef.io", scope:'openid profile email'});
      if (credentials) {

      }
    } catch (e) {
      console.log(e);
    }
  };

  const onLoginWithGoogle = async () => {
    try {
      const credentials = await authorize({ connection: 'google-oauth2' , audience:"https://api.masareef.io", scope:'openid profile email'});
      if (credentials) {

      }
    } catch (e) {
      console.log(e);
    }
  };

  const onLoginWithApple = async () => {
    try {
      const credentials = await authorize({ connection: 'apple', audience:"https://api.masareef.io", scope:'openid profile email' });
      if (credentials) {

      }
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
      await  clearCredentials();

    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return {
    onLogin,
    onLoginWithGoogle,
    apiSignUpPostRaw,
    onLoginWithApple,
    onLogout,
    getCredentials,
    user,
    error,
    isLoading,
  };
};

export interface UserDto {
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  firstName: string | null;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  lastName: string | null;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  email: string | null;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  password: string | null;
}
export function validatePasswordLength(password :string) {
  const minLength = 8;
  if (password.length < minLength) {
    return {
      isValid: false,
      errorMessage: `Password must be at least ${minLength} characters long.`,
    };
  }
  return {
    isValid: true,
    errorMessage: '',
  };
}

export function validatePasswordMatch(password :string, confirmPassword : string) {
  if (password !== confirmPassword) {
    return {
      isValid: false,
      errorMessage: 'Passwords do not match.',
    };
  }
  return {
    isValid: true,
    errorMessage: '',
  };
}