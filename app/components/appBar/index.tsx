import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export default function AppBar() {

    return (
        <View style={styles.appBar}>
            <Image source={require("../../../assets/logo_revisae.png")} style={styles.image} />

        </View>
    );

}