import React, {useEffect} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useAuthZero } from '@/hooks/useAuthZero';
import {Button, useTheme} from 'react-native-paper';
import {Credentials} from "react-native-auth0";

const HomeScreen = () => {

  const { onLogout, user, error, isLoading ,getCredentials} = useAuthZero();
  // if (isLoading) {
  //   return <View style={styles.container}><Text>Loading</Text></View>;
  // }
  const [credentials, setCredentials] = React.useState<Credentials>();
  const theme = useTheme()
  useEffect(() => {
    const fetchCredentials = async () => {
      const credentials = await getCredentials();
      // @ts-ignore
      if (credentials)
        { // @ts-ignore
          setCredentials(credentials);
        }
    };

    fetchCredentials();
  }, []);

  return (
      <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
        {user &&
            <>
              <Text style={styles.text}>{`You are logged in as ${user.name}`}</Text>
              <Text style={styles.text}>{`User Sub :  ${user.sub}`}</Text>
              <Text style={styles.text}>{`User  Email:  ${user.email}`}</Text>
              <Text style={styles.text}>{`User  Email verified :  ${user.emailVerified}`}</Text>
              <Text style={styles.text}>{`User  Zone info:  ${user.zoneinfo}`}</Text>
              <Text style={styles.text}>{`ID token :  ${credentials?.idToken}`}</Text>
            </>}

      </View>
  );
};

// ... rest of your code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013511',

    width: '100%'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color :'#f3fff8'
  },
  text :{
    color:'#fff',
    margin: 10
  },
  logo: {
    width: 250, // or the width you want
    height: 250, // or the height you want
    resizeMode: 'contain',
  },
  button: {
    width :'60%',
    backgroundColor: '#cbf955'
  }
});

export default HomeScreen;