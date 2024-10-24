import { costumeList } from "./costumes.js";

const button = document.getElementById('genButton');

button.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * costumeList.length);
    const randomCostume = costumeList[randomNum];
    const inputField = document.getElementById('inputField');
    inputField.value = randomCostume;
})

