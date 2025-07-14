import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios"

// Create Appointment
export const createAppointment = createAsyncThunk(
  "appointments/create",
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/appointments", appointmentData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Failed to create appointment");
    }
  }
);

// Get All Appointments
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/appointments");
      console.log("respsone- appointment", response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Failed to fetch appointments");
    }
  }
);

// Get Appointment by ID
export const fetchAppointmentById = createAsyncThunk(
  "appointments/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/appointments/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Appointment not found");
    }
  }
);

// Update Appointment
export const updateAppointment = createAsyncThunk(
  "appointments/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/appointments/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Failed to update appointment");
    }
  }
);

// Delete Appointment
export const deleteAppointment = createAsyncThunk(
  "appointments/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/appointments/${id}`);
      return { id };
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Failed to delete appointment");
    }
  }
);
