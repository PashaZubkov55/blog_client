import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8080;
const app = express();

// Устанавливаем заголовки Content-Type для .js файлов
app.use((req, res, next) => {
  if (req.path.endsWith('.js') && req.headers.accept.includes('application/javascript')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});

// Настройка статики
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'dist')));

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});