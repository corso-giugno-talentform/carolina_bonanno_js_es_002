// Da finire -> Ci sono solo i numeri dispari

let max = 40;

function checkEven(a) {
    return (a % 2 === 0) ? true : false;
    }

for (i = 1; i <= max; i ++) {
    if (checkEven(i)) {
        continue
    } console.log(i)
}



