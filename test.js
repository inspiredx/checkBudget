let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}


for (num; num < 60; num++) {
    if (num == 55) {
        break;
    }
    console.log(num);
}

do {
    console.log(num);
    num++;

} while (num < 55);



// Аналог цикла for из 3 задания

let i = 0;

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    i++;

} while (i > 0 && i < 2); //цикл выполняется пока i не перестанет быть меньше 2