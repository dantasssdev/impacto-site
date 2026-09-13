const projetos = {

    renova: {
        nome: "RENOVA",
        imagem: "../img/renova.jpg",
        descricao: "Conheça o projeto RENOVA e descubra suas propostas relacionadas à sustentabilidade."
    },

    essenza: {
        nome: "ESSENZA",
        imagem: "../img/essenza.jpg",
        descricao: "Conheça o projeto ESSENZA e suas soluções voltadas para escolhas mais sustentáveis."
    },

    impacto: {
        nome: "IMPACTO",
        imagem: "../img/impacto.jpg",
        descricao: "Uma experiência interativa sobre sustentabilidade aplicada à tecnologia e à informática."
    },

    vitor: {
        nome: "PROJETO DO VITOR",
        imagem: "../img/vitor.jpg",
        descricao: "Informações sobre o projeto."
    },

    robotica: {
        nome: "ROBOTICA 1",
        imagem: "../img/robotica.jpg",
        descricao: "Informações sobre o projeto de robótica."
    }

};


function abrirProjeto(id) {

    const projeto = projetos[id];

    document.getElementById("imagemProjeto").src = projeto.imagem;

    document.getElementById("nomeProjeto").textContent = projeto.nome;

    document.getElementById("descricaoProjeto").textContent = projeto.descricao;

    document.getElementById("fundoModal").classList.add("aberto");

    document.getElementById("modalProjeto").classList.add("aberto");

}


function fecharProjeto() {

    document.getElementById("fundoModal").classList.remove("aberto");

    document.getElementById("modalProjeto").classList.remove("aberto");

}

function reiniciarProjeto() {

    localStorage.removeItem("quiz1_acertos");
    localStorage.removeItem("quiz2_acertos");
    localStorage.removeItem("quiz3_acertos");
    localStorage.removeItem("quiz4_acertos");

    window.location.href = "projeto.html";

}