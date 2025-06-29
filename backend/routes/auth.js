import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { readUsers, writeUsers, findUserByEmail } from '../utils/userStorage.js';

const router = express.Router();
const JWT_SECRET = 'your-secret-key'; // В реальном проекте используйте переменную окружения

// Регистрация
router.post('/register',
  [
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов'),
    body('name').trim().isLength({ min: 2 }).withMessage('Имя должно содержать минимум 2 символа'),
    body('surname').trim().isLength({ min: 2 }).withMessage('Фамилия должна содержать минимум 2 символа')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Ошибка валидации',
          errors: errors.array()
        });
      }

      const { email, password, name, surname } = req.body;
      
      // Проверяем, существует ли пользователь
      const existingUser = findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Пользователь с таким email уже существует'
        });
      }

      // Хешируем пароль
      const hashedPassword = await bcrypt.hash(password, 10);

      // Создаем нового пользователя
      const users = readUsers();
      const newUser = {
        id: Date.now().toString(),
        email,
        password: hashedPassword,
        name,
        surname,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      writeUsers(users);

      // Создаем JWT токен
      const token = jwt.sign(
        { userId: newUser.id, email: newUser.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(201).json({
        success: true,
        message: 'Пользователь успешно зарегистрирован',
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          surname: newUser.surname
        }
      });

    } catch (error) {
      console.error('Ошибка регистрации:', error);
      res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера'
      });
    }
  }
);

// Вход
router.post('/login',
  [
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').notEmpty().withMessage('Введите пароль')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Ошибка валидации',
          errors: errors.array()
        });
      }

      const { email, password } = req.body;

      // Ищем пользователя
      const user = findUserByEmail(email);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Неверный email или пароль'
        });
      }

      // Проверяем пароль
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: 'Неверный email или пароль'
        });
      }

      // Создаем JWT токен
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        message: 'Вход выполнен успешно',
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          surname: user.surname
        }
      });

    } catch (error) {
      console.error('Ошибка входа:', error);
      res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера'
      });
    }
  }
);

// Проверка токена
router.get('/verify', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Токен не предоставлен'
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = findUserByEmail(decoded.email);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Пользователь не найден'
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname
      }
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Недействительный токен'
    });
  }
});

export default router; 