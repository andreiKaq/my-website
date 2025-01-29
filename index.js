const counterButton = document.querySelector('.main__card-button');
let count = 0;


counterButton.addEventListener('click', function(){
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
    const firstSlide = document.querySelector('.main')
    firstSlide.classList.add('hidden')

    const secondSlide = document.querySelector('.gallery')
    secondSlide.classList.remove('hidden')
  }
});


const cats = document.querySelectorAll('.gallery__row')
cats.forEach(cat => {
    cat.addEventListener('click', function() {
        if (cat.classList.contains('selected')) {
            cat.classList.remove('selected')
        } else {

            cat.classList.add('selected')
        }
       
    })
})


// cats.forEach(cat => {
//     cat.addEventListener('click', function() {
//         cat.classList.remove('selected')
       
//     })
// })
