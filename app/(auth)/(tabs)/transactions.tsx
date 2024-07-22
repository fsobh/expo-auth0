import React, {useRef} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useAuthZero } from '@/hooks/useAuthZero';
import {Button, useTheme} from 'react-native-paper';

const TransactionsScreen = () => {

    const { onLogout, user, error, isLoading } = useAuthZero();

    const theme = useTheme()
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <Text style={{color:theme.colors.onBackground}}>{`Transactions screen`}</Text>
        </View>
    );

}

const createStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            width: '100%'
        },
    });
export default TransactionsScreen;