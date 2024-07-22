import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useAuthZero } from '@/hooks/useAuthZero';
import { Button } from 'react-native-paper';

const LoginScreen = () => {


  // if (isLoading) {
  //   return <View style={styles.container}><Text>Loading</Text></View>;
  // }

  return (
      <View style={styles.container}>
     <Text>{"Emaaill"}</Text>
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

export default LoginScreen;