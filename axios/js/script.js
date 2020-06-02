// CONSULTA DE ANIMES
var inputElement = document.getElementById('numero');
var btnElement = document.getElementById('pesquisar');
var listElement = document.querySelector('.div lista');


btnElement.onclick = async function () {
  //Pausa a execucão até pegarAnime() retornar um valor ou falhar.
  let anime = await pegarAnime();
  let campoInformacoes2 = document.getElementById('informacoes2');
  let imagem = document.createElement('img');
  let titulo = document.createElement('p');

  titulo.innerText = `Título: ${anime.data.title}`;
  imagem.src = `${anime.data.image_url}`

  campoInformacoes2.innerHTML = '';
  campoInformacoes2.appendChild(titulo);
  campoInformacoes2.appendChild(imagem);

  //Verifica se houve erro
  if (anime.error == null) {
    //Caso não houver erros
    console.log(anime.data);
  


} else {
    //Caso houver erros
    console.error(anime.error);
  }

};


async function pegarAnime() {
  let inputValue = inputElement.value;
  let d = {};
  try {
    //Pausa a execução até axios.get() retornar um valor ou falhar
    d = await axios.get(`https://api.jikan.moe/v3/anime/${inputValue}`, {
      timeout: 3000
    });
  } catch (err) {
    d.error = err;
    console.log('Erro 404 - Anime não encontrado.');
  }
  return d;
};