import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({

    appBar: {
        backgroundColor: Colors.appBar,
        height: 70,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    image: {
        width: 60,
        height: 60,
    },
    appBarIcons:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "25%",
    }

});