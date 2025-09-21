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
            <h3 class="contact-title">Contato</h3>
            <div class="contact-content">
           <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"/></svg>
            <p>${tel}</p>
            </div>
            <div class="contact-content">
<svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.372 3.03a2.45 2.45 0 0 0-1.345-.12l-.277.053v1.655a3.95 3.95 0 0 1 2.16.194c.428.165.892.206 1.34.12V3.275a3.7 3.7 0 0 1-1.8-.214zM16.75 6.145l.277-.054a2.45 2.45 0 0 1 1.345.12a3.95 3.95 0 0 0 2.344.154l.067-.016c.567-.136.967-.644.967-1.228v-2.22c0-.77-.72-1.336-1.468-1.156c-.429.103-.88.074-1.292-.085l-.08-.03a3.95 3.95 0 0 0-2.166-.193l-.486.093a1.24 1.24 0 0 0-1.008 1.22v3.5H7a1 1 0 0 0-.136.012A5.25 5.25 0 0 0 1.25 11.5v5.267a2.983 2.983 0 0 0 2.983 2.983H9.75V22a.75.75 0 0 0 1.5 0v-2.25h2.5V22a.75.75 0 0 0 1.5 0v-2.25h4.543a2.957 2.957 0 0 0 2.957-2.957V11.5c0-2.9-2.35-5.25-5.25-5.25h-.75zm-1.5 1.604V11a.75.75 0 0 0 1.5 0V7.75h.75a3.75 3.75 0 0 1 3.75 3.75v5.293c0 .804-.652 1.457-1.457 1.457H11.75V11.5c0-1.47-.603-2.798-1.576-3.75zm-5 10.5V11.5a3.75 3.75 0 1 0-7.5 0v5.267c0 .819.664 1.483 1.483 1.483zm-6-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>
              <p>${email}</p>
            </div>
            <div class="contact-content">
           <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.25 7.7c0-3.598 3.059-6.45 6.75-6.45c3.608 0 6.612 2.725 6.745 6.208l.478.16c.463.153.87.289 1.191.439c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.269v5.748c0 .61 0 1.13-.047 1.547c-.05.438-.161.87-.463 1.237a2.3 2.3 0 0 1-.62.525c-.412.237-.855.276-1.296.253c-.42-.022-.933-.107-1.534-.208l-.041-.007c-1.293-.215-1.814-.296-2.322-.254q-.278.023-.552.083c-.498.109-.976.342-2.159.933l-.122.061c-1.383.692-2.234 1.118-3.154 1.251q-.415.06-.835.06c-.928-.002-1.825-.301-3.28-.786l-.127-.043l-.384-.128l-.037-.012c-.463-.154-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.709s-.341-.707-.385-1.088c-.04-.353-.04-.78-.04-1.269v-5.02c0-.786 0-1.448.067-1.967c.07-.542.23-1.072.666-1.47a2.3 2.3 0 0 1 .42-.304c.517-.287 1.07-.27 1.605-.166q.164.032.342.078q-.1-.67-.1-1.328m.499 3.01a9 9 0 0 0-1.028-.288c-.395-.077-.525-.03-.586.004a1 1 0 0 0-.14.101c-.053.048-.138.156-.19.556c-.053.41-.055.974-.055 1.825v4.93c0 .539.001.88.03 1.138c.028.238.072.327.112.381c.039.055.109.125.326.226c.236.11.56.219 1.07.39l.384.127c1.624.541 2.279.75 2.936.752q.31 0 .617-.044c.65-.094 1.276-.397 2.82-1.17l.093-.046c1.06-.53 1.714-.857 2.417-1.01q.37-.081.747-.113c.717-.06 1.432.06 2.593.253l.1.017c.655.109 1.083.18 1.407.196c.312.016.419-.025.471-.055a.8.8 0 0 0 .207-.175c.039-.047.097-.146.132-.456c.037-.323.038-.757.038-1.42v-5.667c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.06-.019a10.7 10.7 0 0 1-1.335 3.788c-.912 1.568-2.247 2.934-3.92 3.663a3.5 3.5 0 0 1-2.794 0c-1.673-.73-3.008-2.095-3.92-3.663a11 11 0 0 1-.934-2.087M12 2.75c-2.936 0-5.25 2.252-5.25 4.95c0 1.418.437 2.98 1.23 4.341c.791 1.362 1.908 2.47 3.223 3.044c.505.22 1.089.22 1.594 0c1.316-.574 2.432-1.682 3.224-3.044c.792-1.36 1.229-2.923 1.229-4.34c0-2.699-2.314-4.951-5.25-4.951m0 4a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/></svg>
             <p>${location}</p></div>
        </address>
    `
};

function generateSummaryHTML(userData) {
    return `
    <div>
        <h3>Sobre mim</h3>
        <p>${userData.summary}</p>
    </div>
    `
};

function generateSkillsHTML(userData) {
    const { skills: { frontend, backend, soft } } = userData

    return `
        <div class="skills-content">
        <h3>Habilidades</h3>
        <p>${frontend.join(', ')}</p>
        <p>${backend.join(', ')}</p>
        <p>${soft.join(', ')}</p>
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

    const projectsListHTML = projects.map(({ id, name, description, techs }) => {
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