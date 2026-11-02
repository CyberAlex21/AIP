// Урок 143. Выведите столбец чисел от 1 до 5 с помощью цикла.
{
	for (let i = 1; i <= 5; i++) {
		console.log(i);
	}
}

// Урок 144. Выведите в консоль все элементы массива ['a', 'b', 'c', 'd', 'e'] циклом for-of.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];

	for (let elem of arr) {
		console.log(elem);
	}
}

// Урок 145. Выведите в консоль все ключи объекта {x: 1, y: 2, z: 3}.
{
	let obj = {x: 1, y: 2, z: 3};

	for (let key in obj) {
		console.log(key);
	}
}

// Урок 145. Выведите в консоль все элементы объекта {x: 1, y: 2, z: 3}.
{
	let obj = {x: 1, y: 2, z: 3};

	for (let key in obj) {
		console.log(obj[key]);
	}
}

// Урок 146. Выведите в консоль числа от 1 до 100 циклом while.
{
	let i = 1;

	while (i <= 100) {
		console.log(i);
		i++;
	}
}

// Урок 146. Выведите в консоль числа от 11 до 33 циклом while.
{
	let i = 11;

	while (i <= 33) {
		console.log(i);
		i++;
	}
}

// Урок 146. Выведите в консоль числа от 100 до 1 циклом while.
{
	let i = 100;

	while (i >= 1) {
		console.log(i);
		i--;
	}
}

// Урок 146. Дано число num. Умножайте его на 3, пока результат не станет больше 1000. Какое число получится и сколько было итераций?
{
	let num = 1;
	let iteraciy = 0;

	while (num <= 1000) {
		num = num * 3;
		iteraciy++;
	}

	console.log(num);
	console.log(iteraciy);
}

// Урок 147. С помощью цикла for выведите числа от 1 до 100.
{
	for (let i = 1; i <= 100; i++) {
		console.log(i);
	}
}

// Урок 147. С помощью цикла for выведите числа от 11 до 33.
{
	for (let i = 11; i <= 33; i++) {
		console.log(i);
	}
}

// Урок 147. С помощью цикла for выведите чётные числа от 0 до 100.
{
	for (let i = 0; i <= 100; i = i + 2) {
		console.log(i);
	}
}

// Урок 147. С помощью цикла for выведите нечётные числа от 1 до 99.
{
	for (let i = 1; i <= 99; i = i + 2) {
		console.log(i);
	}
}

// Урок 147. С помощью цикла for выведите числа от 100 до 0.
{
	for (let i = 100; i >= 0; i--) {
		console.log(i);
	}
}

// Урок 148. Выведите все элементы массива ['a', 'b', 'c', 'd', 'e'].
{
	let arr = ['a', 'b', 'c', 'd', 'e'];

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// Урок 148. Выведите все элементы массива, кроме нулевого и последнего.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];

	for (let i = 1; i < arr.length - 1; i++) {
		console.log(arr[i]);
	}
}

// Урок 148. Выведите элементы массива в обратном порядке.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

