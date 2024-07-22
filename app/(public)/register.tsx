import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {validatePasswordLength, validatePasswordMatch} from '@/hooks/useAuthZero';
import {Button, useTheme} from 'react-native-paper';
import {RFValue} from "react-native-responsive-fontsize";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import CustomInput from "@/components/TextInput";
// @ts-ignore
import Logo from "@/assets/images/logo_lime.svg";


const LoginScreen = () => {
    const theme = useTheme()

    const styles = createStyles(theme);

    // if (isLoading) {
    //   return <View style={styles.container}><Text>Loading</Text></View>;
    // }
    const scrollViewRef = useRef(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState({ isValid: true, errorMessage: '' });
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({ isValid: true, errorMessage: '' });
    const [isFormValid, setIsFormValid] = useState(false);



    useEffect(() => {
        const passwordValidationResult = validatePasswordLength(password);
        const confirmPasswordValidationResult = validatePasswordMatch(password, confirmPassword);

        setPasswordValidation(passwordValidationResult);
        setConfirmPasswordValidation(confirmPasswordValidationResult);

        setIsFormValid(passwordValidationResult.isValid && confirmPasswordValidationResult.isValid);
    }, [password, confirmPassword]);

    return (
        <KeyboardAwareScrollView
            ref={scrollViewRef}
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
            enableOnAndroid={true}
            extraScrollHeight={20}
        >

            <Text style={styles.header}>{"Create an account"}</Text>

            <View style={styles.inputContainer}>
                <CustomInput
                    containerStyle={{ width: '50%' }}
                    label={'First name'}
                    placeholder={'First name'}
                    labelColor={theme.colors.primary}
                    secureTextEntry={false}
                    value={firstName}
                    onChange={setFirstName}
                />
                <CustomInput
                    containerStyle={{ width: '50%' }}
                    label={'Last name'}
                    placeholder={'Last name'}
                    labelColor={theme.colors.primary}
                    secureTextEntry={false}
                    value={lastName}
                    onChange={setLastName}
                />
            </View>


            <CustomInput
                label={'Email address'}
                placeholder={'Email'}
                labelColor={theme.colors.primary}
                secureTextEntry={false}
                value={email}
                onChange={setEmail}

            />
            <CustomInput
                label={'Password'}
                placeholder={'Password'}
                labelColor={theme.colors.primary}
                secureTextEntry={true}
                validation={passwordValidation}
                onChange={setPassword}
                value={password}

            />
            <CustomInput
                label={'Confirm password'}
                placeholder={'Confirm password'}
                labelColor={theme.colors.primary}
                validation={confirmPasswordValidation}
                secureTextEntry={true}
                onChange={setConfirmPassword}
                value={confirmPassword}

            />

            <Button style={styles.button}  mode="contained" textColor={styles.button.color}  disabled={false/**!isFormValid || !firstName || !lastName} onPress={() => router.push('/email')**/} >
                Sign up
            </Button>


        </KeyboardAwareScrollView>
    );

};
const createStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,

        },
        content: {
            flexGrow: 1,
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            width: '100%',
            padding: RFValue(8),
        },
        header: {
            fontSize: 24,
            textAlign: 'left',
            alignSelf: 'flex-start',
            marginVertical: 50,
            marginLeft:16,
            color :theme.colors.onBackground
        },
        logo: {
            width: 250,
            height: 80,
            resizeMode: 'contain',
        },
        button: {
            width :'100%',
            backgroundColor: theme.colors.primary,
            marginVertical : RFValue(5),
            color: theme.colors.secondary
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        },
    });


export default LoginScreen;