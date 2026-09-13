const gabarito = {
    quiz1: ["B", "A", "C", "B", "A"],
    quiz2: ["B", "A", "C", "C", "C"],
    quiz3: ["A", "C", "A", "A", "C"],
    quiz4: ["B", "B", "C", "C", "B"]
};

let quizAtual = "";

const pagina = window.location.pathname;

if (pagina.includes("quiz1")) quizAtual = "quiz1";
if (pagina.includes("quiz2")) quizAtual = "quiz2";
if (pagina.includes("quiz3")) quizAtual = "quiz3";
if (pagina.includes("quiz4")) quizAtual = "quiz4";

let respostas = [];

const blocos = document.querySelectorAll(".bloco-pergunta");


/* SELECIONAR ALTERNATIVA */

blocos.forEach(function(bloco, numeroPergunta) {

    const alternativas = bloco.querySelectorAll(".alternativa");

    alternativas.forEach(function(alternativa) {

        alternativa.addEventListener("click", function() {

            // Não deixa alterar depois de conferir
            if (document.body.classList.contains("quiz-conferido")) {
                return;
            }

            // Remove seleção das outras alternativas
            alternativas.forEach(function(item) {
                item.classList.remove("selecionada");
            });

            // Marca a escolhida
            alternativa.classList.add("selecionada");

            // Guarda a letra
            const letra = alternativa.textContent.trim().charAt(0);

            respostas[numeroPergunta] = letra;
        });

    });

});


/* CONFERIR */

function conferir() {

    // Verifica se respondeu tudo
    for (let i = 0; i < blocos.length; i++) {

        if (!respostas[i]) {
            alert("Responda todas as perguntas antes de conferir.");
            return;
        }

    }

    let acertos = 0;
    let erros = 0;


    blocos.forEach(function(bloco, numeroPergunta) {

        const alternativas = bloco.querySelectorAll(".alternativa");

        const respostaUsuario = respostas[numeroPergunta];
        const respostaCorreta = gabarito[quizAtual][numeroPergunta];


        alternativas.forEach(function(alternativa) {

            const letra = alternativa.textContent.trim().charAt(0);

            // Mostra a correta em verde
            if (letra === respostaCorreta) {
                alternativa.classList.add("correta");
            }

            // Mostra o que o usuário marcou
            if (letra === respostaUsuario) {

                if (respostaUsuario === respostaCorreta) {

                    alternativa.classList.add("correta");
                    acertos++;

                } else {

                    alternativa.classList.add("errada");
                    erros++;

                }

            }

        });

    });


    // Mostra acertos e erros
    document.getElementById("acertosQuiz").textContent = acertos;
    document.getElementById("errosQuiz").textContent = erros;

    document.getElementById("resultadoQuiz").classList.add("mostrar");


    // Guarda o resultado desse quiz
    localStorage.setItem(quizAtual + "_acertos", acertos);


    // Marca que foi conferido
    document.body.classList.add("quiz-conferido");
}


/* COMPLETAR */

function completarQuiz() {

    if (!document.body.classList.contains("quiz-conferido")) {
        alert("Clique em CONFERIR antes de completar o quiz.");
        return;
    }

    window.location.href = "topicos.html";
}