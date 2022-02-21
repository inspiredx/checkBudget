let money, time;

function start() { //Объявляем функцию
    money = +prompt('Ваш бюджет на месяц?', ''); //Благодаря унарному плюсу здесь передается число.
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) { //Если один из вариантов выполнится, то цикл будет продолжаться
        money = +prompt('Ваш бюджет на месяц?', '');
    }

}

start(); //Вызываем функцию

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, //Это объект. Чтобы создать новое свойство или метод у объекта 2 способа: через точку или [].
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() { //Объявляем функцию
    //Записываем цикл, который задаст вопросы 2 раза

    for (let i = 0; i < 2; /*пока не закончатся вопросы, всего два комплекса вопросов*/ i++) {
        /*Записываем действия, которые должны произойти*/
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');


        //Пишем условие для цикла
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 20) { //Проверяем что тип данных - строка. Для prompt не имеет смысла./ Проверяем что НЕ равно null. И то же для b. Не может быть пустой строкой
            console.log('done');
            appData.expenses[a] = b;
            /*При использовании квадратных скобок, свойство может содержать любую строку. 
               При ответе на вопрос a - ответ будет записан как свойство объекта appData.expenses. Получается пара (ключ-значение) При вводе данные записываются*/
        } else {
            i = i - 1; //Возвращение на цикл обратно , отмнимаем от i единицу.

        }



    }
}

chooseExpenses(); //Вызываем функцию


appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет:' + appData.moneyPerDay);

//Цикл проверки уровня бюджета
if (appData.moneyPerDay < 1000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) { //В противном случае
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

function checkSavings() { //Объявляем функцию (Рассчет накоплений с депозита, если он есть)
    if (appData.savings == true) { //Действительно ли ровняется true(чтобы функция работала, в объекте appData savings задать значение true)
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent; //Вычисляем доход в месяц
        alert("Доход в месяц с вашего депозита:  " + appData.monthIncome);
    }
}

checkSavings(); //Вызываем функцию

