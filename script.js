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
                texto: "Escolher o hemisfério Sul",
                afirmacao: "Você se depara com países com clima quente"
            },
            {
                texto: "Escolher o hemisfério Norte",
                afirmacao: "Você se depara com países com clima frio"
            }
        ]
    },
    {
        enunciado: "Após isso você deve escolher seu destino fantástico",
        alternativas: [
            {
                texto: "Embarcar em uma viagem para a Àfrica do Sul",
                afirmacao: "Cidade do Cabo"
            },
            {
                texto: "Embarcar em uma viagem para os Estados Unidos",
                afirmacao: "Nova iorque"
            }
        ]
    },
    {
        enunciado: "Quando você chega ao seu destino percebe que precisa conhecer um pouco mais sobre a cultura local, então decide visitar algum lugar e fazer uma atividade divertida.",
        alternativas: [
            {
                texto: "Praça central da cidade",
                afirmacao: "fazer cardio"
            },
            {
                texto: "Centro movimentado da cidade",
                afirmacao: "Tirar foto com celebridades"
            }
        ]
    },
    {
        enunciado: "Enquanto você está se divertindo muito, uma pessoa misteriosa te chama para um cassino e você precisa tomar uma decisão",
        alternativas: [
            {
                texto: "Não aceitar",
                afirmacao: "você perdeu a oportunidade"
            },
            {
                texto: "aceitar",
                afirmacao: "você ganhou um iate"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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