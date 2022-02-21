/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _otherTest_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherTest.css */ \"./otherTest.css\");\n\n\n\nvar money, time;\n\nfunction start() {\n  //Объявляем функцию\n  money = +prompt('Ваш бюджет на месяц?', ''); //Благодаря унарному плюсу здесь передается число.\n\n  time = prompt('Введите дату в формате YYYY-MM-DD', '');\n\n  while (isNaN(money) || money == \"\" || money == null) {\n    //Если один из вариантов выполнится, то цикл будет продолжаться\n    money = +prompt('Ваш бюджет на месяц?', '');\n  }\n}\n\nstart(); //Вызываем функцию\n\nvar appData = {\n  budget: money,\n  timeData: time,\n  expenses: {},\n  //Это объект. Чтобы создать новое свойство или метод у объекта 2 способа: через точку или [].\n  optionalExpenses: {},\n  income: [],\n  savings: true\n};\n\nfunction chooseExpenses() {\n  //Объявляем функцию\n  //Записываем цикл, который задаст вопросы 2 раза\n  for (var i = 0; i < 2;\n  /*пока не закончатся вопросы, всего два комплекса вопросов*/\n  i++) {\n    /*Записываем действия, которые должны произойти*/\n    var a = prompt(\"Введите обязательную статью расходов в этом месяце\", '');\n    var b = prompt(\"Во сколько обойдется?\", ''); //Пишем условие для цикла\n\n    if (typeof a === 'string' && typeof a != null && typeof b != null && a != '' && b != '' && a.length < 20) {\n      //Проверяем что тип данных - строка. Для prompt не имеет смысла./ Проверяем что НЕ равно null. И то же для b. Не может быть пустой строкой\n      console.log('done');\n      appData.expenses[a] = b;\n      /*При использовании квадратных скобок, свойство может содержать любую строку. \r\n         При ответе на вопрос a - ответ будет записан как свойство объекта appData.expenses. Получается пара (ключ-значение) При вводе данные записываются*/\n    } else {\n      i = i - 1; //Возвращение на цикл обратно , отмнимаем от i единицу.\n    }\n  }\n}\n\nchooseExpenses(); //Вызываем функцию\n\nappData.moneyPerDay = (appData.budget / 30).toFixed();\nalert('Ежедневный бюджет:' + appData.moneyPerDay); //Цикл проверки уровня бюджета\n\nif (appData.moneyPerDay < 1000) {\n  console.log(\"Минимальный уровень достатка\");\n} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {\n  //В противном случае\n  console.log(\"Средний уровень достатка\");\n} else if (appData.moneyPerDay > 5000) {\n  console.log(\"Высокий уровень достатка\");\n} else {\n  console.log(\"Произошла ошибка\");\n}\n\nfunction checkSavings() {\n  //Объявляем функцию (Рассчет накоплений с депозита, если он есть)\n  if (appData.savings == true) {\n    //Действительно ли ровняется true(чтобы функция работала, в объекте appData savings задать значение true)\n    var save = +prompt(\"Какова сумма накоплений?\"),\n        percent = +prompt(\"Под какой процент?\");\n    appData.monthIncome = save / 100 / 12 * percent; //Вычисляем доход в месяц\n\n    alert(\"Доход в месяц с вашего депозита:  \" + appData.monthIncome);\n  }\n}\n\ncheckSavings(); //Вызываем функцию//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QixNQUFJakIsT0FBTyxDQUFDTSxPQUFSLElBQW1CLElBQXZCLEVBQTZCO0FBQUU7QUFDM0IsUUFBSVksSUFBSSxHQUFHLENBQUNwQixNQUFNLENBQUMsMEJBQUQsQ0FBbEI7QUFBQSxRQUNJcUIsT0FBTyxHQUFHLENBQUNyQixNQUFNLENBQUMsb0JBQUQsQ0FEckI7QUFHQUUsSUFBQUEsT0FBTyxDQUFDb0IsV0FBUixHQUFzQkYsSUFBSSxHQUFHLEdBQVAsR0FBYSxFQUFiLEdBQWtCQyxPQUF4QyxDQUp5QixDQUl3Qjs7QUFDakRILElBQUFBLEtBQUssQ0FBQyx1Q0FBdUNoQixPQUFPLENBQUNvQixXQUFoRCxDQUFMO0FBQ0g7QUFDSjs7QUFFREgsWUFBWSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC11ZGVteS8uL3NjcmlwdC5qcz9mN2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bnVtfSBmcm9tICcuL3Rlc3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL290aGVyVGVzdC5jc3MnO1xyXG5cclxubGV0IG1vbmV5LCB0aW1lO1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7IC8v0J7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOXHJcbiAgICBtb25leSA9ICtwcm9tcHQoJ9CS0LDRiCDQsdGO0LTQttC10YIg0L3QsCDQvNC10YHRj9GGPycsICcnKTsgLy/QkdC70LDQs9C+0LTQsNGA0Y8g0YPQvdCw0YDQvdC+0LzRgyDQv9C70Y7RgdGDINC30LTQtdGB0Ywg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0YfQuNGB0LvQvi5cclxuICAgIHRpbWUgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INC00LDRgtGDINCyINGE0L7RgNC80LDRgtC1IFlZWVktTU0tREQnLCAnJyk7XHJcblxyXG4gICAgd2hpbGUgKGlzTmFOKG1vbmV5KSB8fCBtb25leSA9PSBcIlwiIHx8IG1vbmV5ID09IG51bGwpIHsgLy/QldGB0LvQuCDQvtC00LjQvSDQuNC3INCy0LDRgNC40LDQvdGC0L7QsiDQstGL0L/QvtC70L3QuNGC0YHRjywg0YLQviDRhtC40LrQuyDQsdGD0LTQtdGCINC/0YDQvtC00L7Qu9C20LDRgtGM0YHRj1xyXG4gICAgICAgIG1vbmV5ID0gK3Byb21wdCgn0JLQsNGIINCx0Y7QtNC20LXRgiDQvdCwINC80LXRgdGP0YY/JywgJycpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuc3RhcnQoKTsgLy/QktGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOXHJcblxyXG5sZXQgYXBwRGF0YSA9IHtcclxuICAgIGJ1ZGdldDogbW9uZXksXHJcbiAgICB0aW1lRGF0YTogdGltZSxcclxuICAgIGV4cGVuc2VzOiB7fSwgLy/QrdGC0L4g0L7QsdGK0LXQutGCLiDQp9GC0L7QsdGLINGB0L7Qt9C00LDRgtGMINC90L7QstC+0LUg0YHQstC+0LnRgdGC0LLQviDQuNC70Lgg0LzQtdGC0L7QtCDRgyDQvtCx0YrQtdC60YLQsCAyINGB0L/QvtGB0L7QsdCwOiDRh9C10YDQtdC3INGC0L7Rh9C60YMg0LjQu9C4IFtdLlxyXG4gICAgb3B0aW9uYWxFeHBlbnNlczoge30sXHJcbiAgICBpbmNvbWU6IFtdLFxyXG4gICAgc2F2aW5nczogdHJ1ZVxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNob29zZUV4cGVuc2VzKCkgeyAvL9Ce0LHRitGP0LLQu9GP0LXQvCDRhNGD0L3QutGG0LjRjlxyXG4gICAgLy/Ql9Cw0L/QuNGB0YvQstCw0LXQvCDRhtC40LrQuywg0LrQvtGC0L7RgNGL0Lkg0LfQsNC00LDRgdGCINCy0L7Qv9GA0L7RgdGLIDIg0YDQsNC30LBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IC8q0L/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQsNGC0YHRjyDQstC+0L/RgNC+0YHRiywg0LLRgdC10LPQviDQtNCy0LAg0LrQvtC80L/Qu9C10LrRgdCwINCy0L7Qv9GA0L7RgdC+0LIqLyBpKyspIHtcclxuICAgICAgICAvKtCX0LDQv9C40YHRi9Cy0LDQtdC8INC00LXQudGB0YLQstC40Y8sINC60L7RgtC+0YDRi9C1INC00L7Qu9C20L3RiyDQv9GA0L7QuNC30L7QudGC0LgqL1xyXG4gICAgICAgIGxldCBhID0gcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Rg9GOINGB0YLQsNGC0YzRjiDRgNCw0YHRhdC+0LTQvtCyINCyINGN0YLQvtC8INC80LXRgdGP0YbQtVwiLCAnJyk7XHJcbiAgICAgICAgbGV0IGIgPSBwcm9tcHQoXCLQktC+INGB0LrQvtC70YzQutC+INC+0LHQvtC50LTQtdGC0YHRjz9cIiwgJycpO1xyXG5cclxuXHJcbiAgICAgICAgLy/Qn9C40YjQtdC8INGD0YHQu9C+0LLQuNC1INC00LvRjyDRhtC40LrQu9CwXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgKGEpKSA9PT0gJ3N0cmluZycgJiYgKHR5cGVvZiAoYSkpICE9IG51bGwgJiYgKHR5cGVvZiAoYikpICE9IG51bGwgJiZcclxuICAgICAgICAgICAgYSAhPSAnJyAmJiBiICE9ICcnICYmIGEubGVuZ3RoIDwgMjApIHsgLy/Qn9GA0L7QstC10YDRj9C10Lwg0YfRgtC+INGC0LjQvyDQtNCw0L3QvdGL0YUgLSDRgdGC0YDQvtC60LAuINCU0LvRjyBwcm9tcHQg0L3QtSDQuNC80LXQtdGCINGB0LzRi9GB0LvQsC4vINCf0YDQvtCy0LXRgNGP0LXQvCDRh9GC0L4g0J3QlSDRgNCw0LLQvdC+IG51bGwuINCYINGC0L4g0LbQtSDQtNC70Y8gYi4g0J3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0L7QuSDRgdGC0YDQvtC60L7QuVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gICAgICAgICAgICBhcHBEYXRhLmV4cGVuc2VzW2FdID0gYjtcclxuICAgICAgICAgICAgLyrQn9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Lgg0LrQstCw0LTRgNCw0YLQvdGL0YUg0YHQutC+0LHQvtC6LCDRgdCy0L7QudGB0YLQstC+INC80L7QttC10YIg0YHQvtC00LXRgNC20LDRgtGMINC70Y7QsdGD0Y4g0YHRgtGA0L7QutGDLiBcclxuICAgICAgICAgICAgICAg0J/RgNC4INC+0YLQstC10YLQtSDQvdCwINCy0L7Qv9GA0L7RgSBhIC0g0L7RgtCy0LXRgiDQsdGD0LTQtdGCINC30LDQv9C40YHQsNC9INC60LDQuiDRgdCy0L7QudGB0YLQstC+INC+0LHRitC10LrRgtCwIGFwcERhdGEuZXhwZW5zZXMuINCf0L7Qu9GD0YfQsNC10YLRgdGPINC/0LDRgNCwICjQutC70Y7Rhy3Qt9C90LDRh9C10L3QuNC1KSDQn9GA0Lgg0LLQstC+0LTQtSDQtNCw0L3QvdGL0LUg0LfQsNC/0LjRgdGL0LLQsNGO0YLRgdGPKi9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpID0gaSAtIDE7IC8v0JLQvtC30LLRgNCw0YnQtdC90LjQtSDQvdCwINGG0LjQutC7INC+0LHRgNCw0YLQvdC+ICwg0L7RgtC80L3QuNC80LDQtdC8INC+0YIgaSDQtdC00LjQvdC40YbRgy5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jaG9vc2VFeHBlbnNlcygpOyAvL9CS0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y5cclxuXHJcblxyXG5hcHBEYXRhLm1vbmV5UGVyRGF5ID0gKGFwcERhdGEuYnVkZ2V0IC8gMzApLnRvRml4ZWQoKTtcclxuXHJcbmFsZXJ0KCfQldC20LXQtNC90LXQstC90YvQuSDQsdGO0LTQttC10YI6JyArIGFwcERhdGEubW9uZXlQZXJEYXkpO1xyXG5cclxuLy/QptC40LrQuyDQv9GA0L7QstC10YDQutC4INGD0YDQvtCy0L3RjyDQsdGO0LTQttC10YLQsFxyXG5pZiAoYXBwRGF0YS5tb25leVBlckRheSA8IDEwMDApIHtcclxuICAgIGNvbnNvbGUubG9nKFwi0JzQuNC90LjQvNCw0LvRjNC90YvQuSDRg9GA0L7QstC10L3RjCDQtNC+0YHRgtCw0YLQutCwXCIpO1xyXG59IGVsc2UgaWYgKGFwcERhdGEubW9uZXlQZXJEYXkgPiAxMDAwICYmIGFwcERhdGEubW9uZXlQZXJEYXkgPCA1MDAwKSB7IC8v0JIg0L/RgNC+0YLQuNCy0L3QvtC8INGB0LvRg9GH0LDQtVxyXG4gICAgY29uc29sZS5sb2coXCLQodGA0LXQtNC90LjQuSDRg9GA0L7QstC10L3RjCDQtNC+0YHRgtCw0YLQutCwXCIpO1xyXG59IGVsc2UgaWYgKGFwcERhdGEubW9uZXlQZXJEYXkgPiA1MDAwKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcItCS0YvRgdC+0LrQuNC5INGD0YDQvtCy0LXQvdGMINC00L7RgdGC0LDRgtC60LBcIik7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcItCf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU2F2aW5ncygpIHsgLy/QntCx0YrRj9Cy0LvRj9C10Lwg0YTRg9C90LrRhtC40Y4gKNCg0LDRgdGB0YfQtdGCINC90LDQutC+0L/Qu9C10L3QuNC5INGBINC00LXQv9C+0LfQuNGC0LAsINC10YHQu9C4INC+0L0g0LXRgdGC0YwpXHJcbiAgICBpZiAoYXBwRGF0YS5zYXZpbmdzID09IHRydWUpIHsgLy/QlNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDQu9C4INGA0L7QstC90Y/QtdGC0YHRjyB0cnVlKNGH0YLQvtCx0Ysg0YTRg9C90LrRhtC40Y8g0YDQsNCx0L7RgtCw0LvQsCwg0LIg0L7QsdGK0LXQutGC0LUgYXBwRGF0YSBzYXZpbmdzINC30LDQtNCw0YLRjCDQt9C90LDRh9C10L3QuNC1IHRydWUpXHJcbiAgICAgICAgbGV0IHNhdmUgPSArcHJvbXB0KFwi0JrQsNC60L7QstCwINGB0YPQvNC80LAg0L3QsNC60L7Qv9C70LXQvdC40Lk/XCIpLFxyXG4gICAgICAgICAgICBwZXJjZW50ID0gK3Byb21wdChcItCf0L7QtCDQutCw0LrQvtC5INC/0YDQvtGG0LXQvdGCP1wiKTtcclxuXHJcbiAgICAgICAgYXBwRGF0YS5tb250aEluY29tZSA9IHNhdmUgLyAxMDAgLyAxMiAqIHBlcmNlbnQ7IC8v0JLRi9GH0LjRgdC70Y/QtdC8INC00L7RhdC+0LQg0LIg0LzQtdGB0Y/RhlxyXG4gICAgICAgIGFsZXJ0KFwi0JTQvtGF0L7QtCDQsiDQvNC10YHRj9GGINGBINCy0LDRiNC10LPQviDQtNC10L/QvtC30LjRgtCwOiAgXCIgKyBhcHBEYXRhLm1vbnRoSW5jb21lKTtcclxuICAgIH1cclxufVxyXG5cclxuY2hlY2tTYXZpbmdzKCk7IC8v0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiJdLCJuYW1lcyI6WyJudW0iLCJtb25leSIsInRpbWUiLCJzdGFydCIsInByb21wdCIsImlzTmFOIiwiYXBwRGF0YSIsImJ1ZGdldCIsInRpbWVEYXRhIiwiZXhwZW5zZXMiLCJvcHRpb25hbEV4cGVuc2VzIiwiaW5jb21lIiwic2F2aW5ncyIsImNob29zZUV4cGVuc2VzIiwiaSIsImEiLCJiIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1vbmV5UGVyRGF5IiwidG9GaXhlZCIsImFsZXJ0IiwiY2hlY2tTYXZpbmdzIiwic2F2ZSIsInBlcmNlbnQiLCJtb250aEluY29tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./script.js\n");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ (() => {

eval("var num = 50;\n\nwhile (num < 55) {\n  console.log(num);\n  num++;\n}\n\nfor (num; num < 60; num++) {\n  if (num == 55) {\n    break;\n  }\n\n  console.log(num);\n}\n\ndo {\n  console.log(num);\n  num++;\n} while (num < 55); // Аналог цикла for из 3 задания\n\n\nvar i = 0;\n\ndo {\n  var a = prompt(\"Введите обязательную статью расходов в этом месяце\", '');\n  var b = prompt(\"Во сколько обойдется?\", '');\n  i++;\n} while (i > 0 && i < 2); //цикл выполняется пока i не перестанет быть меньше 2//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXVkZW15Ly4vdGVzdC5qcz9kNjA2Il0sIm5hbWVzIjpbIm51bSIsImNvbnNvbGUiLCJsb2ciLCJpIiwiYSIsInByb21wdCIsImIiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEdBQUcsR0FBRyxFQUFWOztBQUVBLE9BQU9BLEdBQUcsR0FBRyxFQUFiLEVBQWlCO0FBQ2JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FBLEVBQUFBLEdBQUc7QUFDTjs7QUFHRCxLQUFLQSxHQUFMLEVBQVVBLEdBQUcsR0FBRyxFQUFoQixFQUFvQkEsR0FBRyxFQUF2QixFQUEyQjtBQUN2QixNQUFJQSxHQUFHLElBQUksRUFBWCxFQUFlO0FBQ1g7QUFDSDs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSDs7QUFFRCxHQUFHO0FBQ0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FBLEVBQUFBLEdBQUc7QUFFTixDQUpELFFBSVNBLEdBQUcsR0FBRyxFQUpmLEUsQ0FRQTs7O0FBRUEsSUFBSUcsQ0FBQyxHQUFHLENBQVI7O0FBRUEsR0FBRztBQUNDLE1BQUlDLENBQUMsR0FBR0MsTUFBTSxDQUFDLG9EQUFELEVBQXVELEVBQXZELENBQWQ7QUFDQSxNQUFJQyxDQUFDLEdBQUdELE1BQU0sQ0FBQyx1QkFBRCxFQUEwQixFQUExQixDQUFkO0FBQ0FGLEVBQUFBLENBQUM7QUFFSixDQUxELFFBS1NBLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUx0QixFLENBSzBCIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG51bSA9IDUwO1xyXG5cclxud2hpbGUgKG51bSA8IDU1KSB7XHJcbiAgICBjb25zb2xlLmxvZyhudW0pO1xyXG4gICAgbnVtKys7XHJcbn1cclxuXHJcblxyXG5mb3IgKG51bTsgbnVtIDwgNjA7IG51bSsrKSB7XHJcbiAgICBpZiAobnVtID09IDU1KSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhudW0pO1xyXG59XHJcblxyXG5kbyB7XHJcbiAgICBjb25zb2xlLmxvZyhudW0pO1xyXG4gICAgbnVtKys7XHJcblxyXG59IHdoaWxlIChudW0gPCA1NSk7XHJcblxyXG5cclxuXHJcbi8vINCQ0L3QsNC70L7QsyDRhtC40LrQu9CwIGZvciDQuNC3IDMg0LfQsNC00LDQvdC40Y9cclxuXHJcbmxldCBpID0gMDtcclxuXHJcbmRvIHtcclxuICAgIGxldCBhID0gcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Rg9GOINGB0YLQsNGC0YzRjiDRgNCw0YHRhdC+0LTQvtCyINCyINGN0YLQvtC8INC80LXRgdGP0YbQtVwiLCAnJyk7XHJcbiAgICBsZXQgYiA9IHByb21wdChcItCS0L4g0YHQutC+0LvRjNC60L4g0L7QsdC+0LnQtNC10YLRgdGPP1wiLCAnJyk7XHJcbiAgICBpKys7XHJcblxyXG59IHdoaWxlIChpID4gMCAmJiBpIDwgMik7IC8v0YbQuNC60Lsg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQv9C+0LrQsCBpINC90LUg0L/QtdGA0LXRgdGC0LDQvdC10YIg0LHRi9GC0Ywg0LzQtdC90YzRiNC1IDIiXSwiZmlsZSI6Ii4vdGVzdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./test.js\n");

/***/ }),

/***/ "./otherTest.css":
/*!***********************!*\
  !*** ./otherTest.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vdGhlclRlc3QuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdWRlbXkvLi9vdGhlclRlc3QuY3NzPzNlNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./otherTest.css\n");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZS5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC11ZGVteS8uL3N0eWxlLmNzcz82NDI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./style.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;