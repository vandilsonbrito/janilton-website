import Layout from "../../layouts/Layout";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
        <Helmet>
          <meta name="description" content="O Professor Janilton é um especialista na arte de dar aulas criativas, pesquisa educacional e inovação. É um professor de Geografia com mais de vinte e cinco anos de atuação com Mestrado em Ensino de Ciências e Doutorado em Ciências. Ele possui um canal no YouTube onde compartilha seu conhecimento para ajudar alunos (com conteúdos de Geografia) e professores (para ajudá-los na elaboração de aulas criativas). Além disso, ele escreve artigos de opinião sobre diversos temas da área acadêmica"/>
        </Helmet>
        <Layout/>
    </div>
  )
}
