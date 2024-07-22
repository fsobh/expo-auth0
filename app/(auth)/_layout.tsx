import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';

// @ts-ignore
import { Home, Cog , Menu, User} from 'lucide-react-native';
import { useTheme } from 'react-native-paper';
// @ts-ignore
import DarkLogo from '../../assets/images/logo_lime.svg';
// @ts-ignore
import LightLogo from '../../assets/images/Masareef-logo-blue.svg';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomDrawerContent from "@/components/navigation/CustomDrawerMenu";

export default function Layout() {
    const theme = useTheme();

    // @ts-ignore
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.colors.secondary,
                       borderColor: theme.colors.secondary,
                    },
                    drawerStyle: {
                        backgroundColor: theme.colors.secondary,
                    },

                    drawerActiveBackgroundColor: theme.colors.onSecondary,

                    drawerActiveTintColor: theme.colors.secondary,
                    drawerInactiveTintColor: theme.colors.onSurfaceVariant,
                    headerShadowVisible: false,
                    headerTitle: () => (
                        theme.dark
                            ? <DarkLogo width={120} height={70} />
                            : <LightLogo width={120} height={70} />
                    ),
                    headerTintColor: theme.colors.primary,
                }}
            >


                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        drawerLabel: 'Home',
                        title: 'Overview',
                        drawerIcon: ({color}) => <Home size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="(menu)/profile"
                    options={{

                        title: 'Profile',
                        drawerIcon: ({color}) => <User size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="(menu)/settings"
                    options={{

                        title: 'Settings',
                        drawerIcon: ({color}) => <Cog size={24} color={color} />,
                    }}
                />

            </Drawer>

        </GestureHandlerRootView>
    );
}
