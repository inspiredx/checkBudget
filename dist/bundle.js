/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _otherTest_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otherTest.css */ \"./otherTest.css\");\n\n\nvar money, time;\n\nfunction start() {\n  //Объявляем функцию\n  money = +prompt('Ваш бюджет на месяц?', ''); //Благодаря унарному плюсу здесь передается число.\n\n  time = prompt('Введите дату в формате YYYY-MM-DD', '');\n\n  while (isNaN(money) || money == \"\" || money == null) {\n    //Если один из вариантов выполнится, то цикл будет продолжаться\n    money = +prompt('Ваш бюджет на месяц?', '');\n  }\n}\n\nstart(); //Вызываем функцию\n\nvar appData = {\n  budget: money,\n  timeData: time,\n  expenses: {},\n  //Это объект. Чтобы создать новое свойство или метод у объекта 2 способа: через точку или [].\n  optionalExpenses: {},\n  income: [],\n  savings: true\n};\n\nfunction chooseExpenses() {\n  //Объявляем функцию\n  //Записываем цикл, который задаст вопросы 2 раза\n  for (var i = 0; i < 2;\n  /*пока не закончатся вопросы, всего два комплекса вопросов*/\n  i++) {\n    /*Записываем действия, которые должны произойти*/\n    var a = prompt(\"Введите обязательную статью расходов в этом месяце\", '');\n    var b = prompt(\"Во сколько обойдется?\", ''); //Пишем условие для цикла\n\n    if (typeof a === 'string' && typeof a != null && typeof b != null && a != '' && b != '' && a.length < 20) {\n      //Проверяем что тип данных - строка. Для prompt не имеет смысла./ Проверяем что НЕ равно null. И то же для b. Не может быть пустой строкой\n      console.log('done');\n      appData.expenses[a] = b;\n      /*При использовании квадратных скобок, свойство может содержать любую строку. \r\n         При ответе на вопрос a - ответ будет записан как свойство объекта appData.expenses. Получается пара (ключ-значение) При вводе данные записываются*/\n    } else {\n      i = i - 1; //Возвращение на цикл обратно , отмнимаем от i единицу.\n    }\n  }\n}\n\nchooseExpenses(); //Вызываем функцию\n\nfunction detectDayBudget() {\n  //Объявляем функцию\n  appData.moneyPerDay = (appData.budget / 30).toFixed();\n  alert('Ежедневный бюджет:' + appData.moneyPerDay);\n}\n\ndetectDayBudget(); //Вызываем функцию\n\nfunction detectLevel() {\n  //Объявляем функцию\n  //Цикл проверки уровня бюджета\n  if (appData.moneyPerDay < 1000) {\n    console.log(\"Минимальный уровень достатка\");\n  } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {\n    //В противном случае\n    console.log(\"Средний уровень достатка\");\n  } else if (appData.moneyPerDay > 5000) {\n    console.log(\"Высокий уровень достатка\");\n  } else {\n    console.log(\"Произошла ошибка\");\n  }\n}\n\ndetectLevel(); //Вызываем функцию\n\nfunction checkSavings() {\n  //Объявляем функцию (Рассчет накоплений с депозита, если он есть)\n  if (appData.savings == true) {\n    //Действительно ли ровняется true(чтобы функция работала, в объекте appData savings задать значение true)\n    var save = +prompt(\"Какова сумма накоплений?\"),\n        percent = +prompt(\"Под какой процент?\");\n    appData.monthIncome = save / 100 / 12 * percent; //Вычисляем доход в месяц\n\n    alert(\"Доход в месяц с вашего депозита:  \" + appData.monthIncome);\n  }\n}\n\ncheckSavings(); //Вызываем функцию//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUosRUFBV0MsSUFBWDs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQUU7QUFDZkYsRUFBQUEsS0FBSyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxzQkFBRCxFQUF5QixFQUF6QixDQUFmLENBRGEsQ0FDZ0M7O0FBQzdDRixFQUFBQSxJQUFJLEdBQUdFLE1BQU0sQ0FBQyxtQ0FBRCxFQUFzQyxFQUF0QyxDQUFiOztBQUVBLFNBQU9DLEtBQUssQ0FBQ0osS0FBRCxDQUFMLElBQWdCQSxLQUFLLElBQUksRUFBekIsSUFBK0JBLEtBQUssSUFBSSxJQUEvQyxFQUFxRDtBQUFFO0FBQ25EQSxJQUFBQSxLQUFLLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLHNCQUFELEVBQXlCLEVBQXpCLENBQWY7QUFDSDtBQUVKOztBQUVERCxLQUFLLElBQUk7O0FBRVQsSUFBSUcsT0FBTyxHQUFHO0FBQ1ZDLEVBQUFBLE1BQU0sRUFBRU4sS0FERTtBQUVWTyxFQUFBQSxRQUFRLEVBQUVOLElBRkE7QUFHVk8sRUFBQUEsUUFBUSxFQUFFLEVBSEE7QUFHSTtBQUNkQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQUpSO0FBS1ZDLEVBQUFBLE1BQU0sRUFBRSxFQUxFO0FBTVZDLEVBQUFBLE9BQU8sRUFBRTtBQU5DLENBQWQ7O0FBVUEsU0FBU0MsY0FBVCxHQUEwQjtBQUFFO0FBQ3hCO0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCO0FBQXVCO0FBQTZEQSxFQUFBQSxDQUFDLEVBQXJGLEVBQXlGO0FBQ3JGO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHWCxNQUFNLENBQUMsb0RBQUQsRUFBdUQsRUFBdkQsQ0FBZDtBQUNBLFFBQUlZLENBQUMsR0FBR1osTUFBTSxDQUFDLHVCQUFELEVBQTBCLEVBQTFCLENBQWQsQ0FIcUYsQ0FNckY7O0FBQ0EsUUFBSyxPQUFRVyxDQUFULEtBQWlCLFFBQWpCLElBQThCLE9BQVFBLENBQVQsSUFBZ0IsSUFBN0MsSUFBc0QsT0FBUUMsQ0FBVCxJQUFnQixJQUFyRSxJQUNBRCxDQUFDLElBQUksRUFETCxJQUNXQyxDQUFDLElBQUksRUFEaEIsSUFDc0JELENBQUMsQ0FBQ0UsTUFBRixHQUFXLEVBRHJDLEVBQ3lDO0FBQUU7QUFDdkNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQWIsTUFBQUEsT0FBTyxDQUFDRyxRQUFSLENBQWlCTSxDQUFqQixJQUFzQkMsQ0FBdEI7QUFDQTtBQUNaO0FBQ1MsS0FORCxNQU1PO0FBQ0hGLE1BQUFBLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVIsQ0FERyxDQUNRO0FBRWQ7QUFJSjtBQUNKOztBQUVERCxjQUFjLElBQUk7O0FBRWxCLFNBQVNPLGVBQVQsR0FBMkI7QUFBRTtBQUN6QmQsRUFBQUEsT0FBTyxDQUFDZSxXQUFSLEdBQXNCLENBQUNmLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixFQUFsQixFQUFzQmUsT0FBdEIsRUFBdEI7QUFDQUMsRUFBQUEsS0FBSyxDQUFDLHVCQUF1QmpCLE9BQU8sQ0FBQ2UsV0FBaEMsQ0FBTDtBQUNIOztBQUVERCxlQUFlLElBQUk7O0FBR25CLFNBQVNJLFdBQVQsR0FBdUI7QUFBSTtBQUN2QjtBQUNBLE1BQUlsQixPQUFPLENBQUNlLFdBQVIsR0FBc0IsSUFBMUIsRUFBZ0M7QUFDNUJILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0gsR0FGRCxNQUVPLElBQUliLE9BQU8sQ0FBQ2UsV0FBUixHQUFzQixJQUF0QixJQUE4QmYsT0FBTyxDQUFDZSxXQUFSLEdBQXNCLElBQXhELEVBQThEO0FBQUU7QUFDbkVILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0gsR0FGTSxNQUVBLElBQUliLE9BQU8sQ0FBQ2UsV0FBUixHQUFzQixJQUExQixFQUFnQztBQUNuQ0gsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDSCxHQUZNLE1BRUE7QUFDSEQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSDtBQUNKOztBQUVESyxXQUFXLElBQUk7O0FBR2YsU0FBU0MsWUFBVCxHQUF3QjtBQUFFO0FBQ3RCLE1BQUluQixPQUFPLENBQUNNLE9BQVIsSUFBbUIsSUFBdkIsRUFBNkI7QUFBRTtBQUMzQixRQUFJYyxJQUFJLEdBQUcsQ0FBQ3RCLE1BQU0sQ0FBQywwQkFBRCxDQUFsQjtBQUFBLFFBQ0l1QixPQUFPLEdBQUcsQ0FBQ3ZCLE1BQU0sQ0FBQyxvQkFBRCxDQURyQjtBQUdBRSxJQUFBQSxPQUFPLENBQUNzQixXQUFSLEdBQXNCRixJQUFJLEdBQUcsR0FBUCxHQUFhLEVBQWIsR0FBa0JDLE9BQXhDLENBSnlCLENBSXdCOztBQUNqREosSUFBQUEsS0FBSyxDQUFDLHVDQUF1Q2pCLE9BQU8sQ0FBQ3NCLFdBQWhELENBQUw7QUFDSDtBQUNKOztBQUVESCxZQUFZLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXVkZW15Ly4vc2NyaXB0LmpzP2Y3YTYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vb3RoZXJUZXN0LmNzcyc7XHJcblxyXG5sZXQgbW9uZXksIHRpbWU7XHJcblxyXG5mdW5jdGlvbiBzdGFydCgpIHsgLy/QntCx0YrRj9Cy0LvRj9C10Lwg0YTRg9C90LrRhtC40Y5cclxuICAgIG1vbmV5ID0gK3Byb21wdCgn0JLQsNGIINCx0Y7QtNC20LXRgiDQvdCwINC80LXRgdGP0YY/JywgJycpOyAvL9CR0LvQsNCz0L7QtNCw0YDRjyDRg9C90LDRgNC90L7QvNGDINC/0LvRjtGB0YMg0LfQtNC10YHRjCDQv9C10YDQtdC00LDQtdGC0YHRjyDRh9C40YHQu9C+LlxyXG4gICAgdGltZSA9IHByb21wdCgn0JLQstC10LTQuNGC0LUg0LTQsNGC0YMg0LIg0YTQvtGA0LzQsNGC0LUgWVlZWS1NTS1ERCcsICcnKTtcclxuXHJcbiAgICB3aGlsZSAoaXNOYU4obW9uZXkpIHx8IG1vbmV5ID09IFwiXCIgfHwgbW9uZXkgPT0gbnVsbCkgeyAvL9CV0YHQu9C4INC+0LTQuNC9INC40Lcg0LLQsNGA0LjQsNC90YLQvtCyINCy0YvQv9C+0LvQvdC40YLRgdGPLCDRgtC+INGG0LjQutC7INCx0YPQtNC10YIg0L/RgNC+0LTQvtC70LbQsNGC0YzRgdGPXHJcbiAgICAgICAgbW9uZXkgPSArcHJvbXB0KCfQktCw0Ygg0LHRjtC00LbQtdGCINC90LAg0LzQtdGB0Y/Rhj8nLCAnJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5zdGFydCgpOyAvL9CS0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y5cclxuXHJcbmxldCBhcHBEYXRhID0ge1xyXG4gICAgYnVkZ2V0OiBtb25leSxcclxuICAgIHRpbWVEYXRhOiB0aW1lLFxyXG4gICAgZXhwZW5zZXM6IHt9LCAvL9Ct0YLQviDQvtCx0YrQtdC60YIuINCn0YLQvtCx0Ysg0YHQvtC30LTQsNGC0Ywg0L3QvtCy0L7QtSDRgdCy0L7QudGB0YLQstC+INC40LvQuCDQvNC10YLQvtC0INGDINC+0LHRitC10LrRgtCwIDIg0YHQv9C+0YHQvtCx0LA6INGH0LXRgNC10Lcg0YLQvtGH0LrRgyDQuNC70LggW10uXHJcbiAgICBvcHRpb25hbEV4cGVuc2VzOiB7fSxcclxuICAgIGluY29tZTogW10sXHJcbiAgICBzYXZpbmdzOiB0cnVlXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY2hvb3NlRXhwZW5zZXMoKSB7IC8v0J7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOXHJcbiAgICAvL9CX0LDQv9C40YHRi9Cy0LDQtdC8INGG0LjQutC7LCDQutC+0YLQvtGA0YvQuSDQt9Cw0LTQsNGB0YIg0LLQvtC/0YDQvtGB0YsgMiDRgNCw0LfQsFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgLyrQv9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9Cw0YLRgdGPINCy0L7Qv9GA0L7RgdGLLCDQstGB0LXQs9C+INC00LLQsCDQutC+0LzQv9C70LXQutGB0LAg0LLQvtC/0YDQvtGB0L7QsiovIGkrKykge1xyXG4gICAgICAgIC8q0JfQsNC/0LjRgdGL0LLQsNC10Lwg0LTQtdC50YHRgtCy0LjRjywg0LrQvtGC0L7RgNGL0LUg0LTQvtC70LbQvdGLINC/0YDQvtC40LfQvtC50YLQuCovXHJcbiAgICAgICAgbGV0IGEgPSBwcm9tcHQoXCLQktCy0LXQtNC40YLQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGD0Y4g0YHRgtCw0YLRjNGOINGA0LDRgdGF0L7QtNC+0LIg0LIg0Y3RgtC+0Lwg0LzQtdGB0Y/RhtC1XCIsICcnKTtcclxuICAgICAgICBsZXQgYiA9IHByb21wdChcItCS0L4g0YHQutC+0LvRjNC60L4g0L7QsdC+0LnQtNC10YLRgdGPP1wiLCAnJyk7XHJcblxyXG5cclxuICAgICAgICAvL9Cf0LjRiNC10Lwg0YPRgdC70L7QstC40LUg0LTQu9GPINGG0LjQutC70LBcclxuICAgICAgICBpZiAoKHR5cGVvZiAoYSkpID09PSAnc3RyaW5nJyAmJiAodHlwZW9mIChhKSkgIT0gbnVsbCAmJiAodHlwZW9mIChiKSkgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBhICE9ICcnICYmIGIgIT0gJycgJiYgYS5sZW5ndGggPCAyMCkgeyAvL9Cf0YDQvtCy0LXRgNGP0LXQvCDRh9GC0L4g0YLQuNC/INC00LDQvdC90YvRhSAtINGB0YLRgNC+0LrQsC4g0JTQu9GPIHByb21wdCDQvdC1INC40LzQtdC10YIg0YHQvNGL0YHQu9CwLi8g0J/RgNC+0LLQtdGA0Y/QtdC8INGH0YLQviDQndCVINGA0LDQstC90L4gbnVsbC4g0Jgg0YLQviDQttC1INC00LvRjyBiLiDQndC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLQvtC5INGB0YLRgNC+0LrQvtC5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICAgICAgICAgIGFwcERhdGEuZXhwZW5zZXNbYV0gPSBiO1xyXG4gICAgICAgICAgICAvKtCf0YDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDQutCy0LDQtNGA0LDRgtC90YvRhSDRgdC60L7QsdC+0LosINGB0LLQvtC50YHRgtCy0L4g0LzQvtC20LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0LvRjtCx0YPRjiDRgdGC0YDQvtC60YMuIFxyXG4gICAgICAgICAgICAgICDQn9GA0Lgg0L7RgtCy0LXRgtC1INC90LAg0LLQvtC/0YDQvtGBIGEgLSDQvtGC0LLQtdGCINCx0YPQtNC10YIg0LfQsNC/0LjRgdCw0L0g0LrQsNC6INGB0LLQvtC50YHRgtCy0L4g0L7QsdGK0LXQutGC0LAgYXBwRGF0YS5leHBlbnNlcy4g0J/QvtC70YPRh9Cw0LXRgtGB0Y8g0L/QsNGA0LAgKNC60LvRjtGHLdC30L3QsNGH0LXQvdC40LUpINCf0YDQuCDQstCy0L7QtNC1INC00LDQvdC90YvQtSDQt9Cw0L/QuNGB0YvQstCw0Y7RgtGB0Y8qL1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGkgPSBpIC0gMTsgLy/QktC+0LfQstGA0LDRidC10L3QuNC1INC90LAg0YbQuNC60Lsg0L7QsdGA0LDRgtC90L4gLCDQvtGC0LzQvdC40LzQsNC10Lwg0L7RgiBpINC10LTQuNC90LjRhtGDLlxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNob29zZUV4cGVuc2VzKCk7IC8v0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjlxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0RGF5QnVkZ2V0KCkgeyAvL9Ce0LHRitGP0LLQu9GP0LXQvCDRhNGD0L3QutGG0LjRjlxyXG4gICAgYXBwRGF0YS5tb25leVBlckRheSA9IChhcHBEYXRhLmJ1ZGdldCAvIDMwKS50b0ZpeGVkKCk7XHJcbiAgICBhbGVydCgn0JXQttC10LTQvdC10LLQvdGL0Lkg0LHRjtC00LbQtdGCOicgKyBhcHBEYXRhLm1vbmV5UGVyRGF5KTtcclxufVxyXG5cclxuZGV0ZWN0RGF5QnVkZ2V0KCk7IC8v0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjlxyXG5cclxuXHJcbmZ1bmN0aW9uIGRldGVjdExldmVsKCkgeyAgIC8v0J7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOXHJcbiAgICAvL9Cm0LjQutC7INC/0YDQvtCy0LXRgNC60Lgg0YPRgNC+0LLQvdGPINCx0Y7QtNC20LXRgtCwXHJcbiAgICBpZiAoYXBwRGF0YS5tb25leVBlckRheSA8IDEwMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCc0LjQvdC40LzQsNC70YzQvdGL0Lkg0YPRgNC+0LLQtdC90Ywg0LTQvtGB0YLQsNGC0LrQsFwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXBwRGF0YS5tb25leVBlckRheSA+IDEwMDAgJiYgYXBwRGF0YS5tb25leVBlckRheSA8IDUwMDApIHsgLy/QkiDQv9GA0L7RgtC40LLQvdC+0Lwg0YHQu9GD0YfQsNC1XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQodGA0LXQtNC90LjQuSDRg9GA0L7QstC10L3RjCDQtNC+0YHRgtCw0YLQutCwXCIpO1xyXG4gICAgfSBlbHNlIGlmIChhcHBEYXRhLm1vbmV5UGVyRGF5ID4gNTAwMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0JLRi9GB0L7QutC40Lkg0YPRgNC+0LLQtdC90Ywg0LTQvtGB0YLQsNGC0LrQsFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZXRlY3RMZXZlbCgpOyAvL9CS0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja1NhdmluZ3MoKSB7IC8v0J7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOICjQoNCw0YHRgdGH0LXRgiDQvdCw0LrQvtC/0LvQtdC90LjQuSDRgSDQtNC10L/QvtC30LjRgtCwLCDQtdGB0LvQuCDQvtC9INC10YHRgtGMKVxyXG4gICAgaWYgKGFwcERhdGEuc2F2aW5ncyA9PSB0cnVlKSB7IC8v0JTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0LvQuCDRgNC+0LLQvdGP0LXRgtGB0Y8gdHJ1ZSjRh9GC0L7QsdGLINGE0YPQvdC60YbQuNGPINGA0LDQsdC+0YLQsNC70LAsINCyINC+0LHRitC10LrRgtC1IGFwcERhdGEgc2F2aW5ncyDQt9Cw0LTQsNGC0Ywg0LfQvdCw0YfQtdC90LjQtSB0cnVlKVxyXG4gICAgICAgIGxldCBzYXZlID0gK3Byb21wdChcItCa0LDQutC+0LLQsCDRgdGD0LzQvNCwINC90LDQutC+0L/Qu9C10L3QuNC5P1wiKSxcclxuICAgICAgICAgICAgcGVyY2VudCA9ICtwcm9tcHQoXCLQn9C+0LQg0LrQsNC60L7QuSDQv9GA0L7RhtC10L3Rgj9cIik7XHJcblxyXG4gICAgICAgIGFwcERhdGEubW9udGhJbmNvbWUgPSBzYXZlIC8gMTAwIC8gMTIgKiBwZXJjZW50OyAvL9CS0YvRh9C40YHQu9GP0LXQvCDQtNC+0YXQvtC0INCyINC80LXRgdGP0YZcclxuICAgICAgICBhbGVydChcItCU0L7RhdC+0LQg0LIg0LzQtdGB0Y/RhiDRgSDQstCw0YjQtdCz0L4g0LTQtdC/0L7Qt9C40YLQsDogIFwiICsgYXBwRGF0YS5tb250aEluY29tZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNoZWNrU2F2aW5ncygpOyAvL9CS0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4iXSwibmFtZXMiOlsibW9uZXkiLCJ0aW1lIiwic3RhcnQiLCJwcm9tcHQiLCJpc05hTiIsImFwcERhdGEiLCJidWRnZXQiLCJ0aW1lRGF0YSIsImV4cGVuc2VzIiwib3B0aW9uYWxFeHBlbnNlcyIsImluY29tZSIsInNhdmluZ3MiLCJjaG9vc2VFeHBlbnNlcyIsImkiLCJhIiwiYiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkZXRlY3REYXlCdWRnZXQiLCJtb25leVBlckRheSIsInRvRml4ZWQiLCJhbGVydCIsImRldGVjdExldmVsIiwiY2hlY2tTYXZpbmdzIiwic2F2ZSIsInBlcmNlbnQiLCJtb250aEluY29tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./script.js\n");

/***/ }),

/***/ "./otherTest.css":
/*!***********************!*\
  !*** ./otherTest.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vdGhlclRlc3QuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdWRlbXkvLi9vdGhlclRlc3QuY3NzPzNlNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./otherTest.css\n");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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