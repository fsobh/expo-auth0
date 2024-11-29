// settings.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Divider, List, useTheme as usePaperTheme} from 'react-native-paper';
import { useTheme } from '@/ctx/ThemeContext';

const SettingsScreen = () => {
    const paperTheme = usePaperTheme();
    const { themeMode, toggleTheme } = useTheme();
    const styles = createStyles(paperTheme);

    const renderCheckMark = (mode: string) => {
        return themeMode === mode ? <List.Icon icon="check" /> : null;
    };

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader>Theme</List.Subheader>
                <List.Item
                    title="Light mode"
                    left={() => <List.Icon icon="white-balance-sunny" />}
                    right={() => renderCheckMark('light')}
                    onPress={() => toggleTheme('light')}
                />
                <List.Item
                    title="Dark mode"
                    left={() => <List.Icon icon="weather-night" />}
                    right={() => renderCheckMark('dark')}
                    onPress={() => toggleTheme('dark')}
                />
                <List.Item
                    title="System default"
                    left={() => <List.Icon icon="cellphone" />}
                    right={() => renderCheckMark('system')}
                    onPress={() => toggleTheme('system')}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Support & Legal</List.Subheader>
                <List.Item
                    title="Privacy Policy"
                    left={() => <List.Icon icon="shield-lock-outline" />}
                    onPress={() => {/* Navigate to Privacy Policy screen */}}
                />
                <List.Item
                    title="Terms of Service"
                    left={() => <List.Icon icon="file-document-outline" />}
                    onPress={() => {/* Navigate to Terms of Service screen */}}
                />
                <List.Item
                    title="Contact / Help"
                    left={() => <List.Icon icon="help-circle-outline" />}
                    onPress={() => {/* Navigate to Contact/Help screen */}}
                />
            </List.Section>
        </View>
    );
};

const createStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            width: '100%',
            paddingLeft: 16,
        },
    });

export default SettingsScreen;
