import { createAsyncThunk } from '@reduxjs/toolkit';
import ImageApi from 'api/ImageApi';
import { SlicesActionTypes } from 'enum/SliceActionTypes';

export function createGetImageThunk(api: ImageApi) {
  return createAsyncThunk(
    SlicesActionTypes.GetImage,
    async function (payload: string, { rejectWithValue }) {
      try {
        const response = await api.getBGImage(payload);
        return response;
      } catch {
        return rejectWithValue({});
      }
    },
  );
}
