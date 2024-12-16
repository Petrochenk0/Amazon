// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getUsername = () => {
  const storedUsername = localStorage.getItem('username');
  if (!storedUsername) {
    console.warn('Username отсутствует');
    return null;
  }
  try {
    return JSON.parse(storedUsername);
  } catch (e) {
    console.error('Ошибка парсинга username:', e);
    return null;
  }
};

interface AuthState {
  token: string | null;
  username: string | null; // Убираем name
}

const initialState: AuthState = {
  username: getUsername(), // Если значения нет, возвращаем null
  token: localStorage.getItem('token') || null, // Если токена нет, возвращаем null
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      state.username = action.payload.username;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      console.log('Payload в loginSuccess:', action.payload);
    },

    logout: (state) => {
      state.username = null;
      state.token = null;
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
