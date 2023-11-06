function createNumbersArray(count = 8) {
  const arr = [];
  for (let i_count = 1; i_count <= count; i_count++) {
    arr.push(i_count, i_count);
  }
  return arr;
}


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

function howMuch(callback) {
  const input = document.body.querySelector('input');
  const btn = document.body.querySelector('#formBtn');

  btn.addEventListener('click', () => {
    const inputValue = Number(input.value);
    btn.disabled = 'disabled';
    btn.classList.add('gray-btn');
    btn.classList.remove('form__btn');

    console.log(`сработало нажатие на кнопку START, inputValue = ${inputValue}`);
    if (isNaN(inputValue)) {
      alert("The number cannot be text. \nTry entering it again.");
    } else if (inputValue < 2) {
      alert("The number cannot be less than 2. \nTry entering another number.");
    } else if (inputValue > 10) {
      alert("The number cannot be more than 10. \nTry entering another number.");
    } else if (inputValue % 2 !== 0) {
      input.placeholder = 'The number of cards must be even';
      input.value = '';
      callback(inputValue - 1);
    } else {
      input.placeholder = 'Enter quantity numbers for games';
      input.value = '';
      callback(inputValue);
    }
  });

  input.addEventListener('keydown', function (e) {
    const btn = document.body.querySelector('#formBtn');
    btn.removeAttribute('disabled');
    btn.classList.add('form__btn');
    btn.classList.remove('gray-btn');

    if (e.key === 'Enter') {
      e.preventDefault(); // Предотвращаем стандартное действие браузера по отправке формы
      console.log(`сработала функция howMuch`);
      const inputValue = Number(this.value);

      if (isNaN(inputValue)) {
        alert("The number cannot be text. \nTry entering it again.");
      } else if (inputValue < 2) {
        alert("The number cannot be less than 2. \nTry entering another number.");
        this.value = '';
      } else if (inputValue > 10) {
        alert("The number cannot be more than 10. \nTry entering another number.");
        this.value = '';
      } else if (inputValue % 2 !== 0) {
        input.placeholder = 'The number of cards must be even';
        this.value = '';
        callback(inputValue - 1);
      } else {
        input.placeholder = 'Enter quantity numbers for games';
        this.value = '';
        callback(inputValue);
      }
    btn.disabled = 'disabled';
    btn.classList.add('gray-btn');
    btn.classList.remove('form__btn');

    }
  });
}

function createInput() {
  console.log(`происходит запись шапки`);
  const main = document.createElement('main');
  const title = document.createElement('h1')
  const form = document.createElement('form')
  const input = document.createElement('input');
  const button = document.createElement('button');
  const win = document.createElement('div');
  const winBack = document.createElement('div');
  const restartBtn = document.createElement('button');

  title.classList.add('title')
  main.classList.add('container');
  main.id = 'main';
  form.classList.add('form');
  input.classList.add('form__input');
  input.id = 'input';
  win.id = 'win';
  win.classList.add('main__win', 'win')
  winBack.classList.add('win__back')
  restartBtn.classList.add('win__btn');
  button.classList.add('form__btn');
  button.id = 'formBtn';
  button.type = 'button';
  restartBtn.id = 'winBtn';
  button.textContent = 'Start';
  button.disabled = 'disabled';
  button.classList.add('gray-btn');
  button.classList.remove('form__btn');

  title.textContent = 'Memory Game';
  restartBtn.textContent = 'Restart Game';
  input.placeholder = 'Enter quantity numbers for games';

  document.body.appendChild(main);
  main.appendChild(title);
  main.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);
  form.after(win);
  win.appendChild(restartBtn);
  win.appendChild(winBack);

  const arrOriginal = createNumbersArray(count = 8);
  const shuffleArr = shuffle(arr = arrOriginal);
  crateGamesTable(arr = shuffleArr);
  playGame();
}


