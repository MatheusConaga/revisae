import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppBar() {

    return (
        <View style={styles.appBar}>
            <Image source={require("../../../assets/logo_revisae.png")} style={styles.image} />
            <View style={styles.appBarIcons}>
                <Icon name="search" size={30} color="white" />
                <Icon name="bars" size={30} color="white" />
            </View>
        </View>
    );

}