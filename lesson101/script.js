// Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”.

function userGreeting(userName) {
  return `Hello, ${userName}!`
}

console.log(userGreeting('An'));

// Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const arrayChecking = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
    console.log(arr[i])
    };
  };
};

const numbers = [1, 2, 15, 24, 2, 0, -1, 18];

arrayChecking(numbers);

// Простенький калькулятор

function calc(firstOperand, secondOperand, operator) {
  if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
    switch(operator) {
      case '+': 
        return + firstOperand + secondOperand;
        break;
      case '-':
        return + firstOperand - secondOperand;
        break;
      case '*':
        return + firstOperand * secondOperand;
        break;
      case '/':
        return + firstOperand / secondOperand;
        break;
      default:
        return 'введите корректный оператор';
        break;
    }
  } else {
    return 'введите корректные операторы'
  }
};

let result = calc('10', 2, '/')
console.log(result);