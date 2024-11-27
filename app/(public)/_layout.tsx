import React from 'react';
import { Stack } from 'expo-router';
import {useTheme} from "react-native-paper";
import { Text} from 'react-native';


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
                            //Replace these with custom svg logos for dark/light mode
                            ? <Text style={{color: theme.colors.primary}}>Auth0 example</Text>
                            : <Text style={{color: theme.colors.primary}}>Auth0 example</Text>
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
