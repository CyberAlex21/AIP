// Блок 4. Условия (уроки 104-113)

// Урок 105. Проверьте, что переменная test больше 10.
{
	let test = 11;

	if (test > 10) {
		console.log('больше 10');
	}
}

// Урок 105. Проверьте, что переменная test меньше 10.
{
	let test = 9;

	if (test < 10) {
		console.log('меньше 10');
	}
}

// Урок 105. Проверьте, что переменная test больше или равна 10.
{
	let test = 10;

	if (test >= 10) {
		console.log('больше или равно 10');
	}
}

// Урок 105. Проверьте, что переменная test меньше или равна 10.
{
	let test = 10;

	if (test <= 10) {
		console.log('меньше или равно 10');
	}
}

// Урок 106. Проверьте, что переменная test равна 10.
{
	let test = 10;

	if (test == 10) {
		console.log('равно 10');
	}
}

// Урок 107. Проверьте, что переменная test не равна 10.
{
	let test = 5;

	if (test != 10) {
		console.log('не равно 10');
	}
}

// Урок 108. Даны переменные test1 и test2. Проверьте, значение какой из них больше, и выведите сообщение.
{
	let test1 = 5;
	let test2 = 10;

	if (test1 > test2) {
		console.log('test1 больше');
	} else {
		console.log('test2 больше');
	}
}

// Урок 108. Даны переменные test1 и test2. Проверьте, равны ли их значения, и выведите сообщение.
{
	let test1 = 5;
	let test2 = 5;

	if (test1 == test2) {
		console.log('равны');
	} else {
		console.log('не равны');
	}
}

// Урок 109. Даны переменные test1 и test2 со строками. Проверьте, равны ли их значения.
{
	let test1 = 'abc';
	let test2 = 'abc';

	if (test1 == test2) {
		console.log('строки равны');
	} else {
		console.log('строки разные');
	}
}

// Урок 110. Даны переменные test1 = '123' и test2 = 123. Сравните их.
{
	let test1 = '123';
	let test2 = 123;

	if (test1 == test2) {
		console.log('равны по значению');
	} else {
		console.log('не равны');
	}
}

// Урок 111. Не запуская код, определите, что выведется: let test1 = '3'; let test2 = '3'; if (test1 == test2) ...
{
	let test1 = '3';
	let test2 = '3';

	if (test1 == test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 111. Не запуская код, определите, что выведется: if (test1 === test2) при двух строках '3'.
{
	let test1 = '3';
	let test2 = '3';

	if (test1 === test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 111. Не запуская код, определите, что выведется: let test1 = 3; let test2 = '3'; if (test1 == test2) ...
{
	let test1 = 3;
	let test2 = '3';

	if (test1 == test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 111. Не запуская код, определите, что выведется: let test1 = 3; let test2 = '3'; if (test1 === test2) ...
{
	let test1 = 3;
	let test2 = '3';

	if (test1 === test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 111. Не запуская код, определите, что выведется: let test1 = 3; let test2 = 3; if (test1 === test2) ...
{
	let test1 = 3;
	let test2 = 3;

	if (test1 === test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 112. Не запуская код, определите, что выведется: let test1 = '3'; let test2 = '3'; if (test1 != test2) ...
{
	let test1 = '3';
	let test2 = '3';

	if (test1 != test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 112. Не запуская код, определите, что выведется: if (test1 !== test2) при двух строках '3'.
{
	let test1 = '3';
	let test2 = '3';

	if (test1 !== test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 112. Не запуская код, определите, что выведется: let test1 = 3; let test2 = '3'; if (test1 != test2) ...
{
	let test1 = 3;
	let test2 = '3';

	if (test1 != test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 112. Не запуская код, определите, что выведется: let test1 = 3; let test2 = '3'; if (test1 !== test2) ...
{
	let test1 = 3;
	let test2 = '3';

	if (test1 !== test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 112. Не запуская код, определите, что выведется: let test1 = 3; let test2 = 2; if (test1 !== test2) ...
{
	let test1 = 3;
	let test2 = 2;

	if (test1 !== test2) {
		console.log('+++');
	} else {
		console.log('---');
	}
}

// Урок 113. Проверьте, что переменная num больше нуля и меньше 5.
{
	let num = 3;

	if (num > 0 && num < 5) {
		console.log('подходит');
	}
}

// Урок 113. Проверьте, что переменная num больше или равна 10 и меньше или равна 20.
{
	let num = 15;

	if (num >= 10 && num <= 20) {
		console.log('подходит');
	}
}

// Урок 113. Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
{
	let num1 = 1;
	let num2 = 3;

	if (num1 <= 1 && num2 >= 3) {
		console.log('подходит');
	}
}