function crateGamesTable(arr) {
  const list = document.querySelector('ul');

  if (list === null) {
    const list = document.createElement('ul');
    list.classList.add('list');
    document.querySelector('#main').appendChild(list);

    for (let iNum of arr) {
      const item = document.createElement('li');
      const shirtUp = document.createElement('button');
      item.textContent = iNum;
      shirtUp.classList.add('list__shirt');
      item.classList.add('list__item');
      shirtUp.id = iNum;
      list.append(item);
      item.append(shirtUp);
    }

  } else {
    list.innerHTML = '';
    for (let iNum of arr) {
      const item = document.createElement('li');
      const shirtUp = document.createElement('button');
      item.textContent = iNum;
      shirtUp.classList.add('list__shirt');
      item.classList.add('list__item');
      shirtUp.id = iNum;
      list.append(item);
      item.append(shirtUp);
    }
  }
};


function clickResBtn() {
  let btn = document.getElementById('winBtn');
  btn.addEventListener('click', () => {
    reStartGame();
  })
}


// функция игрового процесса
function playGame() {
  let count = 0; // счётчик нажатий на карточки
  const cardsList = document.querySelectorAll('.list__shirt');
  let openLastsCards = []; // создали массив для id нажатых карточек

  // перебираем массив с .list__shirt и применяем к каждому элементу обработку события click
  cardsList.forEach((element) => {
    element.addEventListener('click', function (event) {
      count++;

      if (input.placeholder == 'The number of cards must be even') { // если пользователь вводил нечётное число карт, обновляес сообщение на стандартное
        input.placeholder = 'Enter quantity numbers for games';
      }

      element.classList.add('opacity'); // делаем карточку видимой
      openLastsCards.push(element.id); // формируем массив с id нажатых карточек

      if (element.classList.contains('open')) {       // если открыты две активных карты и их id равны
        console.log('сработало Open'); // лог контроля
        openLastsCards.pop();
        element.disabled = true;
        console.log(`после удаления = ${openLastsCards}`);
      }

      if (openLastsCards.length == 2 && openLastsCards[0] == openLastsCards[1]) {
        console.log(`сработало равенство карт`); // лог контроля
        const allOpen = document.body.querySelectorAll('.opacity'); // выбираем все открытые карты
        for (iOpen of allOpen) { // делаем кнопки таких карт неактивными
          iOpen.disabled = true;
        };
        element.classList.add('open'); // добавили класс для маркировки открытых карт
        openLastsCards = []; // обнуляем активные открытые карты

        if (document.querySelectorAll('.list__shirt').length === document.querySelectorAll('.opacity').length) { // если открыты все карты
          console.log(`сработал win, \n нажатий ${count} \n ||||||||||||||||||||||||||||||`); // лог контроля
          const win = document.querySelector('#win');
          win.classList.remove('win');

          const input = document.querySelector('#input');
          input.placeholder = `number of clicks: ${count}`;
          clickResBtn();
        }

      } else if (openLastsCards.length % 3 == 0) {
        console.log(`click __ сработал else IF __`); // лог контроля
        const allOpen = document.body.querySelectorAll('.opacity'); // выбираем все открытые карты

        for (iOpen of allOpen) { // перебираем все открытые карты
          // если список последних карт содержит id открытой карты)
          if (openLastsCards.includes(iOpen.id)) {
            iOpen.classList.remove('opacity');
            iOpen.disabled = false
            iOpen.classList.remove('open');
          }
        }
        element.classList.add('opacity') // делаем
        openLastsCards = [];
        openLastsCards.push(element.id);
        element.classList.add('open') // обозначаем карту как открытую

      } else {
        console.log(`click сработал else`); // лог контроля
        element.classList.add('open') // обозначаем карту как открытую
      }
    });
  });
}


function startGame() {
  document.body.innerHTML = '';

  createInput();
  const win = document.getElementById('win');
  howMuch(quantityNums => {
    console.log('сработал startGame');
    if (!win.classList.contains('win')) {
      win.classList.add('win');
    }

    const originArr = createNumbersArray(count = quantityNums);
    const shuffleArr = shuffle(arr = originArr);
    crateGamesTable(arr = shuffleArr);
    playGame();
  });
};


function reStartGame() {

  if (document.body.querySelector('.form') === null) {
    console.log(`reStartGame - ('.form') == null`);
    createInput();
  }

  const win = document.getElementById('win');
  win.classList.add('win')

  console.log('сработал REstartGame');
  const originArr = createNumbersArray(count = 8);
  const shuffleArr = shuffle(arr = originArr);
  crateGamesTable(arr = shuffleArr);
  startGame()
};


startGame();
