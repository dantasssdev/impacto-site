const projetos = {

    reviva: {
        nome: "REVIVA",
        imagem: "../img/reviva.jpg",
        descricao: "REVIVA é um jogo 2D de aventura e escolhas em que as decisões do jogador afetam o mundo. Quanto mais o ambiente é prejudicado, mais difícil fica recuperá-lo, tornando a sustentabilidade parte da gameplay."
    },

    essenza: {
        nome: "ESSENZA",
        imagem: "../img/essenza.jpg",
        descricao: "ESSENZA é uma plataforma que ajuda a comparar cosméticos e escolher opções mais sustentáveis, considerando seu impacto ambiental e as práticas das marcas."
    },

    impacto: {
        nome: "IMPACTO",
        imagem: "../img/impacto.jpg",
        descricao: "IMPACTO é uma experiência interativa sobre sustentabilidade na tecnologia e informática, apresentando seus impactos e práticas que incentivam um uso mais consciente e responsável dos recursos."
    },

    vitor: {
        nome: "PROJETO DO VITOR",
        imagem: "../img/vitor.jpg",
        descricao: "O (Sem nome ainda) é uma calculadora interativa de crédito de carbono, baseada no consumo de combustível, energia e, futuramente, matéria-prima, estimando os impactos gerados."
    },

    robotica: {
        nome: "ROBOTICA 1",
        imagem: "../img/robotica.jpg",
        descricao: "O Projeto de Robótica é uma lixeira sustentável que monitora seu nível de preenchimento por meio de um aplicativo, utilizando sensor ultrassônico, ESP32 e LEDs para indicar quando está vazia, pela metade ou cheia."
    }

};


/* =========================================
   ABRIR PROJETO
========================================= */

function abrirProjeto(id) {

    const projeto = projetos[id];

    if (!projeto) {
        return;
    }

    const imagem = document.getElementById("imagemProjeto");
    const nome = document.getElementById("nomeProjeto");
    const descricao = document.getElementById("descricaoProjeto");
    const fundo = document.getElementById("fundoModal");
    const modal = document.getElementById("modalProjeto");

    imagem.src = projeto.imagem;
    nome.textContent = projeto.nome;
    descricao.textContent = projeto.descricao;

    fundo.classList.add("aberto");
    modal.classList.add("aberto");
}


/* =========================================
   FECHAR PROJETO
========================================= */

function fecharProjeto() {

    const fundo = document.getElementById("fundoModal");
    const modal = document.getElementById("modalProjeto");

    fundo.classList.remove("aberto");
    modal.classList.remove("aberto");
}