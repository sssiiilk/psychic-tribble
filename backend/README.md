# CLICKHOUSE Backend

Backend для системы недвижимости CLICKHOUSE.

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер в режиме разработки:
```bash
npm run dev
```

3. Или запустите в обычном режиме:
```bash
npm start
```

Сервер будет доступен по адресу: http://localhost:5000

## API Endpoints

### Аутентификация

- `POST /api/auth/register` - Регистрация нового пользователя
- `POST /api/auth/login` - Вход в систему
- `GET /api/auth/verify` - Проверка токена аутентификации

### Health Check

- `GET /api/health` - Проверка работоспособности сервера

## Структура данных

Пользователи сохраняются в файле `data/users.json` в следующем формате:

```json
[
  {
    "id": "1234567890",
    "email": "user@example.com",
    "password": "хешированный_пароль",
    "name": "Имя",
    "surname": "Фамилия",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## Технологии

- Node.js
- Express.js
- bcryptjs (для хеширования паролей)
- jsonwebtoken (для JWT токенов)
- express-validator (для валидации данных)
- cors (для CORS политики) 