// Урок 148. Исправьте ошибку: for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }
{
	let arr = ['a', 'b', 'c', 'd', 'e'];

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// Урок 149. Дан массив [2, 5, 9, 15, 1, 4]. Выведите только элементы больше 3.
{
	let arr = [2, 5, 9, 15, 1, 4];

	for (let elem of arr) {
		if (elem > 3) {
			console.log(elem);
		}
	}
}

// Урок 149. Дан объект {a: 1, b: 2, c: 3, d: 4, e: 5}. Выведите элементы больше 2.
{
	let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

	for (let key in obj) {
		if (obj[key] > 2) {
			console.log(obj[key]);
		}
	}
}

// Урок 150. Найдите сумму чётных чисел от 2 до 100.
{
	let sum = 0;

	for (let i = 2; i <= 100; i = i + 2) {
		sum = sum + i;
	}

	console.log(sum);
}

// Урок 150. Найдите сумму нечётных чисел от 1 до 99.
{
	let sum = 0;

	for (let i = 1; i <= 99; i = i + 2) {
		sum = sum + i;
	}

	console.log(sum);
}

// Урок 150. Найдите произведение целых чисел от 1 до 20.
{
	let proizvedenie = 1;

	for (let i = 1; i <= 20; i++) {
		proizvedenie = proizvedenie * i;
	}

	console.log(proizvedenie);
}

// Урок 151. Дан массив [2, 5, 9, 3, 1, 4]. Найдите сумму его элементов.
{
	let arr = [2, 5, 9, 3, 1, 4];
	let sum = 0;

	for (let elem of arr) {
		sum = sum + elem;
	}

	console.log(sum);
}

// Урок 151. Дан массив [2, 5, 9, 3, 1, 4]. Найдите сумму элементов, кратных 3.
{
	let arr = [2, 5, 9, 3, 1, 4];
	let sum = 0;

	for (let elem of arr) {
		if (elem % 3 === 0) {
			sum = sum + elem;
		}
	}

	console.log(sum);
}

// Урок 151. Дан массив [2, 5, 9, 3, 1, 4]. Найдите произведение его элементов.
{
	let arr = [2, 5, 9, 3, 1, 4];
	let proizvedenie = 1;

	for (let elem of arr) {
		proizvedenie = proizvedenie * elem;
	}

	console.log(proizvedenie);
}

// Урок 151. Дан массив [2, 5, 9, 3, 1, 4]. Найдите среднее арифметическое его элементов.
{
	let arr = [2, 5, 9, 3, 1, 4];
	let sum = 0;

	for (let elem of arr) {
		sum = sum + elem;
	}

	console.log(sum / arr.length);
}

// Урок 152. С помощью цикла сформируйте строку из пяти дефисов.
{
	let str = '';

	for (let i = 0; i < 5; i++) {
		str = str + '-';
	}

	console.log(str);
}

// Урок 152. С помощью цикла сформируйте строку '123456789'.
{
	let str = '';

	for (let i = 1; i <= 9; i++) {
		str = str + i;
	}

	console.log(str);
}

// Урок 152. С помощью цикла сформируйте строку '987654321'.
{
	let str = '';

	for (let i = 9; i >= 1; i--) {
		str = str + i;
	}

	console.log(str);
}

// Урок 152. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
{
	let str = '';

	for (let i = 1; i <= 9; i++) {
		str = str + '-' + i;
	}

	str = str + '-';

	console.log(str);
}

// Урок 153. Переберите числа от 10 до 1000 и выведите первую цифру каждого числа.
{
	for (let i = 10; i <= 1000; i++) {
		console.log(String(i)[0]);
	}
}

// Урок 153. Переберите числа от 10 до 1000 и выведите сумму первой и второй цифры каждого числа.
{
	for (let i = 10; i <= 1000; i++) {
		let str = String(i);
		console.log(Number(str[0]) + Number(str[1]));
	}
}

// Урок 153. Переберите числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
{
	for (let i = 10; i <= 1000; i++) {
		if (String(i)[0] === '1') {
			console.log(i);
		}
	}
}

// Урок 153. Переберите числа от 10 до 1000 и выведите те числа, сумма двух первых цифр которых равна 5.
{
	for (let i = 10; i <= 1000; i++) {
		let str = String(i);
		if (Number(str[0]) + Number(str[1]) === 5) {
			console.log(i);
		}
	}
}

// Урок 154. Перепишите код без фигурных скобок: for (let elem of arr) { console.log(elem); }
{
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr) console.log(elem);
}

// Урок 155. Что выведется: for (let elem of arr); console.log(elem);
{
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr);
	console.log('elem');

	// точка с запятой после for закрыла цикл, поэтому тело цикла
	// осталось пустым, а переменная elem за цикл не видна
}

// Урок 156. Дан массив с числами. Выводите элементы, пока не встретится 0.
{
	let arr = [1, 2, 3, 0, 4, 5];

	for (let elem of arr) {
		if (elem === 0) {
			break;
		}
		console.log(elem);
	}
}

// Урок 156. Найдите сумму элементов массива от начала до первого отрицательного числа.
{
	let arr = [1, 2, 3, -4, 5, 6];
	let sum = 0;

	for (let elem of arr) {
		if (elem < 0) {
			break;
		}
		sum = sum + elem;
	}

	console.log(sum);
}

// Урок 156. Найдите позицию первого числа 3 в массиве.
{
	let arr = [1, 2, 3, 4, 3, 5];
	let poziciya = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 3) {
			poziciya = i;
			break;
		}
	}

	console.log(poziciya);
}

// Урок 156. Сколько целых чисел, начиная с 1, нужно сложить, чтобы сумма стала больше 100?
{
	let sum = 0;
	let schetchik = 0;

	for (let i = 1; ; i++) {
		sum = sum + i;
		schetchik = i;
		if (sum > 100) {
			break;
		}
	}

	console.log(schetchik);
	console.log(sum);
}

