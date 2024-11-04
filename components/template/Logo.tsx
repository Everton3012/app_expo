import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>SPACE QUIZ</Text>
            <Text style={styles.secundario}>Perguntas de outro mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: "SOLARSPACEDEMO-Regular",
        fontSize: 30,
        textAlign: "center",
        color: "#fff"
    },
    secundario: {
        fontFamily: "SPACEMISSION",
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
        paddingHorizontal: 5
    }
})