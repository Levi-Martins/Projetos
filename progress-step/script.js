let proximo = document.getElementById('proximo')
let atual = 1;
let circuloAtivo = document.querySelectorAll('.circulo')
circuloAtivo.forEach((ativo,index)=>{
    proximo.addEventListener('click', ()=>{
        if(index == 1){
            ativo.classList.add('ativo')
            console.log(ativo)
            console.log(index)
            console.log(atual)
            atual++;
        }
        else if(index == 2 && atual == 3){
            ativo.classList.add('ativo')
            console.log(ativo)
            console.log(index)
        }else if(index == 3 && atual == 4){
            ativo.classList.add('ativo')
            console.log(ativo)
            console.log(index)
        }

    })
})
