import { configureStore } from '@reduxjs/toolkit';
import contextReducer from '../features/context';

export default configureStore({
    reducer: {
        context: contextReducer
    }
})