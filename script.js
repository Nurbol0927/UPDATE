// Переключение дней
function toggleDay(dayId) {
    const sections = document.querySelectorAll('.schedule');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(dayId).classList.add('active');
}

// Мотивационная цитата
const quotes = [
    "Сделай сегодня то, что другие не могут.",
    "Будь лучшей версией себя каждый день.",
    "Каждый час - шаг к успеху."
];
const quoteEl = document.getElementById('quote');
quoteEl.textContent = `Мотивация: "${quotes[Math.floor(Math.random() * quotes.length)]}"`;
