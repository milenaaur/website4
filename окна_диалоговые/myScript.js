console.log("Этот текст мы увидим в консоли")
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.charAt(3)); // charAt() - возвращает символ, находящийся в указанной позиции в строке. Обратите внимание на то, что отсчет позиций начинается с 0.
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.concat('Нам нравится JavaScript!')); // concat() - присоединяет к строке одну или несколько строк и возвращает объединенную строку.
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.indexOf('здорово')); // indexOf() - выполняет поиск первого вхождения символа или подстроки в данной строке и возвращает номер соответствующей позиции.
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.split('з')); // split() - разбивает строку на массив подстрок.
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.substr(2,5)); // substr() - извлекает часть строки, начиная с указанной позиции, и возвращает указанное количество символов.
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.substring(2,5)); // substring() - извлекает символы строки, заключенные между указанными позициями (символ, соответствующий концу диапазона, в результат не включается).
var watzThisString = 'JavaScript - это здорово!';
console.log (watzThisString.toLowerCase()); // toLowerCase () - переводит все символы строки в нижний регистр.
console.log (watzThisString.toUpperCase()); // toUpperCase () - переводит все символы строки в верхний регистр.
console.log (watzThisString.length); //выводит длину строки
console.log (watzThisString [watzThisString.length-1] )//не зная длины строки, можем вывести последний элемент
console.log (`Этот длинный - длинный текст
		 мы печатаем так,
		 как показано в примере`)

