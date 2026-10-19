// Блок 3. Объекты (уроки 80-103)

// Урок 80. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
{
	let obj = {
		1: 'понедельник',
		2: 'вторник',
		3: 'среда',
		4: 'четверг',
		5: 'пятница',
		6: 'суббота',
		7: 'воскресенье'
	};

	alert(obj[1]);
	alert(obj[2]);
	alert(obj[3]);
	alert(obj[4]);
	alert(obj[5]);
	alert(obj[6]);
	alert(obj[7]);
}

// Урок 81. Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.
{
	let obj = {
		1: 'январь',
		2: 'февраль',
		3: 'март',
		4: 'апрель',
		5: 'май',
		6: 'июнь',
		7: 'июль',
		8: 'август',
		9: 'сентябрь',
		10: 'октябрь',
		11: 'ноябрь',
		12: 'декабрь'
	};

	console.log(obj);
}

// Урок 82. Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
{
	let user = {
		name: 'Иван',
		surname: 'Иванов',
		patronymic: 'Иванович'
	};

	alert(user.surname + ' ' + user.name + ' ' + user.patronymic);
}

// Урок 83. Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
{
	let date = {
		year: 2026,
		month: 10,
		day: 5
	};

	alert(date.year + '-' + date.month + '-' + date.day);
}

// Урок 84. Дан объект с ключами '1a', 'b2', 'c-c', 'd 4', 'e5'. Выведите каждый элемент через квадратные скобки.
{
	let obj = {
		'1a': 1,
		'b2': 2,
		'c-c': 3,
		'd 4': 4,
		'e5': 5
	};

	console.log(obj['1a']);
	console.log(obj['b2']);
	console.log(obj['c-c']);
	console.log(obj['d 4']);
	console.log(obj['e5']);
}

// Урок 84. Исправьте ошибки в коде: console.log(obj.1a); console.log(obj.b2); console.log(obj.c-c); console.log(obj.d 4); console.log(obj.e5);
{
	let obj = {
		'1a': 1,
		'b2': 2,
		'c-c': 3,
		'd 4': 4,
		'e5': 5
	};

	console.log(obj['1a']);
	console.log(obj['b2']);
	console.log(obj['c-c']);
	console.log(obj['d 4']);
	console.log(obj['e5']);
}

// Урок 85. Дан объект {x: 1, y: 2, z: 3}. Прибавьте к каждому элементу единицу и выведите объект.
{
	let obj = {x: 1, y: 2, z: 3};

	obj.x = obj.x + 1;
	obj.y = obj.y + 1;
	obj.z = obj.z + 1;

	console.log(obj);
}

// Урок 86. Создайте пустой объект, а затем заполните его значениями.
{
	let obj = {};

	obj.a = 1;
	obj.b = 2;
	obj.c = 3;

	console.log(obj);
}

// Урок 87. Создайте объект и убедитесь, что порядок ключей в нём не имеет значения.
{
	let obj = {c: 3, a: 1, b: 2};

	console.log(obj.a);
	console.log(obj.b);
	console.log(obj.c);
}

// Урок 88. Получите массив ключей объекта {x: 1, y: 2, z: 3}.
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(Object.keys(obj));
}

// Урок 89. Найдите количество элементов в объекте {x: 1, y: 2, z: 3}.
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(Object.keys(obj).length);
}

// Урок 90. Дан объект {x: 1, y: 2, z: 3}. Выведите элемент по ключу, который лежит в переменной.
{
	let obj = {x: 1, y: 2, z: 3};
	let key = 'x';

	console.log(obj[key]);
}

// Урок 91. Исправьте ошибку: let obj = {x: 1, y: 2, z: 3}; console.log(obj[x]);
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(obj['x']);
}

// Урок 91. Исправьте ошибку: let key = 'x'; console.log(obj['key']);
{
	let obj = {x: 1, y: 2, z: 3};
	let key = 'x';

	console.log(obj[key]);
}

// Урок 92. Исправьте ошибку: let prop = 'x'; console.log(obj.prop);
{
	let obj = {x: 1, y: 2, z: 3};
	let prop = 'x';

	console.log(obj[prop]);
}

