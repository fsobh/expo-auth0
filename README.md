# React Native (Expo) Auth0 Template

#### This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

#### This is a starting point for Expo applications that will use Auth0 as its authentication service. 

#### This application uses [Expo router](https://docs.expo.dev/router/introduction/)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
## Setup `.env` file

```
EXPO_PUBLIC_AUTHO_AUDIENCE=your-auth0-audience
EXPO_PUBLIC_AUTH0_DOMAIN=dev-example.us.auth0.com
EXPO_PUBLIC_AUTH0_CLIENT_ID=auth0-native-app-client-id
EXPO_PUBLIC_API_URL=https://your-apiurl.com 
```
| **Key**                         | **Value**                                   |
|----------------------------------|---------------------------------------------|
| EXPO_PUBLIC_AUTHO_AUDIENCE      | Your Auth0 audience                         |
| EXPO_PUBLIC_AUTH0_DOMAIN        | Your Auth0 tenant domain                    |
| EXPO_PUBLIC_AUTH0_CLIENT_ID     | Your Auth0 client ID (native application)   |
| EXPO_PUBLIC_API_URL             | URL to your back end service (not required) |

#### Make sure to also update your `app.json` file accordingly with the appropriate values for Auth0

## How to test

 #### To test this application, you must run it on a physical device as a [development build](https://docs.expo.dev/develop/development-builds/introduction/) OR you can [distribute it internally via eas](https://docs.expo.dev/build/internal-distribution/). 
 #### This is due to Auth0 limitations for security purposes
