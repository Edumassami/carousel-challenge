import Head from "next/head";
import Navegacao from "@/componentes/layout/Navegacao";

export default function Home() {
  return(
    <Navegacao>
      
      <Head>
        <title>MCU</title>
      </Head>

      <hr className="linhaDivisoria" />

      <div className="home">
        <h1>MCU: Universo Cinematográfico Marvel</h1>
        <hr className="linhaDivisoria" />
        <h3 className="subtituloHome">O Universo Cinematográfico Marvel começou em 2008 com Homem de Ferro e apresenta quatro fases de produções.</h3>
        <hr className="linhaDivisoria" />
        <p className="paragrafoHome">O Universo Cinematográfico Marvel está em andamento com sua Fase 4, que teve início com WandaVision – primeira série original da Marvel no Disney+, vale lembrar que essas produções serão essenciais para o UCM – e está próximo do lançamento de seu primeiro filme na nova etapa da franquia, Viúva Negra que é um dos quatro filmes da Marvel programados para 2021.</p>
        <p className="paragrafoHome">Mas antes disso, outras três fases apresentaram produções da Marvel e, juntas, carregaram o nome de Saga do Infinito – por causa da trama das Joias do Infinito e do antagonismo de Thanos (Josh Brolin), que é considerado o melhor vilão da Marvel nos cinemas. Para atualizar você sobre o Universo Cinematográfico, o AdoroCinema separou cada uma dessas quatro fases e quais produções fazem parte dela. Dá uma olhada!</p>
      </div>
    </Navegacao>
    
  
  );
}