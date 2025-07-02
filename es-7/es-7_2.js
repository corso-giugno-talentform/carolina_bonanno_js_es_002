let myName = 'Carolina';
let lastName = 'Bonanno';

function controlloMult(a) {
    return console.log(a % 3 === 0 && a % 5 === 0 ? myName + lastName : a % 3 === 0 ? myName : a % 5 === 0 ? lastName : a)
}

for (i = 1; i <= 30; i ++) {
    controlloMult(i)
}