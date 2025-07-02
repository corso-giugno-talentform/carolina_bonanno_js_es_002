let myName = 'Carolina';
let lastName = 'Bonanno';

for (i=1; i<=30; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
        console.log(myName + ' ' + lastName);
    } else {
        if (i % 3 === 0) {
            console.log(myName);
        } else if (i % 5 === 0) {
            console.log(lastName);
        } else {
             console.log(i)
        }  
    } 
}