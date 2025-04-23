import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomBar() {

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Icon name="plus" size={20} color="white" />
                    <Text style={styles.textButton}>Criar um novo deck</Text>
                </View>
            </TouchableOpacity>

        </View >
    );

}