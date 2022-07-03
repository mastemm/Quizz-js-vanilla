const form = document.querySelector('.form-quizz');
let tableauResults = [];

const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  /*preventDefault evite le refresh de la page au submit */
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 6; i++) {
    tableauResults.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(tableauResults);
  verifFunc(tableauResults);
  tableauResults = [];
});

function verifFunc(tabResultats) {
  for (let a = 0; a < 5; a++) {
    if (tabResultats[a] === reponses[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  // console.log(verifTableau);
  afficherResultats(verifTableau);
  verifTableau = [];
}
function afficherResultats(tabCheck) {
  const nbDeFautes = tabCheck.filter((el) => el !== true).length;
  // console.log(nbDeFautes);

  switch (nbDeFautes) {
    case 0:
      titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
      aideResultat.innerText = '';
      noteResultat.innerText = '5/5';
      break;
    case 1:
      titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aideResultat.innerText =
        'Retentez une autre réponse dans la case rouge, puis re-validez !';
      noteResultat.innerText = '4/5';
      break;
    case 2:
      titreResultat.innerText = `✨ Encore un effort ... 👀`;
      aideResultat.innerText =
        'Retentez une autre réponse dans les cases rouges, puis re-validez !';
      noteResultat.innerText = '3/5';
      break;
    case 3:
      titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aideResultat.innerText =
        'Retentez une autre réponse dans les cases rouges, puis re-validez !';
      noteResultat.innerText = '2/5';
      break;
    case 4:
      titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
      aideResultat.innerText =
        'Retentez une autre réponse dans les cases rouges, puis re-validez !';
      noteResultat.innerText = '1/5';
      break;
    case 5:
      titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
      aideResultat.innerText =
        'Retentez une autre réponse dans les cases rouges, puis re-validez !';
      noteResultat.innerText = '0/5';
      break;

    default:
      'Wops, cas innatendu.';
  }
}
