import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const EmailScreen = () => {

  return (
      <View style={styles.container}>
     <Text>{"Email"}</Text>
      </View>
  );
};



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

export default EmailScreen;