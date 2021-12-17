let userInput = prompt("Введите число");
let total = 0;

for (let i = 0; userInput !== null; i += 1) {
  if (userInput !== null) {
    if (!isNaN(Number(userInput))) {
      total += Number(userInput);
      userInput = prompt("Введите число");
    } else {
      userInput = prompt("Введите число");
      alert("Было введено не число, попробуйте еще раз");
    }
  }
}
alert(`Общая сумма чисел равна ${total}`);

console.log(total);