// Урок 157. Выведите только чётные числа от 1 до 100, пропуская нечётные через continue.
{
	for (let i = 1; i <= 100; i++) {
		if (i % 2 !== 0) {
			continue;
		}
		console.log(i);
	}
}

// Урок 158. С помощью двух вложенных циклов выведите строку '111222333'.
{
	let str = '';

	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			str = str + i;
		}
	}

	console.log(str);
}

// Урок 158. С помощью двух вложенных циклов выведите строку '123123123'.
{
	let str = '';

	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			str = str + j;
		}
	}

	console.log(str);
}

// Урок 161. Используя цикл и push, заполните массив числами от 1 до 10.
{
	let arr = [];

	for (let i = 1; i <= 10; i++) {
		arr.push(i);
	}

	console.log(arr);
}

// Урок 161. Используя цикл и push, заполните массив десятью буквами 'x'.
{
	let arr = [];

	for (let i = 0; i < 10; i++) {
		arr.push('x');
	}

	console.log(arr);
}

// Урок 161. Дан массив с числами. Запишите в новый массив только положительные числа.
{
	let arr = [1, -2, 3, -4, 5];
	let polozhitelnye = [];

	for (let elem of arr) {
		if (elem > 0) {
			polozhitelnye.push(elem);
		}
	}

	console.log(polozhitelnye);
}

// Урок 162. Дан массив с числами. Возведите каждый элемент в квадрат.
{
	let arr = [1, 2, 3, 4, 5];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * arr[i];
	}

	console.log(arr);
}

// Урок 162. Дан массив с числами. Отнимите от каждого элемента единицу.
{
	let arr = [1, 2, 3, 4, 5];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] - 1;
	}

	console.log(arr);
}

// Урок 162. Дан массив с числами. Прибавьте к каждому элементу 10.
{
	let arr = [1, 2, 3, 4, 5];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + 10;
	}

	console.log(arr);
}

// Урок 163. Даны два массива: ['a', 'b', 'c', 'd', 'e'] и [1, 2, 3, 4, 5]. Сделайте из них объект.
{
	let arr1 = ['a', 'b', 'c', 'd', 'e'];
	let arr2 = [1, 2, 3, 4, 5];
	let obj = {};

	for (let i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}

	console.log(obj);
}

// Урок 163. Дан объект {a: 1, b: 2, c: 3, d: 4, e: 5}. Сделайте новый объект, где ключи и значения поменялись местами.
{
	let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
	let novyy = {};

	for (let key in obj) {
		novyy[obj[key]] = key;
	}

	console.log(novyy);
}

// Урок 163. Дан объект {a: 1, b: 2, c: 3, d: 4, e: 5}. Сделайте новый объект, где значения умножены на 2.
{
	let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
	let novyy = {};

	for (let key in obj) {
		novyy[key] = obj[key] * 2;
	}

	console.log(novyy);
}

// Урок 164. Дан объект {x: 1, y: 2, z: 3}. Увеличьте каждый элемент на 1.
{
	let obj = {x: 1, y: 2, z: 3};

	for (let key in obj) {
		obj[key] = obj[key] + 1;
	}

	console.log(obj);
}

// Урок 164. Дан объект {x: 1, y: 2, z: 3}. Возведите каждый элемент в квадрат.
{
	let obj = {x: 1, y: 2, z: 3};

	for (let key in obj) {
		obj[key] = obj[key] * obj[key];
	}

	console.log(obj);
}

// Урок 165. Дан массив ['a', 'b', 'c', 'd', 'e']. Проверьте, есть ли в нём элемент 'c'.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];
	let est = false;

	for (let elem of arr) {
		if (elem === 'c') {
			est = true;
		}
	}

	console.log(est);
}

// Урок 165. Проверьте, простое ли число. Простое число делится только на 1 и на само себя.
{
	let num = 13;
	let prostoe = true;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			prostoe = false;
			break;
		}
	}

	console.log(prostoe);
}

// Урок 166. Дан массив [10, 20, 30, 40, 21, 32, 51]. Найдите сумму элементов, которые начинаются с цифры 1.
{
	let arr = [10, 20, 30, 40, 21, 32, 51];
	let sum = 0;

	for (let elem of arr) {
		if (String(elem)[0] === '1') {
			sum = sum + elem;
		}
	}

	console.log(sum);
}

