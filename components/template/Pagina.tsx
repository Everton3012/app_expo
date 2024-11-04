import { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export interface PaginaProps{
    children: ReactNode;
}

const background = require('@/assets/images/background.jpg')

export default function Pagina(props: PaginaProps) {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image} imageStyle={{opacity: 0.5}}>
                {props.children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})