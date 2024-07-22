import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {useTheme} from "react-native-paper";

export default function TabLayout() {
  const colorScheme = useColorScheme();
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
            name="spending"
            options={{
                title: 'Spending',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'logo-usd' : 'logo-usd'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="recurring"
            options={{
                title: 'Recurring',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="transactions"
            options={{
                title: 'Transactions',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="networth"
            options={{
                title: 'Networth',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
