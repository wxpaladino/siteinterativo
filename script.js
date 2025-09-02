const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você terá a chance de iniciar uma jornada inesquecível, para isso escolha um caminho",
        alternativas: [
            {
                texto: "Escolhe uma ilha",
                afirmacao: "Você se depara com países com clima quente"
            },
            {
                texto: "Escolher uma capital",
                afirmacao: "Você se depara com países com clima frio"
            }
        ]
    },
    {
        enunciado: "Após isso você deve escolher seu destino",
        alternativas: [
            {
                texto: "Embarcar em uma viagem para Maldivas",
                afirmacao: "Ásia Meridional"
            },
            {
                texto: "Embarcar em uma viagem para o Amsterdã",
                afirmacao: "Holanda"
            }
        ]
    },
    {
        enunciado: "Quando você chega ao seu destino percebe que precisa conhecer um pouco mais sobre a cultura local, então decide visitar algum lugar e fazer uma atividade divertida.",
        alternativas: [
            {
                texto: "Parques aquáticos",
                afirmacao: "você faliu"
            },
            {
                texto: "Centro movimentado da cidade",
                afirmacao: "você encontrou Chuck Bass"
            }
        ]
    },
    {
        enunciado: "Enquanto você está se divertindo muito, uma pessoa misteriosa te chama para jogar clash royale apostado e você precisa tomar uma decisão",
        alternativas: [
            {
                texto: "Não aceitar",
                afirmacao: "você perdeu a oportunidade de ganhar um iate"
            },
            {
                texto: "aceitar",
                afirmacao: "você ganhou um iate"
            }
        ]
    },
    {
        enunciado: "Chegou o momento de se despedir dessa aventura! Você poderá levar qualquer coisa para se recordar da viagem, o que você escolhe? ",
        alternativas: [
            {
                texto: "levar o iate",
                afirmacao: "não foi possível passar na alfândega"
            },
            {
                texto: "pegar a conta do adversário",
                afirmacao: "tinha mais de 10 mil troféus e você ficou rico"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();