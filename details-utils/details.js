import { getCar } from '../fetch-utils.js';
import { renderCarDetail } from '../render-utils.js';

const carDetailContainer = document.getElementById('car-details-container');

// on load
const params = new URLSearchParams(window.location.search);
async function displayCarData() {
    const data = await getCar(params.get('id'));
    const carDiv = renderCarDetail(data);
    carDetailContainer.append(carDiv);
    
}
displayCarData();

