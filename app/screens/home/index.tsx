import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AppBar from "../../components/appBar";

export default function Home() {

    return (
        <>
            <AppBar />
            <View style={styles.container}>
                <Text style={styles.text}>ESTA É A HOME!</Text>
            </View>
        </>
    );

}