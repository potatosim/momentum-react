import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ImageItem } from 'api/ImageApi';
import { LocalStorageKeys } from 'enum/LocalStorageKeys';
import { getRandom } from 'helpers/getRandom';
import { getValueFromLocalStorage, saveValueToLocalStorage } from 'helpers/localStorage';
import { getImage } from 'thunks';

interface ImageInitial {
  tag: string;
  background: string;
  images: ImageItem[];
  isLoading: boolean;
}

const initialState: ImageInitial = {
  tag: getValueFromLocalStorage(LocalStorageKeys.Tag) || 'Sunset',
  background: '',
  images: [],
  isLoading: false,
};

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,
  reducers: {
    setImageTag: (state, { payload }: PayloadAction<string>) => {
      state.tag = payload;
      saveValueToLocalStorage(LocalStorageKeys.Tag, payload);
    },
    setImageFromStore: (state) => {
      state.background = state.images[getRandom(0, state.images.length - 1)].url_l;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getImage.fulfilled, (state, { payload: { photo, allImages } }) => {
        state.background = photo;
        state.isLoading = false;
        state.images = allImages;
      })
      .addCase(getImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setImageTag, setImageFromStore } = imageSlice.actions;

export default imageSlice.reducer;
