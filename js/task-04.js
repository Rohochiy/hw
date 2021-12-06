let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;

let number = prompt("Сколько дроидов вы хотите купить?");
if (number === null) {
  message = "Отменено пользователем!";
} else {
  totalPrice = number * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  }
}
if (totalPrice <= credits) {
  message = `Вы купили ${number} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`;
}
alert(message);
