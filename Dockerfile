FROM node:18-alpine

WORKDIR /app

# Скачиваем только package.json и package-lock.json
COPY package*.json ./

# Полностью очищаем старый кеш и устанавливаем зависимости
RUN rm -rf node_modules && npm install

# Остальное копируем
COPY . .

# Пробуем повторно собрать проект
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
