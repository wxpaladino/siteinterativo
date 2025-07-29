const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara com uma oportunidade incrível de conhecer uma nova cultura. Qual destino você deseja visitar?"
            alternativas: [
            {
            texto: "Estados Unidos",
            afirmacao: "afirmação",
            },
             {
            texto: "Paris",
            afirmacao: "afirmação",
            },
        ]
    },
    

    {
        enunciado: "Nesse momento você deseja conhecer mais sobre a cultura, então decide visitar algum monumento histórico. Qual você escolhe?"
            alternativas: [
            {
            texto: "Estátua da Liberdade",
            afirmacao: "afirmação",
            },
             {
            texto: "Museu do Louvre",
            afirmacao: "afirmação",
            },
        ]
    },


     {
        enunciado: "Você irá se comunicar com um estrangeiro. Qual idioma você utiliza?"
            alternativas: [
            {
            texto: "Inglês",
            afirmacao: "afirmação",
            },
             {
            texto: "Francês",
            afirmacao: "afirmação",
            },
        ]
    },


     {
        enunciado: "Você quer visitar um restaurante famoso com pratos típicos da cultura local. Qual você escolhe?"
            alternativas: [
            {
            texto: "Cheesecake",
            afirmacao: "afirmação",
            },
             {
            texto: "Ratatouille",
            afirmacao: "afirmação",
            },
        ]
    },

let atual = 0;
let perguntaAtual; 

function mostraPergunta () {
    perguntaAtual = pergunta [atual];
    caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();