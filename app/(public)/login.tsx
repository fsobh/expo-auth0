import React, {useRef} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useAuthZero } from '@/hooks/useAuthZero';
import {Button, Divider, useTheme} from 'react-native-paper';
import {Link, router} from "expo-router";
import {RFValue} from "react-native-responsive-fontsize";
// @ts-ignore
//import LinkSDK  from "lean-react-native";
import Logo from '../../assets/images/logo_lime.svg'
// @ts-ignore
import DarkLogo from "@/assets/images/logo_lime.svg";
// @ts-ignore
import LightLogo from "@/assets/images/Masareef-logo-blue.svg";

const LoginScreen: React.FC = () => {
  const { onLogin, onLoginWithGoogle, onLoginWithApple } = useAuthZero();
  const theme = useTheme();
  const Lean = useRef(null)
  const styles = createStyles(theme);

  return (
      <View style={styles.container}>
          <View style={{height:'20%'}}></View>
          {theme.dark
          ? <DarkLogo width={200} height={120} />
          : <LightLogo width={200} height={120} />}
          <View style={styles.content}>
        <Button style={styles.button} textColor={styles.button.color} mode="contained" onPress={onLogin}>
          {'Log In'}
        </Button>

              <Text style={styles.text}>
                  Not a member?
                  <Text style={styles.linkText} onPress={()=>router.push("/register")}>
                      {" Sign up now"}
                  </Text>
              </Text>

              <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>or</Text>
                  <View style={styles.divider} />
              </View>

          <Button icon={'google'} style={styles.buttonGoogle} mode="contained" textColor="#000" onPress={onLoginWithGoogle}>
              {"Continue with Google"}
          </Button>

          <Button icon={'apple'} style={styles.buttonApple} mode="contained" textColor="#fff" onPress={onLoginWithApple}>
              {"Continue with Apple"}
          </Button>
      </View>
          </View>
  );
};

const createStyles = (theme: any) =>
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary,
        width: '100%'
      },
        content: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.secondary,
            width: '80%'
        },
        text:{
            color:theme.colors.onBackground,
            fontSize:RFValue(10),
            marginVertical: RFValue(8)
        },
        linkText: {
            color:theme.colors.primary, // Change this to the color you want
            fontSize:RFValue(10),
            marginVertical: RFValue(8),

        },
        dividerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: RFValue(8)
        },
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.onBackground
        },
        dividerText: {
            width: '20%',
            textAlign: 'center',
            color: theme.colors.onBackground
        },
      logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
      },
      button: {
          width: '100%',
          color: theme.colors.secondary,
          backgroundColor: theme.colors.primary,
          marginVertical: RFValue(8)
      },
        buttonGoogle: {
            width :'100%',
            backgroundColor: '#fff',
            marginVertical : RFValue(8),
            borderWidth: theme.dark ? 0 : 1,
            borderColor: '#000'
        },
        buttonApple: {
            width :'100%',
            backgroundColor: '#000',
            marginVertical : RFValue(8),
            borderWidth: theme.dark ? 1 : 0,
            borderColor: '#fff'
        },
    });

export default LoginScreen;
