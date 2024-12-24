// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getToken = () => {
  try {
    return localStorage.getItem('token') || null;
  } catch (error) {
    console.error('Ошибка получения токена из localStorage:', error);
    return null;
  }
};

export const getUsername = () => {
  const storedUsername = localStorage.getItem('username');
  if (!storedUsername) {
    console.warn('Username отсутствует');
    return null;
  }
  return storedUsername;
};

interface AuthState {
  token: string | null;
  username: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: getToken(),
  username: getUsername(),
  isAuthenticated: Boolean(getToken()),
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      const { token, username } = action.payload;

      console.log('[DEBUG] Токен из ответа:', token); // Отладка

      state.token = token;
      state.username = username;
      state.isAuthenticated = true;

      try {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
      } catch (error) {
        console.error('[ERROR] Ошибка сохранения токена:', error);
      }
    },

    logout: (state) => {
      console.log('[DEBUG] Выход выполнен.');
      state.username = null;
      state.isAuthenticated = false;
      state.token = null;
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        console.log('[DEBUG] Данные удалены из localStorage.');
      } catch (error) {
        console.error('[ERROR] Ошибка удаления из localStorage:', error);
      }
    },

    updateToken: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      console.log('[DEBUG] Обновление токена:', token);
      state.token = token;
      try {
        localStorage.setItem('token', token);
        console.log('[DEBUG] Новый токен сохранён в localStorage.');
      } catch (error) {
        console.error('[ERROR] Ошибка обновления токена в localStorage:', error);
      }
    },
  },
});

export const { loginSuccess, logout, updateToken } = authSlice.actions;
export default authSlice.reducer;
