const express = require('express');
const { NlpManager } = require('node-nlp');

const app = express();

// Create a new instance of NLP Manager
const manager = new NlpManager({ languages: ['ru'] });

// // Добавляем документы в менеджер
// manager.addDocument('ru', 'привет', 'greetings.hello');
// manager.addDocument('ru', 'здравствуй', 'greetings.hello');
// manager.addDocument('ru', 'приветствую', 'greetings.hello');

// manager.addDocument('ru', 'пока', 'greetings.bye');
// manager.addDocument('ru', 'до свидания', 'greetings.bye');
// manager.addDocument('ru', 'до встречи', 'greetings.bye');

// // Добавляем ответы в менеджер
// manager.addAnswer('ru', 'greetings.hello', 'Привет! Чем могу помочь сегодня?');
// manager.addAnswer('ru', 'greetings.hello', 'Здравствуй! Чем я могу быть полезен?');
// manager.addAnswer('ru', 'greetings.hello', 'Привет! Чем могу помочь?');

// manager.addAnswer('ru', 'greetings.bye', 'Пока! Хорошего дня!');
// manager.addAnswer('ru', 'greetings.bye', 'До свидания! Береги себя!');
// manager.addAnswer('ru', 'greetings.bye', 'До встречи! Приятного дня!');

// Обучаем менеджер
// manager.train();
const loadModel = async () => {
    try {
        await manager.load('model.nlp');
        console.log('Model loaded successfully.');
    } catch (error) {
        console.error('Error loading model:', error);
    }
};

// Load the model when the program starts
loadModel();
// Обрабатываем входящие запросы
app.get('/', async (req, res) => {
    // Обрабатываем сообщение, полученное от клиента
    const response = await manager.process('ru', 'Привет!');

    // Отправляем ответ обратно клиенту
    res.send(response.answer);
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
