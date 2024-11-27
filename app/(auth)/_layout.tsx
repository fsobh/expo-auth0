import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text} from 'react-native';
// @ts-ignore
import { Home, Cog , Menu, User} from 'lucide-react-native';
import { useTheme } from 'react-native-paper';
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
                            //Replace these with custom svg logos for dark/light mode
                            ? <Text style={{color: theme.colors.primary}}>Auth0 example</Text>
                            : <Text style={{color: theme.colors.primary}}>Auth0 example</Text>
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
