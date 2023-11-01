function createNumbersArray(count = 8) {
  const arr = [];
  // generate array pear of number
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
  document.body.querySelector('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      console.log(`сработала функция howMuch`); //лог контроля
      const win = document.querySelector('#win');
      win.classList.remove('main__win');

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
  const win = document.createElement('div');


  title.classList.add('title')
  main.classList.add('container');
  main.id = 'main';
  form.classList.add('form')
  input.classList.add('form__input');
  input.id = 'input';
  // win.classList.add('win');
  win.id = 'win';

  title.textContent = 'Memory Game'
  input.placeholder = 'Enter quantity kards'

  document.body.appendChild(main);
  main.appendChild(title);
  main.appendChild(form);
  form.appendChild(input);
  form.after(win);
}


function crateGamesTable(arr) {
  const list = document.querySelector('ul');

  if (list === null) {
    let list = document.createElement('ul');
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

// функция игрового процесса
function playGame() {
  const cardsList = document.querySelectorAll('.list__shirt');
  let openLastsCards = []; // создали массив для id нажатых карточек

  // перебираем массив с .list__shirt и применяем к каждому элементу обработку события click
  cardsList.forEach((element) => {
    element.addEventListener('click', function (event) {

      element.classList.add('opacity'); // делаем карточку видимой
      openLastsCards.push(element.id); // формируем массив с id нажатых карточек

      // если открыты две активных карты и их id равны
      if (element.classList.contains('open')) {
        console.log('сработало Open'); // лог контроля
        openLastsCards.pop();
        element.disabled = true;
        console.log(`после удаления = ${openLastsCards}`);
      }

      if (openLastsCards.length == 2 && openLastsCards[0] == openLastsCards[1]) {
        console.log(`сработало равенство карт`); // лог контроля
        let allOpen = document.body.querySelectorAll('.opacity'); // выбираем все открытые карты
        for (iOpen of allOpen) { // делаем кнопки таких карт неактивными
          iOpen.disabled = true;
        };
        element.classList.add('open'); // добавили класс для маркировки открытых карт
        openLastsCards = []; // обнуляем активные открытые карты
        if (document.querySelectorAll('.list__shirt').length === document.querySelectorAll('.opacity').length) {
          console.log(`сработал win`); // лог контроля
          const win = document.querySelector('#win');
          win.classList.add('main__win');
        }

      } else if (openLastsCards.length % 3 == 0) {
        console.log(`__ сработал else IF __`); // лог контроля
        let allOpen = document.body.querySelectorAll('.opacity'); // выбираем все открытые карты

        for (iOpen of allOpen) { // перебираем все открытые карты
          // если список последних карт содержит id открытой карты)
          if (openLastsCards.includes(iOpen.id)) {
            iOpen.classList.remove('opacity');
            iOpen.disabled = false
            iOpen.classList.remove('open')
          }
        }
        element.classList.add('opacity') // делаем
        openLastsCards = [];
        openLastsCards.push(element.id);
        element.classList.add('open') // обозначаем карту как открытую

      } else {
        console.log(`сработал else`); // лог контроля
        element.classList.add('open') // обозначаем карту как открытую
      }
    });
  });
}


function startGame() {
  createInput();
  howMuch(quantityNums => {
    let originArr = createNumbersArray(count = quantityNums);
    const shuffleArr = shuffle(arr = originArr);
    crateGamesTable(arr = shuffleArr);
    playGame();
  });
}

startGame();

