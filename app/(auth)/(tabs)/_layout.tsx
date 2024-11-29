import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import {useTheme} from "react-native-paper";

export default function TabLayout() {

    const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.onSecondary,
        headerShown: false,
          tabBarStyle: {
              backgroundColor: theme.colors.secondary,
              borderTopWidth:0
          },

      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="Page2"
            options={{
                title: 'Page 2',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="Page3"
            options={{
                title: 'Page 3',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
