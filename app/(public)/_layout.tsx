import React from 'react';
import { Stack } from 'expo-router';
import {useTheme} from "react-native-paper";
// @ts-ignore
import DarkLogo from "@/assets/images/logo_lime.svg";
// @ts-ignore
import LightLogo from "@/assets/images/Masareef-logo-blue.svg";

const PublicLayout = () => {
    const theme = useTheme();
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.secondary,
                },
                headerShadowVisible: false,
                headerTintColor: theme.colors.primary,


            }}>
            <Stack.Screen
                name="login"
                options={{
                   headerShown: false,
                }}></Stack.Screen>
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: () => (
                        theme.dark
                            ? <DarkLogo width={120} height={50} />
                            : <LightLogo width={120} height={50} />
                    )
                }}></Stack.Screen>
            <Stack.Screen
                name="email"
                options={{
                    headerTitle: 'Verify email',
                }}></Stack.Screen>
        </Stack>
    );
};

export default PublicLayout;