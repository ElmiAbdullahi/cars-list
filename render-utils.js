export function renderCarCard(car) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('car-card');

    p.textContent = car.make;
    img.src = `./assets/${car.image}.png`;
    a.href = `../details-utils/?id=${car.id}`; 
    // link to the dog's detail page here

    div.append(p, img);

    a.append(div);
    return a;
}

export function renderCarDetail(car) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const yearEl = document.createElement('p');
    

    div.classList.add('car-detail');

    makeEl.textContent = car.make;
    makeEl.classList.add('make');

    modelEl.textContent = car.model;
    modelEl.classList.add('model');

    colorEl.textContent = `${car.color} `;
    colorEl.classList.add('color');

    yearEl.textContent = car.year;
    yearEl.classList.add('year');


    img.src = `../assets/${car.image}.png`;

    div.append(makeEl, img, modelEl, colorEl, yearEl);

    return div;
}