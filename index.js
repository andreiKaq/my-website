// const counterButton = document.querySelector('.main__card-button');
// let count = 0;


// counterButton.addEventListener('click', function(){
//     const counter = document.querySelector('.counter');
//     count++;
//     counter.textContent = count;
//     if (count >= 10) {
        
//     }
// });


// const button = document.querySelector('.main__card-button');
// const progressBar = document.querySelector('.progress-bar');
// let progress = 0;

// button.addEventListener('click', function () {
//   progress += 10;
//   if (progress > 110) progress = 110;
//   progressBar.style.width = progress + '%';

//   if (progress === 110) {
//     const firstSlide = document.querySelector('.main')
//     firstSlide.classList.add('hidden')

//     const secondSlide = document.querySelector('.gallery')
//     secondSlide.classList.remove('hidden')
//   }
// });


// const cats = document.querySelectorAll('.gallery__row')
// cats.forEach(cat => {
//     cat.addEventListener('click', function() {
//         if (cat.classList.contains('selected')) {
//             cat.classList.remove('selected')
//         } else {

//             cat.classList.add('selected')
//         }
       
//     })
// })

const counterButton = document.querySelector('.main__card-button');
let count = 0;

counterButton.addEventListener('click', function () {
    const counter = document.querySelector('.counter');
    count++;
    counter.textContent = count;
    if (count >= 10) {
    }
});

const button = document.querySelector('.main__card-button');
const progressBar = document.querySelector('.progress-bar');
let progress = 0;

button.addEventListener('click', function () {
    progress += 10;
    if (progress > 110) progress = 110;
    progressBar.style.width = progress + '%';

    if (progress === 110) {
        const firstSlide = document.querySelector('.main');
        firstSlide.classList.add('hidden');

        const secondSlide = document.querySelector('.gallery');
        secondSlide.classList.remove('hidden');
    }
});

// Логика выбора котика
const cats = document.querySelectorAll('.gallery__row');
let selectedCats = []; // Массив для хранения выбранных котиков

cats.forEach(cat => {
    cat.addEventListener('click', function () {
        // Если котик уже выбран, снимаем выбор
        if (cat.classList.contains('selected')) {
            cat.classList.remove('selected');
            // Убираем котика из списка
            selectedCats = selectedCats.filter(name => name !== cat.querySelector('.img__names').textContent);
        } else {
            // Если котик не выбран, добавляем класс и сохраняем его название
            cat.classList.add('selected');
            selectedCats.push(cat.querySelector('.img__names').textContent); // Добавляем имя котика в массив
        }
    });
});

// Отправка всех выбранных котиков через форму
const sendButton = document.querySelector('.send'); // Кнопка отправки

sendButton.addEventListener('click', function () {
    if (selectedCats.length > 0) {
        // Создаем скрытую форму для отправки на Formspree
        const form = document.createElement('form');
        form.setAttribute('action', 'https://formspree.io/f/xpwqdvwg'); // Ваш новый Formspree URL
        form.setAttribute('method', 'POST');

        // Проверка того, что котики выбраны
        console.log('Selected Cats:', selectedCats); // Выводим в консоль массив имен котиков

        // Если список котиков пустой, прекращаем отправку формы
        if (selectedCats.length === 0) {
            alert('Выберите хотя бы одного котика перед отправкой!');
            return;
        }

        // Добавляем скрытое поле с именами котиков
        const catsInput = document.createElement('input');
        catsInput.setAttribute('type', 'hidden');
        catsInput.setAttribute('name', 'selectedCatsNames');  // Это имя поля на Formspree
        catsInput.setAttribute('value', selectedCats.join(', ')); // Передаем имена котиков как строку через запятую
        form.appendChild(catsInput);

        // Добавляем скрытое поле для отображения самой формы
        const submitInput = document.createElement('input');
        submitInput.setAttribute('type', 'submit');
        form.appendChild(submitInput);

        // Отправляем форму
        document.body.appendChild(form); // Добавляем форму в DOM
        form.submit(); // Отправляем форму
    } else {
        alert('Выберите хотя бы одного котика перед отправкой!');
    }
});







