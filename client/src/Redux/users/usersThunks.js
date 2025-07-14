import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios'; // ✅ custom axios instance

// 📌 Register User
export const registerUser = createAsyncThunk(
  'users/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/register', userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Something went wrong');
    }
  }
);

// 📌 Login User
export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/login', userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Invalid credentials');
    }
  }
);

// 📌 Logout User
export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/user/logout');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Logout failed');
    }
  }
);

// 📌 Get Current User
export const fetchCurrentUser = createAsyncThunk(
  'users/me',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/user/me');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Fetch failed');
    }
  }
);

// 📌 Get All Users (Admin)
export const fetchAllUsers = createAsyncThunk(
  'users/all-user',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/user/all-user');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Not authorized');
    }
  }
);

export const adminUpdatePassword = createAsyncThunk(
  'admin/updatePassword',
  async ({ userId, oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put('/user/update-password', {
        userId,
        oldPassword,
        newPassword,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Password update failed');
    }
  }
);

// 📌 Admin Update User
export const adminUpdateUser = createAsyncThunk(
  'admin/updateUser',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/user/${id}`, updateData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'User update failed');
    }
  }
);