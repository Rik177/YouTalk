const button = document.querySelector('button');

button.addEventListener('click', () => { 
    alert(`Ширина экрана: ${window.screen.width}px\nВысота экрана: ${window.screen.height}px`);
})