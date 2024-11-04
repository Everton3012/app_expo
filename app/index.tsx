import Pagina from "@/components/template/Pagina";
import { View } from "react-native";
import Logo from '../components/template/Logo';
import Pergunta from '../components/questionario/Pergunta';
import perguntas from "@/data/constants/perguntas";

export default function Index() {
  return (
    <Pagina>
      <View style={{gap : 30}}>
        <Logo />
        <Pergunta pergunta={perguntas[0]} />
      </View>
    </Pagina>
  );
}
