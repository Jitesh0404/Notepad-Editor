import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateLoading } = loadingSlice.actions

export default loadingSlice.reducer