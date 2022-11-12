import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

// const rootReducer = combineReducers({ booksReducer, categoriesReducer });

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
