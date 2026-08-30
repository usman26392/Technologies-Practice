
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "blue",
}

export const themeSlice = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount } = themeSlice.actions

export default themeSlice.reducer