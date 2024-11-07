import PerguntaModel from '@/data/model/Pergunta';
import { View, Text, StyleSheet } from 'react-native';
import Enunciado from './Enunciado';
import Opcao from './Opcao';

export interface PerguntaProps {
    pergunta: PerguntaModel;
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View style={{gap: 25}}>
            <Enunciado enunciado={props.pergunta.enunciado} />
            <View style={{gap: 10}}>
                {props.pergunta.opcoes.map((opcao, indice) => (
                    <Opcao key={indice} indice={indice} texto={opcao} onPress={() => { }} />
                ))}
            </View>
        </View>
    )
}

