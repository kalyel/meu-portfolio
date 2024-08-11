const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const esconderProjetos = document.querySelectorAll('.projeto:not(.principal)');


botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();
    esconderBotaoMostrarProjetos();
    mostrarBotaoEsconderProjetos();

});

botaoEsconderProjetos.addEventListener('click', () => {
    mostrarMenosProjetos()
    esconderBotaoEsconderProjetos()
    mostrarBotaoMostrarProjetos()
})

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function mostrarMenosProjetos() {
    esconderProjetos.forEach(projetoAtivo => {
        projetoAtivo.classList.remove('ativo');
    });
}

function mostrarBotaoMostrarProjetos() {
    botaoMostrarProjetos.classList.remove('remover');
}

function esconderBotaoMostrarProjetos() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarBotaoEsconderProjetos() {
    botaoEsconderProjetos.classList.remove('remover');
}

function esconderBotaoEsconderProjetos() {
    botaoEsconderProjetos.classList.add('remover');
}


