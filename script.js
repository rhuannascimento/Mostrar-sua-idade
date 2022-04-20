function verificar(){
    var res = document.getElementById('res')
    var ano = document.getElementById('txtano')
    var data = new Date()
    var res = document.getElementById('res')
    var resimg = document.getElementById('res')

    if(ano.value.length == 0 || ano.value > data.getFullYear()){
        window.alert('Por favor insira dados validos!')
    }else{
        var radio = document.getElementsByName('sexo')
        var sex = ''
        var idade = data.getFullYear() - Number(ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(radio[0].checked){
            sex = 'homem'
            if(idade>=0  && idade<=10){
                img.setAttribute('src', './img/criancah.jpg')
            }else if(idade>10  && idade<=25){
                img.setAttribute('src', './img/jovemh.jpg')
            }else if(idade>25  && idade<=50){
                img.setAttribute('src', './img/adultoh.jpg')
            }else{
                img.setAttribute('src', './img/idosoh.jpg')
            }
        }else if(radio[1].checked){
            sex = 'mulher'
            if(idade>=0  && idade<=10){
                img.setAttribute('src', './img/criancam.jpg')
            }else if(idade>10  && idade<=25){
                img.setAttribute('src', './img/jovemm.jpg')
            }else if(idade>25  && idade<=50){
                img.setAttribute('src', './img/adultom.jpg')
            }else{
                img.setAttribute('src', './img/idosom.jpg')
            }
        }
        
        res.innerHTML = `Você é ${sex} e tem ${idade} anos!<br>`
        resimg.appendChild(img)
    }

}

function nome(){
   var nomes = window.prompt('Insira seu nome')
    var titulo = document.getElementById('titulo')

    titulo.innerHTML = `Olá ${nomes}!` 
}