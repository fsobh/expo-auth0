import React from 'react';
import {View, Text, TextInput, StyleSheet, ViewStyle} from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";
import {useTheme} from "react-native-paper";

interface CustomInputProps {
    label: string;
    placeholder?: string;
    borderColor?: string;
    labelColor?: string;
    secureTextEntry?: boolean;
    rightIcon?: string;
    containerStyle?: ViewStyle;
    onRightIconClick?: () => void;
    value?: string;
    onChange?: (text: string) => void;
    validation?: {
        isValid: boolean;
        errorMessage?: string;
    };
    [key: string]: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder, borderColor = 'gray', labelColor = 'black', secureTextEntry = false, rightIcon, onRightIconClick, value, onChange, validation, ...props }) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const handleTextChange = (text: string) => {
        if (onChange) {
            onChange(text);
        }
    };

    return (

        <View style={[styles.container,props.containerStyle]}>
            <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput {...props} value={value} onChangeText={handleTextChange}  style={[styles.input, {borderColor: borderColor}]} placeholder={placeholder} placeholderTextColor="lightgray" secureTextEntry={secureTextEntry} />
            </View>
            {validation && !validation.isValid && validation.errorMessage && <Text style={styles.errorText}>{validation.errorMessage}</Text>}
        </View>
    );
};
const createStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            width: '100%',
            marginBottom: 24,
            paddingHorizontal: 16,
        },
        label: {
            marginBottom: 8,
            textAlign: 'left',
            marginLeft:16,
            fontSize:14,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

        },
        input: {
            flex: 1,
            height: 56,
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 10,
            color: theme.colors.onBackground,
            fontSize: 16,
        },
        errorText: {
            marginTop: 8,
            fontSize: 10,
            marginLeft:16,
            color: theme.colors.error,
        },

    });


export default CustomInput;