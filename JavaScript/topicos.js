const quiz1 = localStorage.getItem("quiz1_acertos");
const quiz2 = localStorage.getItem("quiz2_acertos");
const quiz3 = localStorage.getItem("quiz3_acertos");
const quiz4 = localStorage.getItem("quiz4_acertos");

const quiz1Conferido = localStorage.getItem("quiz1_conferido");
const quiz2Conferido = localStorage.getItem("quiz2_conferido");
const quiz3Conferido = localStorage.getItem("quiz3_conferido");
const quiz4Conferido = localStorage.getItem("quiz4_conferido");


// ================================
// MARCAR QUIZ COMO COMPLETO
// ================================

function marcarCompleto(id, conferido) {

    const botao = document.getElementById(id);

    if (conferido === "true" && botao) {

        botao.textContent = "COMPLETO";

        botao.classList.add("completo");

        botao.removeAttribute("href");

        botao.style.pointerEvents = "none";

        botao.style.cursor = "default";
    }
}


marcarCompleto("statusQuiz1", quiz1Conferido);
marcarCompleto("statusQuiz2", quiz2Conferido);
marcarCompleto("statusQuiz3", quiz3Conferido);
marcarCompleto("statusQuiz4", quiz4Conferido);


// ================================
// PROGRESSO
// ================================

const resultados = [
    quiz1Conferido,
    quiz2Conferido,
    quiz3Conferido,
    quiz4Conferido
];

let topicosConcluidos = 0;

resultados.forEach(function(resultado) {

    if (resultado === "true") {
        topicosConcluidos++;
    }

});


// TEXTO DO PROGRESSO

const textoProgresso = document.querySelector(".progresso p");

if (textoProgresso) {

    textoProgresso.textContent =
        topicosConcluidos + " / 4 TÓPICOS CONCLUÍDOS";

}


// BARRA DE PROGRESSO

const barra = document.querySelector(".barra-progresso-preenchida");

if (barra) {

    const porcentagem =
        (topicosConcluidos / 4) * 100;

    barra.style.width = porcentagem + "%";

}


// ================================
// FINAL DOS 4 QUIZZES
// ================================

if (
    quiz1Conferido === "true" &&
    quiz2Conferido === "true" &&
    quiz3Conferido === "true" &&
    quiz4Conferido === "true"
) {

    const totalAcertos =
        Number(quiz1) +
        Number(quiz2) +
        Number(quiz3) +
        Number(quiz4);


    const totalPerguntas = 20;

    const taxa =
        (totalAcertos / totalPerguntas) * 100;


    const aviso =
        document.getElementById("avisoFinal");

    const mensagem =
        document.getElementById("mensagemFinal");


    if (aviso && mensagem) {

        aviso.classList.add("mostrar");


        if (taxa >= 80) {

            mensagem.innerHTML =
                "PARABÉNS! VOCÊ COMPLETOU TODAS AS PERGUNTAS!<br><br>" +

                "VOCÊ TEVE UM APROVEITAMENTO DE " +
                taxa +
                "%.<br><br>" +

                "VOCÊ ATINGIU 80% OU MAIS!<br>" +

                "PEGUE SEU BRINDE COM ALGUM DOS RESPONSÁVEIS.";

        } else {

            mensagem.innerHTML =
                "VOCÊ COMPLETOU TODAS AS PERGUNTAS!<br><br>" +

                "VOCÊ TEVE UM APROVEITAMENTO DE " +
                taxa +
                "%.<br><br>" +

                "VOCÊ NÃO ATINGIU OS 80% NECESSÁRIOS PARA O BRINDE.";

        }
    }
}


// ================================
// REINICIAR PROJETO
// ================================

function reiniciarProjeto() {

    localStorage.removeItem("quiz1_acertos");
    localStorage.removeItem("quiz2_acertos");
    localStorage.removeItem("quiz3_acertos");
    localStorage.removeItem("quiz4_acertos");

    localStorage.removeItem("quiz1_conferido");
    localStorage.removeItem("quiz2_conferido");
    localStorage.removeItem("quiz3_conferido");
    localStorage.removeItem("quiz4_conferido");

    window.location.href = "../index.html";
}