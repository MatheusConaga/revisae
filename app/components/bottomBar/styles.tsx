import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({

    bottomBar: {
        backgroundColor: Colors.appBar,
        height: 70,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    image: {
        width: 60,
        height: 60,
    },
    textButton: {
        paddingLeft: 10,
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.button,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,

    }

});