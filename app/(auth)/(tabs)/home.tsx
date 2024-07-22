import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useAuthZero } from '@/hooks/useAuthZero';
import { useTheme} from 'react-native-paper';

const HomeScreen = () => {

  const {  user } = useAuthZero();

  const theme = useTheme()
  const styles = createStyles(theme);
  return (
      <View style={styles.container}>
        {user && <Text style={{color:theme.colors.onBackground}}>{`You are logged in as ${user.givenName} ${user?.familyName}`}</Text>}
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
export default HomeScreen;