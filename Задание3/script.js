const sendButton = document.querySelector('.chat__button--send');
const geoButton = document.querySelector('.chat__button--geo')

const chatArea = document.querySelector('.chat__area');
const input = document.querySelector('.chat__input');


function writeMessage(messageData) { 
    let message = document.createElement('p');
    message.classList.add('chat__message');

    if (typeof (messageData) === 'object') {
        message.style.alignSelf = 'start';
        message.textContent = messageData.data;
    } else { 
        message.textContent = messageData;
    }
    chatArea.appendChild(message);
}

function createGeoLink(latitude, longitude) { 
    const link = document.createElement('a');
    link.setAttribute('href', `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    link.setAttribute('target', '_blank')
    link.textContent = 'Гео-локация';
    link.classList.add('chat__message');
    chatArea.appendChild(link);
}

websocket = new WebSocket('wss://echo.websocket.org/');

sendButton.addEventListener('click', () => {
    let inputMessage = input.value;
    if (input.value === '' || input.value.trim().length === 0) {
        alert('Вы ничего не ввели');
    } else { 
        writeMessage(inputMessage);
        websocket.send(inputMessage);

        websocket.onmessage = (evt) => { 
            writeMessage(evt);
        }
    }
    input.value = '';
})

geoButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('Гео-локация не поддерживается вашим браузером');
    } else { 
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
});

function success(position) { 
    const latitudeData = position.coords.latitude;
    const longitudeData = position.coords.longitude;
    createGeoLink(latitudeData, longitudeData);
}

function error() { 
    alert('Невозмоно получить ваше местоположение');
}
