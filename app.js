import { getCars } from './fetch-utils.js';
import { renderCarCard } from './render-utils.js';
// import functions and grab DOM elements
const carsListContainer = document.getElementById('cars-list-container');

async function loadData() {
    const cars = await getCars();

    for (let car of cars) {
        const carContainer = renderCarCard(car);
        carsListContainer.append(carContainer);
    }
}
    


loadData();


