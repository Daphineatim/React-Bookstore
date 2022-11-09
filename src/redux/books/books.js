const initialState = [];

const ADD_BOOK = '/bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

// const booksReducer = (action, state = initialState) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return {
//         ...state,
//         books: [...state.books, action.payload],
//       };
//     case REMOVE_BOOK:
//       return {
//         ...state,
//         books: state.books.filter((book) => book.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

export { addBookAction, removeBookAction };
export default reducer;
