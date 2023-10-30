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

function howMuch(callback) {
  document.body.querySelector('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const inputValue = Number(this.value);

      if (isNaN(inputValue)) {
        alert("The number cannot be text. \nTry entering it again.");
      } else if (inputValue < 6) {
        alert("The number cannot be less than 6. \nTry entering another number.");
      } else if (inputValue > 80) {
        alert("The number cannot be more than 80. \nTry entering another number.");
      } else if (inputValue % 2 !== 0) {
        alert("For this game the number of cards must be even");
      } else {
        e.preventDefault();
        const quantityNum = inputValue / 2;
        this.value = '';
        callback(quantityNum);
      }
    }
  });
}


function createInput() {
  const main = document.createElement('main');
  const title = document.createElement('h1')
  const form = document.createElement('form')
  const input = document.createElement('input');

  title.classList.add('title')
  main.classList.add('container');
  main.id = 'main';
  form.classList.add('form')
  input.classList.add('form__input');
  input.id = 'input';
  // input.oninput = 'test = this.value'

  title.textContent = 'Memory Game'
  input.placeholder = 'Enter quantity kards'

  document.body.appendChild(main);
  main.appendChild(title);
  main.appendChild(form);
  form.appendChild(input);
}


function crateGamesTable(arr) {
  const list = document.querySelector('ul');
  let ind = 0;

  if (list === null) {
    let list = document.createElement('ul');
    list.classList.add('list');
    document.querySelector('#main').appendChild(list);

    for (let iNum of arr) {
      const item = document.createElement('il');
      const shirtUp = document.createElement('button');
      item.textContent = iNum;
      shirtUp.classList.add('list__shirt');
      item.classList.add('list__item');
      item.id = ind;
      list.append(item);
      item.append(shirtUp);
      ind++;
    }

  } else {
    list.innerHTML = '';
    for (let iNum of arr) {
      const item = document.createElement('il');
      const shirtUp = document.createElement('button');
      item.textContent = iNum;
      shirtUp.classList.add('list__shirt');
      item.classList.add('list__item');
      item.id = ind;
      list.append(item);
      item.append(shirtUp);
      ind++;
    }
  }
};


function playGame() {
  const handleClick = (event) => {
    console.log(`event.target= ${event.target}`)
  }
  const cards = document.querySelectorAll('.list__shirt');
  console.log(`cards= ${cards}`);
  for (i of cards) {
  console.log(`i = ${i}`);
  }
  cards.forEach(card => {
    console.log(`card= ${card}`);
    card.addEventListener('click', (event) => {
      console.log(`event.target= ${event.target}`)
    })
  })
  };

function startGame() {
  createInput();
  howMuch(quantityNums => {
    let originArr = createNumbersArray(count = quantityNums);
    const shuffleArr = shuffle(arr = originArr);
    crateGamesTable(arr = shuffleArr);
  })
}

startGame();
playGame()
