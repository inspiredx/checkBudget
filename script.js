let money = +prompt('Ваш бюджет на месяц?');
let time = +prompt('Введите дату в формате YYYY-MM-DD');

let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце');
let secondQuestion = prompt('Во сколько обойдется?');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstQuestion: secondQuestion
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let dayBudget = Math.round(appData.budget / 30);


document.getElementById("min").innerHTML = dayBudget;