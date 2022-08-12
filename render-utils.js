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