let age = 15;

if (age < 0) {
    console.log("L'età inserita non è valida")
} else if (age >= 0 && age < 65) {
    if (age <= 12){
        console.log("Sei un bambino")
    } else if (age >= 13 && age <=17){
        console.log("Sei un adolescente")
    } else {
        console.log("Sei un adulto")
    }
} else {
    console.log("Sei un anziano")
}
