// Итерационный подсчет n-го числа Фибоначчи

function fibIterat(num) {
	let first = 0;
	let second = 1;
	let result = 1;
	for (let i = 3; i <= num; i++) {
		result = first + second;
		first = second;
		second = result;
	}
	return result;
}

console.log(fibIterat(15)); // 377

// Рекурсивное вычисление n-го числа Фибоначчи

function fibRec(num) {
	if (num <= 1) return 0;
	if (num === 2) return 1;
	return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibRec(14)); // 233
