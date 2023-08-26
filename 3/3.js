let num=prompt("Введите число"),
degree=prompt("Введите степень");
let result=1;

for (i=1; i<=degree; i++){
result*=num;
}
console.log( "Число"+ " " + num + " в степени " + degree + " равняется " + result);