// Урок 92. Исправьте ошибку: let prop = 'x'; console.log(obj['prop']);
{
	let obj = {x: 1, y: 2, z: 3};
	let prop = 'x';

	console.log(obj[prop]);
}

// Урок 93. В коде ключ должен был взяться из переменной. Исправьте ошибку: let key = 'x'; let obj = {key: 1, y: 2, z: 3};
{
	let key = 'x';

	let obj = {
		[key]: 1,
		y: 2,
		z: 3
	};

	console.log(obj);
}

// Урок 93. Дан объект {x: 1, y: 2, z: 3} и переменные key1 = 'x', key2 = 'y', key3 = 'z'. Выведите элементы по этим ключам.
{
	let obj = {
		x: 1,
		y: 2,
		z: 3
	};

	let key1 = 'x';
	let key2 = 'y';
	let key3 = 'z';

	console.log(obj[key1]);
	console.log(obj[key2]);
	console.log(obj[key3]);
}

// Урок 94. Что выведется в консоль: let obj = {x: 1, y: 2, z: 3}; console.log('x' in obj); console.log('w' in obj);
{
	let obj = {x: 1, y: 2, z: 3};

	console.log('x' in obj);
	console.log('w' in obj);
}

// Урок 95. Что выведется в консоль: let obj = {x: 1, y: 2, z: 3}; delete obj.x; console.log('x' in obj);
{
	let obj = {x: 1, y: 2, z: 3};
	delete obj.x;

	console.log('x' in obj);
}

// Урок 96. Не запуская код, определите, что выведется: console.log( typeof {x: 1, y: 2, z: 3} );
{
	console.log(typeof {x: 1, y: 2, z: 3});
}

// Урок 96. Не запуская код, определите, что выведется: console.log( typeof {} );
{
	console.log(typeof {});
}

// Урок 96. Не запуская код, определите, что выведется: let obj = {x: 1, y: 2, z: 3}; console.log( typeof obj );
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(typeof obj);
}

// Урок 96. Не запуская код, определите, что выведется: console.log( typeof obj['x'] );
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(typeof obj['x']);
}

// Урок 97. Не запуская код, определите, что выведется: console.log( typeof {x: 1, y: 2, z: 3} );
{
	console.log(typeof {x: 1, y: 2, z: 3});
}

// Урок 97. Не запуская код, определите, что выведется: console.log( typeof [1, 2, 3] );
{
	console.log(typeof [1, 2, 3]);
}

// Урок 97. Не запуская код, определите, что выведется: let arr = [1, 2, 3]; console.log( typeof arr );
{
	let arr = [1, 2, 3];

	console.log(typeof arr);
}

// Урок 97. Не запуская код, определите, что выведется: let arr = [1, 2, 3]; console.log( typeof arr[0] );
{
	let arr = [1, 2, 3];

	console.log(typeof arr[0]);
}

// Урок 97. Не запуская код, определите, что выведется: let arr = ['1', '2', '3']; console.log( typeof arr[0] );
{
	let arr = ['1', '2', '3'];

	console.log(typeof arr[0]);
}

// Урок 98. Не запуская код, определите, что выведется: console.log( Array.isArray([1, 2, 3]) );
{
	console.log(Array.isArray([1, 2, 3]));
}

// Урок 98. Не запуская код, определите, что выведется: console.log( Array.isArray({x: 1, y: 2, z: 3}) );
{
	console.log(Array.isArray({x: 1, y: 2, z: 3}));
}

// Урок 99. Дан код: let test = {x: 1, y: 2, z: 3}; console.log(test);
{
	let test = {x: 1, y: 2, z: 3};

	console.log(test);
}

// Урок 99. Дан код: let test = {x: 1, y: 2, z: 3}; console.log(test.x);
{
	let test = {x: 1, y: 2, z: 3};

	console.log(test.x);
}

// Урок 99. Дан код: let test = [1, 2, 3]; console.log(test);
{
	let test = [1, 2, 3];

	console.log(test);
}

