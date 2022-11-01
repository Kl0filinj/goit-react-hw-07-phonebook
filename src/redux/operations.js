import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import axios from 'axios';

axios.defaults.baseURL = 'https://636000b1ca0fe3c21aaa5d54.mockapi.io/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async ({ name, phone }, thunkAPI) => {
    const contactMarkup = {
      name,
      phone,
      id: nanoid(),
    };
    try {
      const response = await axios.post('/contacts', contactMarkup);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchAllContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
