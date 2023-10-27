// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count = 8) {
  const arr = [];
  // generate array pear of number
  for (let i_count = 1; i_count <= count; i_count++) {
    arr.push(i_count, i_count);
  }
  return arr;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  const shuffleArr = arr;
  const maxIndex = shuffleArr.length - 1;

  for (let i_ind = maxIndex; i_ind >= 0; i_ind--) {
    if (i_ind > 100) {
      return `quantity of cards too much, try enter anoser number`;
    } else {
      let randomIndex = Math.round(Math.random() * i_ind);
      [shuffleArr[i_ind], shuffleArr[randomIndex]] = [arr[randomIndex], arr[i_ind]];
    }
  }

  return shuffleArr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {
  let originArr = createNumbersArray(count = count);
  console.log(`Массив чисел: `, originArr);
  const shuffleArr = shuffle(arr = originArr);
  console.log(`Перемешанный массив: ${shuffleArr}`);
}

startGame()
