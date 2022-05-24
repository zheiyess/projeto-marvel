/*
(ISSO AQUI E SAO APENAS COMENTARIOS, PARA FICAR MAIS FACIL DE ORGANIZAR OQ SERA FEITO NO CODIGO) 
 
OBJETIVO 1 -   quando passar o mouse em cima do personagem, temos que-
 - colocar a classe selecionado no personagem que passamos o mouse, para adicionar a animaçao nele

 - retirar a classe selecionado do personagem que foi selecionado


 OBJETIVO 2 -  ao passar o mouse, trocar a imagem e nome dopersonagem grande

  - alterar imagem do jogador 1
  - alterar o nome do jogador 1
*/

/* OBJETIVO 1 -   quando passar o mouse em cima do personagem, temos que-
 
- colocar a classe selecionado no personagem que passamos o mouse, para adicionar a animaçao nele

 - retirar a classe selecionado do personagem que foi selecionado
 */

const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")


        /* OBJETIVO 2 -  ao passar o mouse, trocar a imagem e nome dopersonagem grande
    
      - alterar imagem do jogador 1
      - alterar o nome do jogador 1
      */

      const idSelecionado = personagem.attributes.id.value;

      const imagemJogador1 = document.getElementById('Personagem-jogador-1');
      imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

      const nomeJogador1 = document.getElementById('nome-jogador-1');
      const nomeSelecionado = personagem.getAttribute('data-name');
      console.log('nomeSelecionado' , nomeSelecionado);
      nomeJogador1.innerHTML = nomeSelecionado;

    });
});


