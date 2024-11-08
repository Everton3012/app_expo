import { View, Text, StyleSheet, Pressable } from 'react-native';

export interface ResultadoProps {
    pontuacao: number;
    totalDePerguntas: number;
    reiniciar: () => void;
}

const Resultado = ({pontuacao ,reiniciar ,totalDePerguntas}:ResultadoProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Você acertou</Text>
            <Text style={styles.destaque}>
            {Math.round((pontuacao / totalDePerguntas) * 100)}%
            </Text>
            <Pressable style={styles.botao} onPress={reiniciar}>
                <Text  style={styles.textoBotao}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems :"center",
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 10
    },
    texto: {
        color: "#bbb",
        fontSize: 23
    },
    destaque: {
        color: "#fff",
        fontSize: 60,
        fontWeight: '900'
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#2E9D48",
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: 700,
        borderRadius: 15
    },
    textoBotao: {color: "#fff",},
})

export default Resultado;