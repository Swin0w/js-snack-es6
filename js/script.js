/* Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà. */
function es1 () {
  var student = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'age': '30'
  };

  for (var i in student) {
    var value = student[i];
    console.log(i + ": " + value);
  }
}
console.log("-----------------");
es1();
console.log("-----------------");
console.log(" ");
function es2() {
/* Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome */
  var students = [
    {
      'nome': 'Mario',
      'cognome': 'Rossi',
      'age': '20'
    },
    {
      'nome': 'Luca',
      'cognome': 'Prassi',
      'age': '20'
    },
    {
      'nome': 'Pino',
      'cognome': 'Daniele',
      'age': '20'
    },
    {
      'nome': 'Giulio',
      'cognome': 'DiNapoli',
      'age': '20'
    }
  ];

  for (var i = 0; i < students.length; i++) {
    console.log(students[i]['nome'], students[i]['cognome']);
  }
}
console.log("-----------------");
es2();
console.log("-----------------");

function es3() {
  /* Dare la possibilità all'utente attraverso 3 prompt di
     aggiungere un nuovo oggetto studente inserendo
     nell'ordine: nome, cognome e età.*/

     let addName = prompt("Dammi un nome:");
     let addSurname = prompt("Dammi un cognome:");
     let addAge = parseInt(prompt("Dammi un'età:"));

     let students = [
       {
         'nome': 'Beppe',
         'cognome': 'Licorni',
         'age': 22
       },
       {
         'nome': addName,
         'cognome': addSurname,
         'age': addAge
       }
     ];
     for (var i = 0; i < students.length; i++) {
       console.log(students[i]['nome'], students[i]['cognome']);
     }

}
console.log("---------------");
es3();
console.log("---------------");
