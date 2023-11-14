import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface IUserState {
  userName: string;
}

const initialState: IUserState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const {setUserName} = userSlice.actions;
export const userNameSelector = (state: RootState) => state.user;
export default userSlice.reducer;
