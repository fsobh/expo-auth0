import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme} from 'react-native-paper';

const RecurringScreen = () => {


    const theme = useTheme()
    const styles = createStyles(theme);
    return (
        <View style={styles.container}>
            <Text style={{color:theme.colors.onBackground}}>{`Recurring screen`}</Text>
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
export default RecurringScreen;