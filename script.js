var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    // Bloqueia o refresh da página
    e.preventDefault()

    // Url da pesquisa 
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    // Valor do input name
    let nome = document.getElementById("name")

    // Concatena a url com o inputname 
    urlForm = urlForm + this.name.value

    // Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    // ID content
    let resposta = document.getElementById('content')

    //ID imgPokemon
    let imagem = document.getElementById('imgPokemon')

    // Resposta em HTML
    let HTML = ''

    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function (data) {
        console.log(data)
        HTML = 'nome: ' + maiuscula(data.name) + '<br>'
        HTML = HTML + 'Type: ' + maiuscula(data.types[0].type.name)
        resposta.innerHTML = HTML

        imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
    .catch(function (err) {
         if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            HTML = 'Pokémon não encontrado!'
         } else {
            HTML = 'Erro:' + err
         }
         resposta.innerHTML = HTML
    })


});


function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}