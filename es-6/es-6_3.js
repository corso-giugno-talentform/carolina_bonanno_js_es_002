// Devo usare %

for (i=1; i<=30; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
        console.log("Carolina Bonanno");
    } else {
        if (i % 3 === 0) {
            console.log("Carolina");
        } else if (i % 5 === 0) {
            console.log("Bonanno");
        } else {
             console.log(i)
        }  
    } 
}