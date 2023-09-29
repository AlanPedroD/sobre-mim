let botao = document.querySelector('button');

let corpo = document.querySelector('body');

let cabecalho = document.querySelector('.cabecalho');
console.log(cabecalho)


botao.addEventListener('click', function(){
    cabecalho.classList.toggle('cabecalho-light');
    corpo.classList.toggle('body-light');
    if(botao.textContent === 'Light'){
        botao.textContent = 'Dark';
    }else{
        botao.textContent = 'Light';
    }
})
