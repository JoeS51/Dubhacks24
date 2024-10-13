// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the map state
const mapSlice = createSlice({
  name: 'map',
  initialState: {
    destination: '', // Store the destination here
  },
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

// Export the action for use in components
export const { setDestination } = mapSlice.actions;

// Create the Redux store
export const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

export default store;
