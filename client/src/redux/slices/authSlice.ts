import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../../types/AuthState'
import { RegisterValues } from '../../types/RegisterValues'
import { getApiServer } from '../../utils/helpers'

const initialState: AuthState = {
  register: {
    loading: false,
    success: false,
    error: false,
  },
}

const serverUrl = getApiServer()

export const registerUser = createAsyncThunk<boolean, RegisterValues, any>(
  'auth/register', 
  async (values, { rejectWithValue }) => {
    const registeredUser = await fetch(`${serverUrl}/register`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (registeredUser.status >= 200 && registeredUser.status <= 299) {
      return true
    } else {
      const errorResponse = await registeredUser.text()
      return rejectWithValue(errorResponse)
    }
  })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state: AuthState) => {
      state.register = {
        loading: true,
        success: false,
        error: false,
      }
    }),
    builder.addCase(registerUser.fulfilled, (state: AuthState) => {
      state.register = {
        ...state.register,
        loading: false,
        success: true,
      }
    }),
    builder.addCase(registerUser.rejected, (state: AuthState, action: any) => {
      state.register = {
        ...state.register,
        loading: false,
        error: action.payload
      }
    })
  },
})

// export const { } = authSlice.actions

export default authSlice.reducer
