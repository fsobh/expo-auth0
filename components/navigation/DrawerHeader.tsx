import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useAuthZero} from "@/hooks/useAuthZero";
import {Avatar, Caption, Title} from "react-native-paper";


const DrawerHeader: React.FC = () => {
    const { user } = useAuthZero();
        return (
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image
                        source={{
                            uri: user?.picture || 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }}
                        size={50}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>{`${user?.givenName} ${user?.familyName}` || 'John Doe'}</Title>
                        <Caption style={styles.caption}>{user?.email || 'johndoe@gmail.com'}</Caption>
                    </View>
                </View>
            </View>
        );

}
const styles = StyleSheet.create({

    userInfoSection: {
        paddingLeft: 20,
        marginBottom :20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
});
export default DrawerHeader;
