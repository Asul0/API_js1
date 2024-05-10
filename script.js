// js/script.js

// Данные о занятиях в формате JSON
const scheduleData = [
    {
        "name": "Йога",
        "time": "10:00",
        "maxParticipants": 15,
        "currentParticipants": 10
    },
    {
        "name": "Кроссфит",
        "time": "12:00",
        "maxParticipants": 20,
        "currentParticipants": 18
    },
    {
        "name": "Пилатес",
        "time": "15:00",
        "maxParticipants": 12,
        "currentParticipants": 5
    }
];

// Функция для отображения занятий на странице
function renderSchedule() {
    const scheduleElement = document.getElementById('schedule');
    scheduleElement.innerHTML = '';

    scheduleData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Время: ${item.time}</p>
                    <p class="card-text">Максимальное количество участников: ${item.maxParticipants}</p>
                    <p class="card-text">Текущее количество участников: ${item.currentParticipants}</p>
                    <button class="btn btn-primary btn-enroll" data-index="${index}">Записаться</button>
                </div>
            </div>
        `;
        scheduleElement.appendChild(card);
    });
}

// Функция для обработки нажатия кнопки "Записаться"
function handleEnrollButtonClick(event) {
    const index = event.target.dataset.index;
    if (scheduleData[index].currentParticipants < scheduleData[index].maxParticipants) {
        scheduleData[index].currentParticipants++;
        renderSchedule();
    }
}

// Назначаем обработчики событий для кнопок "Записаться"
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-enroll')) {
        handleEnrollButtonClick(event);
    }
});

// Инициализация страницы
renderSchedule();
