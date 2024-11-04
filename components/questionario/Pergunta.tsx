import PerguntaModel from '@/data/model/Pergunta';
import { View, Text, StyleSheet } from 'react-native';
import Enunciado from './Enunciado';

export interface PerguntaProps {
    pergunta: PerguntaModel;
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View>
            <Enunciado enunciado={props.pergunta.enunciado} />
        </View>
    )
}

