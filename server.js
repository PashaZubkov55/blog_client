import express from 'express';
import { dirname } from 'path';      // Импортируем dirname
import { fileURLToPath } from 'url'; // Для вычисления __dirname
import path from 'path';            // Добавляем импорт модуля path

const __filename = fileURLToPath(import.meta.url); // Получаем абсолютный путь к текущему файлу
const __dirname = dirname(__filename);              // Определяем директорию текущего файла

const PORT = process.env.PORT || 8080;               // Порт сервера
const app = express();                               // Создаем приложение Express

// Настраиваем статику
app.use(express.static(__dirname));                  // Подключаем статику из основной папки
app.use(express.static(path.resolve(__dirname, 'dist'))); // Отдельный маршрут для папки dist
 

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});