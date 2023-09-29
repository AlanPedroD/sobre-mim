let botao = document.querySelector('.btn');

let paragrafos = document.querySelectorAll('p')

let corpo = document.querySelector('body')

let cabecalho = document.querySelector('.cabecalho')

console.log(paragrafos)

paragrafos.forEach(function(indices){
    botao.addEventListener('click', function(){
        indices.classList.toggle('paragrafo-light')
        corpo.classList.toggle('dark-theme');
        cabecalho.classList.toggle('cabecalho-light');
        if(botao.textContent === 'Light'){
            botao.textContent = 'Dark';
        }else{
            botao.textContent = 'Light';
        }
    })
})
