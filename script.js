// importa o array de objetos;
import {user} from './data/user.js'
// Pega o elemento header pelo id;
const header = document.getElementById('header');
// Cria um variavel para armazenar o html de header, e usa join para transformar o resultado final em um uma unica string
const headerSection = user.map((u) => {
    return `
        <div>
            <h2>${u.personalInfo.name}</h2>
            <p>${u.personalInfo.title}</p>
            <p>${u.skills.frontend}</p>
        </div>
    `;
}).join('');

console.log(headerSection);

header.innerHTML = headerSection;