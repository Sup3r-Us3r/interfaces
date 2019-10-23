// System Info
const systemInfo = document.querySelector('#system-info');
// const systemLogo = systemInfo.querySelector('img');
const systemText = systemInfo.querySelector('span');

// Header Content
const headerContent = document.querySelector('#header-content');

// Sidebar
const sidebar = document.querySelector('#sidebar');
// User Image
const userImage = document.querySelector('#user-image');
// User Info
const userInfo = document.querySelector('#user-info');

// Button Exapand and Shrink Menu
const buttonExpandAndShrinkMenu = document.querySelector('#expand-and-shrink-menu');

// Main Content
const mainContent = document.querySelector('#main-content');

// Find all 'span' on nav > ul > li > a > span
let hideTextInMenu = [...sidebar.querySelectorAll('ul li a span')];

buttonExpandAndShrinkMenu.addEventListener('click', () => {
    hideTextInMenu.forEach((element) => {
        if (element.classList.contains('hidden')) {
            // System Info
            systemInfo.classList.add('w-1/5');
            systemInfo.classList.remove('w-20');

            // System Text
            systemText.classList.add('lg:block');

            // Header Content
            headerContent.classList.add('w-4/5');
            headerContent.classList.remove('w-full');

            // Hide Span of Nav
            element.classList.remove('hidden');


            // Remove class in element 'a' and element 'i' to return to original
            element.parentElement.classList.remove('flex', 'flex-no-wrap', 'justify-center', 'items-center');
            // element = span | parentElement = a | firstElementChild = i
            element.parentElement.firstElementChild.classList.add('w-6');


            // Sidebar
            sidebar.classList.add('w-1/5');
            sidebar.classList.remove('w-20');

            // Sidebar -> User Image
            userImage.classList.add('h-24', 'w-24');
            userImage.classList.remove('h-10', 'w-10', 'mb-6');

            // Sidebar -> User Info
            userInfo.classList.add('block');
            userInfo.classList.remove('hidden');

            // Main Content
            mainContent.classList.add('lg:w-4/5');
            mainContent.classList.remove('w-full');
            mainContent.parentElement.classList.remove('pl-20');
        } else {
            // System Info
            systemInfo.classList.remove('w-1/5');
            systemInfo.classList.add('w-20');

            // System Text
            systemText.classList.remove('lg:block');

            // Header Content
            headerContent.classList.remove('w-4/5');
            headerContent.classList.add('w-full');

            // Hide Span of Nav
            element.classList.add('hidden');


            // Add class in element 'a' and element 'i' for center icon
            element.parentElement.classList.add('flex', 'flex-no-wrap', 'justify-center', 'items-center');
            // element = span | parentElement = a | firstElementChild = i
            element.parentElement.firstElementChild.classList.remove('w-6');


            // Sidebar
            sidebar.classList.remove('w-1/5');
            sidebar.classList.add('w-20');
            
            // Sidebar -> User Image
            userImage.classList.remove('h-24', 'w-24');
            userImage.classList.add('h-10', 'w-10', 'mb-6');

            // Sidebar -> User Info
            userInfo.classList.remove('block');
            userInfo.classList.add('hidden');

            // Main Content
            mainContent.classList.remove('lg:w-4/5');
            mainContent.classList.add('w-full');
            mainContent.parentElement.classList.add('pl-20');
        }
    });
    
});

// OBS: Precisei criar uma função debounce para segurar o evento resize
// Precisei fazer isso porque, se o usuário estiver no desktop e optar pelo menu encolhido, e diminuir a tela, para um tamanho inferior a 1024px
// O Javascript irá remover a classe 'pl-20' do parente do main-content
const debounce = (func, wait) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}
window.addEventListener('resize', debounce(() => {
    let counter = 0;
    if (window.innerWidth < 1024 && sidebar.classList.contains('w-20')) mainContent.parentElement.classList.remove('pl-20');
    if (window.innerWidth > 1024 && sidebar.classList.contains('w-20')) mainContent.parentElement.classList.add('pl-20');
    console.log('Counter -> ', counter++);
}, 100));


// Mobile - Offcanvas
const openOffcanvasMenuMobile = document.querySelector('#openOffcanvasMenuMobile');
const offcanvasOverlay = document.querySelector('#offcanvas-overlay');
const offcanvasMobile = document.querySelector('#offcanvas-mobile');

// Adicionar informações do usuário e itens ao menu do offcanvas
let userData = sidebar.firstElementChild.cloneNode(true);
let menuItems = sidebar.lastElementChild.cloneNode(true);
offcanvasMobile.appendChild(userData);
offcanvasMobile.appendChild(menuItems);
openOffcanvasMenuMobile.addEventListener('click', () => {
    if (!offcanvasMobile.classList.contains('open')) {
        offcanvasMobile.classList.add('open');
        offcanvasOverlay.classList.add('on');
    } else {
        offcanvasMobile.classList.remove('open');
        offcanvasOverlay.classList.remove('on');
    }
});
offcanvasOverlay.addEventListener('click', () => {
    offcanvasMobile.classList.remove('open');
    offcanvasOverlay.classList.remove('on');
});