import {configureStore} from '@reduxjs/toolkit';
import {useDispatch , useSelector} from 'react-redux';

import userReducer from './reducers/userSlice.ts'

const store = configureStore({
  reducer: {
    'user': userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;