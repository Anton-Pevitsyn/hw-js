// const transform = {
//   name: 'bambolbi',
//   speed: 160,
//   maxSpeed: 250,
//   charge: '65%',
// }

// transform.toLowCharge = function () {
//   this.charge = (parseInt(this.charge) - 1) + '%';
//   console.log(this.charge);
// }

// transform.toLowCharge();

// transform.toUpCharge = function () {
//   this.charge = (parseInt(this.charge) + 1) + '%';
//   console.log(this.charge);
// }

// transform.toUpCharge(1);


// transform.toUpSpeed = function (value) {
//   let { maxSpeed, speed } = this;
//   return maxSpeed >= speed + value ? speed += value : console.log('Куда разогнался .....');
// }

// transform.toUpSpeed(423);

// console.log(transform.speed);


// transform.toLowSpeed = function (a) {
//   let { speed } = this;
//   return speed - a > 0 ? speed -= a : console.log('не тормози ....');
// }
 


// // transform.toLowSpeed(170);
// // console.log(transform.speed);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highTemperatures.highIcon);

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//       const indexPotions = this.potions.indexOf(potionName);
//       console.log(indexPotions);
//       this.potions.splice(indexPotions, 1);
//       console.log(this.potions);
//     // Пиши код выше этой строки
      
//     },
// };

// atTheOldToad.removePotion('Дыхание дракона');
// console.log(atTheOldToad);

let result;

const atTheOldToad = {
  potions: [
    {name: 'Зелье скорости', price: 460},
    {name: 'Дыхание дракона', price: 780},
    {name: 'Каменная кожа', price: 520},
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
    addPotion(newPotion) {
        let addPotion;
        const {name: potionName, price = 0} = newPotion;
        for (const potion of this.potions) {
            let arrayPotion = Object.values(potion);
            let booleanInclud = arrayPotion.includes(potionName);
        if (booleanInclud === true) {
            addPotion = `Зелье ${potionName} уже есть в инвентаре!`;
            } else { addPotion = this.potions.push(newPotion); };
            }
        return addPotion;
  },
  
    removePotion(potionName) {
        let removePotion;
      for (const potion of this.potions) {
          let arrayPotion = Object.values(potion);
          let indexPotions = arrayPotion.indexOf(potionName);
          console.log(arrayPotion);
          console.log(indexPotions);
          if (indexPotions >= 0) {
              removePotion = this.potions.splice(indexPotions, 1);
          } else { removePotion = `${potionName} нет в кормане` };
          return removePotion;
  }
  },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            let arrayPotion = Object.values(potion);
            let potionIndex = this.potions.indexOf(oldName);
        }
    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

  this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};
result = atTheOldToad.getPotions();
console.log(result);

result = atTheOldToad.addPotion({name: 'Зелье силы', price: 780});
console.log(result);

result = atTheOldToad.removePotion('Дыхание дракона');
console.log(result);

