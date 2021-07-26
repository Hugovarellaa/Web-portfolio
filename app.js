
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const data = new Date();
    const anoAtual = data.getFullYear()
    const ano = document.querySelector('input#txtano').value;
    const hoje = Number(anoAtual) - Number(ano)
    const sexo = document.getElementsByName('radsexo');
    const resultado = document.querySelector('div#res');
    const img = document.createElement('img');
    img.setAttribute('id', 'foto')

    if (ano == '') {
        resultado.textContent = `Preencha os campos e veja o resultado`
    } else {
        genero = ''
        if (sexo[0].checked) {
            genero = 'Homen'
            if (hoje < 10) {
                //foto da criança homem
                img.src = './_Imagens/H1.png'
            } else if (hoje < 21) {
                //foto do jovem homem
                img.src = './_Imagens/H2.png'
            } else if (hoje < 50) {
                //foto do adulto homem
                img.src = './_Imagens/H3.png'
            } else {
                //foto do idoso homem
                img.src = './_Imagens/H4.png'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (hoje < 10) {
                //foto da criança mulher
                img.src = './_Imagens/M1.png'
            } else if (hoje < 21) {
                //foto da jovem mulher
                img.src = './_Imagens/M2.png'
            } else if (hoje < 50) {
                //foto da adulto mulher
                img.src = './_Imagens/M3.png'
            } else {
                //foto da idosa mulher
                img.src = './_Imagens/M4.png'
            }
        }
        resultado.textContent = `Detectamos... ${genero} com a ${hoje} anos`
    }
    resultado.appendChild(img)

})