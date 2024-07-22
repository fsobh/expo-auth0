// ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme as _useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider, MD3Theme } from 'react-native-paper';
import { lightTheme } from '@/constants/LightTheme';
import { darkTheme } from '@/constants/DarkTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemColorScheme = _useColorScheme();
    const [themeMode, setThemeMode] = useState<ThemeMode>('system');
    const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === 'dark');

    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem('theme');
            if (storedTheme) {
                setThemeMode(storedTheme as ThemeMode);
                setIsDarkTheme(storedTheme === 'dark' || (storedTheme === 'system' && systemColorScheme === 'dark'));
            }
        };
        loadTheme();
    }, [systemColorScheme]);

    const toggleTheme = async (mode: ThemeMode) => {
        setThemeMode(mode);
        setIsDarkTheme(mode === 'dark' || (mode === 'system' && systemColorScheme === 'dark'));
        await AsyncStorage.setItem('theme', mode);
    };

    const PaperLightTheme = {
        ...MD3LightTheme,
        ...lightTheme,
    };

    const PaperDarkTheme = {
        ...MD3DarkTheme,
        ...darkTheme,
    };

    const theme = isDarkTheme ? PaperDarkTheme : PaperLightTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <PaperProvider theme={theme}>
                {children}
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
