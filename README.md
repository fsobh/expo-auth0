# React Native (Expo) Auth0 Template
<p style="text-align: center;">
<img src="assets/images/demo.gif" alt="Demo of app running" width="200"/>
</p>

#### This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

#### This is a starting point for Expo applications that will use Auth0 as its authentication service. 

#### This application uses [Expo router](https://docs.expo.dev/router/introduction/)

## Pre-requisite
-   ### Setup an Auth0 native Application following [this guide](https://auth0.com/docs/quickstart/native/react-native-expo/interactive)

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

#### Make sure to also update your `app.json` file accordingly with the appropriate values for Auth0 (`domain`,`bundleIdentifier`,`package`)
```json
    "plugins": [
      "expo-router",
      "expo-secure-store",
      [
        "react-native-auth0",
        {
          "domain": "< your-auth0-domain.us.auth0.com >" 
        }
      ],
   ...
   "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.example.io"
   },
   ...
   "android": {
      "adaptiveIcon": {
      "foregroundImage": "./assets/images/splash.png",
      "backgroundColor": "#ffffff"
      },
     "package": "com.example.io"
   }
```

## How to run

1. Build for Android
   ```bash
   npm run android
   ```
2. Build for ios **(Mac only)**
   ```bash
   npm run ios
   ```

   #### **Executing these commands will generate a native [[development build](https://docs.expo.dev/guides/local-app-development/)] build for your iOS or Android device/emulator, placing the output in the `./ios` or `./android` directory, and will automatically run the application.**

## How to run (Alternative)

### Internal Distribution via EAS
 - Use EAS Build for [internal distribution](https://docs.expo.dev/build/internal-distribution/)
 - Share and install the app on team devices without going through app stores

#### Both methods ensure secure testing while addressing Auth0's authentication constraints.