// Урок 167. Исправьте ошибки: в объекте {a: 10, b: 20, c: 30, d: 40, e: 50} нужно сложить элементы, первый символ ключа которых 'a' или 'b'.
{
	let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
	let sum = 0;

	for (let key in obj) {
		if (key[0] === 'a' || key[0] === 'b') {
			sum = sum + obj[key];
		}
	}

	console.log(sum);
}

// Урок 168. Код должен вывести числа от 0 до 10. Исправьте: for (let i = 0; i > 10; i++) { console.log(i); }
{
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
}

// Урок 168. Код должен вывести числа от 10 до 0. Исправьте: for (let i = 10; i > 0; i++) { console.log(i); }
{
	for (let i = 10; i >= 0; i--) {
		console.log(i);
	}
}

// Урок 168. Код должен вывести числа от 10 до 0. Исправьте: for (let i = 10; i == 0; i--) { console.log(i); }
{
	for (let i = 10; i >= 0; i--) {
		console.log(i);
	}
}

// Урок 168. Код должен вывести числа от 0 до 10. Исправьте: let i = 0; while (i >= 10) { console.log(i); i++; }
{
	let i = 0;

	while (i <= 10) {
		console.log(i);
		i++;
	}
}

// Урок 168. Код должен найти сумму целых чисел от 1 до 10. Исправьте: let res; for (let i = 1; i <= 10; i++) { res += i; }
{
	let res = 0;

	for (let i = 1; i <= 10; i++) {
		res += i;
	}

	console.log(res);
}

// Урок 168. Код должен найти произведение целых чисел от 1 до 10. Исправьте: let res = 0; for (let i = 1; i <= 10; i++) { res *= i; }
{
	let res = 1;

	for (let i = 1; i <= 10; i++) {
		res *= i;
	}

	console.log(res);
}

// Урок 168. Код должен найти сумму элементов массива ['1', '2', '3', '4', '5'] и вывести 15. Исправьте: sum += elem;
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let elem of arr) {
		sum += +elem;
	}

	console.log(sum);
}

// Урок 168. Код должен найти сумму элементов массива. Исправьте: let sum = ''; sum += +elem;
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let elem of arr) {
		sum += +elem;
	}

	console.log(sum);
}

// Урок 168. Код должен найти сумму элементов массива. Исправьте: sum = +elem;
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let elem of arr) {
		sum += +elem;
	}

	console.log(sum);
}

// Урок 168. Код всегда выводит NaN. Исправьте: for (let i = 0; i <= arr.length; i++) { sum += +arr[i]; }
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}

	console.log(sum);
}

// Урок 168. Код выводит не 15. Исправьте: for (let i = 0; i < arr.length - 1; i++) { sum += +arr[i]; }
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}

	console.log(sum);
}

// Урок 168. Код выводит не 15. Исправьте: sum += +i;
{
	let arr = ['1', '2', '3', '4', '5'];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}

	console.log(sum);
}

// Урок 168. Код должен возвести в квадрат каждый элемент массива. Исправьте: for (let elem of arr) { elem = elem ** 2; }
{
	let arr = [1, 2, 3, 4, 5];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] ** 2;
	}

	console.log(arr);
}

// Урок 168. Код должен заполнить массив числами от 1 до 5. Исправьте: let arr; for (...) { arr.push(i); }
{
	let arr = [];

	for (let i = 1; i <= 5; i++) {
		arr.push(i);
	}

	console.log(arr);
}

// Урок 168. Код должен найти сумму элементов объекта. Исправьте: for (let elem in obj) { sum += elem; }
{
	let obj = {a: 1, b: 2, c: 3};
	let sum = 0;

	for (let key in obj) {
		sum += obj[key];
	}

	console.log(sum);
}

// Урок 168. Код должен найти сумму элементов объекта. Исправьте: sum = +obj.key;
{
	let obj = {a: 1, b: 2, c: 3};
	let sum = 0;

	for (let key in obj) {
		sum += +obj[key];
	}

	console.log(sum);
}

// Урок 168. Код должен проверить, есть ли в массиве число 3. Исправьте: в else стояло res = '---', из-за этого ответ затирался.
{
	let arr = [1, 2, 3, 4, 5];
	let res = '---';

	for (let elem of arr) {
		if (elem === 3) {
			res = '+++';
			break;
		}
	}

	console.log(res);
}

