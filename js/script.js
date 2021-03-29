/* Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà. */
function es1 () {
  var studente = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'age': '30'
  };

  for (var i in studente) {
    var value = studente[key];
    console.log(i + ":" + value);
  }
}
es1();
