import fs from 'fs';
import path from 'path';

const USERS_FILE_PATH = path.join(process.cwd(), 'data', 'users.json');

// Создаем папку data если она не существует
const ensureDataDirectory = () => {
  const dataDir = path.dirname(USERS_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Читаем пользователей из файла
export const readUsers = () => {
  try {
    ensureDataDirectory();
    
    if (!fs.existsSync(USERS_FILE_PATH)) {
      return [];
    }
    
    const data = fs.readFileSync(USERS_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка чтения файла пользователей:', error);
    return [];
  }
};

// Записываем пользователей в файл
export const writeUsers = (users) => {
  try {
    ensureDataDirectory();
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Ошибка записи файла пользователей:', error);
    throw error;
  }
};

// Ищем пользователя по email
export const findUserByEmail = (email) => {
  const users = readUsers();
  return users.find(user => user.email === email);
};

// Ищем пользователя по ID
export const findUserById = (id) => {
  const users = readUsers();
  return users.find(user => user.id === id);
}; 