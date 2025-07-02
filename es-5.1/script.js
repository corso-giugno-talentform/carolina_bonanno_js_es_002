
const DATE = new Date();
let mese = DATE.getMonth() + 1;

console.log('Mese: '+ mese);

switch (mese) {
    case 1:
    case 2:
    case 3:
        console.log('È inverno!');
        break;
    case 4:
    case 5:
    case 6:
        console.log('È primavera!');
        break;
    case 7:
    case 8:
    case 9:
        console.log('È estate!');
        break;
    case 10:
    case 11:
    case 12:
        console.log('È autunno!');
        break;   
}

// Alternativa switch con le operazioni booleane

/* switch (true) {
    case (mese == 1 || mese == 2 || mese == 3):
        console.log('È inverno!');
        break;
    case (mese == 4 || mese == 5 || mese == 6):
        console.log('È primavera!');
        break;
    case (mese == 7 || mese == 8 || mese == 9):
        console.log('È estate!');
        break;
    case (mese == 10 || mese == 11 || mese == 12):
        console.log('È autunno!');
        break;
} */