// Урок 168. Код должен заполнить массив числами от 1 до 5. Исправьте: массив arr нигде не создан.
{
	let arr = [];

	for (let i = 1; i <= 5; i++) {
		arr.push(i);
	}

	console.log(arr);
}

// Урок 168. Код должен проверить, есть ли в массиве число 3. Исправьте: let res = true; внутри цикла создавал новую переменную.
{
	let arr = [1, 2, 3, 4, 5];
	let res = false;

	for (let elem of arr) {
		if (elem === 3) {
			res = true;
			break;
		}
	}

	console.log(res);
}

// Урок 168. Код должен вывести только чётные элементы. Исправьте: if (elem % 2 = 0)
{
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr) {
		if (elem % 2 === 0) {
			console.log(elem);
		}
	}
}

// Урок 168. Код должен записать в новый массив только нечётные элементы. Исправьте: массив res нигде не создан.
{
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let res = [];

	for (let elem of arr) {
		if (elem % 2 != 0) {
			res.push(elem);
		}
	}

	console.log(res);
}

// Урок 169. Выведите с помощью цикла столбец чисел от 1 до 100.
{
	for (let i = 1; i <= 100; i++) {
		console.log(i);
	}
}

// Урок 169. Выведите с помощью цикла столбец чисел от 100 до 1.
{
	for (let i = 100; i >= 1; i--) {
		console.log(i);
	}
}

// Урок 169. Выведите с помощью цикла столбец чётных чисел от 1 до 100.
{
	for (let i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

// Урок 169. Заполните массив 10-ю иксами с помощью цикла.
{
	let arr = [];

	for (let i = 0; i < 10; i++) {
		arr.push('x');
	}

	console.log(arr);
}

// Урок 169. Заполните массив числами от 1 до 10 с помощью цикла.
{
	let arr = [];

	for (let i = 1; i <= 10; i++) {
		arr.push(i);
	}

	console.log(arr);
}

// Урок 169. Дан массив с числами. Выведите только те элементы, которые больше нуля и меньше 10.
{
	let arr = [5, -2, 10, 3, 15, 1];

	for (let elem of arr) {
		if (elem > 0 && elem < 10) {
			console.log(elem);
		}
	}
}

// Урок 169. Дан массив с числами. Проверьте, что в нём есть элемент со значением 5.
{
	let arr = [1, 2, 3, 4, 5];
	let est = false;

	for (let elem of arr) {
		if (elem === 5) {
			est = true;
		}
	}

	console.log(est);
}

// Урок 169. Дан массив с числами. Найдите сумму элементов этого массива.
{
	let arr = [1, 2, 3, 4, 5];
	let sum = 0;

	for (let elem of arr) {
		sum = sum + elem;
	}

	console.log(sum);
}

// Урок 169. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
{
	let arr = [1, 2, 3, 4, 5];
	let sum = 0;

	for (let elem of arr) {
		sum = sum + elem * elem;
	}

	console.log(sum);
}

// Урок 169. Дан массив с числами. Найдите среднее арифметическое его элементов.
{
	let arr = [1, 2, 3, 4, 5];
	let sum = 0;

	for (let elem of arr) {
		sum = sum + elem;
	}

	console.log(sum / arr.length);
}

// Урок 169. Найдите факториал числа.
{
	let num = 5;
	let faktorial = 1;

	for (let i = 1; i <= num; i++) {
		faktorial = faktorial * i;
	}

	console.log(faktorial);
}

// Урок 169. Заполните массив числами от 10 до 1 с помощью цикла.
{
	let arr = [];

	for (let i = 10; i >= 1; i--) {
		arr.push(i);
	}

	console.log(arr);
}

// Урок 169. Дан массив с числами. Найдите сумму положительных элементов массива.
{
	let arr = [1, -2, 3, -4, 5];
	let sum = 0;

	for (let elem of arr) {
		if (elem > 0) {
			sum = sum + elem;
		}
	}

	console.log(sum);
}

// Урок 169. Дан массив [10, 20, 30, 50, 235, 3000]. Выведите только те элементы, которые начинаются с цифры 1, 2 или 5.
{
	let arr = [10, 20, 30, 50, 235, 3000];

	for (let elem of arr) {
		let pervaya = String(elem)[0];
		if (pervaya === '1' || pervaya === '2' || pervaya === '5') {
			console.log(elem);
		}
	}
}

// Урок 169. Дан массив с числами. Выведите элементы этого массива в обратном порядке.
{
	let arr = [1, 2, 3, 4, 5];

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

// Урок 169. Дан массив с числами. Выведите все элементы, значение которых совпадает с их порядковым номером.
{
	let arr = [0, 1, 5, 3, 9];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === i) {
			console.log(arr[i]);
		}
	}
}

// Урок 169. Дан массив с числами. С помощью цикла for и document.write выведите каждый элемент с новой строки через тег br.
{
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr) {
		console.log(elem);
	}

	// В учебнике тут document.write(elem + '<br>'), но он пишет
	// прямо в страницу и ломает её вид. Поэтому вывожу в консоль.
}

