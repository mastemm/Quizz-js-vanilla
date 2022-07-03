const form = document.querySelector('.form-quizz');
let tableauResults = [];

const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
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
  console.log(verifTableau);
  verifTableau = [];
}
