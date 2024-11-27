import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {View, Text} from "react-native";
import {LogOut} from "lucide-react-native";
import {useTheme} from "react-native-paper";
import {useAuthZero} from "@/hooks/useAuthZero";
// @ts-ignore
import DarkLogo from "@/assets/images/logo_dark.svg";
// @ts-ignore
import LightLogo from "@/assets/images/logo_light.svg";
import React from "react";
import DrawerHeader from "@/components/navigation/DrawerHeader";

export default function CustomDrawerContent(props:any) {
    const theme = useTheme()
    const {onLogout} = useAuthZero()
    return (
        <View style={{ flex: 1,}}>

            <DrawerContentScrollView {...props}>
                {/*<View style={{alignItems:'center'}}>*/}
                {/*{theme.dark*/}
                {/*? <DarkLogo width={120} height={70} />*/}
                {/*: <LightLogo width={120} height={70} />}*/}
                {/*</View>*/}
                <DrawerHeader />
                <DrawerItemList {...props} />

                <DrawerItem
                    labelStyle={{color: theme.colors.error}}
                    icon={({color, size}) => <LogOut  color={theme.colors.error} size={size}/>}
                    label="Sign Out"
                    onPress={onLogout}
                />

            </DrawerContentScrollView>
        </View>
    );
}
