const china = "Китай";
const chile = "Чили";
const austria = "Австралия";
const india = "Индия";
const jamaika = "Ямайка";

const chinaPrice = 150;
const chilePrice = 250;
const austriaPrice = 165;
const indiaPrice = 90;
const jamaikaPrice = 130;

let country = prompt("Укажите страну доставки", "");

country = country.toLocaleLowerCase();

country = country[0].toLocaleUpperCase() + country.slice(1);

switch (country) {
  case china:
    alert(`Доставка в ${china} будет стоить ${chinaPrice} кредитов`);
    break;
  case chile:
    alert(`Доставка в ${chile} будет стоить ${chilePrice} кредитов`);
    break;
  case austria:
    alert(`Доставка в ${austria} будет стоить ${austriaPrice} кредитов`);
    break;
  case india:
    alert(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
    break;
  case jamaika:
    alert(`Доставка в ${jamaika} будет стоить ${jamaikaPrice} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не достуна");
}
