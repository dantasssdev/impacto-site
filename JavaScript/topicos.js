/* ================================
   PEGAR RESULTADOS DOS QUIZZES
================================ */

const quiz1 = localStorage.getItem("quiz1_acertos");
const quiz2 = localStorage.getItem("quiz2_acertos");
const quiz3 = localStorage.getItem("quiz3_acertos");
const quiz4 = localStorage.getItem("quiz4_acertos");


/* ================================
   MARCAR COMO COMPLETO E BLOQUEAR
================================ */

function marcarCompleto(id, resultado) {

    const botao = document.getElementById(id);

    if (resultado !== null && botao) {

        // Muda o texto
        botao.textContent = "COMPLETO";

        // Deixa verde
        botao.classList.add("completo");

        // Remove o link
        botao.removeAttribute("href");

        // Impede clique
        botao.style.pointerEvents = "none";

        // Muda o cursor
        botao.style.cursor = "default";
    }

}


/* ================================
   VERIFICAR CADA QUIZ
================================ */

marcarCompleto("statusQuiz1", quiz1);

marcarCompleto("statusQuiz2", quiz2);

marcarCompleto("statusQuiz3", quiz3);

marcarCompleto("statusQuiz4", quiz4);


/* ================================
   VERIFICAR SE TODOS FORAM FEITOS
================================ */

if (
    quiz1 !== null &&
    quiz2 !== null &&
    quiz3 !== null &&
    quiz4 !== null
) {

    /* SOMAR ACERTOS */

    const totalAcertos =
        Number(quiz1) +
        Number(quiz2) +
        Number(quiz3) +
        Number(quiz4);


    /* TOTAL DE PERGUNTAS */

    const totalPerguntas = 20;


    /* CALCULAR TAXA */

    const taxa = (totalAcertos / totalPerguntas) * 100;


    /* PEGAR AVISO */

    const aviso = document.getElementById("avisoFinal");

    const mensagem = document.getElementById("mensagemFinal");


    if (aviso && mensagem) {

        aviso.classList.add("mostrar");


        /* 80% OU MAIS */

        if (taxa >= 80) {

            mensagem.innerHTML =
                "PARABÉNS! VOCÊ COMPLETOU TODAS AS PERGUNTAS!<br><br>" +
                "VOCÊ TEVE UM APROVEITAMENTO DE " +
                taxa +
                "%.<br><br>" +
                "VOCÊ ATINGIU 80% OU MAIS!<br>" +
                "PEGUE SEU BRINDE COM ALGUM DOS RESPONSÁVEIS.";

        }


        /* MENOS DE 80% */

        else {

            mensagem.innerHTML =
                "VOCÊ COMPLETOU TODAS AS PERGUNTAS!<br><br>" +
                "VOCÊ TEVE UM APROVEITAMENTO DE " +
                taxa +
                "%.<br><br>" +
                "VOCÊ NÃO ATINGIU OS 80% NECESSÁRIOS PARA O BRINDE.";

        }

        function reiniciarProjeto() {

    localStorage.removeItem("quiz1_acertos");
    localStorage.removeItem("quiz2_acertos");
    localStorage.removeItem("quiz3_acertos");
    localStorage.removeItem("quiz4_acertos");

    window.location.href = "../index.html";

}

    }

}