let cont = 0;
let suma = 0;

while(cont < 5){
    let num = parseInt(prompt(`Número ${cont + 1}`));
    let primo = false;
    for(let i = 2; i <= num; i++){
        if(num % i === 0 && num != i){
            primo = false;
            break;
        }else{
            primo = true;
        }
    }
    if(primo){
        suma += num;
        console.log(`El número ${num} es primo, la suma ahora es: ${suma}`);
    }
    cont ++;
}