// RootLayout.tsx
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useRouter, useSegments, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Auth0Provider, useAuth0 } from 'react-native-auth0';

import { ThemeProvider } from '@/ctx/ThemeContext';

const InitialLayout = () => {
    const { user, getCredentials } = useAuth0();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const credentials = await getCredentials();
            const inTabsGroup = segments[0] === '(auth)';

            if (credentials && credentials.accessToken && !inTabsGroup) {
                router.replace('/(tabs)/home');
            } else if (!credentials || !credentials.accessToken) {
                router.replace('/login');
               // router.replace('/(tabs)/home');
            }
        };

        checkUser();
    }, [user]);

    return <Slot />;
};

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (!fontsLoaded) {
            SplashScreen.preventAutoHideAsync();
        } else {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // You can return a loading screen here
    }

    return (
        <ThemeProvider>
            <Auth0Provider domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN || ""} clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID || ""}>
                <InitialLayout />
            </Auth0Provider>
        </ThemeProvider>
    );
};

export default RootLayout;
