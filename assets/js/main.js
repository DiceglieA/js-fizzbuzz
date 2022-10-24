const item = document.querySelector('.table')
for(let i = 1; i <= 100; i++) {
    //MHitem.innerHTML += `<div class="square">${i}</div>`;
    //console.log(i)

    if ( i % 3 === 0 && i % 5 === 0){
        item.innerHTML += `<div class="square fizzbuzz">FizzBuzz</div>`
        console.log('FizzBuzz')

    } else if ( i  % 3 === 0){
        item.innerHTML += `<div class="square fizz">Fizz</div>`
        console.log('Fizz')

    } else if ( i % 5 === 0) {
        item.innerHTML += `<div class="square buzz">Buzz</div>`
        console.log('Buzz')

    } else {
        item.innerHTML += `<div class="square">${i}</div>`
    };
}

