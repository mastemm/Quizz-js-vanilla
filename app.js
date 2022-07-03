const form = document.querySelector('.form-quizz');
let tableauResults = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  /*preventDefault evite le refresh de la page au submit */
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 6; i++) {
    tableauResults.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  console.log(tableauResults);
  tableauResults = [];
});
