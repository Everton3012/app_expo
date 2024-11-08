import Pagina from "@/components/template/Pagina";
import { View } from "react-native";
import Logo from '../components/template/Logo';
import Pergunta from '../components/questionario/Pergunta';
import useQuestionario from "@/data/hooks/useQuestionario";
import Resultado from "@/components/questionario/Resultado";
import todasAsPerguntas from '@/data/constants/perguntas';

export default function Index() {

  const {pergunta, responder, concluido, pontuacao, reiniciar, totalDePerguntas} = useQuestionario();

  return (
    <Pagina>
      <View style={{gap : 30}}>
        <Logo />
        {concluido ? (
          <Resultado pontuacao={pontuacao} totalDePerguntas={totalDePerguntas} reiniciar={reiniciar}/>
        ) : (
          <Pergunta pergunta={pergunta} opcaoSelecionado={responder}/>
        )}
        
      </View>
    </Pagina>
  );
}