// Урок 99. Дан код: let test = [1, 2, 3]; console.log(test[1]);
{
	let test = [1, 2, 3];

	console.log(test[1]);
}

// Урок 99. Дан код: let test1 = [1, 2, 3]; let test2 = 1; console.log(test1);
{
	let test1 = [1, 2, 3];
	let test2 = 1;

	console.log(test1);
}

// Урок 99. Дан код: let test1 = [1, 2, 3]; let test2 = 1; console.log(test1[test2]);
{
	let test1 = [1, 2, 3];
	let test2 = 1;

	console.log(test1[test2]);
}

// Урок 99. Не подсматривая в учебник, перечислите все примитивные типы данных в JavaScript.
{
	// Примитивные типы: число, строка, логический (true и false),
	// null, undefined, а ещё специальные значения NaN и Infinity.

	let chislo = 1;
	let stroka = 'abc';
	let logika = true;
	let nichego = null;
	let neizvestno;

	console.log(typeof chislo);
	console.log(typeof stroka);
	console.log(typeof logika);
	console.log(typeof nichego);
	console.log(typeof neizvestno);
}

// Урок 100. Не запуская код, определите, что выведется: let arr1 = [1, 2, 3]; let arr2 = arr1; arr1[0] = 'a'; console.log(arr2);
{
	let arr1 = [1, 2, 3];
	let arr2 = arr1;

	arr1[0] = 'a';

	console.log(arr2);
}

// Урок 100. Не запуская код, определите, что выведется: arr1[0] = 'a'; arr2[1] = 'b'; console.log(arr1);
{
	let arr1 = [1, 2, 3];
	let arr2 = arr1;

	arr1[0] = 'a';
	arr2[1] = 'b';

	console.log(arr1);
}

// Урок 100. Не запуская код, определите, что выведется: arr1[0] = 'a'; arr2[0] = 'b'; console.log(arr2);
{
	let arr1 = [1, 2, 3];
	let arr2 = arr1;

	arr1[0] = 'a';
	arr2[0] = 'b';

	console.log(arr2);
}

// Урок 101. Что выведется: const arr = ['a', 'b', 'c']; arr[1] = '!'; console.log(arr);
{
	const arr = ['a', 'b', 'c'];
	arr[1] = '!';

	console.log(arr);
}

// Урок 101. Что выведется: const arr = ['a', 'b', 'c']; arr = [1, 2, 3]; console.log(arr);
{
	const arr = ['a', 'b', 'c'];
	arr = [1, 2, 3];

	console.log(arr); // будет ошибка: константу перезаписать нельзя
}

// Урок 101. Что выведется: const arr = ['a', 'b', 'c']; arr = ['a', 'b', 'c']; console.log(arr);
{
	const arr = ['a', 'b', 'c'];
	arr = ['a', 'b', 'c'];

	console.log(arr); // тоже ошибка: присваивать константе нельзя
}

// Урок 102. Перепишите код через подход с константами: let arr = [1, 2, 3, 4, 5]; let res = arr[1] + arr[2];
{
	const arr = [1, 2, 3, 4, 5];
	const res = arr[1] + arr[2];

	console.log(res);
}

// Урок 103. Код должен вывести элемент объекта. Исправьте ошибку: let obj = {x: 1, y: 2, z: 3}; console.log(obj[x]);
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(obj['x']);
}

// Урок 103. Код должен вывести элемент по ключу из переменной. Исправьте ошибку: let key = 'x'; console.log(obj.key);
{
	let obj = {x: 1, y: 2, z: 3};
	let key = 'x';

	console.log(obj[key]);
}

// Урок 103. Код должен вывести сумму элементов объекта. Исправьте ошибку: let sum = obj[x] + obj[y] + obj[x]; console.log(obj);
{
	let obj = {x: 1, y: 2, z: 3};
	let sum = obj['x'] + obj['y'] + obj['z'];

	console.log(sum);
}

// Урок 103. Код должен вывести количество элементов объекта. Исправьте ошибку: console.log(obj.length);
{
	let obj = {x: 1, y: 2, z: 3};

	console.log(Object.keys(obj).length);
}
