import { useState } from "react";
import todasAsPerguntas from "@/data/constants/perguntas";
import perguntas from "@/data/constants/perguntas";

const useQuestionario = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [finalizado, setFinalizado] = useState(todasAsPerguntas.slice(0, 10))

  return {
    get pergunta () {
        return perguntas[indicePergunta]
    }
  }
}

export default useQuestionario