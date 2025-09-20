/*
Sections: header, summary, skills, experience, contributions, projects
*/
// importa o user data (objeto) com valores do meu perfil.
import { user } from './data/user.js';
// Pega as sections do html pelo id;
const headerEl = document.getElementById('resume-header');
const resumeEl = document.getElementById('resume-contact')
const summaryEl = document.getElementById('resume-summary');
const skillsEl = document.getElementById('resume-skills');
const experienceEl = document.getElementById('resume-experience');
const contributionsEl = document.getElementById('resume-contributions');
const projectsEl = document.getElementById('resume-projects');

// Cria uma function para desestruturar um objeto e gera um html.
function generateHeaderHTML(userData) {
    const { name, job, linkedin, portfolio } = userData.personalInfo

    return `
        <h2>${name}</h2>
        <h3>${job}</h3>
        <a href=${linkedin}>Link</a>
        <a href=${portfolio}>Link</a>
    `
};

function generateContactHTML(userData) {
    const { tel, email, location } = userData.personalInfo;

    return `
        <address>
            <p>${tel}</p>
            <p>${email}</p>
            <p>${location}</p>
        </address>
    `
};

function generateSummaryHTML(userData) {
    return `
        <p>
            ${userData.summary}
        </p>
    `
};

function generateSkillsHTML(userData) {
    const { skills: { frontend, backend, soft } } = userData

    return `
        <div>
        <p>${frontend.join(', ')}</p>
        </div
        <div>
        <p>${backend.join(', ')}</p>
        </div>
        <div>
        ${soft.join(', ')}
        </div>
    `
};

function generateExperienceHTML(userData) {
    const { company, role, startDate, endDate, location, description } = userData.experience;
    return `
        <h3>${role} - ${company}</h3>
        <p>${startDate} - ${endDate}</p>
        <p>${description}</p>
        <span>${location}</span>
    `
};

function generateContributionsHTML(userData) {
    const { contributions } = userData;

    const contributionsListHTML = contributions.map(({ title, details }) => {
        return (
            `
                <li>${title} - ${details}</li>
            `
        )
    }).join('')

    return `
        <ul>
            ${contributionsListHTML}
        </ul>
    `
}

function generateProjectsHTML(userData) {
    const { projects } = userData;

    const projectsListHTML = projects.map(({id, name, description, techs}) => {
        return `
            <div>
                <h3>${name}</h3>
                <p>${description}</p>
                <span>${techs.join(', ')}</span>
            </div>
        `
    }).join('')

    return `
        ${projectsListHTML}
    `
}

// Cria uma constante para armazenar a function junto ao paramentro que e o objeto.
const contactHTML = generateContactHTML(user);
const headerHTML = generateHeaderHTML(user);
const summaryHTML = generateSummaryHTML(user);
const skillsHTML = generateSkillsHTML(user);
const experienceHTML = generateExperienceHTML(user);
const contributionsListHTML = generateContributionsHTML(user);
const projectsListHTML = generateProjectsHTML(user);
// Adiciona a constante com a function armazenada no html atraves do metodo innerHTML;
resumeEl.innerHTML = contactHTML;
headerEl.innerHTML = headerHTML;
summaryEl.innerHTML = summaryHTML;
skillsEl.innerHTML = skillsHTML;
experienceEl.innerHTML = experienceHTML;
contributionsEl.innerHTML = contributionsListHTML;
projectsEl.innerHTML = projectsListHTML;