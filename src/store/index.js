import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
    },
  }
})
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})
export const { setUser, removeUser } = userSlice.actions



























// const initialState = {
//   test:'INITIAL'
// }
// const reducer = (state=initialState,action) => {
//   switch (action.type) {
//     case 'TEST':
//       return {...state, test:'test'}
//     default:
//       return state
//   }
// }