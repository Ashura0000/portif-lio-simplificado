/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele
  */

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

const botaoMostrarCertificados = document.querySelector('.btn-mostrar-certificados');
const certificadosInativos = document.querySelectorAll('.certificado:not(.ativo');


botaoMostrarCertificados.addEventListener('click', () => {
    mostrarMaisCertificados();
    esconderBotaoCertificados();
})

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos(); 
    esconderBotaoProjeto();
});

function esconderBotaoCertificados() {
    botaoMostrarCertificados.classList.add("remover");
}

function mostrarMaisCertificados() {
    certificadosInativos.forEach(certificados => {
        certificados.classList.add('ativo');
    });
}

function esconderBotaoProjeto() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
