/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// stringhe -> concatenazione di caratteri
// Insieme di caratteri che formano una parola o una frase. Ciao è una stringa.
let string = 'ciao'
console.log(string)

// numeri -> valori numeri interi, decimali, etc.
let number
console.log(number)

// booleani -> veridicità: true/false
let boolean
// un valore booleano serve a dichiarare la true/false di un'espressione. Si usano per fare domande.
// ESEMPIO: 6 < 9? True
console.log('6 minore di 10', 6 < 9)

// undefined -> il valore di una variabile definita ma senza assegnazione
let variabileUndefined
console.log('Sono un dato di tipo ', variabileUndefined)

// null -> null è un valore, rappresenta l'ESPLICITA ASSENZA di un valore
// Dopo aver dichiarato una variabile le assegno il valore 'null', così da assegnaere niente
let variabileNull
console.log('Sono un dato di tipo ', variabileNull)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Michele'
console.log('Il mio nome è', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20
console.log('il valore di sum è', sum) // 32
// oppure
let first = 12
let second = 20
let total = first + second //32
console.log('somma dei valori', total)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log('x')

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// cambio il valore di myName
myName = 'Mandanici'
console.log(myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x
console.log('risultato della sottrazione', subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
const comparation = name1 === name2
console.log('verifico la loro uguaglianza', comparation)