// Урок 169. Дан массив с числами. Выведите каждый элемент массива в отдельном абзаце.
{
	let arr = [1, 2, 3, 4, 5];

	for (let elem of arr) {
		console.log('<p>' + elem + '</p>');
	}
}

// Урок 169. Составьте массив дней недели. Выведите все дни, а выходные выведите жирным.
{
	let dni = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

	for (let i = 0; i < dni.length; i++) {
		if (i >= 5) {
			console.log('<b>' + dni[i] + '</b>');
		} else {
			console.log(dni[i]);
		}
	}
}

// Урок 169. Составьте массив дней недели. Выведите все дни, а текущий день курсивом. Номер дня хранится в переменной day.
{
	let dni = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	let day = 2;

	for (let i = 0; i < dni.length; i++) {
		if (i === day) {
			console.log('<i>' + dni[i] + '</i>');
		} else {
			console.log(dni[i]);
		}
	}
}

// Урок 169. Дан объект с зарплатами работников. Увеличьте каждую зарплату на 10%.
{
	let obj = {
		employee1: 100,
		employee2: 200,
		employee3: 300,
		employee4: 400,
		employee5: 500,
		employee6: 600,
		employee7: 700
	};

	for (let key in obj) {
		obj[key] = obj[key] + obj[key] * 0.1;
	}

	console.log(obj);
}

// Урок 169. Модифицируйте задачу: зарплата увеличивается только тем, у кого она меньше или равна 400.
{
	let obj = {
		employee1: 100,
		employee2: 200,
		employee3: 300,
		employee4: 400,
		employee5: 500,
		employee6: 600,
		employee7: 700
	};

	for (let key in obj) {
		if (obj[key] <= 400) {
			obj[key] = obj[key] + obj[key] * 0.1;
		}
	}

	console.log(obj);
}

// Урок 169. Даны массивы [1, 2, 3, 4, 5] и [6, 7, 8, 9, 10]. Сделайте из них один объект.
{
	let arr1 = [1, 2, 3, 4, 5];
	let arr2 = [6, 7, 8, 9, 10];
	let obj = {};

	for (let i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}

	console.log(obj);
}

// Урок 169. Дан объект {1: 6, 2: 7, 3: 8, 4: 9, 5: 10}. Найдите сумму ключей и сумму значений.
{
	let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
	let sumKlyuchey = 0;
	let sumZnacheniy = 0;

	for (let key in obj) {
		sumKlyuchey = sumKlyuchey + Number(key);
		sumZnacheniy = sumZnacheniy + obj[key];
	}

	console.log(sumKlyuchey);
	console.log(sumZnacheniy);
}

// Урок 169. Дан объект {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}. Получите массив ключей и массив значений.
{
	let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
	let klyuchi = [];
	let znacheniya = [];

	for (let key in obj) {
		klyuchi.push(key);
		znacheniya.push(obj[key]);
	}

	console.log(klyuchi);
	console.log(znacheniya);
}

// Урок 169. Дан объект с числами. Сделайте из него массив чисел, которые делятся на 2.
{
	let obj = {
		1: 125,
		2: 225,
		3: 128,
		4: 356,
		5: 145,
		6: 281,
		7: 452
	};
	let arr = [];

	for (let key in obj) {
		if (obj[key] % 2 === 0) {
			arr.push(obj[key]);
		}
	}

	console.log(arr);
}

// Урок 169. Дан массив ['a', 'b', 'c', 'd', 'e']. Сделайте из него объект с ключами от 1 до 5.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[i + 1] = arr[i];
	}

	console.log(obj);
}

// Урок 169. Дан массив ['a', 'b', 'c', 'd', 'e']. Сделайте из него объект, где ключ — элемент, а значение — его номер.
{
	let arr = ['a', 'b', 'c', 'd', 'e'];
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = i + 1;
	}

	console.log(obj);
}